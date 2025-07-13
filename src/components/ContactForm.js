import emailjs from 'emailjs-com';
import { useState } from 'react';
import '../components/ContactForm.css';

import Modal from './Modal';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';

function ContactForm({ selectedService, selectedPlan }) {
  const [formData, setFormData] = useState({
    full_name: '',
    user_email: '',
    instagram_handle: '',
    project_description: '',
    selected_service: selectedService || '',
    selected_plan: selectedPlan || '',
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.agreed) return;

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
    <>
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

        <div className="checkbox-section">
          <input
            type="checkbox"
            id="agreement"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="agreement">
            I agree to the{" "}
            <span className="link-text" onClick={() => setShowPrivacy(true)}>
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="link-text" onClick={() => setShowTerms(true)}>
              Terms & Conditions
            </span>
          </label>
        </div>

        <button type="submit" className="submit-button" disabled={!isChecked}>
          Send Message
        </button>
      </form>

      {/* Modals */}
      <Modal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)}>
        <PrivacyPolicy />
      </Modal>

      <Modal isOpen={showTerms} onClose={() => setShowTerms(false)}>
        <TermsAndConditions />
      </Modal>
    </>
  );
}

export default ContactForm;