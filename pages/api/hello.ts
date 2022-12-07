// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { faAudioDescription } from '@fortawesome/free-solid-svg-icons'
import type { NextApiRequest, NextApiResponse } from 'next'
import test from 'node:test'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
//Structured BD - SQL DB- MySql, Oracle, 

// Non-structed - mongodb
// mongodb- online

//DOM


// [

//   {
//     id: 1,
//     title: test,
//     price: 100
//     Description: here is faAudioDescription
//     image: abc
//   },
//   {
//     id: 2,
//     title: test,
//     price: 100
//     Description: here is faAudioDescription
//     image: abc
//   },
//   {
//     id: 3,
//     title: test,
//     price: 100
//     Description: here is faAudioDescription
//     image: abc
//   }
// ]

//Model (a file where we define the structure of collection / blueprint)

//Mongoose -ORM
//Mongo library - 