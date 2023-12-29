import React, { useEffect, useState } from 'react'
import styles from './JobDetails.module.css'

import moneyIcon from '../../assets/images/moneyIcon.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function JobDetails(props) {
    const navigate = useNavigate()
    const [jobDetails, setJobDetails] = useState()

    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://job-listing-vjny.onrender.com/job/details/${props.job_id}`)
            setJobDetails(res.data.jobDetails)
        })()
    }, [props])

    const postedDays = (createdAt) => {
        const d = new Date()
        const daysAgo = Math.round((d - new Date(createdAt)) / (3600 * 24 * 1000))
        let ago = daysAgo % 7 === 0 ?
            daysAgo / 7 + "w" :
            daysAgo + "d"
        return ago
    }

    const handleEditJob = () => {
        navigate(`/edit-job/${props.job_id}`)
    }

    return (
        <>
            <p className={styles.summaryText}>
                {jobDetails?.jobPosition} {jobDetails?.workModel} {jobDetails?.jobType === 'Intern' ? "internship" : "job"} at {jobDetails?.companyName}
            </p>
            <div className={styles.detailsContainer}>
                <div>
                    <div className={styles.row1}>
                        <span className={styles.createdAt}>
                            {postedDays(jobDetails?.createdAt)} ago
                        </span>
                        <span className={styles.workModel}>
                            {
                                jobDetails?.workModel
                            }
                        </span>
                        <img className={styles.companyLogo} src={jobDetails?.logoURL} alt='company logo' />
                        <span className={styles.companyName}>
                            {
                                jobDetails?.companyName
                            }
                        </span>
                    </div>
                    <div className={styles.row2}>
                        <p className={styles.jobTitle}>
                            {
                                jobDetails?.jobPosition
                            }
                        </p>
                        {
                            props.loggedIn &&
                            <button onClick={handleEditJob} className={styles.editJobBtn}>Edit job</button>
                        }
                    </div>
                    <p className={styles.jobLocation}>
                        {
                            jobDetails?.location
                        }
                    </p>
                </div>
                <div className={styles.row3}>
                    <span className={styles.salaryText}>
                        <img className={styles.moneyIcon} src={moneyIcon} alt='money icon' />
                        {
                            jobDetails?.jobType === 'Intern' ? "Stipend" : "Salary"
                        }
                    </span>
                    <p className={styles.salary}>Rs {jobDetails?.monthlySalary}/month</p>
                </div>
                <div className={styles.row4}>
                    <p className={styles.title}>About company</p>
                    <p className={styles.content}>
                        {
                            jobDetails?.aboutCompany
                        }
                    </p>
                </div>
                <div className={styles.row5}>
                    <p className={styles.title}>About the  job/internship</p>
                    <p className={styles.content}>
                        {
                            jobDetails?.jobDescription
                        }
                    </p>
                </div>
                <div className={styles.row6}>
                    <p className={styles.title}>Skill(s) required</p>
                    <div className={styles.skillsContainer}>
                        {
                            jobDetails?.skillsRequired.map((skill, idx) => {
                                <p className={styles.skill}>WordPress</p>
                                return <p key={idx} className={styles.skill}>{skill}</p>
                            })
                        }
                    </div>
                </div>
                <div className={styles.row7}>
                    <p className={styles.title}>Additional Information</p>
                    <p className={styles.content}>
                        {
                            jobDetails?.additionalInfo
                        }
                    </p>
                </div>
            </div>
        </>
    )
}

export default JobDetails