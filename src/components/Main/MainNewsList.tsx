import { Divider } from '@mantine/core';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Blog } from 'src/types';
import { formatDate } from 'src/utils';
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
              <div key={content.id}>
                <Link href={`/blog/${content.id}}`}>
                  <a className="flex h-24">
                    <div className="h-24 w-1/3 overflow-hidden">
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
                      <BaseText content="small" lineClamp={2} color="dark">
                        {content.title}
                      </BaseText>
                    </div>
                  </a>
                </Link>
                <Divider />
              </div>
            ))}
          </ul>
        )}
      </article>
      <Link href="/">
        <a className="flex h-10 items-center justify-center bg-gray-200">
          <BaseText content="middle">ニュース一覧へ</BaseText>
        </a>
      </Link>
    </div>
  );
};
