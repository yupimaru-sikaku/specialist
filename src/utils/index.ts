import { format } from 'date-fns';

export const formatDate = (date: string): string => {
  return format(new Date(date), 'yyyy年MM月dd日');
};

export const isOneMonthAgo = (date: string): boolean => {
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  return new Date(date) > oneMonthAgo;
};

export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
