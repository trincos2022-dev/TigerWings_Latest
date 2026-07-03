import { useState } from 'react';
import logoMark from '../../assets/figma/web/navbar/img-group.svg';
import { PhoneIcon, LandingPlaneIcon } from '../icons/Icons';
import { NAV } from '../../data/content';
import { usePopup } from '../../context/PopupContext';
import './Navbar.css';

function Navbar() {
  const { openScholarship } = usePopup();
  const [isLaunching, setIsLaunching] = useState(false);

  const handleApplyClick = () => {
    if (isLaunching) return;
    setIsLaunching(true);
    // Let the plane "fly" across the button before the popup opens
    window.setTimeout(() => {
      openScholarship();
      setIsLaunching(false);
    }, 420);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo" aria-label="Tigers Wings Aviation Academy">
          <img src={logoMark} alt="Tigers Wings" className="navbar__logo-mark" />
          <span className="navbar__logo-sub">Aviation Academy</span>
        </a>

        <div className="navbar__actions">
          <a href={`tel:${NAV.phone}`} className="navbar__phone">
            <span className="navbar__phone-badge">
              <PhoneIcon size={15} color="#fff" />
            </span>
            {NAV.phone}
          </a>
          <button
            type="button"
            className={`navbar__cta${isLaunching ? ' navbar__cta--launching' : ''}`}
            onClick={handleApplyClick}
          >
            <span className="navbar__cta-badge">
              <LandingPlaneIcon size={15} color="#0a2a66" className="navbar__cta-icon" />
            </span>
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
