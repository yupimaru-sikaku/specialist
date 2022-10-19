import React, { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Accordion } from '@mantine/core';
import {
  mainMenuCarouselList,
  newsList,
  scheduleList,
  shopList,
  sponsorList,
} from 'src/utils/mainMenuCarouselList';
import {
  mainMenuCarouselLinkContentType,
} from 'src/types';
import { BaseText } from 'src/components/Common/BaseText';
import Link from 'next/link';

export const MainMenuCarousel = () => {
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
      case 'SCHEDULE':
        setContentList(scheduleList);
        break;
      case 'NEWS':
        setContentList(newsList);
        break;
      case 'SHOPS':
        setContentList(shopList);
        break;
      case 'SPONSOR':
        setContentList(sponsorList);
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
        className="bg-gray-200"
      >
        {mainMenuCarouselList.map((content) => (
          <Carousel.Slide key={content.label}>
            <Accordion disableChevronRotation>
              <Accordion.Item value="customization">
                <Accordion.Control
                  onClick={() => handleSetContentType(content.label)}
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
        <ul className="bg-gray-500">
          {contentList.map((content) => (
            <Link href={content.link} key={content.label}>
              <a>
                <li className="pb-2 hover:cursor-pointer">
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
