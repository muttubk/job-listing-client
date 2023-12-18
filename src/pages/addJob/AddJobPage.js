import React from 'react'
import styles from './AddJobPage.module.css'

import AddJobForm from '../../components/addJob/AddJobForm'
import CoverImage from '../../components/coverImage/CoverImage'
import coverImage from '../../assets/images/addJobCover.png'

function AddJob() {
    return (
        <div className={styles.Container}>
            <div className={styles.leftSide}>
                <AddJobForm />
            </div>
            <div className={styles.rightSide}>
                <CoverImage text={"Recruiter add job details here"} image={coverImage} />
            </div>
        </div>
    )
}

export default AddJob