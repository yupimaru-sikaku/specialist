import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListResponse,
} from 'microcms-js-sdk';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { Blog } from 'src/types';
import { format } from 'date-fns';
import { IconClock } from '@tabler/icons';
import { IconAlarm } from '@tabler/icons';
import { ActionIcon, Input, Loader } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { RegularButton } from 'src/components/Common/RegularButton';
import { useGetBlogListSearchQuery } from 'src/ducks/blog/query';
import { IconZoomReset } from '@tabler/icons';

type Props = {
  blog: Blog & MicroCMSContentId & MicroCMSDate;
};

export const BlogDetail: NextPage<Props> = (props) => {
  const content = props.blog;

  return (
    <main className="w-full text-start sm:w-2/3">
      <h1 className="text-2xl font-extrabold">{content.title}</h1>

      <div className="p-vw-2" />

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

      <div className="p-vw-10" />

      <div dangerouslySetInnerHTML={{ __html: content.content }} />

      {/* <h1>ブログ一覧</h1>

      <div className="p-vw-8" />

      <form className="flex flex-col xs:flex-row">
        <Input
          name="query"
          value={search}
          onChange={handleInput}
          icon={<IconSearch />}
          variant="filled"
          placeholder="気になるワードを入力"
          sx={{ minWidth: '280px' }}
        />
        <div className="p-vw-3" />
        <div className="flex items-center">
          <RegularButton onClick={handleSearch}>検索</RegularButton>
          <div className="p-vw-1" />
          <ActionIcon onClick={handleReset}>
            <IconZoomReset />
          </ActionIcon>
        </div>
      </form>

      <p className="text-gray-700">{`${
        searchList ? '検索結果' : '記事の総数'
      }: ${totalCount}件`}</p>

      <div className="p-vw-8" />

      <ul>
        {isError ? (
          <div>エラーにより情報が取得できませんでした。</div>
        ) : (
          contentList.map((content) => {
            return (
              <li key={content.id}>
                <Link href={`/blog/${content.id}`}>
                  <a className="group flex">
                    <div className="relative w-2/5 overflow-hidden rounded-xl">
                      <Image
                        src={content.eyecatch.url}
                        alt="eyecatch"
                        priority={false}
                        width={500}
                        height={350}
                        className="transition-all ease-in group-hover:scale-125 group-hover:opacity-60"
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
                          {format(
                            new Date(content.createdAt),
                            'yyyy年MM月dd日'
                          )}
                        </p>
                        <p className="ml-1 flex">
                          <IconAlarm size={16} />
                          {format(
                            new Date(content.updatedAt),
                            'yyyy年MM月dd日'
                          )}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
                <div className="p-vw-4" />
              </li>
            );
          })
        )}
        <div className="p-vw-1" />
      </ul> */}
    </main>
  );
};
