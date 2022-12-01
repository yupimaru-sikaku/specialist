import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.method) return;
  if (req.method.toLocaleLowerCase() !== 'post') {
    return res.status(405).end();
  }
  try {
    const stripe = new Stripe(process.env.STRIPE_API_KEY, {
      apiVersion: '2022-08-01',
      maxNetworkRetries: 3,
    });

    const { name, description, price } = req.body;

    const product = await stripe.products.create({
      name: name,
      default_price_data: {
        unit_amount: price,
        currency: 'jpy',
        tax_behavior: 'inclusive',
      },
      unit_label: '点',
      expand: ['default_price'],
      description: description,
      active: true,
    });

    res.status(200).json({
      product: product,
    });
  } catch (error) {
    console.log(error);
    // res.status(error.statusCode || 500).json({
    //   message: error.message,
    // });
  }
}
