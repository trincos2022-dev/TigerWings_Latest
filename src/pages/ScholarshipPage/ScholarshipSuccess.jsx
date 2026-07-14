import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ScholarshipSuccess.css";

function ScholarshipSuccess() {
  return (
    <>
      <Header />

      <main className="scholarship-success">
        <div className="scholarship-success__card">
          <div className="scholarship-success__icon">✓</div>

          <h1>Thank You!</h1>

          <p>
            Our admissions team will contact you shortly regarding your
            scholarship.
          </p>

          <Link
            to={import.meta.env.VITE_BASE_URL}
            className="scholarship-success__button"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ScholarshipSuccess;
