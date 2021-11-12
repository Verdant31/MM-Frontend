//React
import { useState } from 'react';

//Chakra
import { Button, Text, Input, Image, FormLabel, Stack, HStack } from "@chakra-ui/react"

//Services
import { storage } from '../../../services/firebase/firebase';
import { api } from '../../../services/api/api';



export function CreateImmobileForm() {
  const [listImages, setListImages] = useState<File[]>([]);

  const [listImagesURL, setListImagesURL] = useState<string[]>([]);
  const [type, setType] = useState('');
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [suites, setSuites] = useState(0);
  const [slots, setSlots] = useState(0);
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [cep, setCep] = useState(0);
  const [city, setCity] = useState('');



  async function SaveImages(event: any) {
    await listImages.map(async (imagem: File) => {
      await storage.ref(`/images/${imagem.name}`).put(imagem)
        .then(snapshot => {
          snapshot.ref.getDownloadURL().then(async function (downloadURL) {
            setListImagesURL(oldState => [...oldState, downloadURL])
          })
        })
    })
  }
  async function SaveImmobile(event: any) {
    await api.post('/addimmobile', {
      images: listImagesURL,
      type,
      price,
      size,
      bathrooms,
      rooms,
      suites,
      slots,
      street,
      district,
      cep,
      city,
    })


  }

  function handleUploadImages(event: any) {
    setListImages(oldState => [...oldState, ...event.target.files])
  }

  return (
    <>
      <HStack spacing="12">
        <Stack w="40%">
          <FormLabel color="#00293">Tipo</FormLabel>
          <Input
            onChange={event => setType(event.target.value)}
            placeholder="Tipo do imóvel"
            type="text"
            textColor="#03292A"
            borderColor="#03292A"
          />
        </Stack>
        <Stack w="40%">
          <FormLabel color="#00293">Preço</FormLabel>
          <Input
            onChange={event => setPrice(Number(event.target.value))}
            placeholder="Preço do imóvel"
            type="number"
            textColor="#03292A"
            borderColor="#03292A"
          />
        </Stack>
      </HStack>
      <HStack spacing="12" mt="6">
        <Stack w="40%">
          <FormLabel color="#03292A">Tamanho</FormLabel>
          <Input
            onChange={event => setSize(Number(event.target.value))}
            placeholder="Tamanho do terreno"
            type="number"
            textColor="#03292A"
            borderColor="#03292A"
          />
        </Stack>
        <Stack w="40%">
          <FormLabel color="#03292A">Banheiros</FormLabel>
          <Input
            onChange={event => setBathrooms(Number(event.target.value))}
            placeholder="Quantidade de banheiros"
            type="number"
            textColor="#03292A"
            borderColor="#03292A"
          />
        </Stack>
      </HStack>
      <HStack spacing="12" mt="6">
        <Stack w="40%">
          <FormLabel color="#03292A">Quartos</FormLabel>
          <Input
            onChange={event => setRooms(Number(event.target.value))}
            placeholder="Quantidade de quartos"
            type="number"
            textColor="#03292A"
            borderColor="#03292A"
          />
        </Stack>
        <Stack w="40%">
          <FormLabel color="#03292A">Suites</FormLabel>
          <Input
            onChange={event => setSuites(Number(event.target.value))}
            placeholder="Quantidade de suites"
            type="number"
            textColor="#03292A"
            borderColor="#03292A"
          />
        </Stack>
      </HStack>
      <HStack spacing="12" mt="6">
        <Stack w="40%">
          <FormLabel color="#03292A">Vagas</FormLabel>
          <Input
            onChange={event => setSlots(Number(event.target.value))}
            placeholder="Quantidade de vagas"
            type="number"
            textColor="#03292A"
            borderColor="#03292A"
          />
        </Stack>
        <Stack w="40%">
          <FormLabel color="#03292A">Rua</FormLabel>
          <Input
            onChange={event => setStreet(event.target.value)}
            placeholder="Endereço da rua"
            type="text"
            textColor="#03292A"
            borderColor="#03292A"
          />
        </Stack>
      </HStack>
      <HStack spacing="12" mt="6">
        <Stack w="40%">
          <FormLabel color="#03292A">Bairro</FormLabel>
          <Input
            onChange={event => setDistrict(event.target.value)}
            placeholder="Endereço do bairro"
            type="text"
            textColor="#03292A"
            borderColor="#03292A"
          />
        </Stack>
        <Stack w="40%">
          <FormLabel color="#03292A">CEP</FormLabel>
          <Input
            onChange={event => setCep(Number(event.target.value))}
            placeholder="CEP"
            type="number"
            textColor="#03292A"
            borderColor="#03292A"
          />
        </Stack>
      </HStack>
      <HStack spacing="12" mt="6">
        <Stack w="40%">
          <FormLabel color="#03292A">Cidade</FormLabel>
          <Input
            onChange={event => setCity(event.target.value)}
            placeholder="Cidade"
            type="text"
            textColor="#03292A"
            borderColor="#03292A"
          />
        </Stack>
      </HStack>

      <HStack mt="8">
        <input type="file" multiple onChange={handleUploadImages} />
        <Button onClick={SaveImages}>Imagens</Button>
        <Button onClick={SaveImmobile}>Terreno</Button>
      </HStack>
      <Text fontSize="20px" color="#03292A">Fotos</Text>
      {listImagesURL.map((img) => {
        return (
          <Image src={img} h="150px" w="150px" />
        )
      })}
    </>
  )
}



