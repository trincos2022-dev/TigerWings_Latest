import womanCutout from "../../assets/figma/web/hero/img-aadhira-v21.png";
import manCutout from "../../assets/figma/web/hero/img-arayan21.png";
import { CheckIcon, WhatsAppIcon, PhoneIcon } from "../icons/Icons";
import { HERO, NAV } from "../../data/content";
import DemoForm from "./DemoForm";
import Stats from "./Stats";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__main">
          <div className="hero__content">
            <span className="hero__badge">
              <span className="hero__badge-emoji" aria-hidden="true">
                ⚡
              </span>
              {HERO.badge}
            </span>

            <h1 className="hero__heading">
              {HERO.headingLine1}{" "}
              <span className="hero__heading-highlight">
                {HERO.headingHighlight}
              </span>
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
              <a
                href={`tel:${NAV.phone}`}
                className="btn btn-primary hero__call"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9535 11.5267C13.9535 11.7667 13.9001 12.0133 13.7868 12.2533C13.6735 12.4933 13.5268 12.72 13.3335 12.9333C13.0068 13.2933 12.6468 13.5533 12.2401 13.72C11.8401 13.8867 11.4068 13.9733 10.9401 13.9733C10.2601 13.9733 9.53347 13.8133 8.7668 13.4867C8.00014 13.16 7.23347 12.72 6.47347 12.1667C5.7068 11.6067 4.98014 10.9867 4.2868 10.3C3.60014 9.60668 2.98014 8.88002 2.4268 8.12002C1.88014 7.36002 1.44014 6.60002 1.12014 5.84668C0.800137 5.08668 0.640137 4.36001 0.640137 3.66668C0.640137 3.21335 0.720137 2.78001 0.880137 2.38001C1.04014 1.97335 1.29347 1.60001 1.6468 1.26668C2.07347 0.846681 2.54014 0.640015 3.03347 0.640015C3.22014 0.640015 3.4068 0.680015 3.57347 0.760015C3.7468 0.840015 3.90014 0.960015 4.02014 1.13335L5.5668 3.31335C5.6868 3.48001 5.77347 3.63335 5.83347 3.78001C5.89347 3.92001 5.9268 4.06001 5.9268 4.18668C5.9268 4.34668 5.88014 4.50668 5.7868 4.66001C5.70014 4.81335 5.57347 4.97335 5.41347 5.13335L4.9068 5.66001C4.83347 5.73335 4.80014 5.82002 4.80014 5.92668C4.80014 5.98002 4.8068 6.02668 4.82014 6.08001C4.84014 6.13335 4.86014 6.17335 4.87347 6.21335C4.99347 6.43335 5.20014 6.72002 5.49347 7.06668C5.79347 7.41335 6.11347 7.76668 6.46014 8.12002C6.82014 8.47335 7.1668 8.80001 7.52014 9.10001C7.8668 9.39335 8.15347 9.59335 8.38014 9.71335C8.41347 9.72668 8.45347 9.74668 8.50014 9.76668C8.55347 9.78668 8.6068 9.79335 8.6668 9.79335C8.78014 9.79335 8.8668 9.75335 8.94014 9.68002L9.4468 9.18002C9.61347 9.01335 9.77347 8.88668 9.9268 8.80668C10.0801 8.71335 10.2335 8.66668 10.4001 8.66668C10.5268 8.66668 10.6601 8.69335 10.8068 8.75335C10.9535 8.81335 11.1068 8.90002 11.2735 9.01335L13.4801 10.58C13.6535 10.7 13.7735 10.84 13.8468 11.0067C13.9135 11.1733 13.9535 11.34 13.9535 11.5267Z"
                    stroke="#0A2A66"
                    stroke-width="1.28"
                    stroke-miterlimit="10"
                  />
                </svg>
                Call Now
              </a>
            </div>
          </div>

          <div className="hero__people" aria-hidden="true">
            <img
              src={womanCutout}
              alt=""
              className="hero__person hero__person--woman"
            />
            <img
              src={manCutout}
              alt=""
              className="hero__person hero__person--man"
            />
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
