//Chakra
import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';

export function FirstSection() {
  return (
    <Flex w="100vw" h={["700px", "700px", "700px", "400px"]} mt={["0", "0", "0", "28"]} justify="center" align="center">
      <Stack direction={["column", "column", "column", "row"]} >
        <Box w={["200px", "300px", "500px", "500px"]} m="20" align="center">
          <Text fontWeight="regular" fontSize={["30px", "30px", "30px", "40px"]} color="black" >
            Procurando um <Text as="span" fontWeight="bold" fontSize={["30px", "30px", "30px", "40px"]} color="#4EE99E">IMÓVEL?</Text>
            <Text as="span" fontWeight="regular" fontSize={["30px", "30px", "30px", "40px"]} color="black">
              Aqui te <Text as="span" fontWeight="bold" fontSize={["30px", "30px", "30px", "40px"]} color="#FFB800">AJUDAMOS  </Text>

            </Text>
            <Text as="span" fontWeight="regular" fontSize={["30px", "30px", "30px", "40px"]} color="black">
              a encontrar um <Text as="span" fontWeight="bold" fontSize={["30px", "30px", "30px", "40px"]} color="#00293A">LAR!</Text>
            </Text>

          </Text>


        </Box>
        <Box align="center" >
          <Image src="houses.png" h={["200px", "250px", "300px", "400px", "400px"]} w={["250px", "350px", "450px", "500px", "500px"]} />
        </Box>
      </Stack>
    </Flex >
  );
}
