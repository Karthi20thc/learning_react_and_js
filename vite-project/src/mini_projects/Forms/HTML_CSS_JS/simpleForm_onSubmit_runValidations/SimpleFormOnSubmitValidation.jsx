import React, { useState } from 'react'
import styles from './styles.module.css'

const SimpleFormOnSubmitValidation = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        gender: '',
        dob: '',
        country: '',
        terms: false
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const validate = () => {
        let newErrors = {}

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required"
        }

        if (!formData.email.includes("@")) {
            newErrors.email = "Invalid email"
        }

        if (formData.password.length < 6) {
            newErrors.password = "Password must be 6 characters"
        }

        if (!formData.gender) {
            newErrors.gender = "Select gender"
        }

        if (!formData.country) {
            newErrors.country = "Select country"
        }

        if (!formData.terms) {
            newErrors.terms = "Accept terms"
        }

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validate()
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted successfully", formData)
        }
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>

            <h2>Registration Form</h2>

            <div className={styles.eachForm}>
                <label>Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? styles.errorInput : ''}
                />
                {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
            </div>

            <div className={styles.eachForm}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.errorInput : ''}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>

            <div className={styles.eachForm}>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? styles.errorInput : ''}
                />
                {errors.password && <p className={styles.error}>{errors.password}</p>}
            </div>

            <div className={styles.eachForm}>
                <label>
                    <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                    />
                    I agree to terms
                </label>
                {errors.terms && <p className={styles.error}>{errors.terms}</p>}
            </div>

            <button type="submit">Submit</button>

        </form>
    )
}

export default SimpleFormOnSubmitValidation