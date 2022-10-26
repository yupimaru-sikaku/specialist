import React from 'react';
import { Layout } from 'src/components/Layout/Layout';
import { MainMenuCarousel } from 'src/components/Main/MainMenuCarousel';

const Charity = () => {
  return (
    <Layout title="グッズ一覧 | スペシャリスト育成支援協会">
      <MainMenuCarousel />
      <div>Charity</div>
    </Layout>
  );
};

export default Charity;
