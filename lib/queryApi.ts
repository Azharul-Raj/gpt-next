import { openai } from "./openai.config"

const query=async (prompt:string,chatId:string)=>{
    const res=await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    })
    .then(res=>res.data.choices[0].text)
    .catch(err=>err.message)
    return res;
}
export default query