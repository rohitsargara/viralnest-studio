import emailjs from 'emailjs-com';
import { useState } from 'react';
import '../components/ContactForm.css'; // <-- Add this line to link the CSS file

function ContactForm({ selectedService, selectedPlan }) {
    const [formData, setFormData] = useState({
        full_name: '',
        user_email: '',
        instagram_handle: '',
        project_description: '',
        selected_service: selectedService || '',
        selected_plan: selectedPlan || '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_hyg6szh',
            'template_bhj8bfq',
            formData,
            'D-VE3ImMNzfXOXRL5'
        )
            .then((result) => {
                console.log(result.text);
                setSubmitted(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    if (submitted) {
        return <h2 className="thank-you-message">Thank you! We have received your message.</h2>;
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
                <input type="text" name="full_name" placeholder="Full Name" onChange={handleChange} required className="form-input" />
                <input type="email" name="user_email" placeholder="Email" onChange={handleChange} required className="form-input" />
            </div>

            <input type="text" name="instagram_handle" placeholder="Instagram Handle" onChange={handleChange} className="form-input" />

            <textarea name="project_description" placeholder="Tell us about your project or query" onChange={handleChange} required className="form-textarea" />

            <div className="form-row">
                <select name="selected_service" value={formData.selected_service} onChange={handleChange} required className="form-select">
                    <option value="">-- Select a Service --</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Website Design & Development">Website Design & Development</option>
                    <option value="Video Editing">Video Editing</option>
                </select>

                <select name="selected_plan" value={formData.selected_plan} onChange={handleChange} required className="form-select">
                    <option value="">-- Select a Plan --</option>
                    <option value="Starter Plan">Starter Plan</option>
                    <option value="Growth Plan">Growth Plan</option>
                    <option value="Premium Brand Plan">Premium Brand Plan</option>
                </select>
            </div>

            <button type="submit" className="submit-button">Send Message</button>

            <p className="privacy-text">
                By clicking this button, you agree to the site's <a href="#">privacy policy</a> and consent to the processing of your personal data.
            </p>
        </form>
    );
}

export default ContactForm;
