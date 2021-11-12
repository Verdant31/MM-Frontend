import {
    Box,
    Text,
    HStack,
    VStack,
    Button,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

export function Footer() {
    return (
        <Box h="200px" bgColor="#00293A" mt="20" >

            <VStack pt="8">

                <HStack>
                    <Text color="white" align="center" fontWeight="bold">© 2021 M&M Soluções Imobiliarias. Todos os direitos reservados.</Text>
                </HStack>
                <HStack pt="4">
                    <Button variant="ghost">
                        <FaInstagram color="white" size="30px" />
                    </Button>
                    <Button variant="ghost">
                        <FaFacebook color="white" size="30px" />
                    </Button>
                    <Button variant="ghost">
                        <BiMailSend color="white" size="30px" />
                    </Button>
                </HStack>

            </VStack>


        </Box>
    );
}
