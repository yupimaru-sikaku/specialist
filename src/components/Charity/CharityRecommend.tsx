import { Button, Divider } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { IconChevronsRight } from '@tabler/icons';
import { Carousel } from '@mantine/carousel';

export const CharityRecommend = () => {
  return (
    <div>
      <div className="p-3">
        <BaseText content="middle" color="dark" weight={900}>
          RECOMEND
        </BaseText>
      </div>
      <Divider size="xl" color="indigo.9" />

      <div className='p-3'>
        <div className="p-vw-2" />

        <Carousel
          align="start"
          slideSize="40%"
          slideGap="md"
          withControls={false}
          dragFree
          styles={{
            control: {
              opacity: '0.3',
            },
          }}
        >
          <Carousel.Slide>
            <Link href="#">
              <a className="flex flex-col">
                <Image
                  src="/ec_product_1.png"
                  width={100}
                  height={100}
                  layout="responsive"
                />
                <BaseText content="small" color="dark" weight={900}>
                  ¥2,000（税込）
                </BaseText>
              </a>
            </Link>
          </Carousel.Slide>
          <Carousel.Slide>
            <Link href="#">
              <a className="flex flex-col">
                <Image
                  src="/ec_product_2.png"
                  width={100}
                  height={100}
                  layout="responsive"
                />
                <BaseText content="small" color="dark" weight={900}>
                  ¥3,000（税込）
                </BaseText>
              </a>
            </Link>
          </Carousel.Slide>
          <Carousel.Slide>
            <Link href="#">
              <a className="flex flex-col">
                <Image
                  src="/ec_product_3.png"
                  width={100}
                  height={100}
                  layout="responsive"
                />
                <BaseText content="small" color="dark" weight={900}>
                  ¥4,000（税込）
                </BaseText>
              </a>
            </Link>
          </Carousel.Slide>
          <Carousel.Slide>
            <Link href="#">
              <a className="flex flex-col">
                <Image
                  src="/ec_product_4.png"
                  width={100}
                  height={100}
                  layout="responsive"
                />
                <BaseText content="small" color="dark" weight={900}>
                  ¥5,000（税込）
                </BaseText>
              </a>
            </Link>
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
};
