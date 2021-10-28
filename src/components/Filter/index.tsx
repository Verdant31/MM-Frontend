/* eslint-disable array-callback-return */
//Chakra
import { VStack, Box, Text, Input } from '@chakra-ui/react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

//React
import NumberFormat from 'react-number-format';

interface FilterProps {
  setToilets: (toilets: number) => void;
  setRooms: (rooms: number) => void;
  setSuites: (suites: number) => void;
  setSlots: (slots: number) => void;
  setPrice: (price: number) => void;
  setSize: (size: number) => void;
  price: number;
  size: number;
}

export function Filter({ price, size, setPrice, setSize, setRooms, setSlots, setSuites, setToilets }: FilterProps) {
  return (
    <>
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

    </>
  )
}

