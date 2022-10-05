import { MicroCMSListResponse } from 'microcms-js-sdk';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Blog } from 'src/types';
import { Loader, SegmentedControl } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { BaseText } from '../Common/BaseText';

type Props = MicroCMSListResponse<Blog>;

export const BlogAsideBar: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [blogList, setBlogList] = useState<Props>();
  const toggleBlog = async (blogContent: string | 'popular' | 'latest') => {
    setIsLoading(true);
    const data = await fetch('/api/toggleBlog', {
      // 本来がGETだがBodyを渡したいのでPUT
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blogContent }),
    });
    const json = await data.json();
    setBlogList(json);
    setIsLoading(false);
  };

  useEffect(() => {
    toggleBlog('popular');
  }, []);

  return (
    <aside className="w-full sm:block sm:w-1/3">
      <SegmentedControl
        id="article"
        radius="md"
        color="yellow"
        aria-required
        fullWidth
        size="xs"
        disabled={isLoading}
        onChange={(e) => toggleBlog(e)}
        data={[
          { label: '人気の記事', value: 'popular' },
          { label: '最新記事', value: 'latest' },
        ]}
      />

      <div className="p-vw-10" />

      {isLoading ? (
        <Loader sx={{ margin: 'auto' }} />
      ) : (
        <ul>
          {blogList?.contents.map((content) => {
            return (
              <li key={content.id}>
                <Link href={`/blog/${content.id}`} scroll={false}>
                  <a
                    className="group grid"
                    style={{ gridTemplateColumns: '40% 1fr' }}
                  >
                    <div className="flex items-center overflow-hidden rounded-xl">
                      <Image
                        src={content.eyecatch.url}
                        alt="eyecatch"
                        width={500}
                        height={350}
                        className="rounded-xl transition-all ease-in group-hover:scale-125 group-hover:opacity-60"
                      />
                    </div>
                    <div className="ml-4">
                      <BaseText content="small" color="dark" lineClamp={3}>
                        {content.title}
                      </BaseText>
                    </div>
                  </a>
                </Link>
                <div className="p-vw-8" />
              </li>
            );
          })}
        </ul>
      )}
    </aside>
  );
};
