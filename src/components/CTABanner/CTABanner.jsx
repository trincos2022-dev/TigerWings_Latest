import bgImage from '../../assets/figma/web/ctabanner/img-low-angle-view-of-amodern-airplane20260325002148-utc1.png';
import tiltedPlane from '../../assets/figma/web/ctabanner/img-plane-tilted.png';
import { ArrowRightIcon } from '../icons/Icons';
import { usePopup } from '../../context/PopupContext';
import './CTABanner.css';

function CTABanner() {
  const { openScholarship } = usePopup();
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <img src={bgImage} alt="" aria-hidden="true" className="cta-banner__plane cta-banner__plane--mobile" />
        <div className="cta-banner__content">
          <h2 className="cta-banner__heading">Turn Your Passion for Aviation into a Successful Career</h2>
          <p className="cta-banner__text">
            Build a rewarding career in aviation with Tiger Wings. Gain industry-ready skills through expert
            training, hands-on learning, and dedicated placement support with leading airlines and airport
            organizations.
          </p>
          <button type="button" className="cta-banner__button" onClick={openScholarship}>
            Claim 50% Scholarship <ArrowRightIcon size={18} color="#0a2a66" />
          </button>
        </div>
      </div>
      <img src={tiltedPlane} alt="" aria-hidden="true" className="cta-banner__plane cta-banner__plane--desktop" />
      {/* <img src={bgImage} alt="" aria-hidden="true" className="cta-banner__plane cta-banner__plane--mobile" /> */}
    </section>
  );
}

export default CTABanner;
