import { Button, Divider } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { IconChevronsRight } from '@tabler/icons';

export const CharityList = () => {
  return (
    <div>
      <div className="p-3">
        <BaseText content="middle" color="dark" weight={900}>
          LINE UP
        </BaseText>
      </div>
      <Divider size="xl" color="indigo.9" />

      <ul className="grid gap-8 p-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <li>
          <Link href="#">
            <a>
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
        </li>
        <li>
          <Link href="#">
            <a>
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
        </li>
        <li>
          <Link href="#">
            <a>
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
        </li>
        <li>
          <Link href="#">
            <a>
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
        </li>
      </ul>

      <div className="p-vw-10" />
    </div>
  );
};
