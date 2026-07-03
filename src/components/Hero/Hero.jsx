import bgPlane from '../../assets/figma/web/hero/img-poster332.png';
import womanCutout from '../../assets/figma/web/hero/img-aadhira-v21.png';
import manCutout from '../../assets/figma/web/hero/img-arayan21.png';
import { CheckIcon, WhatsAppIcon, PhoneIcon } from '../icons/Icons';
import { HERO, NAV } from '../../data/content';
import DemoForm from './DemoForm';
import Stats from './Stats';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" style={{ backgroundImage: `url(${bgPlane})` }} aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__main">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-emoji" aria-hidden="true">⚡</span>
            {HERO.badge}
          </span>

          <h1 className="hero__heading">
            {HERO.headingLine1} <span className="hero__heading-highlight">{HERO.headingHighlight}</span>
          </h1>

          <p className="hero__subheading">{HERO.subheading}</p>

          <ul className="hero__features">
            {HERO.features.map((feature) => (
              <li key={feature}>
                <CheckIcon size={20} color="#ffc107" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="hero__ctas">
            <a
              href="https://wa.me/919003480888"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp hero__whatsapp"
            >
              <WhatsAppIcon size={18} color="#fff" />
              WhatsApp
            </a>
            <a href={`tel:${NAV.phone}`} className="btn btn-primary hero__call">
              <PhoneIcon size={18} color="#0a2a66" />
              Call Now
            </a>
          </div>
        </div>

        <div className="hero__people" aria-hidden="true">
          <img src={womanCutout} alt="" className="hero__person hero__person--woman" />
          <img src={manCutout} alt="" className="hero__person hero__person--man" />
        </div>
        </div>

        <div className="hero__form">
          <DemoForm />
        </div>
      </div>

      <Stats />
    </section>
  );
}

export default Hero;
