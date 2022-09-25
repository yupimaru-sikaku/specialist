import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { NextPage } from 'next';
import React from 'react';
import { Blog } from 'src/types';
import { format } from 'date-fns';
import { IconClock } from '@tabler/icons';
import { IconAlarm } from '@tabler/icons';

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
    </main>
  );
};
