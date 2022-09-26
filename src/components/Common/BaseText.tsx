import { DefaultMantineColor, MantineGradient, Text } from '@mantine/core';
import { NextPage } from 'next';
import { ReactNode, useEffect, useState } from 'react';
import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';

type Props = {
  align?: 'start' | 'center' | 'end';
  children: ReactNode;
  color?: DefaultMantineColor | 'dimmed';
  gradient?: MantineGradient;
  lineClamp?: number;
  size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  span?: boolean;
  variant?: 'link' | 'text' | 'gradient';
  weight?: number;
  content: 'large' | 'middle' | 'small';
  lineHeight?: string;
  letterSpacing?: string;
};

export const BaseText: NextPage<Props> = ({
  align,
  children,
  color = 'gray',
  gradient,
  // ex）gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
  lineClamp,
  size,
  span,
  variant = 'text',
  weight = 400,
  content,
  lineHeight = '2',
  letterSpacing,
}) => {
  const [fontSize, setFontSize] = useState<number>();
  const lagerThanXs = useMediaQuery('xs');
  const lagerThanMd = useMediaQuery('md');

  useEffect(() => {
    switch (content) {
      case 'large':
        setFontSize(lagerThanMd ? 32 : lagerThanXs ? 28 : 20);
        break;
      case 'middle':
        setFontSize(lagerThanMd ? 20 : lagerThanXs ? 18 : 16);
        break;
      case 'small':
        setFontSize(lagerThanMd ? 16 : lagerThanXs ? 14 : 12);
        break;
      default:
        setFontSize(18);
    }
  }, [lagerThanMd, lagerThanXs]);

  return (
    <Text
      align={align}
      color={color}
      gradient={gradient}
      lineClamp={lineClamp}
      size={size ? size : fontSize}
      variant={variant}
      weight={weight}
      sx={{ lineHeight: lineHeight, letterSpacing: letterSpacing }}
    >
      {children}
    </Text>
  );
};
