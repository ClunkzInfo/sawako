import React from 'react'
import GalleryOne from './GalleryOne'
import About from './About'
import Menu from './Menu'

function Main({isMenuOpen}) {
  return (
    <div className="main">
        {/* <Menu isMenuOpen={isMenuOpen}/> */}
        <GalleryOne/>        
        <About/>
    </div>
  )
}

export default Main