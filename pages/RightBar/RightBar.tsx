
import React,{useState,useEffect} from 'react'
import {FiSun,FiZap,FiAlertTriangle,FiSend} from 'react-icons/fi'
interface RightBarProps{
  prompt:string;
  response:string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>
}
export default function RightBar({setPrompt,prompt,response}:RightBarProps) {
  
  const handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // console.log(e.target.data.value)
    setPrompt(e.target.data.value)
  }
  
  return (
    <div className="flex h-full max-w-full flex-1 flex-col">
     <main className='class="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1"'>
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col items-center text-sm dark:bg-gray-800">
            {/* default data */}
            <div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100">
              <h1 className="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
                Chat GPT
              </h1>
              {/* content container dev */}
              <div className="md:flex items-start text-center gap-3.5">
               {!prompt && !response&& <>
                {/* left */}
                <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                  <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                    <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                        <FiSun/> "Examples"
                    </h2>
                    <ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
                      <button className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900'>
                      "
                      Explain quantum computing in simple terms
                      " →
                      </button>
                      <button className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900'>
                      "
                      Got any creative ideas for a 10 year old’s birthday?
                      " →
                      </button>
                      <button className='w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900'>
                      "
                      How do I make an HTTP request in Javascript?
                      " →
                      </button>
                    </ul>
                  </div>
                </div>
                {/* middle */}
                <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                    <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                        <FiZap/> "Capabilities"
                    </h2>
                    <ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
                      <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                      Remembers what user said earlier in the conversation
                      </li>
                      <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                      Allows user to provide follow-up corrections
                      </li>
                      <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                      Trained to decline inappropriate requests
                      </li>
                    </ul>
                  </div>
                </div>
                {/* last */}
                <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                    <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                        <FiAlertTriangle/> "Limitations"
                    </h2>
                    <ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
                      <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                      May occasionally generate incorrect information
                      </li>
                      <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                      May occasionally produce harmful instructions or biased content
                      </li>
                      <li className="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                      Limited knowledge of world and events after 2021
                      </li>
                    </ul>
                  </div>
                </div>
                {/* last finish */}
                </>}
                {
              prompt && response && (
                <div className="">
                  <div className="">user:{prompt}</div>
                  {/* <div className="">gpt:{response}</div> */}
                </div>
              )
            }
              </div>
              
              <div className="w-full h-32 md:h-48 flex-shrink-0"></div>
            </div>
            
          </div>
        </div>
        {/* input field div left change to 25 */}
        <div className="absolute bottom-0 -left-1 md:left-20 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2">
          <form onSubmit={handleSubmit} action="" className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
            <div className="relative flex h-full flex-1 md:flex-col">
              <div className="flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"></div>
              {/* textarea div */}
              <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
                  <textarea style={{maxHeight:"200px",height:"24px",overflowY:"hidden"}} className='m-0 w-full resize-none border-0 bg-transparent outline-none p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0' name="data" id="" rows={1}></textarea>
                  <button className='absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40'>
                    <FiSend/>
                  </button>
              </div>
            </div>
          </form>
        {/* info version section */}
        <div className="px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
          <span className=''>
            <a href="">. Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts</a>
          </span>
        </div>
        {/* info version section */}
        </div>
      </main>

    </div>
  )
}
