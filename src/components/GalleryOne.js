import React, { useState } from 'react'
import { images } from './images'
import styles from './Main.module.css'

function GalleryOne() {
    const [viewMode,selectView] = useState({id:'xxxx',title:'xxx',dimensions:'xxx',src:'xxx'})
    const [tooltipOn,toggleTooltip] = useState(false)

    const closeTooltip = () => {
        toggleTooltip(false)
    }
    const tooltip = args => {
        return (
            <div className={styles.overlay}>
                <div className={styles.close} onClick={closeTooltip}></div>
                <div>
                    <img src={args.src}></img>
                </div>
                <p>{args.title}</p>
                <p>{args.dimensions}</p>
                <p>{args.description}</p>
            </div>
        )
    }
    
    const display = state => {
        toggleTooltip(true)
        selectView({...state})
    }

    const paintings = () => images.map(item => {
        return (
        <div className={styles.container} key={item.id}>
            <img 
                className={styles.image} 
                src={item.src}
                onClick={display.bind(this,{...item})}/>
        </div>
        )      
    })

  return (
    <div className={styles.gallery}>
        {paintings()}
        {tooltipOn && tooltip(viewMode)}
    </div>

  )
}

export default GalleryOne