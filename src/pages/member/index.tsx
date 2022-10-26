import React from 'react';
import { Layout } from 'src/components/Layout/Layout';
import { MainMenuCarousel } from 'src/components/Main/MainMenuCarousel';
import { MemberList } from 'src/components/Member/MemberList';

const Member = () => {
  return (
    <Layout title="メンバー紹介 | スペシャリスト育成支援協会">
      <MainMenuCarousel />
      <MemberList />
    </Layout>
  );
};

export default Member;
