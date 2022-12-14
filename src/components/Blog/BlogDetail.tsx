import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { NextPage } from 'next';
import React from 'react';
import { Blog } from 'src/types';
import { format } from 'date-fns';
import { IconClock } from '@tabler/icons';
import { IconAlarm } from '@tabler/icons';
import { BaseText } from 'src/components/Common/BaseText';
import { Divider } from '@mantine/core';
// import { BrandLogoList } from '../Common/BrandLogoList';

type Props = {
  blog: Blog & MicroCMSContentId & MicroCMSDate;
};

export const BlogDetail: NextPage<Props> = (props) => {
  const content = props.blog;

  return (
    <main className="w-full p-0 text-start sm:w-2/3 sm:rounded-xl sm:border sm:p-10 sm:shadow-lg">
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

      <div className="p-vw-4" />
      <Divider />
      {/* <BrandLogoList /> */}
      <Divider />
      <div className="p-vw-20" />

      <BaseText content="middle" color="dark">
        <div dangerouslySetInnerHTML={{ __html: content.content }} />
      </BaseText>
    </main>
  );
};
