import React from 'react'
import styles from './LoginPage.module.css'

import LoginForm from '../../components/login/LoginForm'
import CoverImage from '../../components/coverImage/CoverImage'
import loginCover from '../../assets/images/loginCover.png'

function LoginPage() {
    return (
        <div className={styles.Container}>
            <div className={styles.leftSide}>
                <LoginForm />
            </div>
            <div className={styles.rightSide}>
                <CoverImage image={loginCover} text={"Your Personal Job Finder"} />
            </div>
        </div>
    )
}

export default LoginPage