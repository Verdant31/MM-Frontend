//Chakra
import { Box, Text, Flex, Image } from "@chakra-ui/react"

//React
import { AutoSizer, List, ListRowRenderer } from 'react-virtualized';
import { useInfiniteQuery } from 'react-query';
import { useState } from 'react';

//Services
import { api } from '../services/api';

//Components
import { Immobile as Imovel } from '../components/Immobile';
import { CreateImmobileForm } from '../components/CreateImmobileForm';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';



type Immobile = {
  id: string;
  images: string[];
  type: string;
  price: number;
  size: number;
  bathrooms: number;
  rooms: number;
  suites: number;
  slots: number;
  street: string;
  city: string;
  district: string;
  cep: number;
}[];


export function Admin() {
  const [immobiles, setImmobiles] = useState<Immobile>([]);
  const { isLoading, isError } =
    useInfiniteQuery(
      'imóveis',
      async () => {
        await api.get('getproducts').then((response: any) => {
          const data = response.data;
          const newData = Object.keys(data).map(key => ({
            id: key,
            images: data[key].fotosDoTerreno,
            type: data[key].tipo,
            price: data[key].preco,
            size: data[key].tamanho,
            bathrooms: data[key].banheiros,
            rooms: data[key].quartos,
            suites: data[key].suites,
            slots: data[key].vagas,
            city: data[key].cidade,
            district: data[key].bairro,
            cep: data[key].cep,
            street: data[key].rua
          }))
          setImmobiles(newData);
        })
      }
    );



  return (
    <>
      <Flex mt="8" justify="center" h="120px" w="100%" bgColor="white">
        <Image src="logo.png" />
      </Flex>
      <Flex mt="12">
        <Box h="300px" w="50vw" >
          <Text fontSize="24px" mt="4" align="center" fontWeight="semibold" color="#03292A">ADICIONAR NOVO IMÓVEL</Text>
          <Box mt="4" ml="20">
            <CreateImmobileForm />
          </Box>
        </Box>
        <Box h="80vh" w="50vw">
          <Text fontSize="24px" mt="4" align="center" fontWeight="semibold" color="#03292A">EDITAR/REMOVER IMÓVEIS</Text>
          <Box mt="4" ml="20" flex="1" height="100%">
            {immobiles.map((imovel) => {
              return (
                <Box key={imovel.id}>
                  <Imovel immobile={imovel} />
                  <Box mb="8" mt="8" h="2px" bgColor="black" w="90%" />
                </Box>
              )
            })}
          </Box>
        </Box>
      </Flex>
    </>

  )
}



