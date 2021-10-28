//Chakra
import { Flex, VStack, Box, Button, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router';

interface ImmobilePreviewProps {
  immobile: {
    id: string;
    image: string;
    type: string;
    price: number;
    size: number;
  }
  sendWhats: (id: string) => void;
}

export default function ImmobilePreview({ immobile, sendWhats }: ImmobilePreviewProps) {
  const history = useHistory();

  function handleSeeImmobile(id: string) {
    history.push(`/verimovel/${id}`)
  }
  return (
    <>
      <Flex w="50vw" justify="space-between" h="230px" borderWidth="2px" borderColor="#00293A" >
        <VStack mx="auto" my="auto" mb="4" mt="2" spacing="4">
          <Text fontSize="25px">{immobile.type}</Text>
          <Text fontSize="25px">{immobile.size}m²</Text>
          <Text fontSize="25px">
            <NumberFormat value={immobile.price} displayType={'text'} thousandSeparator={true} decimalSeparator="." prefix={'R$'} />
          </Text>
          <Flex >
            <Button textColor="white" bgColor="#00293A" mx="4" onClick={() => handleSeeImmobile(immobile.id)}>Ver imóvel</Button>
            <Button textColor="white" bgColor="#00293A" mx="4" onClick={() => sendWhats(immobile.id)}>Contato</Button>
          </Flex>

        </VStack>
        <Box >
          <Image fit="cover" src={immobile.image} w="320px" h="225px" />
        </Box>

      </Flex>
    </>
  )
}
