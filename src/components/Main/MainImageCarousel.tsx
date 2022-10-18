import React from 'react';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';

export const MainImageCarousel = () => {
  return (
    // <div className="w-screen">
    <Carousel
      height={212}
      // slideSize={500}
      align="start"
      dragFree
      loop
      styles={{
        control: {
          opacity: '0.3',
        },
      }}
    >
      <Carousel.Slide>
        <img src="/specialist_hero.png" alt="hero" />
      </Carousel.Slide>
    </Carousel>
    // </div>
  );
};
