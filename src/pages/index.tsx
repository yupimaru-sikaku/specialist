import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'src/components/Layout/Layout';
import { GreetingSecion } from 'src/components/Main/GreetingSecion';
import { CareerSection } from 'src/components/Main/CareerSection';

const Home: NextPage = () => {
  return (
    <Layout title="トップページ | スペシャリスト協会">
      <div className="p-vw-32" />

      <GreetingSecion />

      <div className="p-vw-32" />

      <CareerSection />
    </Layout>
  );
};

export default Home;
