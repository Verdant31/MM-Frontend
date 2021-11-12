//Chakra
import { Box, Text, Stack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';

export function SecondSection() {
  return (
    <Box justify="center" height={["1000px", "970px", "400px", "400px", "400px"]} w="100vw" bgColor="#00293A" mt="20" >

      <Text align="center" fontWeight="semibold" pt="8" color="white" fontSize="40px">COMO FUNCIONA?</Text>

      <Stack direction={["column", "column", "row", "row", "row"]} justify="center" mt="12" spacing={["100", "100", "150", "300"]}>

        <Stack direction="column">
          <Box w="120px" align="center" mx={["auto", "auto", "0", "0", "0"]} >
            <Image src="home.svg" w={["100px", "100px", "60px", "100px"]} h="100px" />
            <Text fontWeight="semibold" fontSize={["17px", "17px", "17px", "20px"]} mt="4" color="white">Ache um imóvel que te agrade.</Text>
          </Box>
        </Stack>
        <Stack direction="column">
          <Box w="125px" align="center" mx={["auto", "auto", "0", "0", "0"]}>
            <Image src="message.svg" w={["100px", "100px", "60px", "100px"]} h="100px" />
            <Text fontWeight="semibold" fontSize={["17px", "17px", "17px", "20px"]} mt="4" color="white">Nos mande uma mensagem!</Text>
          </Box>
        </Stack>
        <Stack direction="column">
          <Box w="120px" align="center" mx={["auto", "auto", "0", "0", "0"]} >
            <Image src="complete.svg" w={["100px", "100px", "60px", "100px"]} h="100px" />
            <Text fontWeight="semibold" fontSize={["17px", "17px", "17px", "20px"]} mt="4" color="white">Feito! Agora é só cuidar da papelada.</Text>
          </Box>
        </Stack>
      </Stack>


    </Box>

  );
}
