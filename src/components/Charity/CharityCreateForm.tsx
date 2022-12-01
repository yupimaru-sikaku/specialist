import {
  ActionIcon,
  Button,
  CheckIcon,
  FileInput,
  SegmentedControl,
  Space,
  Switch,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useFocusTrap } from '@mantine/hooks';
import React, { useState } from 'react';
import { FormTextArea, FormTextInput } from 'src/components/Common';
import { Charity } from 'src/types';
import { IconSquarePlus } from '@tabler/icons';
import { IconTrash } from '@tabler/icons';
import { IconPhoto } from '@tabler/icons';
import { getPath } from 'src/libs/const';
import { showNotification } from '@mantine/notifications';
import { useRouter } from 'next/router';
import { TAX } from 'src/utils';
import { initialState } from 'src/ducks/charity/slice';
import {
  useCreateCharityMutation,
  useGetCharityByCodeQuery,
} from 'src/ducks/charity/query';
import { useCreateCharityDetailMutation } from 'src/ducks/charityDetail/query';
import {
  useCreateCharityImageMutation,
  useUploadCharityImageMutation,
} from 'src/ducks/charityImage/query';
import { supabase } from 'src/libs/supabase';

export const CharityCreateForm = () => {
  const focusTrapRef = useFocusTrap();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [createCharity] = useCreateCharityMutation();
  const [createCharityDetail] = useCreateCharityDetailMutation();
  const [createCharityImage] = useCreateCharityImageMutation();
  const [uploadCharityImage] = useUploadCharityImageMutation();

  const form = useForm<Charity>({
    initialValues: initialState,
  });

  const { data: charityData } = useGetCharityByCodeQuery(form.values.code);

  const handleSubmit = async (charity: Charity): Promise<void> => {
    setIsLoading(true);
    try {
      // 商品コードが既存か確認
      if (charityData?.length) {
        throw new Error('商品コードが既に存在しています。');
      }
      // Stripeに登録
      const { product: stripeCreateCharity } = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/stripe/addCharity`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: form.values.name,
            description: form.values.description,
            price: Math.floor(form.values.price * TAX),
          }),
        }
      )
        .then((response) => response.json())
        .catch(() => {
          throw new Error('stripeへの登録に失敗しました。');
        });

      // charityテーブルに登録
      form.values.stripeId = stripeCreateCharity.id;
      await createCharity(form.values)
        .unwrap()
        .catch(() => {
          throw new Error('Charityテーブルの作成に失敗しました。');
        });

      // charityDetailテーブルに登録
      charity.detailList.map(async (detail) => {
        const createCharityDetailParams = {
          charityCode: form.values.code,
          color: detail.color,
          size: detail.size,
          stock: detail.stock,
          sales: 0,
        };
        await createCharityDetail(createCharityDetailParams)
          .unwrap()
          .catch(() => {
            throw new Error('CharityDetailテーブルの作成に失敗しました。');
          });
      });

      // charityストレージに登録
      // charityImageテーブルに登録
      charity.imageList.map(async (image) => {
        const imagePath = `${Math.random()}.${image.name}`;
        const uploadCharityImageParams = {
          imagePath: imagePath,
          imageFile: image,
        };
        await uploadCharityImage(uploadCharityImageParams)
          .unwrap()
          .catch(() => {
            throw new Error('Charityストレージの作成に失敗しました。');
          });
        const createCharityImageParams = {
          charityCode: form.values.code,
          url: imagePath,
        };
        await createCharityImage(createCharityImageParams)
          .unwrap()
          .catch((error) => {
            console.log(error);
            throw new Error('CharityImageテーブルの作成に失敗しました。');
          });
      });
      router.push(getPath('CHARITY_STOCK'));
      showNotification({
        title: '登録しました',
        message: '',
        icon: (
          <ActionIcon size="xs">
            <CheckIcon color="white" />
          </ActionIcon>
        ),
      });
    } catch (err) {
      alert(err);
    }
    setIsLoading(false);
  };

  const detailList = form.values.detailList.map((detail, index) => (
    <div className="flex items-end gap-3" key={index}>
      <FormTextInput
        idText="color"
        label="色"
        description="一色の場合は「1カラー」と記載してください"
        required={index === 0 ? true : false}
        form={form}
        formValue={`detailList.${index}.color`}
      />
      <FormTextInput
        idText="size"
        label="サイズ"
        description={`S, M, Lや23.0, 23.5など。一種類の場合は「1サイズ」と記載してください`}
        required={index === 0 ? true : false}
        form={form}
        formValue={`detailList.${index}.size`}
      />
      <FormTextInput
        idText="stock"
        label="在庫"
        description="在庫数を入力してください"
        required={index === 0 ? true : false}
        form={form}
        formValue={`detailList.${index}.stock`}
      />

      {index !== 0 && (
        <ActionIcon onClick={() => form.removeListItem('detailList', index)}>
          <IconTrash />
        </ActionIcon>
      )}
    </div>
  ));
  const imageList = form.values.imageList.map((image, index) => (
    <div className="flex items-end gap-3" key={index}>
      <FileInput
        placeholder="ファイルを添付"
        label={`画像${index + 1}枚目`}
        description="商品の画像を添付してください"
        variant="filled"
        required={index === 0 ? true : false}
        withAsterisk={index === 0 ? true : false}
        icon={<IconPhoto size={14} />}
        {...form.getInputProps(`imageList.${index}`)}
      />

      {index !== 0 && (
        <ActionIcon onClick={() => form.removeListItem('imageList', index)}>
          <IconTrash />
        </ActionIcon>
      )}
    </div>
  ));

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} ref={focusTrapRef}>
      <FormTextInput
        idText="code"
        label="商品コード"
        description="一度設定すると変更不可。他と重複しない文字列。"
        required={true}
        form={form}
        formValue="code"
      />
      <Space h="lg" />
      <FormTextInput
        idText="name"
        label="名前"
        description=""
        required={true}
        form={form}
        formValue="name"
      />
      <Space h="lg" />
      <FormTextInput
        idText="price"
        label="価格"
        description="税抜価格で記載"
        required={true}
        form={form}
        formValue="price"
      />
      <Space h="lg" />
      <FormTextArea
        idText="description"
        label="説明"
        autosize={true}
        minRows={5}
        required={true}
        form={form}
        formValue="description"
        variant="filled"
      />
      <Space h="lg" />
      <p className="text-sm">
        ジャンル<span className="text-red-400"> *</span>
      </p>
      <SegmentedControl
        id="genre"
        color="blue"
        aria-required
        classNames={{
          root: '',
        }}
        data={[
          { label: 'アパレル', value: 'アパレル' },
          { label: 'タオル', value: 'タオル' },
          { label: 'アクセサリー', value: 'アクセサリー' },
          { label: 'その他', value: 'その他' },
        ]}
        {...form.getInputProps('genre')}
      />
      <Space h="lg" />
      <FormTextInput
        idText="link"
        label="説明リンク"
        description="別のページで商品説明したい場合は入力"
        required={false}
        form={form}
        formValue="link"
      />

      <Space h="lg" />

      {detailList.length && detailList}

      <Space h="lg" />

      <ActionIcon
        onClick={() =>
          form.insertListItem('detailList', { color: '', size: '', stock: 0 })
        }
      >
        <IconSquarePlus />
      </ActionIcon>

      <Space h="lg" />

      <Switch
        label="WEB上に表示する"
        description="ONにすると商品がWEB上に表示されます"
        size="md"
        onLabel="ON"
        offLabel="OFF"
        {...form.getInputProps('isDisplay')}
      />

      <Space h="lg" />

      <Switch
        label="予約商品にするか"
        description="ONにすると予約商品としてWEB上に表示されます"
        size="md"
        onLabel="ON"
        offLabel="OFF"
        {...form.getInputProps('isReserved')}
      />

      <Space h="lg" />

      {imageList}

      <Space h="lg" />

      <ActionIcon onClick={() => form.insertListItem('imageList', [])}>
        <IconSquarePlus />
      </ActionIcon>

      <Space h="lg" />

      <Button type="submit" loading={isLoading}>
        登録する
      </Button>
    </form>
  );
};
