import React, { useState } from 'react'
import { siteImages } from './images'
import styles from './Header.module.css'
import Menu from './Menu';

const nav = siteImages[0];



function Header({isMenuOpen,toggleHandler}) {

  return (
    <div className={styles.header}> 
       
        <div className={styles.background}></div>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>荻野さわこ</h1>
        </div>   

        <div 
            className={styles.nav}
            onClick={() => toggleHandler(isMenuOpen)}
        >
            <img className={styles.navImage} src={nav.src} />
        </div>
       
        <Menu isMenuOpen={isMenuOpen}/>

    </div>
  )
}

export default Header