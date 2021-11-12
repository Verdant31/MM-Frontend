//Chakra
import { Flex, Stack, HStack, Text, Link, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { RiMenuLine } from 'react-icons/ri';
import { SideBar } from '../SideBar';
import { useHeader } from '../../contexts/HeaderContext';

export function Header() {
  const { onOpen } = useHeader();

  const isMobile = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
    xl: false,
  })

  if (isMobile) {
    return (
      <Flex align="center" height="150px" w="100vw">
        <HStack spacing={['15px', '15px', '10', '16', '28']} mx="auto">
          <Image src="/logo.png" mt="8" mr="12" h="110px" />
          <IconButton
            _focus={{ outline: 'none' }}
            icon={<Icon
              as={RiMenuLine}
            />}
            fontSize="60"
            variant="unstyled"
            onClick={onOpen}
            aria-label="Open Navigation"
            mr="2"
          >
          </IconButton>
          <SideBar />
        </HStack>
      </Flex>
    )
  }

  return (
    <Flex align="center" height="150px" w="100vw"  >
      <Stack direction="row" spacing={['8', '8', '8', '8', "16"]} mx="auto" align="center">
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
      </Stack>
    </Flex>
  );
}
