//Chakra
import { VStack, Box, HStack, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';

export function SecondSection() {
  return (
    <Box justify="center" height="400px" w="100vw" bgColor="#00293A" mt="20" >
      <Text align="center" fontWeight="semibold" pt="4" color="white" fontSize="40px">COMO FUNCIONA?</Text>
      <HStack justify="center" mt="12" spacing="300">
        <VStack>
          <Box w="140px" align="center">
            <Image src="home.svg" w="100px" h="100px" />
            <Text fontWeight="semibold" fontSize="20px" mt="4" color="white">Ache um imóvel que te agrade.</Text>
          </Box>
        </VStack>
        <VStack>
          <Box w="140px" align="center">
            <Image src="message.svg" w="100px" h="100px" />
            <Text fontWeight="semibold" fontSize="20px" mt="4" color="white">Nos mande uma mensagem!</Text>
          </Box>
        </VStack>
        <VStack>
          <Box w="140px" align="center">
            <Image src="complete.svg" w="100px" h="100px" />
            <Text fontWeight="semibold" fontSize="20px" mt="4" color="white">Feito! Agora é só cuidar da papelada.</Text>
          </Box>
        </VStack>
      </HStack>
    </Box>

  );
}
