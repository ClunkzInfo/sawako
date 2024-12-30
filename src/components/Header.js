import React, { useState } from 'react'
import { siteImages } from './images'
import styles from './Header.module.css'

const nav = siteImages[0];

function Header() {

  return (
    <div className={styles.header}>

        <div className={styles.titleContainer}>
            <h1 className={styles.title}>荻野さわこ</h1>
        </div>   

        <div className={styles.nav}>
            <img className={styles.navImage} src={nav.src} />
        </div>
        
    </div>
  )
}

export default Header