//Chakra
import { Flex, HStack, Text, Link } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';

export function Header() {
  return (
    <Flex align="center" height="150px" w="100vw"  >

      <HStack spacing="16" mx="auto">
        <Image src="/logo.png" mt="8" mr="12" />
        <Link href="/" _hover={{ textDecoration: "none" }} >
          <Text fontWeight="extrabold" fontSize="40px">HOME</Text>
        </Link>
        <Link href="/imoveis" _hover={{ textDecoration: "none" }}  >
          <Text fontWeight="extrabold" fontSize="40px">IMÓVEIS</Text>
        </Link>
        <Link _hover={{ textDecoration: "none" }}>
          <Text fontWeight="extrabold" fontSize="40px">CONTATO</Text>
        </Link>
        <Link _hover={{ textDecoration: "none" }} >
          <Text fontWeight="extrabold" fontSize="40px">SOBRE</Text>
        </Link>

      </HStack>
    </Flex>
  );
}
