/* eslint-disable array-callback-return */
//Components
import { Header } from '../components/Header';
import ImmobilePreview from '../components/ImmobilePreview';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
//Chakra
import { Flex, Box, Text } from '@chakra-ui/react';

//React
import { useState } from 'react';
import { useInfiniteQuery } from 'react-query';

//Services
import { api } from '../services/api';
import { Filter } from '../components/Filter';
import { Pagination } from '../components/Pagination';


type Immobile = {
  id: string;
  image: string;
  type: string;
  price: number;
  size: number;
  toilets: number;
  suites: number;
  rooms: number;
  slots: number;
}[];

export function Properties() {
  const [immobiles, setImmobiles] = useState<Immobile>([]);
  const [immobileUrl, setImmobileUrl] = useState('');
  const [price, setPrice] = useState(2000000);
  const [size, setSize] = useState(1000);
  const [toilets, setToilets] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [suites, setSuites] = useState(0);
  const [slots, setSlots] = useState(0);

  async function sendWhats(id: string) {
    await setImmobileUrl(`${process.env.REACT_APP_URL}/verimovel/${id}`)
    window.open(`https://wa.me/5567999088757/?
      text=Boa tarde! Estou interessado no seguinte imóvel do site de vocês!
      ${immobileUrl}
      `);
  }

  function updateToilets(toilet: number) {
    setToilets(toilet)
  }
  function updateRooms(room: number) {
    setRooms(room)
  }
  function updateSuites(suite: number) {
    setSuites(suite)
  }
  function updateSlots(slots: number) {
    setSlots(slots);
  }
  function updateSize(size: number) {
    setSize(size);
  }
  function updatePrice(price: number) {
    setPrice(price);
  }

  const { isLoading, isError } =
    useInfiniteQuery(
      'imóveis',
      async () => {
        await api.get('getproducts').then((response: any) => {
          const data = response.data;
          const newData = Object.keys(data).map(key => ({
            id: key,
            image: data[key].fotosDoTerreno[0],
            type: data[key].tipo,
            price: data[key].preco,
            size: data[key].tamanho,
            toilets: data[key].banheiros,
            rooms: data[key].quartos,
            suites: data[key].suites,
            slots: data[key].vagas
          }))
          setImmobiles(newData);
        })
      }
    );

  const serializedImmobiles = immobiles
    .filter((val) => {
      if (val.price <= price) {
        return val;
      }
    }).filter((val) => {
      if (val.size <= size) {
        return val;
      }
    }).filter((val) => {
      if (val.rooms >= rooms) {
        return val;
      }
    }).filter((val) => {
      if (val.toilets >= toilets) {
        return val;
      }
    }).filter((val) => {
      if (val.suites >= suites) {
        return val;
      }
    }).filter((val) => {
      if (val.slots >= slots) {
        return val;
      }
    })


  if (serializedImmobiles.length === 0 && isLoading === false) {
    return (
      <>
        <Header />
        <Flex w="100vw" mt="20" justify="center" >
          <Box w="20vw" h="700px">
            <Filter price={price} size={size} setPrice={updatePrice} setSize={updateSize} setRooms={updateRooms} setSlots={updateSlots} setSuites={updateSuites} setToilets={updateToilets} />

          </Box>

          <Box w="30vw" ml="40" h="800px" my="10" >
            <Text>Não há imóveis compativeis com os filtros escolhidos.</Text>
          </Box>
        </Flex >
      </>
    )
  }
  if (isLoading === true) {
    return <Loading />
  }
  if (isError === true) {
    return <Error />
  }


  return (
    <>
      <Header />
      <Flex w="100vw" mt="20" justify="center" >
        <Box w="30vw" h="700px">
          <Filter price={price} size={size} setPrice={updatePrice} setSize={updateSize} setRooms={updateRooms} setSlots={updateSlots} setSuites={updateSuites} setToilets={updateToilets} />
        </Box>

        <Box w="50vw" ml="40" h="800px" my="10" >
          {serializedImmobiles.map((immobile) => {
            return (
              <Box key={immobile.id}>
                <ImmobilePreview sendWhats={sendWhats} immobile={immobile} />
              </Box>
            )
          })}
          <Pagination immobiles={serializedImmobiles} />
        </Box>
      </Flex >

    </>
  )
}
