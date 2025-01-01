import React from 'react'
import styles from './Menu.module.css'

import { decorations } from './images'


const navItems = [
    {id:'001',src:'brush',title:'油絵'},
    {id:'002',src:'roller',title:'平版'},
    {id:'003',src:'about',title:'About'},
    {id:'004',src:'contact',title:'Contact'},

]

const navItemElements = navItems.map((item => {
    return (<div key={item.id} className={styles.nav}>
        <div  className={styles.icon}>
            <img 
            className={styles.iconImg}
            src={decorations[item.src]}/>
        </div>
        <p className={styles.title}>{item.title}</p>
    </div>
    )
}))

function Menu({isMenuOpen}) {
    const res = isMenuOpen ? styles.open : styles.close
    return (
    <div className={styles.container+" "+res}>
        {navItemElements}
    </div>
  )
}

export default Menu