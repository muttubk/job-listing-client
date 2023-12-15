import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './RegisterForm.module.css'

import Button from '../../components/button/Button'
import axios from 'axios'

function RegisterForm() {
    const initialFormData = {
        fullName: '',
        email: '',
        mobile: '',
        password: '',
    }
    const [formData, setFormData] = useState(initialFormData)
    const [termsAgreed, setTermsAgreed] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validData = Object.keys(formData).every(data => formData[data].length !== 0)
        if (validData && termsAgreed) {
            // console.log(formData)
            try {
                const response = await axios.post("http://localhost:4000/user/register", formData)
                const data = response.data
                // console.log(data)
                localStorage.setItem('jwtoken', data.jwtoken)
                localStorage.setItem('recruiterName', data.recruiterName)
                navigate('/main')
            } catch (error) {
                console.log(error)
            }
        }
        else {
            console.log('All fields are required')
            setError(true)
        }
    }

    return (
        <div className={styles.Container}>
            <h1 className={styles.heading1}>Create an account</h1>
            <p className={styles.heading2}>Your personal job finder is here</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input}
                    type="text"
                    name='fullName'
                    placeholder='Name'
                    id='fullName'
                    value={formData.fullName}
                    onChange={handleChange}
                    style={{ borderColor: error && !formData.fullName && "red" }}
                />
                {
                    error && !formData.fullName &&
                    <small className={styles.errorMessage}>Field is required</small>
                }
                <input className={styles.input}
                    type="email"
                    name='email'
                    placeholder='Email'
                    id='email'
                    value={formData.email}
                    onChange={handleChange}
                    style={{ borderColor: error && !formData.email && "red" }}
                />
                {
                    error && !formData.email &&
                    <small className={styles.errorMessage}>Field is required</small>
                }
                <input className={styles.input}
                    type="text"
                    name='mobile'
                    placeholder='Mobile'
                    id='mobile'
                    value={formData.mobile}
                    onChange={handleChange}
                    maxLength={10}
                    style={{ borderColor: error && !formData.mobile && "red" }}
                />
                {
                    error && !formData.mobile &&
                    <small className={styles.errorMessage}>Field is required</small>
                }
                <input className={styles.input}
                    type="password"
                    name="password"
                    placeholder='Password'
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ borderColor: error && !formData.password && "red" }}
                />
                {
                    error && !formData.password &&
                    <small className={styles.errorMessage}>Field is required</small>
                }
                <label htmlFor="terms" className={styles.termsLabel}>
                    <input className={styles.terms}
                        type="checkbox"
                        name="terms"
                        id="terms"
                        checked={termsAgreed}
                        onChange={() => setTermsAgreed(!termsAgreed)}
                    />
                    <span className={styles.checkmark}></span>
                    By creating an account, I agree to our terms of use and privacy policy
                </label>
                {
                    error && !termsAgreed &&
                    <small className={styles.errorMessage}>Field is required</small>
                }
                {/* <input className={styles.createBtn} type="button" value="Create Account" /> */}
                <Button value={"Create Account"} styles={{ width: "200px" }} />
            </form>
            <p className={styles.signIn}>Already have an account? <Link to="/" className={styles.signInLink}>Sign in</Link></p>
        </div>
    )
}

export default RegisterForm