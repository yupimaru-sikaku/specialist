import { Divider, Loader } from '@mantine/core';
import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { CharityCard } from 'src/components/Charity';
import { useGetCharityListQuery } from 'src/ducks/charity/query';
import { Charity } from 'src/types';

export const CharityList = () => {
  const { data: charityList, error, isLoading } = useGetCharityListQuery();

  return (
    <div>
      <div className="p-3">
        <BaseText content="middle" color="dark" weight={900}>
          LINE UP
        </BaseText>
      </div>
      <Divider size="xl" color="indigo.9" />

      <ul className="grid gap-8 p-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {isLoading ? (
          <Loader />
        ) : (
          charityList.map((charity: Charity) => (
            <CharityCard charity={charity} key={charity.code} />
          ))
        )}
      </ul>

      <div className="p-vw-10" />
    </div>
  );
};
