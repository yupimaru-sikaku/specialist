import { MicroCMSListResponse } from 'microcms-js-sdk';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { ComponentProps, useState } from 'react';
import { Blog } from 'src/types';
import { format } from 'date-fns';
import { IconClock } from '@tabler/icons';

type Props = {
  blog: MicroCMSListResponse<Blog>;
};

export const BlogList: NextPage<Props> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Blog>>();

  const contentList = search ? search.contents : props.blog.contents;
  const totalCount = search ? search.totalCount : props.blog.totalCount;

  const handleSearch: ComponentProps<'form'>['onClick'] = async (e) => {
    e.preventDefault();
    const query = e.currentTarget.query.value;
    const data = await fetch('/api/searchBlog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const json: MicroCMSListResponse<Blog> = await data.json();
    setSearch(json);
  };

  const handleReset = () => {
    setSearch(undefined);
  };

  return (
    <main className="w-full text-start sm:w-2/3">
      <h1>ブログ一覧</h1>

      <div className="p-vw-8" />

      <form onSubmit={handleSearch}>
        <input type="text" name="query" />
        <button>検索</button>
        <button onClick={handleReset}>リセット</button>
      </form>

      <p>{`${search ? '検索結果' : '記事の総数'}: ${totalCount}件`}</p>

      <div className="p-vw-8" />

      <ul>
        {contentList.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/blog/${content.id}`}>
                <a className="group flex">
                  <div className="relative w-2/5 overflow-hidden rounded-xl">
                    <Image
                      src={content.eyecatch.url}
                      alt="eyecatch"
                      width={500}
                      height={350}
                      className="transition-all ease-in group-hover:scale-125"
                    />
                  </div>

                  <div className="p-vw-4" />

                  <div className="w-3/5">
                    <p className="font-extrabold">{content.title}</p>
                    <div className="flex text-xs text-gray-500">
                      <p className="flex">
                        <IconClock size={16} />
                        {format(new Date(content.createdAt), 'yyyy年MM月dd日')}
                      </p>
                      <p className="flex">
                        <IconClock size={16} />
                        {format(new Date(content.updatedAt), 'yyyy年MM月dd日')}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
              <div className="p-vw-4" />
            </li>
          );
        })}
        <div className="p-vw-1" />
      </ul>
    </main>
  );
};
