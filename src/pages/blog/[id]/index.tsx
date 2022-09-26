import React from 'react';
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { client } from 'src/libs/microCMS/client';
import { Blog } from 'src/types';
import { SubLayout } from 'src/components/Layout/SubLayout';
import { BlogAsideBar } from 'src/components/Blog/BlogAsideBar';
import { useMediaQuery } from 'src/libs/mantine/useMediaQuery';
import { BlogDetail } from 'src/components/Blog/BlogDetail';
import { Divider } from '@mantine/core';

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  const lagerThanSm = useMediaQuery('sm');

  return (
    <SubLayout title={`${props.title}`}>
      <div className="flex flex-col sm:flex-row ">
        <BlogDetail blog={props} />

        {lagerThanSm ? (
          <div className="p-vw-4" />
        ) : (
          <>
            <div className="p-vw-16" />
            <Divider />
            <div className="p-vw-16" />
          </>
        )}

        <BlogAsideBar />
      </div>
    </SubLayout>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList<Blog>({ endpoint: 'blog' });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }
  const data = await client.getListDetail<Blog>({
    endpoint: 'blog',
    contentId: ctx.params.id,
  });

  return {
    props: data,
  };
};

export default BlogId;
