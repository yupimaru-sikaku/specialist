import { NextPage } from 'next';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Navbar } from 'src/components/Layout/Navbar';
import { Footer } from 'src/components/Layout/Footer';

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: NextPage<Props> = ({
  title = 'スペシャリスト協会',
  children,
}) => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
