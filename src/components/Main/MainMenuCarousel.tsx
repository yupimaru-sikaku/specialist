import React, { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Accordion } from '@mantine/core';
import {
  mainMenuCarouselList,
  newsList,
  recordList,
} from 'src/utils/mainMenuCarouselList';
import { mainMenuCarouselLinkContentType } from 'src/types';
import { BaseText } from 'src/components/Common/BaseText';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Autoplay from 'embla-carousel-autoplay';

export const MainMenuCarousel = () => {
  const router = useRouter();
  const [contentType, setContentType] = useState('');
  const [contentList, setContentList] = useState<
    mainMenuCarouselLinkContentType[]
  >([]);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  const handleSetContentType = (content: string) => {
    setContentType(content);
    contentType === content
      ? setIsListOpen((prevState) => !prevState)
      : setIsListOpen(true);
    switch (content) {
      case 'RECORD':
        setContentList(recordList);
        break;
      case 'NEWS':
        setContentList(newsList);
        break;
      default:
        break;
    }
  };

  return (
    <main>
      <Carousel
        slideGap={0}
        slideSize={30}
        height={50}
        align="start"
        dragFree
        controlsOffset={0}
        styles={{
          control: {
            opacity: '0.3',
          },
        }}
        className="bg-ash-100"
      >
        {mainMenuCarouselList.map((content) => (
          <Carousel.Slide key={content.label}>
            <Accordion disableChevronRotation sx={{ width: '150px' }}>
              <Accordion.Item value="customization">
                <Accordion.Control
                  onClick={() =>
                    content.link
                      ? router.push(content.link)
                      : handleSetContentType(content.label)
                  }
                  sx={{ padding: '10px' }}
                >
                  <div className="flex flex-col items-center justify-center">
                    <p>{content.label}</p>
                    <p className="text-xs text-gray-500">{content.hiragana}</p>
                  </div>
                </Accordion.Control>
              </Accordion.Item>
            </Accordion>
          </Carousel.Slide>
        ))}
      </Carousel>
      {isListOpen && contentList && (
        <ul className="animate-tracking-in-expand bg-gray-500">
          {contentList.map((content) => (
            <Link href={content.link} key={content.label}>
              <a>
                <li className="p-2 hover:cursor-pointer">
                  <BaseText align="center" content="middle" color="white">
                    {content.label}
                  </BaseText>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      )}
    </main>
  );
};
