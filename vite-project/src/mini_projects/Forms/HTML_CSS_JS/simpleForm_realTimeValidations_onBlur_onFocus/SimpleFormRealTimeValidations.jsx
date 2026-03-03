import React, { useState } from 'react'
import styles from './styles.module.css'

// | Event      | When it runs           | When to use                                         |
// | ---------- | ---------------------- | --------------------------------------------------- |
// | `onChange` | Every keystroke        | Real-time validation                                |
// | `onBlur`   | When input loses focus | Show error after user leaves field (most common UX) |
// | `onFocus`  | When input gets focus  | Usually used to clear error                         |

const SimpleFormRealTimeValidations = () => {

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

    // --------------------
    // Handle Change
    // --------------------
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        const updatedValue = type === 'checkbox' ? checked : value

        setFormData(prev => ({
            ...prev,
            [name]: updatedValue
        }))
    }

    // --------------------
    // Field Validation
    // --------------------
    const validateField = (name, value) => {
        let error = ''

        switch (name) {
            case 'fullName':
                if (!value.trim())
                    error = 'Full name is required'
                break

            case 'email':
                if (!/\S+@\S+\.\S+/.test(value))
                    error = 'Invalid email address'
                break

            case 'password':
                if (value.length < 6)
                    error = 'Password must be at least 6 characters'
                break

            case 'gender':
                if (!value)
                    error = 'Select gender'
                break

            case 'country':
                if (!value)
                    error = 'Select country'
                break

            case 'terms':
                if (!value)
                    error = 'You must accept terms'
                break

            default:
                break
        }

        setErrors(prev => ({
            ...prev,
            [name]: error
        }))
    }

    // --------------------
    // On Blur (Validate field)
    // --------------------
    const handleBlur = (e) => {
        const { name, type, checked, value } = e.target
        validateField(name, type === 'checkbox' ? checked : value)
    }

    // --------------------
    // On Focus (Clear error)
    // --------------------
    const handleFocus = (e) => {
        const { name } = e.target
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }))
    }

    // --------------------
    // Validate All (On Submit)
    // --------------------
    const validateAll = () => {
        let newErrors = {}

        Object.keys(formData).forEach((key) => {
            let value = formData[key]
            let error = ''

            switch (key) {
                case 'fullName':
                    if (!value.trim())
                        error = 'Full name is required'
                    break

                case 'email':
                    if (!/\S+@\S+\.\S+/.test(value))
                        error = 'Invalid email address'
                    break

                case 'password':
                    if (value.length < 6)
                        error = 'Password must be at least 6 characters'
                    break

                case 'gender':
                    if (!value)
                        error = 'Select gender'
                    break

                case 'country':
                    if (!value)
                        error = 'Select country'
                    break

                case 'terms':
                    if (!value)
                        error = 'You must accept terms'
                    break

                default:
                    break
            }

            if (error) newErrors[key] = error
        })

        return newErrors
    }

    // --------------------
    // Submit
    // --------------------
    const handleSubmit = (e) => {
        e.preventDefault()

        const validationErrors = validateAll()
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            console.log('Form Submitted Successfully:', formData)
            alert('Form submitted successfully!')
        }
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>

            <h2>Registration Form</h2>

            {/* Full Name */}
            <div className={styles.eachForm}>
                <label>Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    className={errors.fullName ? styles.errorInput : ''}
                />
                {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div className={styles.eachForm}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    className={errors.email ? styles.errorInput : ''}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>

            {/* Password */}
            <div className={styles.eachForm}>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    className={errors.password ? styles.errorInput : ''}
                />
                {errors.password && <p className={styles.error}>{errors.password}</p>}
            </div>

            {/* Gender */}
            <div className={styles.eachForm}>
                <label>Gender</label>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    /> Male

                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    /> Female
                </div>
                {errors.gender && <p className={styles.error}>{errors.gender}</p>}
            </div>

            {/* Country */}
            <div className={styles.eachForm}>
                <label>Country</label>
                <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.country ? styles.errorInput : ''}
                >
                    <option value="">Select Country</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                </select>
                {errors.country && <p className={styles.error}>{errors.country}</p>}
            </div>

            {/* Terms */}
            <div className={styles.eachForm}>
                <label>
                    <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    I agree to terms
                </label>
                {errors.terms && <p className={styles.error}>{errors.terms}</p>}
            </div>

            <button type="submit">Submit</button>

        </form>
    )
}

export default SimpleFormRealTimeValidations