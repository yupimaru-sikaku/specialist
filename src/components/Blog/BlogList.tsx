import { MicroCMSListResponse } from 'microcms-js-sdk';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { Blog } from 'src/types';
import { format } from 'date-fns';
import { IconClock } from '@tabler/icons';
import { IconAlarm } from '@tabler/icons';
import { ActionIcon, Divider, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { useGetBlogListSearchQuery } from 'src/ducks/blog/query';
import { IconBackspace } from '@tabler/icons';
import { BaseText } from 'src/components/Common/BaseText';
import { BaseButton } from 'src/components/Common/BaseButton';
import { BrandLogoList } from 'src/components/Common/BrandLogoList';

type Props = {
  blog: MicroCMSListResponse<Blog>;
};

export const BlogList: NextPage<Props> = (props) => {
  const [search, setSearch] = useState<string>('');
  const [searchList, setSearchList] = useState<MicroCMSListResponse<Blog>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data, isError } = useGetBlogListSearchQuery(search, {
    skip: search === '',
  });

  const contentList = searchList ? searchList.contents : props.blog.contents;
  const totalCount = isError
    ? 0
    : searchList
    ? searchList.totalCount
    : props.blog.totalCount;

  const handleSearch = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSearchList(data);
    setIsLoading(false);
  };

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [search]
  );

  const handleReset = () => {
    setSearch('');
    setSearchList(undefined);
  };

  return (
    <main className="w-full text-start sm:w-2/3 sm:rounded-xl sm:border sm:p-10 sm:shadow-lg">
      <h1>
        <BaseText content="large" align="center">
          ブログ一覧
        </BaseText>
      </h1>

      <div className="p-vw-8" />

      <div className="flex flex-col xs:flex-row">
        <Input
          name="query"
          value={search}
          onChange={handleInput}
          icon={<IconSearch />}
          variant="filled"
          placeholder="気になるワードを入力"
        />
        <div className="p-vw-4" />
        <div className="flex items-center justify-start">
          <BaseButton onClick={handleSearch} loading={isLoading}>
            検索
          </BaseButton>
          <div className="p-vw-2" />
          <ActionIcon onClick={handleReset}>
            <IconBackspace />
          </ActionIcon>
        </div>
      </div>

      <div className="p-vw-8" />
      <Divider />
      <BrandLogoList />
      <Divider />
      <div className="p-vw-8" />

      <BaseText content="small">
        {`${searchList ? '検索結果' : '記事の総数'}: ${totalCount}件`}
      </BaseText>

      <div className="p-vw-8" />

      <ul>
        {isError ? (
          <div>エラーにより情報が取得できませんでした。</div>
        ) : (
          contentList.map((content) => {
            return (
              <li key={content.id}>
                <Link href={`/blog/${content.id}`} scroll={false}>
                  <a
                    className="group grid items-start"
                    style={{ gridTemplateColumns: '40% 1fr' }}
                  >
                    <div className="flex items-center overflow-hidden rounded-xl">
                      <Image
                        src={content.eyecatch.url}
                        alt="eyecatch"
                        priority={false}
                        width={500}
                        height={350}
                        className="rounded-xl transition-all ease-in group-hover:scale-125 group-hover:opacity-60"
                      />
                    </div>

                    <div className="ml-4">
                      <BaseText content="middle" color="dark" lineClamp={3}>
                        {content.title}
                      </BaseText>
                      <time
                        className="grid items-center"
                        style={{ gridTemplateColumns: '20px 1fr' }}
                      >
                        <IconClock size={14} />
                        <BaseText content="small">
                          {format(
                            new Date(content.createdAt),
                            'yyyy年MM月dd日'
                          )}
                        </BaseText>
                      </time>
                      <time
                        className="grid items-center"
                        style={{ gridTemplateColumns: '20px 1fr' }}
                      >
                        <IconAlarm size={16} />
                        <BaseText content="small">
                          {format(
                            new Date(content.updatedAt),
                            'yyyy年MM月dd日'
                          )}
                        </BaseText>
                      </time>
                    </div>
                  </a>
                </Link>
                <div className="p-vw-16" />
              </li>
            );
          })
        )}
      </ul>
    </main>
  );
};
