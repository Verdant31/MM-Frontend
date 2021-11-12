/* eslint-disable array-callback-return */
//Components
import { Header } from '../components/Header';
import ImmobilePreview from '../components/Immobile/ImmobilePreview';
import { Loading } from '../components/Utility/Load/Loading';
import { Error } from '../components/Utility/Error/Error';
//Chakra
import { Flex, Box, Text, useBreakpointValue, Stack } from '@chakra-ui/react';

//React
import { useState } from 'react';

//Services
import { Filter } from '../components/Filter';
import { Pagination } from '../components/Pagination';
import { useImmobiles } from '../services/hooks/useImmobiles';
import { Footer } from '../components/Footer';

export function Immobiles() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useImmobiles(page);
  const [immobileUrl, setImmobileUrl] = useState('');
  const [price, setPrice] = useState(10000000);
  const [size, setSize] = useState(10000);
  const [toilets, setToilets] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [suites, setSuites] = useState(0);
  const [slots, setSlots] = useState(0);

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
  })


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


  if (serializedImmobiles?.length === 0 || isLoading === false) {
    if (isMobile) {
      return (
        <>
          <Header />
          <Stack direction="column" w="100%" mt="20" align="center">
            <Filter price={price} size={size} setPrice={updatePrice} setSize={updateSize} setRooms={updateRooms} setSlots={updateSlots} setSuites={updateSuites} setToilets={updateToilets} />
            <Box w="70%" h="500px">
              <Text fontSize="30px">Não há imóveis compativeis com os filtros escolhidos.</Text>
            </Box>
          </Stack>
        </>
      )
    }
    return (
      <>
        <Header />
        <Flex w="100vw" mt="20" justify="center" >
          <Box w="40vw" h="700px">
            <Filter price={price} size={size} setPrice={updatePrice} setSize={updateSize} setRooms={updateRooms} setSlots={updateSlots} setSuites={updateSuites} setToilets={updateToilets} />

          </Box>

          <Box w="50vw" ml={['0', '0', '8', '20', '20']} h="800px" my="10" >
            <Text fontSize="30px">Não há imóveis compativeis com os filtros escolhidos.</Text>
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
      <Flex flexDirection={['column', 'column', 'row', 'row']} w="100vw" mt="20" justify="center" >

        <Box w={['100vw', '100vw', '30vw', '30vw']} h="700px" align="center" >
          <Filter price={price} size={size} setPrice={updatePrice} setSize={updateSize} setRooms={updateRooms} setSlots={updateSlots} setSuites={updateSuites} setToilets={updateToilets} />
        </Box>

        <Box w={['100vw', '100vw', '50vw', '50vw']} ml={['0', '0', '8', '20', '20']}  >
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
      <Footer />


    </>
  )
}
