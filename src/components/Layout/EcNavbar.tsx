import { ActionIcon, Modal } from '@mantine/core';
import { IconMenu2, IconPlus } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { newsList, recordList } from 'src/utils/mainMenuCarouselList';
import { NavBarModal } from 'src/components/Layout/NavbarModal';
import { IconShoppingCart } from '@tabler/icons';
import { IconSearch } from '@tabler/icons';

export const EcNavbar = () => {
  const [opened, setOpened] = useState(false);

  return (
    <header className="flex h-14 items-center justify-between bg-navy-900">
      <ActionIcon onClick={() => setOpened(true)} className="ml-3">
        <IconMenu2 color="white" />
      </ActionIcon>
      <Link href="/">
        <a className="flex items-center">
          <Image
            src="/specialist_logo_2.webp"
            priority={true}
            alt="hero_logo"
            width={45}
            height={45}
          />
          <div className="text-gray-100">
            <p className="text-md font-bold">Specialist</p>
            <p className="text-xs">ONLINE SHOP</p>
          </div>
        </a>
      </Link>
      <div className="mr-3 flex">
        <ActionIcon>
          <IconShoppingCart color="white" />
        </ActionIcon>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        fullScreen
        title="メニュー"
        classNames={{ modal: 'bg-navy-900', title: 'text-white' }}
      >
        <NavBarModal />
      </Modal>
    </header>
  );
};
