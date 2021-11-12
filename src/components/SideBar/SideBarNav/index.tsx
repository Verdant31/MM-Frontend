


import { Stack, Image, Link, Text } from '@chakra-ui/react';


export function SidebarNav() {
    return (
        <Stack direction="column" align="center" spacing="20">
            <Image align="center" src="/whitelogo.png" mt="8" h="110px" />
            <Link href="/" _hover={{ textDecoration: "none" }} >
                <Text color="white" fontWeight="extrabold" fontSize="30px">HOME</Text>
            </Link>
            <Link href="/imoveis" _hover={{ textDecoration: "none" }}  >
                <Text color="white" fontWeight="extrabold" fontSize="30px">IMÓVEIS</Text>
            </Link>
            <Link _hover={{ textDecoration: "none" }}>
                <Text color="white" fontWeight="extrabold" fontSize="30px">CONTATO</Text>
            </Link>
            <Link _hover={{ textDecoration: "none" }} >
                <Text color="white" fontWeight="extrabold" fontSize="30px">SOBRE</Text>
            </Link>
        </Stack>
    );
}
