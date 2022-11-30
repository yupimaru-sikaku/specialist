import React from 'react';
import { BaseText } from '../Common/BaseText';
import { IconChevronRight } from '@tabler/icons';
import { Button } from '@mantine/core';
import { getPath } from 'src/libs/const';
import Link from 'next/link';
import { IDEAL_WORD } from 'src/utils/idealWord';

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
            <BaseText content="large" fontFamily="Courgette" color="dark">
              {word.ja}
            </BaseText>
            <BaseText content="large" fontFamily="Courgette" color="dimmed">
              {word.en}
            </BaseText>
            <div className="p-vw-10" />
          </li>
        ))}
        <div className="p-vw-10" />
        <Link href={getPath('IDEAL')}>
          <a>
            <Button
              variant="default"
              color="dark"
              leftIcon={<IconChevronRight />}
            >
              理念詳細
            </Button>
          </a>
        </Link>
        <div className="p-vw-20" />
      </ul>
    </div>
  );
};
