//Chakra
import { Button, VStack, Box, Text, } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { useImmobiles } from '../../../services/hooks/useImmobiles';
import { Loading } from '../../Utility/Load/Loading';
import { useHistory } from 'react-router';


export function Properties() {
  const history = useHistory();
  const { data } = useImmobiles(1);

  if (!data) {
    return <Loading />;
  }

  const shuffled = data.immobiles.sort(() => 0.5 - Math.random());
  console.log(shuffled);

  let selected = shuffled.slice(0, 2);

  function handleSeeImmobile(id: string) {
    history.push(`/verimovel/${id}`)
  }
  console.log(selected.length)

  if (selected.length <= 1) {
    return (
      <Box w="100vw" mb="40" mt="20" >
        <Text align="center" fontSize={["15px", "25px", "35px"]}>Não há sugestão de móveis disponiveis no momento.</Text>
      </Box>
    )
  }

  return (
    <>
      <Box w="100vw" mb="40" mt="20" >
        <VStack w="100vw"  >
          <Text mb="16" w={["65%", "90%", "90%", "90%"]} align="center" mx="auto" fontWeight="semibold" fontSize={["30px", "30px", "40px", "40px"]} color="#00293A" > Alguma dessas propriedades abaixo podem ser do seu interesse...</Text>
          <Box align="center" pb="20">
            <Image mb="8" src={selected[0].image} h={["300px", "300px", "400px", "400px"]} w={["450px", "450px", "600px", "600px"]} />
            <Text fontSize="30px" color="#00293A" mb="8">R${selected[0].price}</Text>

            <Button size="lg" textColor="white" bgColor="#00293A" onClick={() => handleSeeImmobile(selected[0].id)}> VER IMÓVEL</Button>
          </Box>
          <Box align="center">
            <Image mb="8" src={selected[1].image} h={["300px", "300px", "400px", "400px"]} w={["450px", "450px", "600px", "600px"]} />
            <Text fontSize="30px" color="#00293A" mb="8" >R${selected[1].price}</Text>
            <Button size="lg" textColor="white" bgColor="#00293A">VER IMÓVEL</Button>
          </Box>
        </VStack>
      </Box>
    </>
  )
}
