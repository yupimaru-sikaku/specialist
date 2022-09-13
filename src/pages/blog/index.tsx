import { MicroCMSListResponse } from 'microcms-js-sdk';
import { GetStaticProps, NextPage } from 'next';
import { BlogAsideBar } from 'src/components/Blog/BlogAsideBar';
import { BlogList } from 'src/components/Blog/BlogList';
import { Layout } from 'src/components/Layout/Layout';
import { client } from 'src/libs/microCMS/client';
import { Blog } from 'src/types';

type Props = MicroCMSListResponse<Blog>;

const Blog: NextPage<Props> = (props) => {
  return (
    <Layout title="ブログ一覧 | スペシャリスト協会">
      <div className="text-center">
        <h1>SpecialBlog</h1>

        <div className="p-vw-8" />

        <div className="flex flex-col sm:flex-row ">
          <BlogList blog={props} />
          <div className="p-vw-4" />
          <BlogAsideBar />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: 'blog' });
  return {
    props: data,
  };
};

export default Blog;
