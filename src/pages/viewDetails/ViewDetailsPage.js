import React, { useState } from 'react'
import styles from './ViewDetailsPage.module.css'

import Navbar from '../../components/navbar/Navbar'
import JobDetails from '../../components/jobDetails/JobDetails'
import { useParams } from 'react-router-dom'

function ViewDetailsPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('jwtoken'))
    const { job_id } = useParams()

    return (
        <div className={styles.Container}>
            <Navbar loggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <div className={styles.Container2}>
                <JobDetails loggedIn={isLoggedIn} job_id={job_id} />
            </div>
        </div>
    )
}

export default ViewDetailsPage