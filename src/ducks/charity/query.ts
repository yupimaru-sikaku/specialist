import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from 'src/libs/supabase';
import { Charity } from 'src/ducks/charity/slice';

export const charityApi = createApi({
  reducerPath: 'charityApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Charity'],
  endpoints: (builder) => ({
    /**
     * GET/一覧を取得
     * @return {Charity[]}
     */
    getCharityList: builder.query<any, void>({
      queryFn: async () => {
        const { data, error } = await supabase
          .from('charity')
          .select('*')
          .order('updated_at', { ascending: false });
        return error ? { error: error } : { data: data };
      },
    }),

    /**
     * GET/コードから詳細情報を取得
     * @param {string} code
     * @return {Charity}
     */
    getCharityByCode: builder.query({
      queryFn: async (code: string) => {
        const { data, error } = await supabase
          .from('charity')
          .select('*')
          .eq('code', code);
        return error ? { error: error } : { data: data };
      },
    }),

    /**
     * POST/新規作成
     * @param {Charity}
     * @return {void}
     */
    createCharity: builder.mutation({
      queryFn: async (params: Charity) => {
        const { data, error } = await supabase.from('charity').insert({
          code: params.code,
          stripe_id: params.stripeId,
          name: params.name,
          price: params.price,
          description: params.description,
          genre: params.genre,
          is_reserved: params.isReserved,
          link: params.link,
          is_display: params.isDisplay,
          is_checked: false,
          sales: 0,
        });
        return error ? { error: error } : { data: data };
      },
    }),

    /**
     * PUT/更新
     * @param {CreateCharityParam}
     * @return {void}
     */
    updateCharity: builder.mutation({
      queryFn: async (params: Charity) => {
        const { data, error } = await supabase
          .from('charity')
          .update({
            stripe_id: params.stripeId,
            name: params.name,
            price: params.price,
            description: params.description,
            genre: params.genre,
            is_reserved: params.isReserved,
            link: params.link,
            is_display: params.isDisplay,
            is_checked: false,
            sales: 0,
          })
          .eq('code', params.code);
        return error ? { error: error } : { data: data };
      },
    }),

    /**
     * PUT/削除
     * @param {string} code
     * @return {void}
     */
    deleteCharityByCode: builder.mutation({
      queryFn: async (code: string) => {
        const { data, error } = await supabase
          .from('charity')
          .delete()
          .eq('code', code);
        return error ? { error: error } : { data: data };
      },
    }),
  }),
});

export const {
  useGetCharityListQuery,
  useGetCharityByCodeQuery,
  useCreateCharityMutation,
  useUpdateCharityMutation,
  useDeleteCharityByCodeMutation,
} = charityApi;
