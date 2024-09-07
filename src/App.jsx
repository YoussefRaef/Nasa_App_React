import { useEffect, useState } from "react"
import Footer from "./components/footer"
import Main from "./components/main"
import SideBar from "./components/SideBar"
import.meta.env.VITE_NASA_API_KEY

function App() {
  const [data,setData]=useState(null)
  const [loading,setLoading]=useState(false)
  const[showModal,setShowModal]=useState(false)
  
  
  function toggleSidebar(){
    setShowModal(!showModal)
  }
  
  useEffect(()=> {
    async function fetchAPIData() {
  const NASA_KEY=import.meta.env.VITE_NASA_API_KEY;
  const url ='https://api.nasa.gov/planetary/apod' + 
  `?api_key=${NASA_KEY}`


const today=(new Date()).toDateString()
const localKey=`NASA-${today}`
if(localStorage.getItem(localKey)){
  const apiData=JSON.parse(localStorage.getItem(localKey))
  setData(apiData)
  console.log('fetched from cache today')
  return
}
localStorage.clear()
   try{
   const res = await fetch(url)
   const apiData = await res.json()
   localStorage.setItem(localKey,JSON.stringify(apiData))
   setData(apiData)
   console.log('fetched from api today')

   } catch(err){
    console.log(err.message)
   }

}
fetchAPIData()

},[])
  return (
    <>
    {data ? (<Main data={data}/>):
    (
      <div className="LoadingState">
        <i className="fa-solid fa-gear"></i>
      </div>
    )}
    {showModal && (
 
      <SideBar data={data} toggleSidebar={toggleSidebar}/>
    )
    }
    {(<Footer data={data} toggleSidebar={toggleSidebar}/>)}
    </>
  )
}

export default App
