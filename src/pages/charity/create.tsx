import { Space } from '@mantine/core';
import type { CustomNextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { CharityCreateForm } from 'src/components/Charity/CharityCreateForm';
import { BaseText } from 'src/components/Common/BaseText';
import { DashboardLayout } from 'src/layouts';

const CharityCreate: CustomNextPage = () => {
  return (
    <div>
      <Head>
        <title>商品登録 | スペシャリスト育成支援協会 </title>
      </Head>
      <BaseText content="large">商品登録</BaseText>
      <Space h="xl" />
      <CharityCreateForm />
    </div>
  );
};

CharityCreate.getLayout = DashboardLayout;

export default CharityCreate;
