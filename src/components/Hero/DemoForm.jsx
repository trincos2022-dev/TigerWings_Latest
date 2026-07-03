import { useState } from 'react';
import { UserIcon, PhoneIcon, MailIcon, ArrowRightIcon } from '../icons/Icons';
import './DemoForm.css';

const initialState = { name: '', mobile: '', email: '' };

function DemoForm() {
  const [values, setValues] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="demo-form" id="demo-class">
      <h3 className="demo-form__title">Book Your FREE Demo Class</h3>
      <p className="demo-form__subtitle">Experience our aviation training before you enroll.</p>

      {submitted ? (
        <div className="demo-form__success">
          Thank you! Our admissions team will contact you shortly.
        </div>
      ) : (
        <form className="demo-form__fields" onSubmit={handleSubmit}>
          <div className="demo-form__field">
            <span className="demo-form__icon"><UserIcon size={18} color="#62748e" /></span>
            <input
              className="demo-form__input"
              type="text"
              name="name"
              placeholder="Full Name"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="demo-form__field">
            <span className="demo-form__icon"><PhoneIcon size={18} color="#62748e" /></span>
            <input
              className="demo-form__input"
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              autoComplete="tel"
              value={values.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="demo-form__field">
            <span className="demo-form__icon"><MailIcon size={18} color="#62748e" /></span>
            <input
              className="demo-form__input"
              type="email"
              name="email"
              placeholder="Email ID"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary demo-form__submit">
            Submit Enquiry <ArrowRightIcon size={16} color="#0a2a66" />
          </button>
        </form>
      )}

      <p className="demo-form__disclaimer">By submitting, you agree to our Terms &amp; Privacy Policy</p>
    </div>
  );
}

export default DemoForm;
