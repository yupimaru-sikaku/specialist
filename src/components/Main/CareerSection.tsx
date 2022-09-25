import { Divider } from '@mantine/core';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { careerLink } from 'src/utils/careerLink';
import { BaseText } from '../Common/BaseText';

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

      <BaseText content="middle">代表理事　宮里　康和</BaseText>

      <div className="p-vw-10" />

      <div>
        <Image
          src="/career_miyazato.webp"
          width={400}
          height={400}
          className="rounded-xl"
        />

        <div className="p-vw-10" />

        <ul>
          {careerLink.map((career) => {
            return (
              <>
                <li
                  key={career.content}
                  className="grid"
                  style={{ gridTemplateColumns: '40% 1fr' }}
                >
                  <BaseText content="small" color="dark">
                    {career.date}
                  </BaseText>
                  <BaseText content="small">{career.content}</BaseText>
                </li>
                <div className="p-vw-10" />
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
