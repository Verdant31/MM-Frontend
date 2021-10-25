import { SwiperSlide } from "swiper/react";
import { Box, Flex, Link, ResponsiveValue, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
type BackgroundImage = "none" | (string & {});

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
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="center"
      >

      </Flex>
    </SwiperSlide>
  )
}
