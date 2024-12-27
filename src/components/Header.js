import React, { useState } from 'react'
import { siteImages } from './images'
import styles from './Header.module.css'

const nav = siteImages[0];

console.log(styles.header)
console.log(styles['noto-serif-jp-japanese'])

function Header() {

  return (
    <div className={styles.header}>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>荻野さわこ</h1>
            <div className={styles.nav}>
                <img className={styles.navImage} src={nav.src} />
            </div>
        </div>
    </div>
  )
}

export default Header