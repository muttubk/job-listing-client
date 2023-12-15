import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './RegisterPage.module.css'
import loginCover from '../../assets/images/loginCover.png'

import CoverImage from '../../components/coverImage/CoverImage'

function RegisterPage() {
    return (
        <div className={styles.Container}>
            <div className={styles.leftSide}>
                <Outlet />
            </div>
            <div className={styles.rightSide}>
                <CoverImage image={loginCover} text={"Your Personal Job Finder"} />
            </div>
        </div>
    )
}

export default RegisterPage
