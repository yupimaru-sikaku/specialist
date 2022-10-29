import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

export const ECMainImageCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      height={212}
      align="start"
      withIndicators
      withControls={false}
      loop
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      classNames={{ indicator: 'w-2 h-2' }}
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
