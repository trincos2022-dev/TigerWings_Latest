import { TESTIMONIALS } from "../../data/content";
import { StarIcon, PlayIcon, QuoteIcon } from "../icons/Icons";
import avatarJayasree from "../../assets/figma/web/testimonials/img-image-with-fallback.png";
import avatarVithuzan from "../../assets/figma/web/testimonials/img-image-with-fallback2.png";
import videoThumb from "../../assets/figma/web/courses/img-arayan21.webp";
import logoIndigo from "../../assets/figma/web/testimonials/img-indigo-ns-big-bfe5-efa91.png";
import logoAirIndia from "../../assets/figma/web/testimonials/img-air-india2023-svg1.png";
import logoQatar from "../../assets/figma/web/testimonials/img-qatar-airways-logo-svg1.png";
import "./Testimonials.css";

const AVATARS = {
  fallback: avatarJayasree,
  fallback2: avatarVithuzan,
};

const AIRLINES = [logoIndigo, logoAirIndia, logoQatar];

function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow testimonials__eyebrow">
            Student Success Stories
          </span>
          <h2 className="testimonials__heading">Student Success Stories</h2>
          <p className="testimonials__subheading">
            From classroom to cockpit cabin — hear it from our alumni.
          </p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((item, idx) => (
            <div className="testimonial-card" key={item.name}>
              <div className="testimonial-card__top">
                <QuoteIcon size={34} color="#ffc107" />
                <img
                  src={AIRLINES[idx % AIRLINES.length]}
                  alt=""
                  className="testimonial-card__airline"
                  loading="lazy"
                />
              </div>
              <div className="testimonial-card__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} size={16} />
                ))}
              </div>
              <p className="testimonial-card__quote">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="testimonial-card__footer">
                {AVATARS[item.avatarKey] ? (
                  <img
                    src={AVATARS[item.avatarKey]}
                    alt={item.name}
                    className="testimonial-card__avatar"
                    loading="lazy"
                  />
                ) : (
                  <span className="testimonial-card__avatar testimonial-card__avatar--initial">
                    {item.name.charAt(0)}
                  </span>
                )}
                <div className="testimonial-card__person">
                  <span className="testimonial-card__name">{item.name}</span>
                  <span className="testimonial-card__role">{item.role}</span>
                </div>
              </div>
              <div className="testimonial-card__salary">
                Salary: {item.salary}
              </div>
            </div>
          ))}

          <div className="video-card">
            <img
              src={videoThumb}
              alt=""
              aria-hidden="true"
              className="video-card__bg"
              loading="lazy"
            />
            <div className="video-card__scrim" />

            <a href="https://youtube.com/shorts/0KVBPJf1fRw?si=unOHq3HpybhuCyD_"  target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="video-card__play"
                aria-label="Play success stories video"
              >
                <span className="video-card__pulse" />
                <span className="video-card__pulse video-card__pulse--delay" />
                <span className="video-card__play-btn">
                  <PlayIcon size={26} color="#0a2a66" />
                </span>
              </button>
            </a>

            <div className="video-card__footer">
              <div className="video-card__avatars"></div>
              <h3 className="video-card__title">Watch Success Stories</h3>
              <p className="video-card__text">
                See how our alumni are flying high across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
