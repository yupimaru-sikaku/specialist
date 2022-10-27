import React from 'react';
import { Layout } from 'src/components/Layout/Layout';
import { MainMenuCarousel } from 'src/components/Main/MainMenuCarousel';
import { CharityList } from 'src/components/Charity/CharityList';

const Charity = () => {
  return (
    <Layout title="グッズ一覧 | スペシャリスト育成支援協会">
      <MainMenuCarousel />
      <CharityList/>
    </Layout>
  );
};

export default Charity;
