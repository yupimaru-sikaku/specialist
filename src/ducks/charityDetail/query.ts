import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from 'src/libs/supabase';
import { CharityDetail } from 'src/ducks/charityDetail/slice';

export const charityDetailApi = createApi({
  reducerPath: 'charityDetailApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['CharityDetail'],
  endpoints: (builder) => ({
    /**
     * POST/新規作成
     * @param {CharityDetail}
     * @return {void}
     */
    createCharityDetail: builder.mutation({
      queryFn: async (params: CharityDetail) => {
        const { data, error } = await supabase.from('charity_detail').insert({
          charity_code: params.charityCode,
          color: params.color,
          size: params.size,
          sales: params.sales,
          stock: params.stock,
        });
        return error ? { error } : { data };
      },
    }),
  }),
});

export const { useCreateCharityDetailMutation } = charityDetailApi;
