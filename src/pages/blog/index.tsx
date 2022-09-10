import { MicroCMSListResponse } from 'microcms-js-sdk';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { ComponentProps, useState } from 'react';
import { client } from 'src/libs/client';
import { Blog } from 'src/types';

type Props = MicroCMSListResponse<Blog>;

const Blog: NextPage<Props> = (props) => {
  const [search, setSearch] = useState<Props>();

  const contentList = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;

  const handleSearch: ComponentProps<'form'>['onClick'] = async (e) => {
    e.preventDefault();
    const query = e.currentTarget.query.value;
    const data = await fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const json: Props = await data.json();
    setSearch(json);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" />
        <button>検索</button>
        <button>リセット</button>
      </form>
      <ul>
        <p>{`${search ? '検索結果' : '記事の総数'}: ${totalCount}件`}</p>
        {contentList.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/blog/${content.id}`}>
                <a>{content.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: 'blog' });
  return {
    props: data,
  };
};

export default Blog;
