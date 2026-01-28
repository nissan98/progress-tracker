import React from 'react'
import PopUpScreens from './PopUpScreens/PopUpScreens'

export default function PopUp({ blurState, setBlurState, setData, isLoading, setIsLoading,description=null}) {
  return (
    <div className={`w-1/4 h-[40%] shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-20 rounded-xl`}
      style={{ display: (blurState) ? "block" : "none", }}>
      {!description ?
        (<PopUpScreens setBlurState={setBlurState} blurState={blurState} setData={setData} isLoading={isLoading} setIsLoading={setIsLoading} />) :
        (<div className='w-full h-full flex flex-col items-center'>
          <div className='w-full'><h2 className='text-bold text-2xl my-4 mx-[5%] font-bold'>Description</h2></div>
          <textarea className='w-[90%] border h-10/12 -mt-2 px-2 py-1 text-md font-ubuntu font-semibold' defaultValue={description} disabled></textarea>
        </div>)
      }
    </div>
  )
}
