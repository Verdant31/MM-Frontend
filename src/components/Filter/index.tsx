/* eslint-disable array-callback-return */
//Chakra
import { VStack, Box, Text, Input } from '@chakra-ui/react';

//React
import NumberFormat from 'react-number-format';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

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
      <Box h="700px" mr={['0', '0', '8', '8', '8']}>
        <Text align="center" fontWeight="medium" color="#00293A" fontSize="40px">Filtro</Text>
        <Box as="form" w={['200px', '200px', '200px', '350px', '400px']} mt="4" mx="auto" >
          <Text align="left" >Preço</Text>

          <RangeSlider value={price} onChange={changeEvent => setPrice(Number(changeEvent.target.value))} min={0} max={10000000} tooltip="off" />
          <Text align="center" mb="4">
            <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'R$'} />
          </Text>

          <Text align="left" >Tamanho</Text>
          <RangeSlider value={size} onChange={changeEvent => setSize(Number(changeEvent.target.value))} min={0} max={10000} tooltip="off" />


          <Text align="center" mb="6">
            <NumberFormat value={size} displayType={'text'} thousandSeparator={true} suffix={'m²'} />
          </Text>

          <VStack textAlign="left" align="left" spacing="6">
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

