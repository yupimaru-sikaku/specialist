import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';

export const MainSponsorList = () => {
  return (
    <div>
      <h2 className="flex h-14 items-center justify-center bg-navy-900">
        <BaseText content="large" color="white">
          スポンサー
        </BaseText>
      </h2>
      <div className="p-vw-20" />
      <ul className="grid gap-8 items-center" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <li>
          <Link href="/">
            <a>
              <Image src="/ishitomi.png" width={200} height={150} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Image src="/novarex.jpg" width={200} height={100} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Image src="/maf.png" width={150} height={150} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Image src="/carriarx.png" width={150} height={100} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Image src="/umehanakai.png" width={150} height={150} />
            </a>
          </Link>
        </li>
      </ul>
      <div className="p-vw-20" />
    </div>
  );
};
