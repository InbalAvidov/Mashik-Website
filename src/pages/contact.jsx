import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';


export function Contact() {

    const [formValues, setFormValues] = useState({ fullName: "", email: "", phone: "", msg: "" })
    const [errors, setErrors] = useState({ fullName: "", email: "", phone: "No phone", msg: "Contact me back please" })

    function handleChange({ target }) {
        const { name: field, value } = target
        console.log(formValues)
        setFormValues((prevValues) => ({ ...prevValues, [field]: value }))
        checkErrors()
    }

    function checkErrors() {
        if (!formValues.fullName) {
            setErrors((prevErrors) => ({ ...prevErrors, fullName: 'Required' }))
        } else setErrors((prevErrors) => ({ ...prevErrors, fullName: '' }))
        if (!formValues.email) {
            console.log('formValues.email:', formValues.email)
            console.log('formValues:', formValues)
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Required' }))

        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }))
        } else setErrors((prevErrors) => ({ ...prevErrors, email: '' }))
    }

    function sendEmail(ev) {
        console.log(formValues)
        ev.preventDefault()
        if (window.Email) {
            window.Email.send({
                SecureToken: '8c7923e2-a05e-4970-aa7a-206215e0299c',
                To: 'shaieyal@yopmail.com',
                From: formValues.email,
                Subject: "Contact from website",
                Body: formValues.msg + ' ' + formValues.fullName + ' - ' + formValues.phone
            }).then(msg => {
                alert(msg)
                setFormValues({ fullName: "", email: "", phone: "", msg: "" })
            }
            )
        }


    }
    return (
        <main className="contact">
            <div className="contact-container">
                <form className="form">
                    <label>שם מלא</label>
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            value={formValues.fullName || ''}
                            onChange={handleChange}
                        />
                        <p className='error-msg'>{errors.fullName || ''}</p>
                    </div>
                    <label>מייל</label>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formValues.email || ''}
                            onChange={handleChange}
                        />
                        <p className='error-msg'>{errors.email || ''}</p>
                    </div>
                    <label>טלפון</label>
                    <input
                        type="text"
                        name="phone"
                        value={formValues.phone || ''}
                        onChange={handleChange}
                    />
                    <label>הודעה</label>
                    <input
                        className="text-box"
                        type="text"
                        name="msg"
                        value={formValues.msg || ''}
                        onChange={handleChange}
                    />
                </form>
                <button type="submit" onClick={sendEmail}>שלח
                </button>
            </div>

            <div className="contact-container">
                <p>
                    רחוב יוני נתניהו 3  ,  אור-יהודה
                </p>
                <p>
                    מיקוד  6037602
                </p>
                <p>
                    טלפון 1 : 03-5334926
                </p>
                <p>
                    טלפון 2 : 054-2045622
                </p>
                <p>
                    פקס : 03-5334904
                </p>
                <p>
                    דוא"ל : shai@mashik-eng.co.il
                </p>
            </div>

        </main>
    )
}