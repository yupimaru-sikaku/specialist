export type CharityImage = {
  id?: string;
  charityCode: string;
  url: string;
};

export const initialState: CharityImage = {
  id: '',
  charityCode: '',
  url: '',
};
