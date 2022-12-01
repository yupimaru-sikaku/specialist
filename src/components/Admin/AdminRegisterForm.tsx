import { ActionIcon, Button, CheckIcon, Space } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useFocusTrap } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { supabase } from 'src/libs/supabase';
import { Admim } from 'src/types';
import { FormPasswordInput, FormTextInput } from 'src/components/Common';
import Link from 'next/link';
import { getPath } from 'src/libs/const';

export const AdminRegisterForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const focusTrapRef = useFocusTrap();

  const form = useForm<Admim>({
    initialValues: {
      email: '',
      password: '',
      password_confirm: '',
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'メールアドレスの形式が合っていません',
      password_confirm: (value, values) =>
        value !== values.password && 'パスワードが一致しません',
    },
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signUp({
      email: form.values.email,
      password: form.values.password,
    });
    if (error) {
      alert('既に存在するEメールアドレスです');
      setIsLoading(false);
      return;
    }
    router.push('/admin/login');
    showNotification({
      title: '登録しました',
      message: '',
      icon: (
        <ActionIcon size="xs">
          <CheckIcon color="white" />
        </ActionIcon>
      ),
    });
    setIsLoading(false);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} ref={focusTrapRef}>
      <FormTextInput
        idText="email"
        label="メールアドレス"
        description="例）specialist@gemail.com"
        required={true}
        form={form}
        formValue="email"
      />

      <Space h="xl" />

      <FormPasswordInput
        idText="password"
        label="パスワード"
        description="半角英数字8文字以上"
        required={true}
        form={form}
        formValue="password"
      />

      <Space h="xl" />

      <FormPasswordInput
        idText="password_confirm"
        label="パスワード（確認用）"
        description="半角英数字8文字以上"
        required={true}
        form={form}
        formValue="password_confirm"
      />

      <Space h="xl" />

      <Button type="submit" loading={isLoading}>
        登録する
      </Button>

      <Space h="xl" />

      <Link href={getPath('ADMIN_LOGIN')}>
        <a className="block hover:text-gray-500">ログインはこちら</a>
      </Link>
    </form>
  );
};
