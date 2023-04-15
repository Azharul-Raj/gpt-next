// pages/api/data.js
import { NextApiRequest,NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import cors from 'cors';
import {Configuration,OpenAIApi} from 'openai'
// import { MongoClient } from 'mongodb';

const corsMiddleware = cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});
const configuration=new Configuration({
  apiKey:process.env.API_KEY
})

const openai=new OpenAIApi(configuration);
// const client = new MongoClient(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const handler = nextConnect<NextApiRequest,NextApiResponse>();

handler.use(corsMiddleware);


handler.post(async(req,res)=>{
  try {
    
    const data=req.body;
    const {prompt}=data;
    console.log("from 42",data)
    if(!data?.prompt) return res.send("No data");
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    
    res.send(response)
  } catch (error) {
    res.send(error)
  }
})

// export default handler;
