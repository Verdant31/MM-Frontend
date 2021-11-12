//Components
import { Header } from '../components/Header';
import { Slider } from '../components/Slider/Slider';
import { Footer } from '../components/Footer';

//Chakra
import { Flex, Image, Text, HStack, Icon, Button, Box, Stack, useBreakpointValue } from '@chakra-ui/react';

//React
import { useEffect, useState } from 'react';

//Services
import { api } from '../services/api/api';
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
import { SiOnlyfans } from 'react-icons/si';


//Utility
import NumberFormat from 'react-number-format';
import { Loading } from '../components/Utility/Load/Loading';


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
  isExclusive: string;
}

export function SeeImmobile() {

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
  })


  const { id } = useParams<SeeImmobileProps>();
  const [currentImmobile, setCurrentImmobile] = useState<Immobile>();

  function sendWhats() {
    window.open(`https://wa.me/5567999088757/?
    text=Boa tarde! Estou interessado no seguinte imóvel do site de vocês!
    ${process.env.REACT_APP_URL}/verimovel/${id}
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
        district: data.bairro,
        isExclusive: data.exclusivo,
      })
    }).catch((error) => {
      console.log(error);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!currentImmobile) {
    return <Loading />
  }

  return currentImmobile?.isExclusive === '1' ? (
    <>
      <Box mb="40">
        <Header />
        <Flex
          w="100%"
          h={["250px", "450px"]}
          maxW={["1240px", "1240px", "700px", "1240px"]}
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
              if (currentImmobile.images.length === 1) {
                return (
                  <SwiperSlide key={currentImmobile.images[0]}>
                    <Slider
                      image={currentImmobile.images[0]}
                    />
                  </SwiperSlide>
                )
              } else {
                return (
                  <SwiperSlide key={imagem}>
                    <Slider
                      image={imagem}
                    />
                  </SwiperSlide>
                )
              }
            })}
          </Swiper>
        </Flex>
        {!isMobile && (
          <Flex justify="center" mt="20" ml={["0", "12", "12", "0", "0"]} mr={["0", "12", "12", "0", "0"]}>
            <Stack direction="column"  >
              <Stack direction={["row", "row", "row", "row", "row"]} spacing="12" >
                <HStack w="60%" spacing="0" >
                  <Icon mt="8" h={28} w={28}><BsTextareaResize /></Icon>
                  <Text fontSize="30px">{currentImmobile?.size}m²</Text>
                </HStack>
                <HStack w="50%" spacing="0">
                  <Icon mt="8" h={28} w={28}><FaToilet /></Icon>
                  <Text fontSize="30px">{currentImmobile?.bathrooms} banheiros</Text>
                </HStack>
              </Stack>
              <Stack direction="row" spacing="12">
                <HStack w="60%" spacing="0">
                  <Icon mt="8" h={28} w={28}><FaBed /></Icon>
                  <Text fontSize="30px">{currentImmobile?.rooms} quartos</Text>
                </HStack>
                <HStack w="50%" spacing="0">
                  <Icon mt="8" h={28} w={28}><AiFillCar /></Icon>
                  <Text fontSize="30px">{currentImmobile?.slots} vagas</Text>
                </HStack>
              </Stack>
              <Stack direction="row" spacing="12">
                <HStack w="60%" spacing="0">
                  <Icon mt="8" h={28} w={28}><RiMoneyDollarBoxFill /></Icon>
                  <Text fontSize="30px">
                    R${new Intl.NumberFormat('id').format(currentImmobile.price)}
                  </Text>
                </HStack>
                <HStack w="50%" spacing="0">
                  <Icon mt="8" h={28} w={28}><IoIosBed /></Icon>
                  <Text fontSize="30px">{currentImmobile?.suites} suites</Text>
                </HStack>
              </Stack>


              <Stack direction="row" spacing="12">
                <HStack w="60%" spacing="0">
                  <Icon mt="8" h={28} w={28}><BiBuildingHouse /></Icon>
                  <Text fontSize="30px">{currentImmobile?.type} </Text>

                </HStack>
                <HStack w="50%" spacing="0">
                  <Icon mt="8" h={28} w={28}><SiOnlyfans /></Icon>
                  <Text fontSize="30px">Imóvel exclusivo</Text>
                </HStack>
              </Stack>

              <Flex w="100%" pt="16" justify="space-between">

                <Button mx="auto" onClick={sendWhats} bgColor="#03292A" textColor="white" fontSize="25px" w="45%" h="60px"  >
                  Contato
                </Button>
              </Flex>
            </Stack >
          </Flex >
        )}
        {isMobile && (
          <>
            <Flex justify="center" mt="20">
              <Stack direction="column"  >
                <HStack w="100%" spacing="0" justify="center" >
                  <Icon mt="8" h={28} w={28}><BsTextareaResize /></Icon>
                  <Text fontSize={["25px", "25px", "30px"]}>{currentImmobile?.size}m²</Text>
                </HStack>
                <HStack w="100%" spacing="0" justify="center" >
                  <Icon mt="8" h={28} w={28}><FaToilet /></Icon>
                  <Text fontSize={["25px", "25px", "30px"]}>{currentImmobile?.bathrooms} banheiros</Text>
                </HStack>
                <HStack w="100%" spacing="0" justify="center" >
                  <Icon mt="8" h={28} w={28}><FaBed /></Icon>
                  <Text fontSize={["25px", "25px", "30px"]}>{currentImmobile?.rooms} quartos</Text>
                </HStack>
                <HStack w="100%" spacing="0" justify="center" >
                  <Icon mt="8" h={28} w={28}><AiFillCar /></Icon>
                  <Text fontSize={["25px", "25px", "30px"]}>{currentImmobile?.slots} vagas</Text>
                </HStack>
                <HStack w="100%" spacing="0" justify="center" >
                  <Icon mt="8" h={28} w={28}><RiMoneyDollarBoxFill /></Icon>
                  <Text fontSize={["25px", "25px", "30px"]}>
                    <NumberFormat value={currentImmobile?.price} displayType={'text'} thousandSeparator={true} prefix={'R$'} />
                  </Text>
                </HStack>
                <HStack w="100%" spacing="0" justify="center" >
                  <Icon mt="8" h={28} w={28}><IoIosBed /></Icon>
                  <Text fontSize={["25px", "25px", "30px"]}>{currentImmobile?.suites} suites</Text>
                </HStack>
                <HStack w="100%" spacing="0" justify="center" >
                  <Icon mt="8" h={28} w={28}><BiBuildingHouse /></Icon>
                  <Text fontSize={["25px", "25px", "30px"]}>{currentImmobile?.type}</Text>
                </HStack>
                <HStack w="100%" spacing="0" justify="center" >
                  <Icon mt="8" h={28} w={28}><SiOnlyfans /></Icon>
                  <Text fontSize={["25px", "25px", "30px"]}>Exclusivo</Text>
                </HStack>


              </Stack >
            </Flex >

            <Stack direction="column" w="100%" pt="4" align="center"  >


              <Button mx="auto" onClick={sendWhats} bgColor="#03292A" textColor="white" fontSize={["20px", "25px"]} w="45%" h="60px"   >
                Contato
              </Button>

            </Stack>

          </>
        )}
      </Box >
      <Footer />

    </>
  ) :
    (
      <>
        <Box mb="20">
          <Header />
          <Flex
            w="100%"
            h={["250px", "450px"]}
            maxW={["1240px", "1240px", "700px", "1240px"]}
            mx="auto"
            mb="12"
            mt="20"
          >
            {currentImmobile.images.length > 1 && (
              <Swiper
                navigation={true}
                pagination={true}
                keyboard={true}
                style={{ width: "100%", flex: 1 }}
              >

                {currentImmobile?.images.map((imagem) => {
                  return (
                    <SwiperSlide key={imagem}>
                      <Slider
                        image={imagem}
                      />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            )}

            {currentImmobile.images.length === 1 && (
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
              >
                <Image src={currentImmobile.images[0]} h="400px" w="700px" />

              </Flex>
            )}

          </Flex>
          {!isMobile && (
            <Flex justify="center" mt="20" ml={["0", "12", "12", "", ""]} mr={["0", "12", "12", "0", "0"]}>
              <Stack direction="column"  >
                <Stack direction={["row", "row", "row", "row", "row"]} spacing="12" >
                  <HStack w="60%" spacing="0" >
                    <Icon mt="8" h={28} w={28}><BsTextareaResize /></Icon>
                    <Text fontSize="30px">{currentImmobile?.size}m²</Text>
                  </HStack>
                  <HStack w="50%" spacing="0">
                    <Icon mt="8" h={28} w={28}><FaToilet /></Icon>
                    <Text fontSize="30px">{currentImmobile?.bathrooms} banheiros</Text>
                  </HStack>
                </Stack>
                <Stack direction="row" spacing="12">
                  <HStack w="60%" spacing="0">
                    <Icon mt="8" h={28} w={28}><FaBed /></Icon>
                    <Text fontSize="30px">{currentImmobile?.rooms} quartos</Text>
                  </HStack>
                  <HStack w="50%" spacing="0">
                    <Icon mt="8" h={28} w={28}><AiFillCar /></Icon>
                    <Text fontSize="30px">{currentImmobile?.slots} vagas</Text>
                  </HStack>
                </Stack>
                <Stack direction="row" spacing="12">
                  <HStack w="60%" spacing="0">
                    <Icon mt="8" h={28} w={28}><RiMoneyDollarBoxFill /></Icon>
                    <Text fontSize="30px">
                      <NumberFormat value={currentImmobile?.price} displayType={'text'} thousandSeparator={true} prefix={'R$'} />
                    </Text>
                  </HStack>
                  <HStack w="50%" spacing="0">
                    <Icon mt="8" h={28} w={28}><IoIosBed /></Icon>
                    <Text fontSize="30px">{currentImmobile?.suites} suites</Text>
                  </HStack>
                </Stack>
                <HStack spacing="12"  >
                  <HStack spacing="0" w="50%" mx="auto" >
                    <Icon mt="8" h={28} w={28}><BiBuildingHouse /></Icon>
                    <Text fontSize="30px">{currentImmobile?.type}</Text>
                  </HStack>
                </HStack>
                <Stack direction="column" w="100%" align="left" pt="4" >
                  <Stack direction="row" spacing={["0", "4"]}>
                    <Text w="50%" fontSize="30px">Rua: {currentImmobile?.street}</Text>
                    <Text w="50%" fontSize="30px">Cidade: {currentImmobile?.city}</Text>
                  </Stack>
                  <Stack direction="row" >
                    <Text w="50%" fontSize="30px">Bairro: {currentImmobile?.district}</Text>
                    <Text w="50%" fontSize="30px">CEP: {currentImmobile?.cep}</Text>
                  </Stack>

                </Stack>
                <Flex w="100%" pt="16" justify="space-between">
                  <Button onClick={openMap} bgColor="#03292A" textColor="white" fontSize="25px" w="45%" h="60px" >
                    Como chegar
                  </Button>
                  <Button onClick={sendWhats} bgColor="#03292A" textColor="white" fontSize="25px" w="45%" h="60px"  >
                    Contato
                  </Button>
                </Flex>
              </Stack >
            </Flex >
          )}
          {isMobile && (
            <>
              <Flex justify="center" mt="20">
                <Stack direction="column"  >
                  <HStack w="100%" spacing="0" justify="center" >
                    <Icon mt="8" h={28} w={28}><BsTextareaResize /></Icon>
                    <Text fontSize={["25px", "25px", "30px"]}>{currentImmobile?.size}m²</Text>
                  </HStack>
                  <HStack w="100%" spacing="0" justify="center" >
                    <Icon mt="8" h={28} w={28}><FaToilet /></Icon>
                    <Text fontSize={["25px", "25px", "30px"]}>{currentImmobile?.bathrooms} banheiros</Text>
                  </HStack>
                  <HStack w="100%" spacing="0" justify="center" >
                    <Icon mt="8" h={28} w={28}><FaBed /></Icon>
                    <Text fontSize={["25px", "25px", "30px"]}>{currentImmobile?.rooms} quartos</Text>
                  </HStack>
                  <HStack w="100%" spacing="0" justify="center" >
                    <Icon mt="8" h={28} w={28}><AiFillCar /></Icon>
                    <Text fontSize={["25px", "25px", "30px"]}>{currentImmobile?.slots} vagas</Text>
                  </HStack>
                  <HStack w="100%" spacing="0" justify="center" >
                    <Icon mt="8" h={28} w={28}><RiMoneyDollarBoxFill /></Icon>
                    <Text fontSize={["25px", "25px", "30px"]}>
                      <NumberFormat value={currentImmobile?.price} displayType={'text'} thousandSeparator={true} prefix={'R$'} />
                    </Text>
                  </HStack>
                  <HStack w="100%" spacing="0" justify="center" >
                    <Icon mt="8" h={28} w={28}><IoIosBed /></Icon>
                    <Text fontSize={["25px", "25px", "30px"]}>{currentImmobile?.suites} suites</Text>
                  </HStack>
                  <HStack w="100%" spacing="0" justify="center" >
                    <Icon mt="8" h={28} w={28}><BiBuildingHouse /></Icon>
                    <Text fontSize={["25px", "25px", "30px"]}>{currentImmobile?.type}</Text>
                  </HStack>
                </Stack >
              </Flex >

              <Stack direction="column" w="100%" pt="4" align="center"  >
                <Text w="100%" align="center" fontSize="30px">Rua: {currentImmobile?.street}</Text>
                <Text w="100%" align="center" fontSize="30px">Bairro: {currentImmobile?.district}</Text>
                <Text w="100%" align="center" fontSize="30px">Cidade: {currentImmobile?.city}</Text>
                <Text w="100%" align="center" fontSize="30px">CEP: {currentImmobile?.cep}</Text>

                <Stack direction={["column", "row", "row"]} w="80%" justify="space-between" align={["center", "", ""]} pt="12" spacing={["8", "", ""]}>
                  <Button mx={["auto", "", ""]} onClick={openMap} bgColor="#03292A" textColor="white" fontSize={["25px", "17px", "25px"]} w={["85%", "45%", "45%"]} h="60px" >
                    Como chegar
                  </Button>
                  <Button mx={["auto", "", ""]} onClick={sendWhats} bgColor="#03292A" textColor="white" fontSize={["25px", "17px", "25px"]} w={["85%", "45%", "45%"]} h="60px"   >
                    Contato
                  </Button>
                </Stack>

              </Stack>

            </>
          )}
        </Box >
        <Footer />

      </>
    )
}

