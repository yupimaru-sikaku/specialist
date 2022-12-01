import { format, getYear } from 'date-fns';

export const TAX = 1.1;

export const formatDate = (date: string): string => {
  return format(new Date(date), 'yyyy年MM月dd日');
};

export const isOneMonthAgo = (date: string): boolean => {
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  return new Date(date) > oneMonthAgo;
};

export const convertUtcToJst = (utcDate: Date): Date => {
  utcDate.setHours(utcDate.getHours() + 9);
  return utcDate;
};

export const convertSupabaseTime = (supabaseTime: string): string => {
  const pad2 = (n: number) => {
    return n < 10 ? '0' + n : n;
  };
  const supabaseDate = new Date(supabaseTime);
  return (
    supabaseDate.getFullYear() +
    '-' +
    pad2(supabaseDate.getMonth() + 1) +
    '-' +
    pad2(supabaseDate.getDate()) +
    ' ' +
    pad2(supabaseDate.getHours()) +
    ':' +
    pad2(supabaseDate.getMinutes())
  );
};

export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
