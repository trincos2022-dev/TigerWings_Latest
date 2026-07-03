import { WHY_CHOOSE_FEATURES } from '../../data/content';
import { MaximizeIcon } from '../icons/Icons';
import { usePopup } from '../../context/PopupContext';
import imgBuilding from '../../assets/figma/web/why-choose/img-rectangle101.png';
import imgReception from '../../assets/figma/web/why-choose/img-frame248.jpg';
import imgStudyGroup from '../../assets/figma/web/why-choose/img-frame249.png';
import imgClassroom from '../../assets/figma/web/why-choose/img-frame250.png';
import imgReview from '../../assets/figma/web/why-choose/img-whats-app-image20260630-at75657-pm1.jpg';
import iconAirplane from '../../assets/figma/web/why-choose/img-vuesax-linear-airplane.svg';
import './WhyChoose.css';

function WhyChoose() {
  const { openScholarship } = usePopup();

  return (
    <section className="why-choose section">
      <div className="container why-choose__row">
        <div className="why-choose__collage">
          <div className="why-choose__tall">
            <img src={imgBuilding} alt="Tiger Wings Aviation Academy campus" loading="lazy" />
          </div>
          <div className="why-choose__stack">
            <img src={imgReception} alt="Tiger Wings Aviation Academy reception" loading="lazy" />
            <img src={imgStudyGroup} alt="Aviation students in a briefing session" loading="lazy" />
            <img src={imgClassroom} alt="Aviation academy classroom" loading="lazy" />
          </div>
        </div>

        <div className="why-choose__content">
          <div className="why-choose__header">
            <h2>Why Choose Tiger Wings</h2>
            <p>A premium training experience designed to make you industry-ready from day one.</p>
          </div>

          <ul className="why-choose__list">
            {WHY_CHOOSE_FEATURES.map((feature) => (
              <li key={feature}>
                <img src={iconAirplane} alt="" aria-hidden="true" className="why-choose__list-icon" />
                {feature}
              </li>
            ))}
          </ul>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Tigers+Wings+Aviation+Academy+Guindy+Chennai"
            target="_blank"
            rel="noreferrer"
            className="why-choose__review"
            aria-label="Open Tigers Wings Aviation Academy location in Google Maps"
          >
            <img
              src={imgReview}
              alt="Tigers Wings — 5.0 rating from 12 Google reviews, aviation training institute in Chennai, Tamil Nadu"
              loading="lazy"
              className="why-choose__review-img"
            />
            <span className="why-choose__review-expand" aria-hidden="true">
              <MaximizeIcon size={14} color="#ffffff" />
            </span>
          </a>

          <button type="button" className="why-choose__cta" onClick={openScholarship}>
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
