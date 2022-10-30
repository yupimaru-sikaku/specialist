import { Badge } from '@mantine/core';
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { NextPage } from 'next';
import React from 'react';
import { Blog } from 'src/types';
import { isOneMonthAgo } from 'src/utils';

type Props = Blog & MicroCMSContentId & MicroCMSDate;

export const NewsBadge = ({ content }: { content: Props }) => {
  return (
    <div className="flex flex-wrap gap-1">
      {!isOneMonthAgo(content.createdAt) && (
        <Badge color="yellow" size="xs" radius="xs" variant="filled">
          新着
        </Badge>
      )}
      {content.category.indexOf('MEDIA') !== -1 && (
        <Badge color="green" size="xs" radius="xs" variant="filled">
          MEDIA
        </Badge>
      )}
      {content.category.indexOf('EVENT') !== -1 && (
        <Badge color="cyan" size="xs" radius="xs" variant="filled">
          EVENT
        </Badge>
      )}
      {content.category.indexOf('GOODS') !== -1 && (
        <Badge color="blue" size="xs" radius="xs" variant="filled">
          GOODS
        </Badge>
      )}
      {content.category.indexOf('TICKET') !== -1 && (
        <Badge color="indigo" size="xs" radius="xs" variant="filled">
          TICKET
        </Badge>
      )}
      {content.category.indexOf('OTHER') !== -1 && (
        <Badge color="gray" size="xs" radius="xs" variant="filled">
          OTHER
        </Badge>
      )}
      {content.category.indexOf('YOUTUBE') !== -1 && (
        <Badge color="red" size="xs" radius="xs" variant="filled">
          YOUTUBE
        </Badge>
      )}
    </div>
  );
};
