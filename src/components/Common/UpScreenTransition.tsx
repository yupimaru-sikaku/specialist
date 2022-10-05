import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  duration?: number;
};

export const UpScreenTransition: NextPage<Props> = ({
  children,
  duration = 0.8,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // 初期状態
      animate={{ opacity: 1, y: 0 }} // マウント時
      transition={{
        duration: duration,
      }}
    >
      {children}
    </motion.div>
  );
};
