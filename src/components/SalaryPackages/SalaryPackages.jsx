import { SALARY_PACKAGES } from '../../data/content';
import { TrendingUpIcon } from '../icons/Icons';
import './SalaryPackages.css';

function SalaryPackages() {
  return (
    <section className="salary section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Career Earnings</span>
          <h2>Salary Packages</h2>
          <p>Real average monthly packages our students are earning today.</p>
        </div>

        <div className="salary__grid">
          {SALARY_PACKAGES.map((pkg) => (
            <div
              className="salary-card"
              key={pkg.title}
              style={{ background: pkg.gradient || 'var(--navy)' }}
            >
              <span className="salary-card__icon">
                <TrendingUpIcon size={20} color="#ffc107" />
              </span>
              <h3 className="salary-card__title">{pkg.title}</h3>
              <p className="salary-card__range">{pkg.range}</p>
              <span className="salary-card__unit">per month</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SalaryPackages;
