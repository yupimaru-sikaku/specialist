import { NextPage } from 'next';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Navbar } from 'src/components/Layout/Navbar';
import { Footer } from 'src/components/Layout/Footer';
import { MainMenuCarousel } from 'src/components/Main/MainMenuCarousel';
import { MainImageCarousel } from 'src/components//Main/MainImageCarousel';

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

// import { NextPage } from 'next';
// import Head from 'next/head';
// import React, { ReactNode } from 'react';
// import { Navbar } from 'src/components/Layout/Navbar';
// import { Footer } from 'src/components/Layout/Footer';

// type Props = {
//   title: string;
//   children: ReactNode;
// };

// export const Layout: NextPage<Props> = ({
//   title = 'スペシャリスト協会',
//   children,
// }) => {
//   return (
//     <div className="flex flex-col">
//       <Head>
//         <title>{title}</title>
//       </Head>
//       <Navbar />
//       <main className="my-12 flex-grow px-5 sm:px-10 md:my-20 md:px-20">
//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// };
