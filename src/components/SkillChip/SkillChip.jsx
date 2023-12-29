import React from 'react'
import styles from './SkillChip.module.css'
import cancelMark from '../../assets/images/cancelMark.svg'

function SkillChip(props) {
    return (
        <div className={styles.Container}>
            <p className={styles.text}>{props.text}</p>
            <div className={styles.cancelMarkContainer}>
                <img className={styles.cancelMark}
                    src={cancelMark} alt="cancel mark"
                    onClick={() => props.handleDeselect(props.text)}
                />
            </div>
        </div>
    )
}

export default SkillChip