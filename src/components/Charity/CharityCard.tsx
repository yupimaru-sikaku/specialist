import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useCallback, useEffect } from 'react';
import { supabase } from 'src/libs/supabase';
import { Charity } from 'src/types';
import { BaseText } from '../Common/BaseText';
import { CharityCardImage } from './CharityCardImage';

type Props = {
  charity: Charity;
};

export const CharityCard: FC<Props> = ({ charity }) => {
  // const { data, isLoading } = useDownloadCharityImageListByCodeQuery(
  //   charity.code
  // );

  useEffect(() => {
    a();
  }, []);

  const a = useCallback(async () => {
    const { data, error } = await supabase.storage
      .from('charity')
      .download('public/basket');
    console.log(777, data);
    console.log(999, error);
  }, []);

  return (
    <li>
      {/* {!isLoading && (
        <Link href="#">
          <a>
            <BaseText content="small" color="dark" weight={900}>
              {`¥${charity.price.toLocaleString()}（税込）`}
            </BaseText>
          </a>
        </Link>
      )} */}
    </li>
  );
};
