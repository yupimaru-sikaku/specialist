import { ReactNode } from 'react';

export const blogCategoryArr = [
  'ALL',
  'MEDIA',
  'EVENT',
  'GOODS',
  'TICKET',
  'OTHER',
  'YOUTUBE',
] as const;

export type Blog = {
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: typeof blogCategoryArr;
  link: string;
};

export type headerLinkType = {
  link: string;
  label: string;
  logo: any;
};

export type careerLinkType = {
  date: string;
  content: string;
};

export type recordLinkType = {
  date: string;
  content: string;
};

export type mainMenuCarouselLinkType = {
  label: 'RECORD' | 'NEWS' | 'CHARITY' | 'SPONSOR' | 'SUPPORT' | 'MEMBER';
  hiragana: string;
  link: string;
};

export type mainMenuCarouselLinkContentType = {
  label: string;
  link: string;
};
