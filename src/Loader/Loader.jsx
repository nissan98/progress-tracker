import React from 'react'

export default function Loader({isLoading}) {
  return (
    <div className={`absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-40 h-10 flex gap-3 z-100 ${!isLoading ? 'hidden':''}`}> 
      <div className="w-10 h-10 border-l-3 border-green-600 border-t-3 animate-spin rounded-[50%] animate-custom-bounceOneSecond"></div>
    </div>
  )
}
