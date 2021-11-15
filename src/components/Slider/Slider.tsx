//Chakra
import { Flex } from '@chakra-ui/react';

//Swiper
import { SwiperSlide } from "swiper/react";


interface swiperProps {
  image: string;
}

export function Slider({ image }: swiperProps) {
  return (
    <SwiperSlide>
      <Flex
        w="100%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
        bgImage={image}
        bgRepeat="no-repeat"
        bgPosition="center"
      >

      </Flex>
    </SwiperSlide>
  )
}
