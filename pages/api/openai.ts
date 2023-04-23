// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {prompt,chatId,session}=req.body;
    if(!prompt){
      res.status(400).json({message:"Please provide a prompt"});
      return;
    }
    if(!chatId){
      res.status(400).json({message:"ChatID is not valid"});
    }
  } catch (error) {
    res.status(500).json({message:"Something went wrong"})
  }
  res.status(400).json({ name: 'John Doe' })
}