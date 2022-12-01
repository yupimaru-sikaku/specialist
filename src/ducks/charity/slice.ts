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
};

export const initialState: Charity = {
  stripeId: '',
  code: '',
  name: '',
  price: 0,
  description: '',
  genre: 'アパレル',
  isReserved: false,
  link: '',
  isDisplay: false,
  isChecked: false,
  sales: 0,
  detailList: [
    {
      color: '',
      size: '',
      stock: 0,
      sales: 0,
    },
  ],
  imageList: [],
};
