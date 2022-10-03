import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const DownUpScreenTransition: NextPage<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // 初期状態
      animate={{ opacity: 1, y: 0 }} // マウント時
      exit={{ opacity: 0, y: 10 }} // アンマウント時
      transition={{
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
};
