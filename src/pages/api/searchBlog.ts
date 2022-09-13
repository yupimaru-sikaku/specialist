import { NextApiRequest, NextApiResponse } from 'next';
import { client } from 'src/libs/microCMS/client';
import { Blog } from 'src/types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await client.get<Blog>({
    endpoint: 'blog',
    queries: { q: req.body.query },
  });
  res.status(200).json(data);
};

export default handler;
