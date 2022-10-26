import { Accordion, ActionIcon, Modal } from '@mantine/core';
import { IconMenu2, IconPlus } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { NavBarModal } from './NavbarModal';
import { newsList, recordList } from 'src/utils/mainMenuCarouselList';

export const Navbar = () => {
  const [opened, setOpened] = useState(false);

  return (
    <header className="flex h-14 items-center justify-between bg-navy-900">
      <Link href="/">
        <a className="ml-3 flex items-center">
          <Image
            src="/specialist_logo_2.webp"
            priority={true}
            alt="hero_logo"
            width={45}
            height={45}
          />
          <div className="ml-2 text-gray-100">
            <p className="text-xs">一般社団法人</p>
            <p className="text-sm">スペシャリスト育成支援協会</p>
          </div>
        </a>
      </Link>
      <ActionIcon onClick={() => setOpened(true)} className="mr-3">
        <IconMenu2 color="white" />
      </ActionIcon>
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
