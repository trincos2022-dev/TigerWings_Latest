import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ClockIcon, WalletIcon, BriefcaseIcon, CheckIcon, WhatsAppIcon, ArrowRightIcon } from '../icons/Icons';
import { usePopup } from '../../context/PopupContext';
import './CourseModal.css';

function CourseModal({ course, image, onClose }) {
  const { openScholarship } = usePopup();
  const d = course?.diploma;

  function handleApply() {
    onClose();
    openScholarship();
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!course || !d) return null;

  return createPortal(
    <div className="course-modal" role="dialog" aria-modal="true" aria-label={d.title} onClick={onClose}>
      <div className="course-modal__panel" onClick={(e) => e.stopPropagation()}>
       

        <div className="course-modal__hero" style={{ backgroundImage: `url(${image})` }}>
           <button type="button" className="course-modal__close" onClick={onClose} aria-label="Close">
          &times;
        </button>
          <div className="course-modal__hero-overlay">
            <span className="course-modal__badge">🏆 Industry-Recognized Diploma</span>
            <h3 className="course-modal__title">{d.title}</h3>
            <p className="course-modal__tagline">{d.tagline}</p>
          </div>
        </div>

        <div className="course-modal__body">
          <div className="course-modal__stats">
            <div className="course-modal__stat">
              <span className="course-modal__stat-label course-modal__stat-label--green">
                <ClockIcon size={15} color="#0a9940" /> Duration
              </span>
              <span className="course-modal__stat-value">{d.duration}</span>
            </div>
            <div className="course-modal__stat">
              <span className="course-modal__stat-label course-modal__stat-label--orange">
                <WalletIcon size={15} color="#f97316" /> Avg Salary
              </span>
              <span className="course-modal__stat-value">{d.salary}</span>
            </div>
            <div className="course-modal__stat">
              <span className="course-modal__stat-label course-modal__stat-label--blue">
                <BriefcaseIcon size={15} color="#2f80ed" /> Benefits
              </span>
              <span className="course-modal__stat-value">{d.benefit}</span>
            </div>
          </div>

          <p className="course-modal__description">{d.body}</p>

          <div className="course-modal__section">
            <h4 className="course-modal__subhead">Course Eligibility</h4>
            <ul className="course-modal__list">
              {d.eligibility.map((item) => (
                <li key={item}>
                  <CheckIcon size={18} color="#2f80ed" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="course-modal__section">
            <h4 className="course-modal__subhead">What You&rsquo;ll Learn</h4>
            <ol className="course-modal__learn">
              {d.learn.map((item, i) => (
                <li key={item}>
                  <span className="course-modal__num">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="course-modal__actions">
          <button type="button" className="btn btn-primary" onClick={handleApply}>
            Apply Now <ArrowRightIcon size={16} color="#0a2a66" />
          </button>
          <a
            href="https://wa.me/919003480888"
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp"
          >
            <WhatsAppIcon size={18} color="#fff" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default CourseModal;
