export const charityGenreArr = [
  'アパレル',
  'タオル',
  'アクセサリー',
  'その他',
] as const;

export type Admim = {
  email: string;
  password: string;
  password_confirm: string;
};

export type Blog = {
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category:
    | 'ALL'
    | 'MEDIA'
    | 'EVENT'
    | 'GOODS'
    | 'TICKET'
    | 'OTHER'
    | 'YOUTUBE';
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

export type Charity = {
  code: string;
  stripeId: string;
  name: string;
  price: number;
  description: string;
  genre: 'アパレル' | 'タオル' | 'アクセサリー' | 'その他';
  link: string;
  sales: number;
  isReserved: boolean;
  isDisplay: boolean;
  isChecked: boolean;
  detailList: {
    color: string;
    size: string;
    stock: number;
    sales: number;
  }[];
  imageList: File[];
  createdAt?: string;
  updatedAt?: string;
};
