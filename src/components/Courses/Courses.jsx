import { useState } from 'react';
import { COURSES } from '../../data/content';
import { CapBadgeIcon, WalletIcon, ClockIcon, ArrowRightIcon } from '../icons/Icons';
import CourseModal from './CourseModal';
import imgCabinCrew from '../../assets/figma/web/courses/img-image-with-fallback2.webp';
import imgGroundStaff from '../../assets/figma/web/courses/img-image-with-fallback1.webp';
import imgFlightDispatch from '../../assets/figma/web/courses/img-image-with-fallback3.webp';
import imgPilotTraining from '../../assets/figma/web/courses/img-image-with-fallback4.webp';
import imgRtrTraining from '../../assets/figma/web/courses/img-image-with-fallback5.webp';
import './Courses.css';

const COURSE_IMAGES = {
  'cabin-crew': imgCabinCrew,
  'ground-staff': imgGroundStaff,
  'flight-dispatch': imgFlightDispatch,
  'pilot-training': imgPilotTraining,
  'rtr-training': imgRtrTraining,
};

function Courses() {
  const [activeCourse, setActiveCourse] = useState(null);

  return (
    <section className="courses section" id="courses">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Courses</span>
          <h2>Aviation Courses</h2>
          <p>Industry-aligned curriculum designed to prepare you for global aviation careers.</p>
        </div>

        <div className="courses__grid">
          {COURSES.map((course) => (
            <article className="course-card" key={course.id}>
              <div className="course-card__image-wrap">
                <img
                  src={COURSE_IMAGES[course.id]}
                  alt={course.title}
                  className="course-card__image"
                  loading="lazy"
                />
              </div>
              <div className="course-card__body">
                <h2 className="course-card__title">{course.title}</h2>

                <dl className="course-card__meta">
                  <div className="course-card__meta-row">
                    <dt><CapBadgeIcon size={16} color="#2f80ed" /> Eligibility</dt>
                    <dd>{course.eligibility}</dd>
                  </div>
                  <div className="course-card__meta-row">
                    <dt><WalletIcon size={16} color="#E53935" /> Salary</dt>
                    <dd>{course.salary}</dd>
                  </div>
                  <div className="course-card__meta-row">
                    <dt><ClockIcon size={16} color="#0A9940" /> Duration</dt>
                    <dd>{course.duration}</dd>
                  </div>
                </dl>

                <div className="course-card__actions">
                  <button
                    type="button"
                    className="btn btn-navy btn-sm course-card__cta"
                    onClick={() => setActiveCourse(course)}
                  >
                    View Details <ArrowRightIcon size={14} color="#fff" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeCourse && (
        <CourseModal
          course={activeCourse}
          image={COURSE_IMAGES[activeCourse.id]}
          onClose={() => setActiveCourse(null)}
        />
      )}
    </section>
  );
}

export default Courses;
