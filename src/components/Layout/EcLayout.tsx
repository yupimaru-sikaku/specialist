import { NextPage } from 'next';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Footer } from 'src/components/Layout/Footer';
import { EcNavbar } from 'src/components/Layout/EcNavbar';

type Props = {
  title: string;
  children: ReactNode;
};

export const EcLayout: NextPage<Props> = ({
  title = 'スペシャリスト育成支援協会',
  children,
}) => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <EcNavbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
