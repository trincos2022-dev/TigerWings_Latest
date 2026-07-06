import logoLight from '../../assets/figma/web/footer/img-image8.png';
import { MailIcon, PhoneIcon, MapPinIcon, InstagramIcon, LinkedInIcon, FacebookIcon } from '../icons/Icons';
import { FOOTER } from '../../data/content';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <img src={logoLight} alt="Tiger Wings Aviation Academy" className="footer__logo" />

          <div className="footer__contact">
            <div className="footer__contact-item">
              <span className="footer__contact-icon"><MailIcon size={18} /></span>
              <span className="footer__contact-text">
                <span className="footer__contact-label">Mail us to</span>
                <a href={`mailto:${FOOTER.email}`}>{FOOTER.email}</a>
              </span>
            </div>

            <span className="footer__contact-divider" />

            <div className="footer__contact-item">
              <span className="footer__contact-icon"><PhoneIcon size={18} /></span>
              <span className="footer__contact-text">
                <span className="footer__contact-label">Give us a call</span>
                <a href={`tel:${FOOTER.phone}`}>{FOOTER.phone}</a>
              </span>
            </div>

            <span className="footer__contact-divider" />

            <div className="footer__contact-item">
              <span className="footer__contact-icon"><MapPinIcon size={18} /></span>
              <span className="footer__contact-text">
                <span className="footer__contact-label">Visit our office</span>
                <span>{FOOTER.address}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="footer__divider" />


        <div className="footer__bottom">


          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>

            <div className="footer__social">
              <a href="#" aria-label="Instagram"><InstagramIcon size={18} /></a>
              <a href="#" aria-label="LinkedIn"><LinkedInIcon size={18} /></a>
              <a href="#" aria-label="Facebook"><FacebookIcon size={18} /></a>
            </div>

            <div className="footer__legal">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Cookies</a>
              <span>|</span>
              <a href="#">Terms of use</a>
            </div>

          </div>


          <span className="footer__copyright">&copy; 2026 Tiger Wings Aviation.</span>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
