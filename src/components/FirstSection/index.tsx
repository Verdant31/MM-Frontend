//Chakra
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';

export function FirstSection() {
  return (
    <Flex w="100vw" h="400px" mt="28" justify="center" align="center">
      <HStack >
        <Box w="120" m="20">
          <Text fontWeight="regular" fontSize="40px" color="black" >
            Procurando uma <Text as="span" fontWeight="bold" fontSize="40px" color="#4EE99E">CASA?</Text>
          </Text>
          <Text fontWeight="regular" fontSize="40px" color="black">
            Aqui te <Text as="span" fontWeight="bold" fontSize="40px" color="#FFB800">AJUDAMOS  </Text>
            a
          </Text>
          <Text fontWeight="regular" fontSize="40px" color="black">
            achar um <Text as="span" fontWeight="bold" fontSize="40px" color="#00293A">LAR!</Text>
          </Text>
        </Box>
        <Image src="houses.png" />
      </HStack>
    </Flex >
  );
}
