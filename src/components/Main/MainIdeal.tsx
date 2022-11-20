import { Space } from '@mantine/core';
import React from 'react';
import { BaseText } from '../Common/BaseText';

const IDEAL_WORD = [
  { ja: '尖ったままでいろ', en: 'keep your gifts.' },
  {
    ja: '理解されるな、思い知らせろ',
    en: "Don't be understood,make some realize.",
  },
  {
    ja: 'みんな、尖って生まれてきた',
    en: 'stay genius.',
  },
  {
    ja: '出すぎた杭を、世界に打ち込む',
    en: 'no one can ignore us.',
  },
  {
    ja: '一線を、超えてゆけ',
    en: "Don't worry about bystanders.",
  },
];

export const MainIdeal = () => {
  return (
    <div>
      <h2 className="flex h-14 items-center justify-center bg-navy-900">
        <BaseText content="large" color="white">
          理念
        </BaseText>
      </h2>
      <ul className="text-center">
        <div className="p-vw-20" />
        {IDEAL_WORD.map((word) => (
          <li key={word.ja}>
            <BaseText content="large" fontFamily="Courgette">
              {word.ja}
              <br></br>
              {word.en}
            </BaseText>
            <div className="p-vw-10" />
          </li>
        ))}
        <div className="p-vw-10" />
      </ul>
    </div>
  );
};
