import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { NextPage } from 'next';
import React from 'react';
import { Blog } from 'src/types';
import { format } from 'date-fns';
import { IconClock } from '@tabler/icons';
import { IconAlarm } from '@tabler/icons';
import { BaseText } from 'src/components/Common/BaseText';

type Props = {
  blog: Blog & MicroCMSContentId & MicroCMSDate;
};

export const BlogDetail: NextPage<Props> = (props) => {
  const content = props.blog;

  return (
    <main className="w-full text-start sm:w-2/3">
      <h1 className="text-2xl font-extrabold">
        <BaseText content="large" color="dark">
          {content.title}
        </BaseText>
      </h1>

      <div className="p-vw-2" />

      <time
        className="grid items-center"
        style={{ gridTemplateColumns: '20px 1fr 20px 1fr' }}
      >
        <IconClock size={14} />
        <BaseText content="small">
          {format(new Date(content.createdAt), 'yyyy年MM月dd日')}
        </BaseText>
        <IconAlarm size={16} />
        <BaseText content="small">
          {format(new Date(content.updatedAt), 'yyyy年MM月dd日')}
        </BaseText>
      </time>

      <div className="p-vw-10" />

      <div dangerouslySetInnerHTML={{ __html: content.content }} />
    </main>
  );
};
