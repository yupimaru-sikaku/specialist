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
        <h2 className="flex h-32 items-center justify-center bg-ash-100">
          <BaseText content="large">バナー</BaseText>
        </h2>
      </a>
    </Link>
  );
};
