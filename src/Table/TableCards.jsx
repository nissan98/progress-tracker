import React, { useEffect } from 'react'
import Card from './Card'

export default function TableCards({ data,setData,isLoading,setIsLoading}) {
  return (
    <div className=" w-full max-w-[70%] mt-10 border-2 px-1 rounded overflow-y-scroll ">
      <div id="headers" className=" sticky relaive top-0 z-20 bg-white flex  font-ubuntu font-semibold border-b ">
        <p className="w-[20%] my-4 ml-5 ">Date</p>
        <p className="w-[20%] my-4 " >Type</p>
        <p className='w-[57%] my-4'>Description</p>
        <div className='w-[3%] my-4 mr-5'><p className=''>Effect</p></div>
      </div>
      <div id="card">
        {data.map((e,index) => {
          return (<Card date={e.date} type={e.type} desc={e.desc} effect={e.effect} key={index} setData={setData} id={e.id} setIsLoading={setIsLoading} isLoading={isLoading}/>);
        })}

      </div>
    </div>
  )
}
