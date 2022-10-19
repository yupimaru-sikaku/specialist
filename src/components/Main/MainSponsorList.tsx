import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';

export const MainSponsorList = () => {
  return (
    <div>
      <h2 className="flex h-14 items-center justify-center bg-yellow-900">
        <BaseText content="large" color="dark">
          スポンサー
        </BaseText>
      </h2>
      <div className="p-vw-20" />
      <ul className="flex flex-col items-center gap-10">
        <li>
          <Image src="/novarex.jpg" width={200} height={50} />
        </li>
        <li>
          <Image src="/maf.png" width={100} height={100} />
        </li>
        <li>
          <Image src="/carriarx.png" width={150} height={100} />
        </li>
        <li>
          <Image src="/umehanakai.png" width={150} height={150} />
        </li>
      </ul>
      <div className="p-vw-20" />
    </div>
  );
};
