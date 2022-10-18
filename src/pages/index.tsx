import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { Layout } from 'src/components/Layout/Layout';
import { MainMenuCarousel } from 'src/components/Main/MainMenuCarousel';
import { MainImageCarousel } from 'src/components/Main/MainImageCarousel';
import { MainNewsList } from 'src/components/Main/MainNewsList';
import { Blog } from 'src/types';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import { client } from 'src/libs/microCMS/client';
import { MainYouTubeList } from 'src/components/Main/MainYouTubeList';

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  return (
    <Layout title="トップページ | スペシャリスト協会">
      <MainMenuCarousel />
      <MainImageCarousel />
      <MainNewsList blog={props} />
      <MainYouTubeList />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({
    endpoint: 'blog',
    queries: {
      limit: 5,
    },
  });
  return {
    props: data,
  };
};

export default Home;

// import React from 'react';
// import type { NextPage } from 'next';
// import { Layout } from 'src/components/Layout/Layout';
// import { GreetingSecion } from 'src/components/Main/GreetingSecion';
// import { CareerSection } from 'src/components/Main/CareerSection';
// import { DownUpScreenTransition } from 'src/components/Common/DownUpScreenTransition';

// const Home: NextPage = () => {
//   return (
//     <DownUpScreenTransition>
//       <Layout title="トップページ | スペシャリスト協会">
//         <div className="p-vw-32" />

//         <GreetingSecion />

//         <div className="p-vw-32" />

//         <CareerSection />
//       </Layout>
//     </DownUpScreenTransition>
//   );
// };

// export default Home;
