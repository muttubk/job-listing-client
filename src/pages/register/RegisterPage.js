import React from 'react'
import styles from './RegisterPage.module.css'

import RegisterForm from '../../components/register/RegisterForm'
import CoverImage from '../../components/coverImage/CoverImage'
import loginCover from '../../assets/images/loginCover.png'

function RegisterPage() {
    return (
        <div className={styles.Container}>
            <div className={styles.leftSide}>
                <RegisterForm />
            </div>
            <div className={styles.rightSide}>
                <CoverImage image={loginCover} text={"Your Personal Job Finder"} />
            </div>
        </div>
    )
}

export default RegisterPage
