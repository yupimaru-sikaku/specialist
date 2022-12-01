import React from 'react';
import { MainMenuCarousel } from 'src/components/Main/MainMenuCarousel';
import { CharityPickUp } from 'src/components/Charity/CharityPickUp';
import { CharityRecommend } from 'src/components/Charity/CharityRecommend';
import { CharityList } from 'src/components/Charity/CharityList';
import { EcLayout } from 'src/components/Layout/EcLayout';
import { ECMainImageCarousel } from 'src/components/Main/ECMainImageCarousel';


const CharitySample = () => {
  return (
    <EcLayout title="チャリティーグッズ">
      <ECMainImageCarousel />
      <CharityPickUp />
      <CharityRecommend />
      <CharityList />
    </EcLayout>
  );
};

export default CharitySample;
