import { Space } from '@mantine/core';
import { CustomNextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { CharityStockTable } from 'src/components/Charity';
import { BaseText } from 'src/components/Common/BaseText';
import { DashboardLayout } from 'src/layouts';
import { supabase } from 'src/libs/supabase';
import { Charity } from 'src/types';

type Props = {
  charityList: Charity[];
};
const CharityStock: CustomNextPage<Props> = ({ charityList }: Props) => {
  return (
    <div>
      <Head>
        <title>在庫管理 | スペシャリスト育成支援協会 </title>
      </Head>
      <BaseText content="large">在庫管理</BaseText>
      <Space h="xl" />
      <CharityStockTable charityList={charityList} />
    </div>
  );
};

CharityStock.getLayout = DashboardLayout;

export const getStaticProps = async () => {
  const { data: charityList } = await supabase
    .from('charity')
    .select('*')
    .order('updated_at', { ascending: false });
  return {
    props: {
      charityList,
    },
  };
};
export default CharityStock;
