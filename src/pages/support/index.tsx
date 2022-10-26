import React from 'react';
import { Layout } from 'src/components/Layout/Layout';
import { MainMenuCarousel } from 'src/components/Main/MainMenuCarousel';
import { SupportList } from 'src/components/Support/SupportList';

const Support = () => {
  return (
    <Layout title="スポンサー | スペシャリスト育成支援協会">
      <MainMenuCarousel />
      <SupportList />
    </Layout>
  );
};

export default Support;
