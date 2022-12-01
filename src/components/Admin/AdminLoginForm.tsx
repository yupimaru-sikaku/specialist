import { useForm } from '@mantine/form';
import React, { useEffect, useState } from 'react';
import {
  ActionIcon,
  Button,
  CheckIcon,
  Loader,
  PasswordInput,
  Space,
} from '@mantine/core';
import { IconLock } from '@tabler/icons';
import { useRouter } from 'next/router';
import { showNotification } from '@mantine/notifications';
import Link from 'next/link';
import { useFocusTrap } from '@mantine/hooks';
import { useAppDispatch } from 'src/ducks/store';
import { Admim } from 'src/types';
import { supabase } from 'src/libs/supabase';
import { FormPasswordInput, FormTextInput } from 'src/components/Common';
import { getPath } from 'src/libs/const';

type AdminLogin = Omit<Admim, 'password_confirm'>;

export const AdminLoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const focusTrapRef = useFocusTrap();

  const form = useForm<AdminLogin>({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: form.values.email,
      password: form.values.password,
    });

    if (error) {
      alert('Eメールアドレスかパスワードが間違っています');
      setIsLoading(false);
      return;
    }

    router.push(getPath('CHARITY_CREATE'));
    showNotification({
      title: 'ログインしました',
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

      <Button type="submit" loading={isLoading}>
        ログイン
      </Button>

      <Space h="xl" />

      <Link href="/admin/register">
        <a className="block hover:text-gray-500">登録はこちら</a>
      </Link>

      <Space h="xl" />

      <Link href="/admin/send-email">
        <a className="block hover:text-gray-500">
          パスワードを忘れた方はこちら
        </a>
      </Link>
    </form>
  );
};
