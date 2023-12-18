import React, { useState } from 'react'
import styles from './AddJobForm.module.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function AddJobForm() {
    const initialFormData = {
        companyName: '',
        logoURL: '',
        jobPosition: '',
        monthlySalary: '',
        jobType: '',
        workModel: '',
        location: '',
        jobDescription: '',
        aboutCompany: '',
        skillsRequired: '',
        additionalInfo: '',
    }
    const [formData, setFormData] = useState(initialFormData)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const dataPresent = Object.keys(formData).every(data => formData[data])
        if (dataPresent) {
            try {
                const jwtoken = localStorage.getItem('jwtoken')
                const headers = {
                    'Content-Type': 'application/json',
                    'jwtoken': jwtoken
                }
                const res = await axios.post('http://localhost:4000/job/create-job', formData, { headers: headers })
                notify('success', res.data.message)
                console.log(res)
            } catch (error) {
                console.log(error)
                notify('failed', "Something went wrong")
            }
        }
        else {
            console.log('All fields are required.')
        }
    }

    const notify = (status, message) => {
        if (status === 'success') {
            toast.success(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <>
            <div className={styles.Container}>
                <h1 className={styles.heading}>Add job description</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="companyName">Company Name </label>
                        <input type="text"
                            name='companyName'
                            id='companyName'
                            placeholder='Enter your company name here'
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="logoURL">Add logo URL</label>
                        <input type="text"
                            name='logoURL'
                            id='logoURL'
                            placeholder='Enter the link'
                            value={formData.logoURL}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="jobPosition">Job position</label>
                        <input type="text"
                            name='jobPosition'
                            id='jobPosition'
                            placeholder='Enter job position'
                            value={formData.jobPosition}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="monthlySalary">Monthly salary</label>
                        <input type="text"
                            name='monthlySalary'
                            id='monthlySalary'
                            placeholder='Enter Amount in rupees'
                            value={formData.monthlySalary}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="jobType">Job Type</label>
                        <select name="jobType" id="jobType"
                            value={formData.jobType}
                            onChange={handleChange}
                        >
                            <option value="" disabled >Select</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Intern">Intern</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="workModel">Remote/office</label>
                        <select name="workModel" id="workModel"
                            value={formData.workModel}
                            onChange={handleChange}
                        >
                            <option value="" disabled >Select</option>
                            <option value="Remote">Remote</option>
                            <option value="Office">Office</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="location">Location</label>
                        <input type="text"
                            name='location'
                            id='location'
                            placeholder='Enter Location'
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className={styles.alignTop} htmlFor="jobDescription">Job Description</label>
                        <textarea name="jobDescription" id="jobDescription"
                            placeholder='Type the job description'
                            cols="30" rows="10"
                            value={formData.jobDescription}
                            onChange={handleChange}
                        >
                        </textarea>
                    </div>
                    <div>
                        <label className={styles.alignTop} htmlFor="aboutCompany">About Company</label>
                        <textarea name="aboutCompany" id="aboutCompany"
                            placeholder='Type about your company'
                            cols="30" rows="10"
                            value={formData.aboutCompany}
                            onChange={handleChange}
                        >
                        </textarea>
                    </div>
                    <div>
                        <label htmlFor="skillsRequired">Skills Required</label>
                        <input type="text"
                            name='skillsRequired'
                            id='skillsRequired'
                            placeholder='Enter the must have skills'
                            value={formData.skillsRequired}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="additionalInfo">Information</label>
                        <input type="text"
                            name='additionalInfo'
                            id='additionalInfo'
                            placeholder='Enter the additional information'
                            value={formData.additionalInfo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.buttonsContainer}>
                        <button type="button" onClick={notify} className={styles.cancelBtn}>Cancel</button>
                        <button type="submit" className={styles.submitBtn}>+ Add Job</button>
                    </div>
                </form>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default AddJobForm