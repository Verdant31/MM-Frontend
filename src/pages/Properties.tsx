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

//Services
import { Filter } from '../components/Filter';
import { Pagination } from '../components/Pagination';
import { useImmobiles } from '../hooks/useImmobiles';

export function Properties() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useImmobiles(page);


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


  const serializedImmobiles = data?.immobiles.filter((val) => {
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


  if (data?.immobiles?.length === 0 && isLoading === false) {
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
  if (isLoading === true || !data) {
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
          {serializedImmobiles?.map((immobile) => {
            return (
              <Box key={immobile.id}>
                <ImmobilePreview sendWhats={sendWhats} immobile={immobile} />
              </Box>
            )
          })}

          <Pagination totalCountOfRegisters={data.totalCount} currentPage={page}
            onPageChange={setPage}
          />
        </Box>
      </Flex >

    </>
  )
}
