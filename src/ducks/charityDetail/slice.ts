export type CharityDetail = {
  id?: string;
  charityCode: string;
  color: string;
  size: string;
  stock: number;
  sales: number;
};

export const initialState: CharityDetail = {
  id: '',
  charityCode: '',
  color: '',
  size: '',
  stock: 0,
  sales: 0,
};
