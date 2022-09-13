import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { client } from 'src/libs/microCMS/client';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import { Blog } from 'src/types';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Blog'],
  endpoints: (builder) => ({
    getBlogList: builder.query<MicroCMSListResponse<Blog>, void>({
      queryFn: async () => {
        const data = await client.getList({ endpoint: 'blog' });
        return { data };
      },
    }),
    getBlogListSearch: builder.query<MicroCMSListResponse<Blog>, string>({
      queryFn: async (query) => {
        try {
          const data = await client.getList({
            endpoint: 'blog',
            queries: {
              q: query,
            },
          });
          return { data };
        } catch (err) {
          return { error: err };
        }
      },
    }),
  }),
});

export const { useGetBlogListQuery, useGetBlogListSearchQuery } = blogApi;
