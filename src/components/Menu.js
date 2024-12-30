import React from 'react'
import styles from './Menu.module.css'

import { decoration } from './images'

function Menu() {
  return (
    <div className={styles.container}>
        <div className={styles.nav}>
            <div className={styles.icon}>
                <img 
                className={styles.iconImg}
                src={decoration.brush}/>
            </div>
            <p className={styles.title}>油絵</p>
        </div>
        <div className={styles.nav}>
            <div className={styles.icon}>
                <img 
                className={styles.iconImg}
                src={decoration.roller}/>
            </div>
            <p className={styles.title}>平版</p>
        </div>
        <div className={styles.nav}>
            <div className={styles.icon}>
                <img 
                className={styles.iconImg}
                src={decoration.about}/>
            </div>
            <p className={styles.title}>About</p>
        </div>
        <div className={styles.nav}>
            <div className={styles.icon}>
                <img 
                className={styles.iconImg}
                src={decoration.contact}/>
            </div>
            <p className={styles.title}>Contact</p>
        </div>
    </div>
  )
}

export default Menu