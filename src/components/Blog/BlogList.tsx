import { MicroCMSListResponse } from 'microcms-js-sdk';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { ComponentProps, useCallback, useState } from 'react';
import { Blog } from 'src/types';
import { format } from 'date-fns';
import { IconClock } from '@tabler/icons';
import { IconAlarm } from '@tabler/icons';
import { Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { RegularButton } from 'src/components/Common/RegularButton';

type Props = {
  blog: MicroCMSListResponse<Blog>;
};

export const BlogList: NextPage<Props> = (props) => {
  const [search, setSearch] = useState<string>('');
  const [searchList, setSearchList] = useState<MicroCMSListResponse<Blog>>();

  const contentList = searchList ? searchList.contents : props.blog.contents;
  const totalCount = searchList ? searchList.totalCount : props.blog.totalCount;

  const handleSearch = async () => {
    const query = search;
    const data = await fetch('/api/searchBlog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const json: MicroCMSListResponse<Blog> = await data.json();
    setSearchList(json);
  };

  const handleInput = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [search]
  );

  const handleReset = () => {
    setSearch('');
    setSearchList(undefined);
  };

  return (
    <main className="w-full text-start sm:w-2/3">
      <h1>ブログ一覧</h1>

      <div className="p-vw-8" />

      <form className="flex flex-col xs:flex-row">
        <Input
          name="query"
          value={search}
          onChange={handleInput}
          icon={<IconSearch />}
          variant="filled"
          placeholder="気になるワードを入力"
          sx={{ minWidth: '320px' }}
        />
        <div className="p-vw-3" />
        <div className="flex ">
          <RegularButton onClick={handleSearch}>検索</RegularButton>
          <div className="p-vw-1" />
          <RegularButton color="dark" variant="outline" onClick={handleReset}>
            リセット
          </RegularButton>
        </div>
      </form>

      <p className="text-gray-700">{`${
        searchList ? '検索結果' : '記事の総数'
      }: ${totalCount}件`}</p>

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
                    <p className="sm:text-md text-sm font-extrabold">
                      {content.title}
                    </p>
                    <div className="flex text-xs text-gray-500">
                      <p className="flex">
                        <IconClock size={16} />
                        {format(new Date(content.createdAt), 'yyyy年MM月dd日')}
                      </p>
                      <p className="ml-1 flex">
                        <IconAlarm size={16} />
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
