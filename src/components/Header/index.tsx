//Chakra
import { Flex, HStack, Text, Link } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';

export function Header() {
  return (
    <Flex align="center" height="150px" w="100vw"  >

      <HStack spacing="28" mx="auto">
        <Image src="/logo.png" mt="8" mr="12" h="110px" />
        <Link href="/" _hover={{ textDecoration: "none" }} >
          <Text fontWeight="extrabold" fontSize="30px">HOME</Text>
        </Link>
        <Link href="/imoveis" _hover={{ textDecoration: "none" }}  >
          <Text fontWeight="extrabold" fontSize="30px">IMÓVEIS</Text>
        </Link>
        <Link _hover={{ textDecoration: "none" }}>
          <Text fontWeight="extrabold" fontSize="30px">CONTATO</Text>
        </Link>
        <Link _hover={{ textDecoration: "none" }} >
          <Text fontWeight="extrabold" fontSize="30px">SOBRE</Text>
        </Link>

      </HStack>
    </Flex>
  );
}
