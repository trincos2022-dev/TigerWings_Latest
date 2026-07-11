import { Link } from "react-router-dom";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./DemoSuccess.css";

function DemoSuccess() {

  return (
    <>
      <Header />

      <main className="demo-success">
        <div className="demo-success__card">
          <div className="demo-success__icon">✓</div>

          <h1>Thank You!</h1>

          <p>
            Our admissions team will contact you shortly regarding your free
            demo class.
          </p>

          <Link to={import.meta.env.VITE_BASE_URL} className="demo-success__button">
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default DemoSuccess;