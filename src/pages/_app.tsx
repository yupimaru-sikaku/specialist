import type { CustomAppPage } from 'next/app';
import React from 'react';
import 'src/styles/globals.css';
import 'tailwindcss/tailwind.css';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { store } from 'src/ducks/store';
import { Provider } from 'react-redux';
import { CartProvider } from 'use-shopping-cart';

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });
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
          <CartProvider
            mode="payment"
            cartMode="client-only"
            stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_API_KEY}
            currency="JPY"
            successUrl={`${process.env.NEXT_PUBLIC_BASEURL}/success`}
            cancelUrl={`${process.env.NEXT_PUBLIC_BASEURL}`}
          >
            {getLayout(<Component {...pageProps} />)}
          </CartProvider>
        </NotificationsProvider>
      </MantineProvider>
    </Provider>
  );
};

export default App;
