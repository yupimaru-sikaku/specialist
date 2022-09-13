import { Button, MantineNumberSize, MantineSize } from '@mantine/core';
import { ReactNode } from 'react';
import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';

type Props = {
  variant?:
    | 'gradient'
    | 'filled'
    | 'outline'
    | 'light'
    | 'white'
    | 'default'
    | 'subtle';
  color?: string;
  radius?: MantineNumberSize;
  size?: MantineSize;
  disabled?: boolean;
  children: ReactNode;
  onClick?: any;
};

export const RegularButton = ({
  variant = 'filled',
  color = 'blue',
  radius = 'sm',
  size = 'sm',
  disabled = false,
  children,
  onClick,
}: Props) => {
  const lagerThanXs = useMediaQuery('xs');

  return (
    <Button
      variant={variant}
      color={color}
      radius={radius}
      size={lagerThanXs ? size : 'xs'}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
