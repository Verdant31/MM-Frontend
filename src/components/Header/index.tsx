//Chakra
import { Flex, HStack, Text, Link } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';

export function Header() {
  return (
    <Flex align="center" height="150px"  >

      <HStack spacing="40px">
        <Image src="/logo.png" ml="20" mt="8" />
        <Link href="/" _hover={{ textDecoration: "none" }} >
          <Text fontWeight="extrabold" fontSize="45px">HOME</Text>
        </Link>
        <Link href="/imoveis" _hover={{ textDecoration: "none" }}  >
          <Text fontWeight="extrabold" fontSize="45px">IMÓVEIS</Text>
        </Link>
        <Link _hover={{ textDecoration: "none" }}>
          <Text fontWeight="extrabold" fontSize="45px">CONTATO</Text>
        </Link>
        <Link _hover={{ textDecoration: "none" }} >
          <Text fontWeight="extrabold" fontSize="45px">SOBRE</Text>
        </Link>

      </HStack>
    </Flex>
  );
}
