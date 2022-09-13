import { NextApiRequest, NextApiResponse } from 'next';
import { client } from 'src/libs/microCMS/client';
import { Blog } from 'src/types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const order = req.body.blogContent === 'popular' ? 'createdAt' : '-createdAt';
  const data = await client.getList<Blog>({
    endpoint: 'blog',
    queries: { limit: 5, orders: order },
  });
  res.status(200).json(data);
};

export default handler;
