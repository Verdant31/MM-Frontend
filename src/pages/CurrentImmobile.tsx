//Components
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';

//Chakra
import { Flex, Text, HStack, VStack, Icon, Button, Box } from '@chakra-ui/react';

//React
import { useEffect, useState } from 'react';
import ReactWhatsapp from 'react-whatsapp';


//Services
import { api } from '../services/api';
import { useParams } from 'react-router';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Navigation, Pagination, Keyboard } from 'swiper/core';

//React-Icons
import { FaToilet, FaBed } from 'react-icons/fa';
import { BsTextareaResize } from 'react-icons/bs';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import { AiFillCar } from 'react-icons/ai';
import { IoIosBed } from 'react-icons/io';
import { BiBuildingHouse } from 'react-icons/bi';
import NumberFormat from 'react-number-format';


SwiperCore.use([Navigation, Pagination, Keyboard]);

type SeeImmobileProps = {
  id: string;
}

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
  district: string;
  cep: number;
  city: string;
}

export function SeeImmobile() {
  const { id } = useParams<SeeImmobileProps>();
  const [immobileUrl, setImmobileUrl] = useState('');
  const [currentImmobile, setCurrentImmobile] = useState<Immobile>();

  function sendWhats() {
    setImmobileUrl(`${process.env.REACT_APP_URL}/verimovel/${id}`)
    window.open(`https://wa.me/5567999088757/?
    text=Boa tarde! Estou interessado no seguinte imóvel do site de vocês!
    ${immobileUrl}
    `);
  }
  function openMap() {
    if (!currentImmobile) {
      return;
    }
    const stret = encodeURI(currentImmobile.street);
    window.open(`https://www.google.com/maps/search/${stret}`);
  }

  useEffect(() => {
    api.get(`/getimmobile/${id}`).then((response: any) => {
      const data = response.data;
      setCurrentImmobile({
        id: id,
        images: data.fotosDoTerreno,
        type: data.tipo,
        bathrooms: data.banheiros,
        price: data.preco,
        rooms: data.quartos,
        size: data.tamanho,
        slots: data.vagas,
        suites: data.suites,
        street: data.rua,
        cep: data.cep,
        city: data.cidade,
        district: data.bairro
      })
    }).catch((error) => {
      console.log(error);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Box mb="40">
      <Header />
      <Flex
        w="100%"
        h={["250px", "450px"]}
        maxW="1240px"
        mx="auto"
        mb="12"
        mt="20"
      >
        <Swiper
          navigation={true}
          pagination={true}
          keyboard={true}
          style={{ width: "100%", flex: 1 }}
        >
          {currentImmobile?.images.map((imagem) => {
            return (
              <SwiperSlide>
                <Slider
                  image={imagem}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Flex>
      <Flex justify="center" mt="20">
        <VStack >
          <HStack spacing="12">
            <HStack w={64} spacing="0">
              <Icon mt="8" h={28} w={28}><BsTextareaResize /></Icon>
              <Text fontSize="30px">{currentImmobile?.size}m²</Text>
            </HStack>
            <HStack w={80} spacing="0">
              <Icon mt="8" h={28} w={28}><FaToilet /></Icon>
              <Text fontSize="30px">{currentImmobile?.bathrooms} banheiros</Text>
            </HStack>
            <HStack w={80} spacing="0">
              <Icon mt="8" h={28} w={28}><RiMoneyDollarBoxFill /></Icon>
              <Text fontSize="30px">
                <NumberFormat value={currentImmobile?.price} displayType={'text'} thousandSeparator={true} prefix={'R$'} />
              </Text>
            </HStack>
          </HStack>
          <HStack spacing="12">
            <HStack w={64} spacing="0">
              <Icon mt="8" h={28} w={28}><FaBed /></Icon>
              <Text fontSize="30px">{currentImmobile?.rooms} quartos</Text>
            </HStack>
            <HStack w={80} spacing="0">
              <Icon mt="8" h={28} w={28}><AiFillCar /></Icon>
              <Text fontSize="30px">{currentImmobile?.slots} vagas</Text>
            </HStack>
            <HStack w={80} spacing="0">
              <Icon mt="8" h={28} w={28}><IoIosBed /></Icon>
              <Text fontSize="30px">{currentImmobile?.suites} suites</Text>
            </HStack>
          </HStack>
          <HStack spacing="12">

            <HStack w={80} spacing="0">
              <Icon mt="8" h={28} w={28}><BiBuildingHouse /></Icon>
              <Text fontSize="30px">{currentImmobile?.type}</Text>
            </HStack>

          </HStack>
          <VStack w="100%" align="left" pt="4" >
            <HStack >
              <Text w="50%" fontSize="30px">Rua: {currentImmobile?.street}</Text>
              <Text w="50%" fontSize="30px">Cidade: {currentImmobile?.city}</Text>
            </HStack>
            <HStack >
              <Text w="50%" fontSize="30px">Bairro: {currentImmobile?.district}</Text>
              <Text w="50%" fontSize="30px">CEP: {currentImmobile?.cep}</Text>
            </HStack>
          </VStack>
          <Flex w="100%" pt="16">
            <Button onClick={openMap} bgColor="#03292A" textColor="white" fontSize="25px" w="50%" h="60px" >
              Como chegar
            </Button>
            <Button onClick={sendWhats} bgColor="#03292A" textColor="white" fontSize="25px" w="50%" h="60px" ml="12">
              Contato
            </Button>
          </Flex>

        </VStack>
      </Flex>
    </Box>
  )
}

/*
{currentImmobile?.images.map((imagem) => {

})} */