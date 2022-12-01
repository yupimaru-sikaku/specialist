import { FC, ReactNode } from 'react';
import { Space } from '@mantine/core';
import { useUser } from 'src/hooks/user';

export const Header: FC<{ left: ReactNode }> = () => {
  const { session } = useUser();

  return (
    <div className="border-b bg-white">
      <Space h="xl" />
      <Space h="xl" />
      {session ? <p>ログイン中</p> : <p><br/></p>}
    </div>
  );
};
