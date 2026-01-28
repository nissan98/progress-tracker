import { useEffect, useState } from 'react'
import NavBar from './NavBar/NavBar'
import TableCards from './Table/TableCards'
import PopUp from './PopUp/PopUp'
import { db } from '../config/firebaseInitialization'
import { collection, orderBy, query,getDocs} from 'firebase/firestore'
import Loader from './Loader/Loader'


function App() {
  const [blurState, setBlurState] = useState(false)
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [description,setDescription] = useState('')
  useEffect(() => {
    setIsLoading(true)
    const run = async () => {
      const querySnapshot = await getDocs(query(collection(db, 'data'),orderBy('createdAt','desc')));
      const tempList = [];
      querySnapshot.forEach((doc) => {
        const todoData = doc.data();
        todoData['id'] = doc.id
        tempList.push(todoData)
      })
      setData(tempList)
      setIsLoading(false)
    }
    run()
    
  }, [])
  return (
    <>
      <div className={`w-full h-screen relative ${isLoading ? 'pointer-events-none' : 'pointer-events-auto'}`}>
        <div className='h-screen flex flex-col items-center' style={{
          filter: (blurState | isLoading) ? "blur(4px)" : "blur(0px)"
        }}
          onClick={() => {
            if (blurState) {
              setBlurState(!blurState)
              setDescription('')
            }
          }}>
          <NavBar state={blurState} setState={setBlurState} />
          <TableCards data={data} setData={setData}  setIsLoading={setIsLoading} setBlurState={setBlurState}  setDescription={setDescription}/>
        </div>
        <PopUp blurState={blurState} setBlurState={setBlurState} setData={setData} setIsLoading={setIsLoading} isLoading={isLoading} description={description}/>
        <Loader isLoading={isLoading} />
      </div>
    </>
  )
}

export default App
