import Image from 'next/image';
import React, { FC } from 'react';
// import { useDownloadCharityImageByUrlQuery } from 'src/ducks/charityImage/query';
import { CharityImage } from 'src/ducks/charityImage/slice';

type Props = {
  charityImageList: CharityImage[] | null | undefined;
};

export const CharityCardImage: FC<Props> = ({ charityImageList }) => {
  // const { data: image } = useDownloadCharityImageByUrlQuery(
  //   charityImageList[0].url
  // );

  return <></>;
};
