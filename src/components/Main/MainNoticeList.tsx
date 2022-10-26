import { Badge, Divider } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { formatDate } from 'src/utils';
import { BaseText } from '../Common/BaseText';

export const MainNoticeList = () => {
  return (
    <Link href="/">
      <a>
        <h2 className="flex h-32 items-center justify-center bg-gray-300">
          <BaseText content="large">バナーが入る</BaseText>
        </h2>
      </a>
    </Link>
  );
};
