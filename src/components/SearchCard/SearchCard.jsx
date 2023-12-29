import React, { useEffect, useState } from 'react'
import styles from './SearchCard.module.css'

import searchIcon from '../../assets/images/searchIcon.svg'
import SkillChip from '../../components/SkillChip/SkillChip'
import { useNavigate } from 'react-router-dom'
import JobCard from '../JobCard/JobCard'
import axios from 'axios'

function SearchCard(props) {
    const navigate = useNavigate()

    const [jobPosition, setJobPosition] = useState('')
    const [skillsRequired, setSkillsRequired] = useState([])
    const [jobPosts, setJobPosts] = useState([])

    useEffect(() => {
        (async () => {
            const query1 = `jobPosition=${jobPosition.trim()}`
            let skillsString = skillsRequired?.join(',')
            const query2 = `skillsRequired=${skillsString}`
            const query = `${query1}&${query2}`
            const res = await axios.get(`http://localhost:4000/job/display-jobs?${query}`)
            setJobPosts(res.data.jobPosts)
        })()
    }, [jobPosition, skillsRequired])

    const handleSearch = (e) => {
        setJobPosition(e.target.value)
    }

    const handleSelect = (e) => {
        const alreadyPresent = skillsRequired.find((item) => item === e.target.value)
        if (!alreadyPresent) {
            const updatedSkills = skillsRequired.concat(e.target.value)
            setSkillsRequired(updatedSkills)
        }
    }

    const handleDeselect = (skill) => {
        const updatedSkills = skillsRequired.filter(item => item !== skill)
        setSkillsRequired(updatedSkills)
    }

    const handleClear = () => {
        setSkillsRequired([])
    }

    const handleAddJob = () => {
        navigate('/add-job')
    }

    return (
        <>
            <div className={styles.Container}>
                <label className={styles.searchbarContainer} htmlFor="search">
                    <img className={styles.searchIcon} src={searchIcon} alt='search icon' />
                    <input type="search"
                        className={styles.searchbar}
                        name="search"
                        id="search"
                        placeholder='Type any job title'
                        value={jobPosition}
                        onChange={handleSearch}
                    />
                </label>
                <div className={styles.row2}>
                    <div className={styles.skillsContainer}>
                        <label htmlFor="skills">
                            <select className={styles.skillsSelector}
                                name="skills" id="skills"
                                value=''
                                onChange={handleSelect}
                            >
                                <option value="" disabled>Skills</option>
                                <option value="C">C</option>
                                <option value="Java">Java</option>
                                <option value="Python">Python</option>
                                <option value="SQL">SQL</option>
                                <option value="MySQL">MySQL</option>
                                <option value="HTML">HTML</option>
                                <option value="CSS">CSS</option>
                                <option value="JavaScript">JavaScript</option>
                            </select>
                        </label>
                        {
                            skillsRequired.map((skill) => (
                                <SkillChip key={skill} text={skill} handleDeselect={handleDeselect} />
                            ))
                        }
                    </div>
                    <div className={styles.buttons}>
                        {
                            skillsRequired.length > 0 &&
                            <button className={styles.clearBtn} type="button" onClick={handleClear}>
                                Clear
                            </button>
                        }
                        {
                            props.isLoggedIn &&
                            <button className={styles.addjobBtn} type='button' onClick={handleAddJob} >
                                + Add Job
                            </button>
                        }
                    </div>
                </div>
            </div>
            {
                jobPosts ? jobPosts.map(jobPost => (
                    <JobCard key={jobPost._id} {...jobPost} isLoggedIn={props.isLoggedIn} />
                )) : "No matching jobs found!"
            }
            {/* <JobCard /> */}
        </>
    )
}

export default SearchCard