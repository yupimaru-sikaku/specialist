import { Space } from '@mantine/core';
import { CustomNextPage } from 'next';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { AdminLoginForm } from 'src/components/Admin';
import { BaseText } from 'src/components/Common/BaseText';
import { useUser } from 'src/hooks/user';
import { DashboardLayout } from 'src/layouts';
import { getPath } from 'src/libs/const';

const AdminLogin: CustomNextPage = () => {
  const router = useRouter();
  const { session } = useUser();
  session && router.push(getPath('CHARITY_CREATE'));

  return (
    <div>
      <Head>
        <title>ログイン画面 | スペシャリスト育成支援協会 </title>
      </Head>
      <BaseText content="large">ログイン</BaseText>
      <Space h="xl" />
      <AdminLoginForm />
    </div>
  );
};

AdminLogin.getLayout = DashboardLayout;

export default AdminLogin;
