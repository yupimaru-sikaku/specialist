import { MicroCMSListResponse } from 'microcms-js-sdk';
import { NextPage } from 'next';
import React, { ComponentProps, useEffect, useState } from 'react';
import { Blog } from 'src/types';
import { SegmentedControl } from '@mantine/core';
import { format } from 'date-fns';
import Link from 'next/link';
import { IconClock } from '@tabler/icons';
import Image from 'next/image';

type Props = MicroCMSListResponse<Blog>;

export const BlogAsideBar: NextPage = () => {
  const [blogList, setBlogList] = useState<Props>();
  const toggleBlog = async (blogContent: 'popular' | 'latest') => {
    const data = await fetch('/api/toggleBlog', {
      // 本来がGETだがBodyを渡したいのでPUT
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blogContent }),
    });
    const json = await data.json();
    setBlogList(json);
  };

  useEffect(() => {
    toggleBlog('popular');
  }, []);

  return (
    <aside className="w-full sm:block sm:w-1/3">
      <nav>
        <SegmentedControl
          id="article"
          radius="md"
          color="yellow"
          aria-required
          onChange={(e) => toggleBlog(e)}
          classNames={{
            root: 'bg-transparent rounded',
          }}
          data={[
            { label: '人気の記事', value: 'popular' },
            { label: '最新記事', value: 'latest' },
          ]}
        />
      </nav>

      <div className="p-vw-4" />

      <ul>
        {blogList?.contents.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/blog/${content.id}`}>
                <a className="flex-start group flex">
                  <div className="relative w-2/5 overflow-hidden rounded-xl">
                    <Image
                      src={content.eyecatch.url}
                      alt="eyecatch"
                      width={500}
                      height={350}
                      className="transition-all ease-in group-hover:scale-125"
                    />
                  </div>

                  <div className="p-vw-2" />

                  <p className="w-3/5 text-start text-md sm:text-xs font-extrabold md:text-sm">
                    {content.title}
                  </p>
                </a>
              </Link>

              <div className="p-vw-4" />
            </li>
          );
        })}
        <div className="p-vw-1" />
      </ul>
    </aside>
  );
};
