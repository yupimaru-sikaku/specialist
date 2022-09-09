import { MicroCMSListResponse } from 'microcms-js-sdk';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { client } from 'src/libs/client';

export type Blog = {
  title: string;
  body: string;
};

type Props = MicroCMSListResponse<Blog>;

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  return (
    <div>
      <p>{`記事の総数: ${props.totalCount}`}</p>
      <ul>
        {props.contents.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`blog/${content.id}`}>
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
  const data = await client.getList({ endpoint: 'blog' });
  return {
    props: data,
  };
};
export default Home;
