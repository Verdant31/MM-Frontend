/* eslint-disable array-callback-return */
//Components
import { Header } from '../components/Header';
import ImmobilePreview from '../components/ImmobilePreview';

//Chakra
import { Flex, VStack, Box, Text, Input } from '@chakra-ui/react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

//React
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useInfiniteQuery } from 'react-query';

//Services
import { api } from '../services/api';

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
  const [hasImmobiles, setHasImmobiles] = useState(true);

  const [price, setPrice] = useState(2000000);
  const [size, setSize] = useState(1000);
  const [toilets, setToilets] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [suites, setSuites] = useState(0);
  const [slots, setSlots] = useState(0);

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
            slots: data[key].slots
          }))
          setImmobiles(newData);
        })
      }
    );
  return (
    <>
      <Header />
      <Flex w="100vw" mt="20" justify="center" >
        <Box w="20vw" h="700px">
          <Text align="center" fontWeight="medium" color="#00293A" fontSize="40px">Filtro</Text>
          <Box as="form" w="400px" mt="4" mx="auto" >
            <Text align="left" >Preço</Text>
            <Slider onChange={(value) => setPrice(value)} min={0} max={2000000} defaultValue={2000000} step={1}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text align="center">
              <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'R$'} />
            </Text>

            <Text align="left" >Tamanho</Text>
            <Slider onChange={(value) => setSize(value)} min={0} max={1000} defaultValue={1000}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text align="center">
              <NumberFormat value={size} displayType={'text'} thousandSeparator={true} suffix={'m²'} />
            </Text>

            <VStack align="left" spacing="6">
              <Box>
                <Text>Banheiros</Text>
                <Input onChange={event => setToilets(Number(event.target.value))} mt="2" placeholder="Quantidade desejada..." />
              </Box>
              <Box>
                <Text>Quartos</Text>
                <Input onChange={event => setRooms(Number(event.target.value))} mt="2" placeholder="Quantidade desejada..." />
              </Box>
              <Box>
                <Text>Suites</Text>
                <Input onChange={event => setSuites(Number(event.target.value))} mt="2" placeholder="Quantidade desejada..." />
              </Box>
              <Box>
                <Text>Vagas</Text>
                <Input onChange={event => setSlots(Number(event.target.value))} mt="2" placeholder="Quantidade desejada..." />
              </Box>
            </VStack>
          </Box>
        </Box>

        <Box ml="40" h="800px" my="10" >

          {immobiles.filter((val) => {
            if (val.price <= price && val.size <= size && val.rooms >= rooms) {
              return val;
            }

          }).map((immobile) => {
            return (
              <Box key={immobile.id}>
                <ImmobilePreview immobile={immobile} />
              </Box>
            )
          })}

        </Box>


      </Flex >

    </>
  )
}
