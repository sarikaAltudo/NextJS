import Products from '../../../models/Products';
import connectDB from '../../../middleware/mongoose';

//Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { faAudioDescription } from '@fortawesome/free-solid-svg-icons'
import type { NextApiRequest, NextApiResponse } from 'next'
import test from 'node:test'

const handler = async (req, res) => {
const data = await Products.find();
res.status(200).json(data);
}

export default connectDB(handler);