import { Badge, Divider } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { formatDate } from 'src/utils';
import { BaseText } from '../Common/BaseText';

export const MainNoticeList = () => {
  return (
    <div>
      <h2 className="flex h-14 items-center justify-center bg-yellow-900">
        <BaseText content="large" color="dark">
          告知
        </BaseText>
      </h2>
      <article>
        <ul>
          <div>
            <Link href="/">
              <a className="flex h-24">
                <div className="h-24 w-1/3 overflow-hidden">
                  <Image
                    src="/misono.png"
                    width={100}
                    height={100}
                    quality={1}
                    layout="responsive"
                    className="object-cover"
                  />
                </div>
                <div className="ml-3 flex w-2/3 flex-col">
                  <time>
                    <BaseText content="small">2022年10月23日</BaseText>
                  </time>
                  <Badge
                    color="yellow"
                    size="xs"
                    radius="xs"
                    variant="filled"
                    classNames={{ root: 'w-10' }}
                  >
                    新着
                  </Badge>

                  <BaseText content="small" lineClamp={2} color="dark">
                    misono presentsチャリティーイベントが開催されます!
                  </BaseText>
                </div>
              </a>
            </Link>
            <Divider />
          </div>
        </ul>
      </article>
      <Link href="/">
        <a className="flex h-10 items-center justify-center bg-gray-200">
          <BaseText content="middle">ニュース一覧へ</BaseText>
        </a>
      </Link>
    </div>
  );
};
