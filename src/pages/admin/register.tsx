import { Space } from '@mantine/core';
import { CustomNextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { AdminRegisterForm } from 'src/components/Admin';
import { BaseText } from 'src/components/Common/BaseText';
import { useUser } from 'src/hooks/user';
import { DashboardLayout } from 'src/layouts';
import { getPath } from 'src/libs/const';
import { supabase } from 'src/libs/supabase';

const AdminRegister: CustomNextPage = () => {
  const router = useRouter();
  const { session } = useUser();
  session && router.push(getPath('CHARITY_CREATE'));

  return (
    <div>
      <Head>
        <title>ユーザー登録 | スペシャリスト育成支援協会 </title>
      </Head>
      <BaseText content="large">ユーザー登録</BaseText>
      <Space h="xl" />
      <AdminRegisterForm />
    </div>
  );
};

AdminRegister.getLayout = DashboardLayout;

export default AdminRegister;
