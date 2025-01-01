
import React, { useState } from 'react'
import { decorations } from './images'
import styles from './Header.module.css'
import Menu from './Menu';

const { nav } = decorations

function Header () {

    const [isMenuOpen,toggleMenu] = useState(false)

    const toggle = () => {
        if(isMenuOpen) { 
            toggleMenu(false)
        } else { 
            toggleMenu(true)
        }
    }

  return (
    <div className={styles.header}> 
        <div className={styles.background}></div>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>荻野さわこ</h1>
        </div>   
        <div 
            className={styles.nav}
            onClick={() => toggle(isMenuOpen)}>
            <img className={styles.navImage} src={nav} />
        </div>
        <Menu isMenuOpen={isMenuOpen}/>
    </div>
  )
}

export default Header