import { GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
import { Layout } from 'src/components/Layout/Layout';
import { NewsList } from 'src/components/News/NewsList';
import { Blog } from 'src/types';
import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListResponse,
} from 'microcms-js-sdk';
import { client } from 'src/libs/microCMS/client';
import { MainMenuCarousel } from 'src/components/Main/MainMenuCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate, isOneMonthAgo } from 'src/utils';
import { BaseText } from 'src/components/Common/BaseText';
import { Badge, Divider, Pagination } from '@mantine/core';

type Props = {
  blog: (Blog & MicroCMSContentId & MicroCMSDate)[];
  totalCount: number;
};

const News: NextPage<Props> = ({ blog, totalCount }) => {
  return (
    <Layout title="ニュース一覧 | スペシャリスト育成支援協会">
      <MainMenuCarousel />
      <NewsList blog={blog} totalCount={totalCount} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({
    endpoint: 'blog',
  });
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};

export default News;
