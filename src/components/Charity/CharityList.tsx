import { Divider } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { sponsorLink } from 'src/utils/sponsorLink';

export const CharityList = () => {
  return (
    <div className="bg-ash-500 p-3">
      <div className="rounded-md bg-white px-3">
        <div className="p-vw-10" />

        <BaseText content="large" align="center" color="dark">
          チャリティーグッズ
        </BaseText>
        <div className="p-vw-10" />
        <Divider />
        <div className="p-vw-10" />

        {/* <ul className="grid gap-8" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {charityList.map((content) => (
            <Link href={content.link} key={content.name}>
              <a className="flex flex-col gap-5">
                <Image
                  src={content.src}
                  width={50}
                  height={50}
                  layout="responsive"
                />
                <BaseText content="small" align="center" color="dark">
                  {content.name}
                </BaseText>
              </a>
            </Link>
          ))}
        </ul> */}
        <div className="p-vw-10" />
      </div>
    </div>
  );
};
