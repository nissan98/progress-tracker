import React from 'react'
import PopUpScreens from './PopUpScreens/PopUpScreens'

export default function PopUp({ blurState,setBlurState,setData,isLoading,setIsLoading}) {
  return (
    <div className={`w-1/4 h-[40%] shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-20 rounded-xl`}
         style={{ display: (blurState) ? "block" : "none",}}>
          <PopUpScreens  setBlurState={setBlurState} blurState={blurState} setData={setData} isLoading={isLoading} setIsLoading={setIsLoading}/>
    </div>
  )
}
