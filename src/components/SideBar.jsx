import React from 'react'

export default function SideBar(props) {
  const {toggleSidebar,data}=props
  return (
    <div>

    <h2>The Brutal Martian Landscape</h2>
    <div className='sidebar'>
        <div onClick={toggleSidebar} className='bgoverlay'></div>
        <div className='sidebarcontents'>
          <h2>{data?.title}</h2>
          <div className='descCont'>
        <p className='desctitle'>{data?.date}</p>
        <p>{data?.explanation}</p>
            </div>
        <button onClick={toggleSidebar}>
        <i classN="fa-solid fa-arrow-right-long"></i>
        </button>
        </div>
    </div>
    </div>
  )
}
