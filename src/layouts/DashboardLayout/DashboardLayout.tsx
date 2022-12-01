import { FC, useEffect } from 'react';
import type { CustomLayout } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Box, CloseButton, Drawer, MediaQuery } from '@mantine/core';
import Head from 'next/head';

const Header = dynamic(async () => {
  const { Header } = await import('src/layouts/DashboardLayout/Header');
  return Header;
});

const SideNav = dynamic(async () => {
  const { SideNav } = await import('src/layouts/DashboardLayout/SideNav');
  return SideNav;
});

export const DashboardLayout: CustomLayout = (page) => {
  const [opened, handlers] = useDisclosure(false);

  return (
    <AppShell
      padding="md"
      styles={(theme) => ({
        body: { minHeight: '100vh' },
        main: { padding: 0, backgroundColor: theme.colors.gray[0] },
      })}
      navbar={
        <>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <SideNav />
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <DrawerNav opened={opened} handleClose={handlers.close} />
          </MediaQuery>
        </>
      }
    >
      <Header left />
      <Box py="xl" px="md">
        {page}
      </Box>
    </AppShell>
  );
};

const DrawerNav: FC<{ opened: boolean; handleClose: () => void }> = ({
  opened,
  handleClose,
}) => {
  const router = useRouter();

  // SideNav のメニュークリックで Drawer を閉じる処理
  useEffect(() => {
    router.events.on('routeChangeStart', handleClose);
    return () => {
      router.events.off('routeChangeStart', handleClose);
    };
  }, [handleClose, router.events]);

  return (
    <Drawer
      opened={opened}
      onClose={handleClose}
      size="auto"
      withCloseButton={false}
      sx={{ position: 'relative' }}
    >
      <CloseButton
        size="xl"
        radius="xl"
        variant="transparent"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          zIndex: 999,
          top: 8,
          right: -56,
          color: 'white',
          '&:not(:disabled):active': { transform: 'none' },
        }}
      />
      <SideNav />
    </Drawer>
  );
};
