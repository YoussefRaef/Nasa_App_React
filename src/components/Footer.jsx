import React from 'react'

export default function Footer(props) {
  const {toggleSidebar,data}=props
  return (
    
    <footer>
        <div className='bggrad'> </div>

    <div>
        <h1>APOD PEOJECT</h1>
        <h2>{data?.title}</h2>
       
    </div>
    <button onClick={toggleSidebar}>
        <i className="fa-solid fa-circle-info"></i>
    </button>
    </footer>
  )
}
