import React from 'react'
import styles from './Navbar.module.css'

import profileLogo from '../../assets/images/profileLogo.png'

import { useNavigate } from 'react-router-dom'

function Navbar(props) {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('jwtoken')
        localStorage.removeItem('recruiterName')
        props.setIsLoggedIn('')
    }
    return (
        <div className={styles.NavbarContainer}>
            <div className={styles.navbarBG}>
                <svg className={styles.rectangle1} xmlns="http://www.w3.org/2000/svg" width="349" height="63" viewBox="0 0 349 63" fill="none">
                    <path d="M0 0L349 63H55C24.6243 63 0 38.3757 0 8V0Z" fill="#FF6B6B" />
                </svg>
                <svg className={styles.rectangle2} xmlns="http://www.w3.org/2000/svg" width="390" height="94" viewBox="0 0 390 94" fill="none">
                    <path d="M0 0H390L104.665 87.75L93.015 91.4154C68.2633 99.2033 41.5584 87.5523 30.4315 64.1111L0 0Z" fill="#FF6B6B" />
                </svg>
                <svg className={styles.rectangle3} xmlns="http://www.w3.org/2000/svg" width="405" height="139" viewBox="0 0 405 139" fill="none">
                    <path d="M0 0H381.5L394.5 68.5L404.232 121.28C405.932 130.498 398.855 139 389.481 139H135.734C109.156 139 82.8212 133.928 58.1436 124.057C28.8646 112.346 8.53189 85.3189 5.39409 53.9409L0 0Z" fill="#FF6B6B" />
                </svg>
            </div>
            <div className={styles.navbar}>
                <p className={styles.logo}>Jobfinder</p>
                <div className={styles.navRight}>
                    {
                        props.loggedIn ?
                            <>
                                <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
                                <p className={styles.greeting}>Hello! Recruiter</p>
                                <img className={styles.profileLogo} src={profileLogo} alt="profile" />
                            </>
                            :
                            <>
                                <button onClick={() => navigate('/')} className={styles.loginBtn}>Login</button>
                                <button onClick={() => navigate('/register')} className={styles.registerBtn}>Register</button>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar