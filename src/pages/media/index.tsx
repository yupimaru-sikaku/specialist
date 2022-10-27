import React from 'react';
import { Layout } from 'src/components/Layout/Layout';
import { MainMenuCarousel } from 'src/components/Main/MainMenuCarousel';
import { MediaList } from 'src/components/Media/MediaList';

const Media = () => {
  return (
    <Layout title="メディア一覧 | スペシャリスト育成支援協会">
      <MainMenuCarousel />
      <MediaList />
    </Layout>
  );
};

export default Media;
