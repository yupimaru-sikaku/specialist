import { ReactNode } from 'react';

export type Blog = {
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  };
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
  label: 'SCHEDULE' | 'NEWS' | 'SHOPS' | 'SPONSOR';
  hiragana: string;
};

export type mainMenuCarouselLinkContentType = {
  label: string;
  link: string;
};
