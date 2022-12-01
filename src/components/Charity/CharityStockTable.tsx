import { DataTable } from 'mantine-datatable';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Charity } from 'src/types';
import { convertSupabaseTime } from 'src/utils';

type Props = {
  charityList: Charity[];
};

const PAGE_SIZE = 5;

export const CharityStockTable: NextPage<Props> = ({ charityList }: Props) => {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(charityList.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(charityList.slice(from, to));
  }, [page]);

  return (
    <DataTable
      verticalSpacing="lg"
      striped
      highlightOnHover
      withBorder
      records={records}
      recordsPerPage={PAGE_SIZE}
      totalRecords={charityList.length}
      page={page}
      onPageChange={(p) => setPage(p)}
      columns={[
        {
          accessor: 'stripe_id',
          title: 'StripeID',
          width: 150,
          ellipsis: true,
        },
        { accessor: 'code', title: '商品コード' },
        { accessor: 'name', title: '名前', width: 200, ellipsis: true },
        { accessor: 'genre', title: 'ジャンル' },
        { accessor: 'sales', title: '販売個数' },
        {
          accessor: 'isDisplay',
          title: 'ディスプレイ表示',
          render: ({ isDisplay }) => (isDisplay ? 'ON' : 'OFF'),
        },
        {
          accessor: 'isReserved',
          title: '予約商品か',
          render: ({ isReserved }) => (isReserved ? 'ON' : 'OFF'),
        },
        {
          accessor: 'createdAt',
          title: '作成日時',
          render: ({ createdAt }) =>
            createdAt ? convertSupabaseTime(createdAt) : '',
        },
        {
          accessor: 'updatedAt',
          title: '更新日時',
          render: ({ updatedAt }) =>
            updatedAt ? convertSupabaseTime(updatedAt) : '',
        },
      ]}
    />
  );
};
