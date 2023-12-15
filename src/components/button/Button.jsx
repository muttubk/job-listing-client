import React from 'react'
import styles from './Button.module.css'

function Button(props) {

    return (
        <input style={props.styles}
            className={styles.button}
            type="submit"
            value={props.value}
        />
    )
}

export default Button
