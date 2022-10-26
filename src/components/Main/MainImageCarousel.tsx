import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

export const MainImageCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    // <div className="w-screen">
    <Carousel
      height={212}
      // slideSize={500}
      align="start"
      // dragFree
      loop
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      styles={{
        control: {
          opacity: '0.3',
        },
      }}
    >
      <Carousel.Slide>
        <img src="/specialist_hero.png" alt="hero" className="object-contain" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="/specialist_hero_2.jpg"
          alt="hero"
          className="object-contain"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="/specialist_hero_3.jpg"
          alt="hero"
          className="object-contain"
        />
      </Carousel.Slide>
    </Carousel>
    // </div>
  );
};
