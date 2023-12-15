import React from 'react'
import styles from './CoverImage.module.css'

function CoverImage(props) {
    return (
        <div className={styles.Container}>
            <p className={styles.imageTopText}>{props.text}</p>
            <img src={props.image} className={styles.image} alt='Login cover' />
        </div>
    )
}

export default CoverImage