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
import { MainSponsorList } from 'src/components/Main/MainSponsorList';
import { MainSupportList } from 'src/components/Main/MainSupportList';
import { MainNoticeList } from 'src/components/Main/MainNoticeList';
import { MainIdeal } from 'src/components/Main/MainIdeal';

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<Props> = (props) => {
  return (
    <Layout title="トップページ | スペシャリスト育成支援協会">
      <MainMenuCarousel />
      <MainImageCarousel />
      <MainIdeal />
      <MainNoticeList />
      <MainNewsList blog={props} />
      <MainYouTubeList />
      <MainSponsorList />
      <MainSupportList />
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
