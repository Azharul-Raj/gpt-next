import React from 'react'

export default function ChatTitle() {
    return (
        <div className="flex-col flex-1 overflow-y-auto border-b border-white/20 -mr-2">
            <div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm">
                <div className='flex py-3 px-3 items-center gap-3 relative rounded-md cursor-pointer break-all pr-14 bg-gray-800 hover:bg-gray-800 group'>
                    {/*icon div will be here */}
                    <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                        {/* this is text div */}
                    </div>
                    <div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-800">
                        {/* empty div */}
                    </div>
                    {/* right icon div below */}
                    <div className="absolute flex right-1 z-10 text-gray-300 visible">
                        <div className="p-1 hover:text-white">
                            {/* first icon */}
                        </div>
                        <div className="p-1 hover:text-white">
                            {/* second icon */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
