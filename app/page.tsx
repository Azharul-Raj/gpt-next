import '../styles/globals.css'
import React from 'react'
import { FiZap,FiSun,FiAlertTriangle } from 'react-icons/fi'

function HomePage() {
  return (
    <div className='flex justify-center flex-col h-screen px-2 text-white items-center bg-[#343541]'>
        <h1 className="text-5xl font-semibold mb-20">Chat GPT</h1>
        <div className="flex space-x-2 text-center">
            {/* first */}
            <div className="">
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* icon */}
                    <FiSun className='h-6 w-6'/>
                    <h2>Example</h2>                    
                </div>
                <div className="space-y-2">
                    <p className="infoText">"
                      Explain quantum computing in simple terms
                      " →</p>
                    <p className="infoText">"
                      Got any creative ideas for a 10 year old’s birthday?
                      " →</p>
                    <p className="infoText">  "
                      How do I make an HTTP request in Javascript?
                      " →</p>
                </div>
            </div>
            {/* second */}
            <div className="">
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* icon */}
                    <FiZap className='h-6 w-6'/>
                    <h2>Capabilities</h2>                    
                </div>
                <div className="space-y-2">
                    <p className="infoText">"
                    Remembers what user said earlier in the conversation</p>
                    <p className="infoText">"
                    Allows user to provide follow-up corrections</p>
                    <p className="infoText">  "
                    Trained to decline inappropriate requests</p>
                </div>
            </div>
            {/* first */}
            <div className="">
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* icon */}
                    <FiAlertTriangle className='h-6 w-6'/>
                    <h2>Limitations</h2>                    
                </div>
                <div className="space-y-2">
                    <p className="infoText">"
                    May occasionally generate incorrect information</p>
                    <p className="infoText">"
                    May occasionally produce harmful instructions or biased content</p>
                    <p className="infoText">  "
                    Limited knowledge of world and events after 2021</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage