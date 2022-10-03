import { NextPage } from 'next';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import { SubNavbar } from 'src/components/Layout/SubNavbar';
import { Footer } from 'src/components/Layout/Footer';

type Props = {
  title: string;
  children: ReactNode;
};

export const SubLayout: NextPage<Props> = ({
  title = 'スペシャリスト協会',
  children,
}) => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <SubNavbar />
      <main className="my-12 flex-grow px-5 sm:px-10 md:my-20 md:px-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
