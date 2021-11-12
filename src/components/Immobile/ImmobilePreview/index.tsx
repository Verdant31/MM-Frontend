//Chakra
import { Flex, Box, Button, Text, Stack, useBreakpointValue } from '@chakra-ui/react';
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

  const isMobile = useBreakpointValue({
    base: true,
    md: true,
    lg: true,
    xl: false,
  })

  function handleSeeImmobile(id: string) {
    history.push(`/verimovel/${id}`)
  }
  if (isMobile) {
    return (
      <>
        <Flex h={['310px', '385px', '385px', '385px', '385px']} mb="12" mx="auto" w={['320px', '400px', '400px', '400px', '400px']} borderWidth="2px" borderColor="#00293A" >
          <Stack direction="column" align="center" mx="auto" my="auto" mb="4" mt="2" spacing="4">
            <Text fontSize={['20px', '20px', '20px', '20px', '25px']}>{immobile.type}</Text>
            <Stack direction="row" spacing="4" w="100%" justify="center">
              <Text align="right" pr="4" w="50%" fontSize={['20px', '20px', '20px', '20px', '25px']}>{immobile.size}m²</Text>
              <Text w="50%" fontSize={['20px', '20px', '20px', '20px', '25px']}>
                R$<NumberFormat style={{ width: "100px" }} value={new Intl.NumberFormat('id').format(immobile.price)} />
              </Text>
            </Stack>
            <Stack direction="row">
              <Button fontSize={['16px', '16px', '16px', '16px', '16px']} w={['32', '32', '32', '32', '32']} h={['10', '10', '10', '10', '10']} textColor="white" bgColor="#00293A" mx="4" onClick={() => handleSeeImmobile(immobile.id)}>Ver imóvel</Button>
              <Button fontSize={['16px', '16px', '16px', '16px', '16px']} w={['32', '32', '32', '32', '32']} h={['10', '10', '10', '10', '10']} textColor="white" bgColor="#00293A" mx="4" onClick={() => sendWhats(immobile.id)}>Contato</Button>
            </Stack>
            <Box>
              <Image fit="cover" src={immobile.image} w={['316px', '400px', '400px', '400px', '320px']} h={['150px', '225px', '225px', '225px', '225px']} />
            </Box>
          </Stack>


        </Flex>
      </>
    )

  }
  return (
    <>
      <Flex w="50vw" justify="space-between" h="230px" borderWidth="2px" borderColor="#00293A" >
        <Stack direction="column" align="center" mx="auto" my="auto" mb="4" mt="2" spacing="4">
          <Text fontSize={['15px', '15px', '15px', '20px', '25px']}>{immobile.type}</Text>
          <Text fontSize={['15px', '15px', '15px', '20px', '25px']}>{immobile.size}m²</Text>
          <Text fontSize={['15px', '15px', '15px', '20px', '25px']}>
            R${new Intl.NumberFormat('id').format(immobile.price)}
          </Text>
          <Stack direction="row">
            <Button fontSize={['20', '20', '20', '13px', '16px']} w={['20', '20', '20', '20', '32']} h={['10', '10', '10', '10', '10']} textColor="white" bgColor="#00293A" mx="4" onClick={() => handleSeeImmobile(immobile.id)}>Ver imóvel</Button>
            <Button fontSize={['20', '20', '20', '13px', '16px']} w={['20', '20', '20', '20', '32']} h={['10', '10', '10', '10', '10']} textColor="white" bgColor="#00293A" mx="4" onClick={() => sendWhats(immobile.id)}>Contato</Button>
          </Stack>

        </Stack>
        <Box display="flex">
          <Image fit="cover" src={immobile.image} w="320px" h="225px" />
        </Box>

      </Flex>
    </>
  )
}
