import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from 'src/libs/supabase';
import { CharityImage } from 'src/ducks/charityImage/slice';
import { PostgrestError } from '@supabase/supabase-js';

export const charityImageApi = createApi({
  reducerPath: 'charityImageApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['CharityImage'],
  endpoints: (builder) => ({
    /**
     * GET/charity_codeに属する画像を取得
     * @param {string} code
     * @return {CharityImage[]}
     */
    // downloadCharityImageListByCode: builder.query({
    //   queryFn: async (code: string) => {
    //     const { data } = await supabase
    //       .from('charity_image')
    //       .select('*')
    //       .eq('charity_code', code);
    //     if (data?.length) {
    //       const list = await Promise.all(
    //         data.map(async (x) => {
    //           const { data, error } = await supabase.storage
    //             .from('charity')
    //             .download('0.014957653396402204.product-1-1.jpg');
    //           // return URL.createObjectURL(data!);
    //         })
    //       );
    //     }
    //   },
    // }),
    /**
     * POST/新規作成
     * @param {CharityImage}
     * @return {void}
     */
    createCharityImage: builder.mutation({
      queryFn: async (params: CharityImage) => {
        const { data, error } = await supabase.from('charity_image').insert({
          charity_code: params.charityCode,
          url: params.url,
        });
        return error ? { error: error } : { data: data };
      },
    }),

    /**
     * POST/画像の保存
     * @params {string} code
     * @return {void}
     */
    uploadCharityImage: builder.mutation({
      queryFn: async (params) => {
        const { data, error } = await supabase.storage
          .from('charity')
          .upload(params.imagePath, params.imageFile);
        return error ? { error: error } : { data: data };
      },
    }),
  }),
});

export const {
  // useDownloadCharityImageListByCodeQuery,
  useCreateCharityImageMutation,
  useUploadCharityImageMutation,
} = charityImageApi;
