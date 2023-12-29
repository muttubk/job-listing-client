import React, { useState } from 'react'
import styles from './MainPage.module.css'

import Navbar from '../../components/navbar/Navbar'
import SearchCard from '../../components/SearchCard/SearchCard'
import { ToastBox } from '../../utils/Toast'

function MainPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('jwtoken'))

    return (
        <div className={styles.Container}>
            <Navbar loggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <div className={styles.Container2}>
                <SearchCard isLoggedIn={isLoggedIn} />
            </div>
            <ToastBox />
        </div>
    )
}

export default MainPage