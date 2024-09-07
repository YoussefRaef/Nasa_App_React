import React from 'react'

export default function Main(props) {
  const{data}=props
  return (
   
      <div className='imgcont'>

    <img src={data.hdurl}   
    className='bgimg'
    alt={data.title ||'bg-img' }/>

    </div>
 
  )
}
