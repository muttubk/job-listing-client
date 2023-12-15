import React, { useState } from 'react'
import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'

function LoginForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const validData = Object.keys(formData).every(data => formData[data].length !== 0)
        if (validData) {
            console.log(formData)
        }
        else {
            console.log('all fields are required')
            setError(true)
        }
    }

    return (
        <div className={styles.Container}>
            <h1 className={styles.heading1}>Already have an account?</h1>
            <p className={styles.heading2}>Your personal job finder is here</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ borderColor: error && !formData.email && "red" }}
                />
                {
                    error && !formData.email &&
                    <small className={styles.errorMessage}>Field is required</small>
                }
                <input className={styles.input}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ borderColor: error && !formData.password && "red" }}
                />
                {
                    error && !formData.password &&
                    <small className={styles.errorMessage}>Field is required</small>
                }
                <Button value={"Sign in"} styles={{ width: "200px", marginTop: "15px" }} />
            </form>
            <p className={styles.signUp}>Don’t have an account? <Link to='/register' className={styles.signUpLink}>Sign Up</Link></p>
        </div>
    )
}

export default LoginForm
