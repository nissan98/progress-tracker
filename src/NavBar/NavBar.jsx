import React from 'react'

export default function NavBar({state,setState}) {
  return (
    <div className="w-full max-w-[80%]  sticky top-0 z-10  shadow-md flex items-center pt-5 pb-5 justify-between bg-white ">
      <p className="text-4xl ml-5">ProgressTracker</p>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-5"
        onClick={()=>{
          setState(!state)
        }}>
        <svg className="w-5 h-5 mr-1.5" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 866.929 866.93" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M144.465,450.93c7.8,46.7,58.9,155.399,159.8,257.5v55.3h362.401v-55v-0.3l36.6-61.5c13.101-21.9,20-47,20-72.5v-187.7 c-0.3-16.3-19.199-32.6-45-37.6c-20.5-4-39.6,0.199-49.8,9.6c-0.3-16.3-19.1-32.6-44.899-37.7c-18.5-3.7-36-0.6-46.7,7 c-3.2-15-21.9-29.2-46.601-34.1c-21.3-4.2-41.199-0.2-51.8,9.1h-0.1c0,0,0,0,0-0.1c-0.5-4.9-27.901-270.3-28-270.7 c-5.101-46.8-81.2-40.7-81.101,5.8l-0.199,436.5c0,5.2-3.801,9.5-8.9,10.2c-0.1,0-0.1,0-0.2,0c-0.6,0.1-1.1,0.1-1.7,0.1 c-14.699-0.399-47.8-0.899-80.1-47.6c-4.3-6.2-8.2-11.8-11.7-16.9C195.865,376.229,136.065,400.63,144.465,450.93z"></path> <path d="M304.465,846.93c0,11,9,20,20,20h322.5c11,0,20-9,20-20v-51.101h-362.5V846.93z"></path> </g> </g></svg>
        <span>Create</span>
      </button>
    </div>
  )
}
