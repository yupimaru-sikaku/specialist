import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { supportLink } from 'src/utils/supportLink';

export const MainSupportList = () => {
  return (
    <div>
      <h2 className="flex h-14 items-center justify-center bg-navy-900">
        <BaseText content="large" color="white">
          γ΅γγΌγ
        </BaseText>
      </h2>
      <div className="p-vw-20" />
      <ul className="grid gap-8 p-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {supportLink.map((content) => (
          <Link href={content.link} key={content.name}>
            <a className="flex flex-col gap-5">
              <Image
                src={content.src}
                width={50}
                height={50}
                layout="responsive"
              />
              <BaseText content="small" align="center" color="dark">
                {content.name}
              </BaseText>
            </a>
          </Link>
        ))}
      </ul>
      <div className="p-vw-20" />
    </div>
  );
};
