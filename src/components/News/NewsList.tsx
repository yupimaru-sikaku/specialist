import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListResponse,
} from 'microcms-js-sdk';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Blog, blogCategoryArr } from 'src/types';
import { BaseText } from 'src/components/Common/BaseText';
import { formatDate, isOneMonthAgo } from 'src/utils';
import {
  BackgroundImage,
  Badge,
  Divider,
  Pagination,
  Text,
} from '@mantine/core';

type Props = {
  blog: (Blog & MicroCMSContentId & MicroCMSDate)[];
  totalCount: number;
};

export const NewsList: NextPage<Props> = ({ blog, totalCount }) => {
  const [category, setCategory] = useState(blogCategoryArr);
  const [activePage, setPage] = useState(1);

  const mediaCountPerPage = 3;
  const totalPage = Math.ceil(totalCount / mediaCountPerPage);

  const indexOfLastMedia = activePage * mediaCountPerPage;
  const indexOfFirstMedia = indexOfLastMedia - mediaCountPerPage;
  const currentMediaList = blog.slice(indexOfFirstMedia, indexOfLastMedia);

  return (
    <main>
      <BackgroundImage src="/specialist_hero_3.jpg">
        <div className='h-28 flex items-center justify-end mr-3'>
          <BaseText content="large" color="white" weight={900}>
            NEWS
          </BaseText>
        </div>
      </BackgroundImage>
      <ul className="flex flex-wrap gap-3 bg-navy-900 p-3">
        {category.map((content) => (
          <li
            key={content}
            className="cursor-pointer border-b text-xs text-white"
          >
            {content}
          </li>
        ))}
      </ul>
      <article>
        {blog && (
          <ul>
            {currentMediaList.map((content) => (
              <li key={content.id}>
                <Link
                  href={content.link ? content.link : `/blog/${content.id}}`}
                >
                  <a className="h-30 flex">
                    <div className="h-30 w-1/3 overflow-hidden">
                      <Image
                        src={content.eyecatch.url}
                        width={100}
                        height={100}
                        quality={1}
                        layout="responsive"
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-3 flex w-2/3 flex-col">
                      <time>
                        <BaseText content="small">
                          {formatDate(content.createdAt)}
                        </BaseText>
                      </time>
                      <div className="flex flex-wrap gap-1">
                        {!isOneMonthAgo(content.createdAt) && (
                          <Badge
                            color="yellow"
                            size="xs"
                            radius="xs"
                            variant="filled"
                          >
                            新着
                          </Badge>
                        )}
                        {content.category.indexOf('MEDIA') !== -1 && (
                          <Badge
                            color="green"
                            size="xs"
                            radius="xs"
                            variant="filled"
                          >
                            MEDIA
                          </Badge>
                        )}
                        {content.category.indexOf('EVENT') !== -1 && (
                          <Badge
                            color="cyan"
                            size="xs"
                            radius="xs"
                            variant="filled"
                          >
                            EVENT
                          </Badge>
                        )}
                        {content.category.indexOf('GOODS') !== -1 && (
                          <Badge
                            color="blue"
                            size="xs"
                            radius="xs"
                            variant="filled"
                          >
                            GOODS
                          </Badge>
                        )}
                        {content.category.indexOf('TICKET') !== -1 && (
                          <Badge
                            color="indigo"
                            size="xs"
                            radius="xs"
                            variant="filled"
                          >
                            TICKET
                          </Badge>
                        )}
                        {content.category.indexOf('OTHER') !== -1 && (
                          <Badge
                            color="gray"
                            size="xs"
                            radius="xs"
                            variant="filled"
                          >
                            OTHER
                          </Badge>
                        )}
                        {content.category.indexOf('YOUTUBE') !== -1 && (
                          <Badge
                            color="red"
                            size="xs"
                            radius="xs"
                            variant="filled"
                          >
                            YOUTUBE
                          </Badge>
                        )}
                      </div>
                      <BaseText content="small" lineClamp={2} color="dark">
                        {content.title}
                      </BaseText>
                    </div>
                  </a>
                </Link>
                <Divider />
              </li>
            ))}
          </ul>
        )}
        <div className="p-vw-10" />
        <Pagination
          position="center"
          page={activePage}
          initialPage={1}
          total={totalPage}
          onChange={setPage}
        />
        <div className="p-vw-10" />
      </article>
    </main>
  );
};
