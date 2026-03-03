import React from 'react'
import styles from './styles.module.css'

const SimpleForm = () => {
    return (
        <form className={styles.formContainer}>

            <h2>Registration Form</h2>

            <div className={styles.eachForm}>
                <label for="fullName">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                />
            </div>


            <div className={styles.eachForm}>
                <label for="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />
            </div>


            <div className={styles.eachForm}>
                <label for="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    minlength="6"
                    required
                />
            </div>


            <div className={styles.eachForm}>
                <label>Gender</label>
                <div>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label for="male">Male</label>

                    <input type="radio" id="female" name="gender" value="female" />
                    <label for="female">Female</label>
                </div>
            </div>


            <div className={styles.eachForm}>
                <label for="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" />
            </div>

            <div className={styles.eachForm}>
                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="">Select Country</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                </select>
            </div>


            <div className={styles.eachForm}>
                <input type="checkbox" id="terms" name="terms" required />
                <label for="terms">I agree to the terms and conditions</label>
            </div>


            <div className={styles.eachForm}>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </div>

        </form>
    )
}

export default SimpleForm