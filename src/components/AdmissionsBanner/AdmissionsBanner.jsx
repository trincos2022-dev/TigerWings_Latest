import bgImage from "../../assets/figma/web/admissions-banner/img-frame2147223316.webp";
import { WhatsAppIcon } from "../icons/Icons";
import { usePopup } from "../../context/PopupContext";
import "./AdmissionsBanner.css";

function AdmissionsBanner() {
  // const { openScholarship } = usePopup();
  const { triggerApplyNow } = usePopup();
  return (
    <section
      className="admissions"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(15,27,82,0.55) 0%, rgba(15,27,82,0.72) 55%, rgba(15,27,82,0.92) 100%), url(${bgImage})`,
      }}
    >
      <div className="container admissions__inner">
        <span className="admissions__label">About Tigers Wings</span>
        <span className="admissions__badge">🔥 Limited Seats Available</span>
        <h2 className="admissions__heading">Admissions Open — Batch 2026</h2>
        <p className="admissions__text">
          Don&rsquo;t miss your chance to fly high. Reserve your seat today and
          start your aviation journey.
        </p>
        <div className="admissions__actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={triggerApplyNow}
          >
            Apply Now
          </button>
          <a
            href="https://wa.me/917418314050"
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp"
          >
            <WhatsAppIcon size={18} color="#fff" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsBanner;
