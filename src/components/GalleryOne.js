import React from 'react'
import { images } from './images'

import styles from './Main.module.css'

const elementTitleDimensionsPrice = <div className="imgDisplay">
            <a target="_blank" href="img_5terre.jpg">
                <img src="" alt="" width="600" height="400"/>
            </a>
            <div className="desc">
                <p className="itemTitle">Title</p>
                <p className="itemDimensions">100cm X 100cm</p>
                <p className="itemPrice">¥10000</p>
            </div>
        </div>


const paintings = images.map(item => {

      return <img key={item.id} className={styles.galleryImages} src={item.src}/>

})
function imgDisplayOne() {
  return (
    <div className={styles.gallery}>
        {paintings}
    </div>

  )
}

export default imgDisplayOne