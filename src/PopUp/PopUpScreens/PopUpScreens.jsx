import React, { useEffect, useRef, useState } from 'react'
import { db } from "../../../config/firebaseInitialization"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
export default function PopUpScreens({ blurState, setBlurState, setData,setIsLoading,isLoading}) {
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [currentDate, setCurrentDate] = useState();
  const [effect, setEffect] = useState(1);
  const dateRef = useRef();
  useEffect(() => {
    let date = new Date();
    const fullCurrentDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart("2", "0")}-${String(date.getDate()).padStart(2, "0")}`
    setCurrentDate(fullCurrentDate)
    dateRef.current.value = fullCurrentDate;
  }, []);

  const handleForm = async () => {
    if (type && desc) {
      setIsLoading(true);
      const date = new Date();
      const result = await addDoc(collection(db, 'data'), {
        date: currentDate + `   ${String(date.getHours()).padStart('2','0')}:${String(date.getMinutes()).padStart('2','0')}:${String(date.getSeconds()).padStart("2", "0")}`,
        type: type,
        desc: desc,
        effect: effect,
        createdAt: serverTimestamp()
      })

      setData(prev => {
        return [{
          date: currentDate + `   ${String(date.getHours()).padStart('2','0')}:${String(date.getMinutes()).padStart('2','0')}:${String(date.getSeconds()).padStart("2", "0")}`,
          type: type,
          desc: desc,
          effect: effect,
          id:result.id  
        },...prev]
      })
      setEffect(1)
      setBlurState(false)
      setType('')
      setDesc('')
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full h-full">
      <form className="w-full h-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 mt-5">
          <label className="block text-gray-700 text-normal  font-bold mb-2" htmlFor="username">
            Date
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-semibold" id="username" type="date" placeholder="Username"
            ref={dateRef} disabled />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-normal font-bold mb-2" htmlFor="password">
            Type
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-semibold mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter type" maxLength={15}
            value={type}
            onChange={(e) => {
              setType(e.target.value)
            }}
          />
          <p className="text-red-500 text-xs italic hidden">enter type.</p>
        </div>
        <div>
          <label className="block text-gray-700 text-normal font-bold mb-2" htmlFor="username">
            Description
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 font-semibold text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5" id="username" type="text" placeholder="Enter description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value)
            }}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 text-normal font-bold mb-2" htmlFor="password">
            Effect
          </label>
          <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-5 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Enter type">
            <button className={`bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center mr-3`} type="button" style={{ backgroundColor: (!effect) ? 'gray' : '' }}
              onClick={() => {
                setEffect(1)
              }}
            >Good</button>
            <div className="bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center " type="button" style={{ backgroundColor: (effect) ? 'gray' : '' }}
              onClick={() => {
                if (effect) {
                  setEffect(0)
                }
              }}
            >Bad</div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-10">
          <button className="bg-gray-300 font-semibold hover:bg-gray-400 text-gray-800  py-2 px-4 rounded inline-flex items-center" type="button" onClick={handleForm}
                  disabled={isLoading}>
            Create
          </button>

        </div>
      </form>
    </div>
  )
}
