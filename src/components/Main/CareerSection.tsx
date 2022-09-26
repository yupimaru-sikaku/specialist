import { Divider } from '@mantine/core';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { careerLink } from 'src/utils/careerLink';
import { BaseText } from '../Common/BaseText';
import { IconApiApp } from '@tabler/icons';

export const CareerSection: NextPage = () => {
  return (
    <div>
      <BaseText
        content="large"
        variant="gradient"
        gradient={{ from: 'grape', to: 'yellow', deg: 45 }}
        letterSpacing="0.4rem"
        weight={900}
        align="center"
      >
        CAREER
      </BaseText>
      <BaseText content="middle" align="center">
        経営陣略歴
      </BaseText>
      <div className="p-vw-10" />
      <Divider />

      <div className="p-vw-10" />

      <div className="flex items-center gap-2">
        <IconApiApp color="green" />
        <BaseText content="middle" color="dark">
          代表理事　宮里　康和
        </BaseText>
      </div>

      <div className="p-vw-10" />

      <div className="md:flex">
        <div className="md:w-1/2">
          <Image
            src="/career_miyazato.webp"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>

        <div className="p-vw-10" />

        <ul className="text-center md:w-1/2">
          {careerLink.map((career) => {
            return (
              <div key={career.content}>
                <li className="grid" style={{ gridTemplateColumns: '40% 1fr' }}>
                  <BaseText content="middle">{career.date}</BaseText>
                  <BaseText content="middle" color="dark">
                    {career.content}
                  </BaseText>
                </li>
                <div className="p-vw-4" />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
