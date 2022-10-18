import { Divider } from '@mantine/core';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import { GetStaticProps, NextPage } from 'next';
import { BlogAsideBar } from 'src/components/Blog/BlogAsideBar';
import { BlogList } from 'src/components/Blog/BlogList';
import { SubLayout } from 'src/components/Layout/SubLayout';
import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';
import { client } from 'src/libs/microCMS/client';
import { Blog } from 'src/types';

type Props = MicroCMSListResponse<Blog>;

const Blog: NextPage<Props> = (props) => {
  const lagerThanSm = useMediaQuery('sm');

  return (
    <SubLayout title="ブログ一覧 | スペシャリスト協会">
      <div className="flex flex-col sm:flex-row ">
        <BlogList blog={props} />

        {lagerThanSm ? (
          <div className="p-vw-4" />
        ) : (
          <>
            <div className="p-vw-16" /> <Divider /> <div className="p-vw-16" />
          </>
        )}

        <BlogAsideBar />
      </div>
    </SubLayout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: 'blog' });
  return {
    props: data,
  };
};

export default Blog;
