// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import admin from 'firebase-admin'
import query from '@/lib/queryApi';
import type { NextApiRequest, NextApiResponse } from 'next';
import { adminDb } from '@/firebase.admin';
import { MessageProps } from '@/types/types';

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
    // const response=await query(prompt,chatId)
    // console.log("this is prompt",prompt)
    // console.log("this is response",response)
    // api response part
    // const response = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: `${prompt}`,
    //   temperature: 0.6,
    //   max_tokens: 100,
    //   top_p: 1,
    //   frequency_penalty: 0.0,
    //   presence_penalty: 0.0,
    // });
    // console.log(response.data.choices[0])
    // res.json(response.data.choices[0].text)
    const response=await query(prompt,chatId)
    /**
     * message
     */
    const message:MessageProps={
      text:response ||"Chat GPT is unable to answer",
      createdAt:admin.firestore.Timestamp.now(),
      user:{
        _id:"ChatGPT",
        name:"ChatGPT",
        avatar:"https://cdn.pixabay.com/photo/2023/03/06/21/16/artificial-intelligence-7834467__340.jpg"
      }
    }
    await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message)
    // sending response
    res.status(200).json({answer:message.text})
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"Something went wrong"})
  }
}
