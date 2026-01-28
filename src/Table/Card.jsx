import React, { useState } from 'react'
import { db } from "../../config/firebaseInitialization"
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
export default function Card({ date, type, desc, effect, setData, id ,setIsLoading,isLoading}) {
  return (
    <div className="w-full border-b"
    >
      <div id="headers" className="flex font-ubuntu font-normal ">
        <p className="w-[20%] my-4 ml-5">{date}</p>
        <p className="w-[20%] my-4 " >{type}</p>
        <div className="w-[55%] my-4"> <p className='w-[50%] truncate text-start'>{desc}</p></div>
        <div className='w-[5%] h-full my-4 flex items-center justify-center gap-2'>
          <div className="h-5 w-5 rounded-[50%] transition-opacity hover:opacity-50 " style={{ backgroundColor: (effect) ? "#38a169" : "#e53e3e" }}></div>
          <svg xmlns="http://www.w3.org" className='w-5 h-5 object-cover hover:opacity-40' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
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
