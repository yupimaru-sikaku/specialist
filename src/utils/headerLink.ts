import { headerLinkType } from 'src/types';
import { IconYoga } from '@tabler/icons';
import { IconNews } from '@tabler/icons';
import { IconCamera } from '@tabler/icons';

export const headerLink: headerLinkType[] = [
  {
    link: '/blog',
    label: 'Blog',
    logo: IconNews,
  },
  {
    link: '#',
    label: 'Activity',
    logo: IconYoga,
  },
  {
    link: '#',
    label: 'Gallery',
    logo: IconCamera,
  },
];
