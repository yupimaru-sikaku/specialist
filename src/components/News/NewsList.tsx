import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { Blog } from 'src/types';
import { BaseText } from 'src/components/Common/BaseText';
import { formatDate, scrollTop } from 'src/utils';
import {
  BackgroundImage,
  Divider,
  LoadingOverlay,
  Pagination,
} from '@mantine/core';
import { NewsBadge } from 'src/components/News/NewsBadge';
import { usePagination } from '@mantine/hooks';

type Props = {
  blog: (Blog & MicroCMSContentId & MicroCMSDate)[];
  totalCount: number;
};

export const NewsList: NextPage<Props> = ({ blog, totalCount }) => {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState([]);
  const [activePage, setPage] = useState(1);

  const mediaCountPerPage = 3;
  const totalPage = Math.ceil(totalCount / mediaCountPerPage);

  const indexOfLastMedia = activePage * mediaCountPerPage;
  const indexOfFirstMedia = indexOfLastMedia - mediaCountPerPage;
  const currentMediaList = blog.slice(indexOfFirstMedia, indexOfLastMedia);

  const pagination = usePagination({
    total: totalPage,
    initialPage: 1,
    onChange(page) {
      setVisible(true);
      scrollTop();
      setPage(page);
      setVisible(false);
    },
  });

  if (visible) {
    return <LoadingOverlay visible={visible} overlayBlur={2} />;
  }

  return (
    <main>
      <BackgroundImage src="/specialist_hero_3.jpg">
        <div className="mr-3 flex h-28 items-center justify-end">
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
                      <NewsBadge content={content} />
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
          onChange={pagination.setPage}
        />
        <div className="p-vw-10" />
      </article>
    </main>
  );
};
