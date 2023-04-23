// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import admin from 'firebase-admin'
import query from '@/lib/queryApi';
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
      return;
    }
    const response=await query(prompt,chatId)
    // api response part
    // const response = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ:${prompt}`,
    //   temperature: 0,
    //   max_tokens: 100,
    //   top_p: 1,
    //   frequency_penalty: 0.0,
    //   presence_penalty: 0.0,
    //   stop: ["\n"],
    // });
    /**
     * message
     */
    const message={
      text:response||"Chat GPT is unable to answer",
      createdAt:admin.firestore.Timestamp.now()
    }
    // sending response
  } catch (error) {
    res.status(500).json({message:"Something went wrong"})
  }
}
