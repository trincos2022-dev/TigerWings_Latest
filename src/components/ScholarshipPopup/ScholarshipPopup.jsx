import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowRightIcon, PhoneIcon, ClockIcon } from "../icons/Icons";
import "./ScholarshipPopup.css";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

const START_SECONDS = 10 * 60 - 10; // 09:50
const BASE_URL = import.meta.env.VITE_BASE_URL;

function format(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function ScholarshipPopup({ onClose }) {
  const navigate = useNavigate();
  const [remaining, setRemaining] = useState(START_SECONDS);
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((r) => (r > 0 ? r - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("scholarship_training_enquiries")
      .insert([
        {
          mobile: `+91${mobile}`,
        },
      ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    
    setSubmitted(true);
    navigate(`${BASE_URL}/demo-success`);
  }

  return createPortal(
    <div
      className="scholarship"
      role="dialog"
      aria-modal="true"
      aria-label="Claim Your Aviation Scholarship"
      onClick={onClose}
    >
      <div
        className="scholarship__panel"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="scholarship__close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <div className="scholarship__head">
          <div className="scholarship__head-top">
            <span className="scholarship__cap" aria-hidden="true">
              🎓
            </span>
            <span className="scholarship__offer">✨ Limited Time Offer</span>
          </div>
          <h3 className="scholarship__title">
            Claim Your Aviation Scholarship
          </h3>
          <p className="scholarship__subtitle">
            Get up to <strong>50% Scholarship</strong> for the upcoming batch.
            Limited seats available!
          </p>
          <div className="scholarship__timer">
            <ClockIcon size={16} color="#ffffff" />
            <span>Offer expires in</span>
            <strong>{format(remaining)}</strong>
          </div>
        </div>

        <div className="scholarship__body">
          <form onSubmit={handleSubmit}>
            <label className="scholarship__label" htmlFor="scholarship-mobile">
              Mobile Number
            </label>
            <div className="scholarship__field">
              <span className="scholarship__prefix">
                <PhoneIcon size={16} color="#62748e" /> +91
              </span>
              <input
                id="scholarship-mobile"
                className="scholarship__input"
                type="tel"
                inputMode="numeric"
                placeholder="Enter 10-digit mobile number"
                autoComplete="tel"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                required
                pattern="[0-9]{10}"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary scholarship__submit"
              disabled={loading}
            >
              {loading ? (
                "Submitting..."
              ) : (
                <>
                  Claim Scholarship
                  <ArrowRightIcon size={16} color="#0a2a66" />
                </>
              )}
            </button>
          </form>

          <p className="scholarship__note">
            🔒 100% safe. No spam. We&rsquo;ll call you within 15 minutes.
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ScholarshipPopup;
