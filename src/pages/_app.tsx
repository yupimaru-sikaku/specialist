import React from 'react';
import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { store } from 'src/ducks/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Verdana, sans-serif',
        }}
      >
        <NotificationsProvider limit={3}>
            <Component key={router.asPath} {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </Provider>
  );
}

export default MyApp;
