import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import {
  createStyles,
  Navbar,
  Group,
  UnstyledButton,
  Tooltip,
  MediaQuery,
} from '@mantine/core';
import {
  Home,
  Settings,
  ArrowLeft,
  ArrowRight,
  DeviceAnalytics,
} from 'tabler-icons-react';
import { getPath } from 'src/libs/const';
import { ActiveLink } from 'src/libs/next';
import { IconGift } from '@tabler/icons';
import { IconDatabase } from '@tabler/icons';
import { IconUserPlus } from '@tabler/icons';
import { IconLogin } from '@tabler/icons';
import { IconLogout } from '@tabler/icons';
import { supabase } from 'src/libs/supabase';
import { useRouter } from 'next/router';

const useStyles = createStyles<string, { collapsed?: boolean }>(
  (theme, params, getRef) => {
    const icon: string = getRef('icon');

    return {
      navbar: {
        position: 'sticky',
        top: 0,
        width: params?.collapsed ? 81 : 264,
        transition: params?.collapsed ? 'width 0.1s linear' : 'none',
      },

      header: {
        paddingBottom: theme.spacing.xs,
        marginBottom: theme.spacing.md,
        borderBottom: `1px solid ${theme.colors.gray[2]}`,
      },

      footer: {
        paddingTop: theme.spacing.xs,
        marginTop: theme.spacing.md,
        borderTop: `1px solid ${theme.colors.gray[2]}`,
      },

      logo: {
        ...theme.fn.focusStyles(),
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        columnGap: theme.spacing.sm,
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        color: theme.colors.gray[7],
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        borderRadius: theme.radius.sm,
        fontWeight: 700,
      },

      link: {
        ...theme.fn.focusStyles(),
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        columnGap: theme.spacing.sm,
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        color: theme.colors.gray[7],
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        '&:hover': {
          backgroundColor: theme.colors.gray[0],
          color: theme.black,

          [`& .${icon}`]: {
            color: theme.black,
          },
        },
      },

      linkActive: {
        '&, &:hover': {
          backgroundColor: theme.colors[theme.primaryColor][0],
          color: theme.colors[theme.primaryColor][7],
          [`& .${icon}`]: {
            color: theme.colors[theme.primaryColor][7],
          },
        },
      },

      linkIcon: {
        ref: icon,
        color: theme.colors.gray[6],
      },

      linkLabel: params?.collapsed ? { display: 'none' } : {},
    };
  }
);

export const SideNav: FC<{ className?: string }> = ({ className }) => {
  const router = useRouter();
  const [collapsed, handlers] = useDisclosure(false);
  const { classes, cx } = useStyles({ collapsed });

  const ITEMS = [
    { href: getPath('CHARITY_CREATE'), label: '商品登録', Icon: IconGift },
    { href: getPath('CHARITY_STOCK'), label: '在庫管理', Icon: IconDatabase },
    {
      href: getPath('ADMIN_REGISTER'),
      label: 'ユーザー登録',
      Icon: IconUserPlus,
    },
    {
      href: getPath('ADMIN_LOGIN'),
      label: 'ユーザーログイン',
      Icon: IconLogin,
    },
    {
      href: '',
      label: 'ログアウト',
      Icon: IconLogout,
      onClick: () => {
        supabase.auth.signOut();
        // router.push(getPath('CHARITY_CREATE'));
      },
    },
  ];

  return (
    <Navbar p="md" className={cx(classes.navbar, className)}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Link href={getPath('INDEX')}>
            <a className={classes.logo}>
              <DeviceAnalytics />
              <span className={classes.linkLabel}>管理者ページ</span>
            </a>
          </Link>
        </Group>
        {ITEMS.map(({ label, href, Icon, onClick }) => (
          <ActiveLink href={href} passHref key={label}>
            {(isActive) => {
              return (
                <a
                  className={cx(classes.link, {
                    [classes.linkActive]: isActive,
                  })}
                  onClick={onClick}
                >
                  <Icon className={classes.linkIcon} />
                  <span className={classes.linkLabel}>{label}</span>
                </a>
              );
            }}
          </ActiveLink>
        ))}
      </Navbar.Section>

      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Navbar.Section className={classes.footer}>
          <UnstyledButton className={classes.link} onClick={handlers.toggle}>
            {collapsed ? (
              <ArrowRight className={classes.linkIcon} />
            ) : (
              <>
                <ArrowLeft className={classes.linkIcon} />
                <span>折りたたむ</span>
              </>
            )}
          </UnstyledButton>
        </Navbar.Section>
      </MediaQuery>
    </Navbar>
  );
};
