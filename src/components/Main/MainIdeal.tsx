import React from 'react';
import { BaseText } from '../Common/BaseText';

export const MainIdeal = () => {
  return (
    <div>
      <h2 className="flex h-14 items-center justify-center bg-navy-900">
        <BaseText content="large" color="white">
          理念
        </BaseText>
      </h2>
      <div className="flex h-32 items-center justify-center">
        <BaseText content="large">理念を入れる</BaseText>
      </div>
    </div>
  );
};
