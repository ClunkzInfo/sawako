import React from 'react'
import GalleryOne from './GalleryOne'
import About from './About'
import Menu from './Menu'

function Main() {
  return (
    <div className="main">
        <Menu/>
        <GalleryOne/>        
        <About/>
    </div>
  )
}

export default Main