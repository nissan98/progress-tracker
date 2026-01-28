import React, { useEffect, useState } from 'react'
import { db } from "../../config/firebaseInitialization"
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
export default function Card({ date, type, desc, effect, setData, id, setIsLoading, setBlurState, setDescription }) {
  const handleClick = () => {
    setBlurState(true)
    setDescription(desc)
  }
  const convertHour = (date)=>{
    const dateSplited = date.split(':')
    const hourSplited = dateSplited[0].split(' ')
    const hour = parseInt(hourSplited[hourSplited.length-1])
    if (hour <= 12)
      return date;
    const finalDate = date.substring(0,10) + " " + String((hour - 12)).padStart('2','0') +date.substring(15,date.length);
    return finalDate
  }
  return (
    <div className="w-full border-b"
    >
      <div id="headers" className="flex font-ubuntu font-medium opacity-90  hover:bg-gray-100">
        <div className='w-[20%] h-[20%]'><p className="w-full my-5 ml-5 ">{convertHour(date)}</p></div>
        <p className="w-[20%] h-full max-w-[20%] my-4 text-center" >{type}</p>
        <div className="w-[55%]  my-4"
          onClick={handleClick}
        > <p className='w-[80%] truncate text-center mx-auto'>{desc}</p></div>
        <div className='w-[5%] h-full my-4 flex items-center justify-center gap-2'>
          <div className="h-5 w-5 rounded-[50%] transition-opacity hover:opacity-50 " style={{ backgroundColor: (effect) ? "#38a169" : "#e53e3e" }}></div>
          <svg xmlns="http://www.w3.org" className='w-5 h-5 object-cover hover:opacity-40' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            onClick={async () => {
              setIsLoading(true)
              await deleteDoc(doc(db, 'data', id))
              const querySnapshot = await getDocs(collection(db, 'data'));
              setIsLoading(false)
              const tempList = [];
              querySnapshot.forEach((doc) => {
                const todoData = doc.data();
                todoData['id'] = doc.id
                tempList.push(todoData)
              })
              setData(tempList);

            }}>
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
      </div>
    </div>
  )
}
