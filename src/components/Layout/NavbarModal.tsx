import React, { useEffect } from 'react';
import { headerLink } from 'src/utils/headerLink';
import { useRouter } from 'next/router';
import { IconX } from '@tabler/icons';
import { ActionIcon } from '@mantine/core';

type Props = {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavBarModal = ({ setIsModal }: Props) => {
  const router = useRouter();
  useEffect(() => {
    () => setIsModal(false);
  }, []);
  return (
    <div className="h-modal z-100 fixed top-0 right-0 left-0 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
      <div className="relative h-full w-full max-w-md p-4 md:h-auto">
        <div className="relative rounded-lg bg-white shadow">
          <ActionIcon
            onClick={() => setIsModal(false)}
            className="absolute top-3 right-2.5 p-1.5 hover:bg-gray-200 hover:text-gray-900"
            size="lg"
          >
            <IconX />
          </ActionIcon>
          <div className="rounded-t border-b py-4 px-6">
            <h3 className="text-base font-semibold text-gray-900 lg:text-xl">
              メニュー
            </h3>
          </div>
          <div className="p-6">
            <ul className="my-4 space-y-3">
              {headerLink.map((content) => (
                <li
                  key={content.label}
                  className="group flex cursor-pointer items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow"
                  onClick={() => router.push(`${content.link}`)}
                >
                  {<content.logo />}
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    {content.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
