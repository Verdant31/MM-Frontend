//Chakra
import { Button, VStack, Box, Text, } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';

export function Properties() {
  return (
    <Box w="100vw" mb="40" mt="20" >
      <VStack w="100vw"  >
        <Text mb="16" mx="auto" fontWeight="semibold" fontSize="40px" color="#00293A" > Alguma dessas propriedades abaixo podem ser do seu interesse...</Text>
        <Box align="center" pb="20">
          <Image mb="8" src="immobile.png" h="400px" w="600px" />
          <Text fontSize="30px" color="#00293A" mb="8">R$40,000.000</Text>
          <Button size="lg" textColor="white" bgColor="#00293A">VER IMÓVEL</Button>
        </Box>
        <Box align="center">
          <Image mb="8" src="immobile.png" h="400px" w="600px" />
          <Text fontSize="30px" color="#00293A" mb="8">R$40,000.000</Text>
          <Button size="lg" textColor="white" bgColor="#00293A">VER IMÓVEL</Button>
        </Box>
      </VStack>
    </Box>

  );
}
