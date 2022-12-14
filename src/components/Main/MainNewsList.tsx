import { Badge, Divider } from '@mantine/core';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Blog } from 'src/types';
import { formatDate, isOneMonthAgo } from 'src/utils';
import { BaseText } from 'src/components/Common/BaseText';

type Props = {
  blog: MicroCMSListResponse<Blog>;
};

export const MainNewsList: NextPage<Props> = (props) => {
  return (
    <div>
      <h2 className="flex h-14 items-center justify-center bg-navy-900">
        <BaseText content="large" color="white">
          ニュース
        </BaseText>
      </h2>
      <article>
        {props.blog.contents && (
          <ul>
            {props.blog.contents.map((content) => (
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
      </article>
      <Link href="/news">
        <a className="flex h-10 items-center justify-center bg-ash-100">
          <BaseText content="middle">ニュース一覧へ</BaseText>
        </a>
      </Link>
    </div>
  );
};
