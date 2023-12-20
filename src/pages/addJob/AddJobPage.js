import React from 'react'
import styles from './AddJobPage.module.css'

import AddJobForm from '../../components/addJob/AddJobForm'
import CoverImage from '../../components/coverImage/CoverImage'
import coverImage from '../../assets/images/addJobCover.png'
import { useParams } from 'react-router-dom'

function AddJob() {
    const { job_id } = useParams()
    return (
        <div className={styles.Container}>
            <div className={styles.leftSide}>
                <AddJobForm job_id={job_id} />
            </div>
            <div className={styles.rightSide}>
                <CoverImage text={"Recruiter add job details here"} image={coverImage} />
            </div>
        </div>
    )
}

export default AddJob