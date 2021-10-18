//Chakra
import { Flex, HStack, Text, Link } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';

export function FirstSection() {
  return (
    <Flex w="100%" h="400px" mt="40" justify="center" align="center">
      <HStack spacing="20">
        <Text fontWeight="regular" fontSize="64px" color="black" >
          Procurando uma <Text as="span" fontWeight="bold" fontSize="64px" color="#4EE99E">CASA?</Text>
        </Text>
        <Image src="houses.png" />
      </HStack>
    </Flex>
  );
}
