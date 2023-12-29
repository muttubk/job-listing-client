import React from 'react'
import styles from './JobCard.module.css'

import rupeesIcon from '../../assets/icons/rupeesIcon.svg'
import { useNavigate } from 'react-router-dom'
// import groupsIcon from '../../assets/icons/groupsIcon.svg'

function JobCard(props) {
    const navigate = useNavigate()

    const handleViewBtn = () => {
        navigate(`/view-details/${props._id}`)
    }
    const handleEditBtn = () => {
        navigate(`/edit-job/${props._id}`)
    }
    return (
        <div className={styles.Container}>
            <div className={styles.left}>
                <img className={styles.companyLogo} src={props.logoURL} alt="" />
                <div className={styles.infoContainer}>
                    <p className={styles.jobPosition}>
                        {props.jobPosition}
                    </p>
                    <div className={styles.row2}>
                        {/* <p className={styles.companySize}>
                            <img className={styles.groupsIcon} src={groupsIcon} alt="" />
                            11-50
                        </p> */}
                        <p className={styles.monthlySalary}>
                            <img className={styles.rupeesIcon} src={rupeesIcon} alt="" />
                            {props.monthlySalary}
                        </p>
                        <p> {props.location} </p>
                    </div>
                    <div className={styles.row3}>
                        <p> {props.workModel} </p>
                        <p> {props.jobType} </p>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.skillsContainer}>
                    {
                        props.skillsRequired.map(skill => (
                            <p className={styles.skill} key={skill}>
                                {skill}
                            </p>
                        ))
                    }
                </div>
                <div className={styles.buttonsContainer}>
                    <button onClick={handleViewBtn} className={styles.viewBtn} type="button">View details</button>
                    {
                        props.isLoggedIn &&
                        <button onClick={handleEditBtn} className={styles.editBtn} type="button">Edit job</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default JobCard