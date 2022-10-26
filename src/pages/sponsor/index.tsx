import React from 'react';
import { Layout } from 'src/components/Layout/Layout';
import { MainMenuCarousel } from 'src/components/Main/MainMenuCarousel';
import { SponsorList } from 'src/components/Sponsor/SponsorList';

const Sponsor = () => {
  return (
    <Layout title="スポンサー | スペシャリスト育成支援協会">
      <MainMenuCarousel />
      <SponsorList />
    </Layout>
  );
};

export default Sponsor;
