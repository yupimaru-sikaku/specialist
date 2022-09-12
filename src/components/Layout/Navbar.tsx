import { ActionIcon, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from '@tabler/icons';
import { headerLink } from 'src/utils/headerLink';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  const linkList = headerLink;
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className="h-14">
      <nav className="flex h-14 items-center justify-around">
        <Burger
          className="block sm:hidden"
          opened={opened}
          onClick={toggle}
          size="sm"
        />
        <ul className="hidden sm:flex sm:gap-5">
          {linkList.map((link) => {
            return (
              <li key={link.label}>
                <Link href={link.link}>
                  <a>{link.label}</a>
                </Link>
              </li>
            );
          })}
        </ul>

        <Link href="/">
          <a>
            <Image src="/specialist_logo.webp" width={300} height={50} />
          </a>
        </Link>

        <ul className="flex sm:gap-5">
          <li>
            <ActionIcon size="lg">
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
          </li>
          <li>
            <ActionIcon size="lg">
              <IconBrandYoutube size={18} stroke={1.5} />
            </ActionIcon>
          </li>
          <li>
            <ActionIcon size="lg">
              <IconBrandInstagram size={18} stroke={1.5} />
            </ActionIcon>
          </li>
        </ul>
      </nav>
    </header>
  );
};
