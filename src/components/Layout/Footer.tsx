import { ActionIcon, Divider } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { headerLink } from 'src/utils/headerLink';

export const Footer = () => {
  return (
    <footer className="rounded-lg bg-white p-4 shadow dark:bg-gray-900 md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/specialist_logo_2.webp" width={50} height={50} />
            <div className="p-vw-4" />
            <BaseText content="large" color="dark">
              Specialist
            </BaseText>
          </a>
        </Link>

        <div className="p-vw-8" />

        <ul className="mb-6 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
          {headerLink.map((content) => {
            return (
              <Link href={content.link} key={content.label}>
                <a>
                  <li key={content.label} className="p-1">
                    <ActionIcon
                      sx={{
                        padding: '4px',
                        border: '1px solid',
                      }}
                    >
                      {<content.logo />}
                    </ActionIcon>
                  </li>
                </a>
              </Link>
            );
          })}
        </ul>
      </div>

      <Divider />

      <div className="p-vw-8" />

      <BaseText content="small" align="center">
        © 2022 Specialist Association™ <br />. All Rights Reserved.
      </BaseText>
    </footer>
  );
};
