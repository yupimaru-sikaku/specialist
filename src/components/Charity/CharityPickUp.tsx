import { Button } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { IconChevronsRight } from '@tabler/icons';

export const CharityPickUp = () => {
  return (
    <div className="bg-navy-900 p-3">
      <BaseText content="middle" color="white" weight={900}>
        PICK UP
      </BaseText>
      <ul className="grid gap-8" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <li>
          <Link href="#">
            <a>
              <Image
                src="/ec_product_1.png"
                width={100}
                height={100}
                layout="responsive"
                priority={false}
              />
              <BaseText content="small" color="white" weight={900}>
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
                priority={false}
              />
              <BaseText content="small" color="white" weight={900}>
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
                priority={false}
              />
              <BaseText content="small" color="white" weight={900}>
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
                priority={false}
              />
              <BaseText content="small" color="white" weight={900}>
                ¥5,000（税込）
              </BaseText>
            </a>
          </Link>
        </li>
      </ul>

      <div className="p-vw-10" />
      <Link href="#">
        <a className="block text-center">
          <Button
            variant="outline"
            classNames={{ root: 'text-white border-white' }}
            rightIcon={<IconChevronsRight />}
          >
            商品一覧はこちら
          </Button>
        </a>
      </Link>

      <div className="p-vw-10" />
    </div>
  );
};
