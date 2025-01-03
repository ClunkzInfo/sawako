import React, { useState } from 'react'
import { decorations, images } from './images'
import styles from './Main.module.css'

function GalleryOne() {
    const [index,setIndex] = useState(0)
    const [currView,setView] = useState({
        id:'xxxx',
        title:'xxx',
        dimensions:'xxx',
        src:'xxx',
        bg:'xxx'})
    const [viewOpen,setViewOpen] = useState(false)

    const handlleShift = nextIndex => {
        if(nextIndex > images.length -1) { 
            setIndex(0)
        } else if (nextIndex < 0) {
            setIndex(images.length-1)
        } else { 
            setIndex(nextIndex)
        }
        setView({...images[index]})
    }

    const toggle = newIndex => {
        setViewOpen(true)
        setView({...images[newIndex]})
    }

    const tooltip = args => {
        return (
            <div className={styles.overlay}>
                <div className={styles.overlayImageContainer}>
                    <img className={styles.displayedImage+" "+styles[args.type || "landscape"]}src={args.src}></img>
                </div>
                <div className={styles.details+" "+styles[args.bg]}>
                    <p className={styles.title}>{args.title}</p>
                    <p className={styles.dimensions}>{args.dimensions}</p>
                    <p className={styles.description}>{args.description}</p>
                </div>
               
                <div className={styles.button+" "+styles.next} onClick={() => handlleShift(index+1)}>
                    <img src={decorations.next}/>
                </div>
                <div className={styles.button+" "+styles.back} onClick={() => handlleShift(index-1)}>
                    <img src={decorations.back}/>
                </div>
                <div className={styles.button+" "+styles.close} onClick={() => setViewOpen(false)}>
                    <img src={decorations.close}/>
                </div>
            </div>
        )
    }
    
    const paintings = () => images.map(item => {

        return (
        <div className={styles.container} key={item.index}>
            <img 
                className={styles.image} 
                src={item.src}
                //onClick={() => setView({...item,isOpen:true})}/>
                //onClick={() => setView({...images[item.index],isOpen:true})}/>
                //onClick={() => toggle({...images[item.index]})}/>
                onClick={() => toggle(item.index)}/>
        </div>
        )      
    })

  return (
    <div className={styles.gallery}>
        {paintings()}
        {/* {currView.isOpen && tooltip(currView)} */}
        {/* {viewOpen && tooltip(images[index])} */}
        {viewOpen && tooltip(currView)}
    </div>
  )
}

export default GalleryOne