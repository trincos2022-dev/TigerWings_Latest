import faq_1 from "../assets/figma/web/faq/faq-1.png"
import faq_2 from "../assets/figma/web/faq/faq-2.jpg"
import faq_3 from "../assets/figma/web/faq/faq-3.png"
import faq_4 from "../assets/figma/web/faq/faq-4.jpg"
import faq_5 from "../assets/figma/web/faq/faq-5.png"

export const NAV = {
  phone: '9003480888',
};

export const HERO = {
  badge: 'July Batch Filling Fast – Only 18 Seats Left, Scholarships Closing Soon',
  headingLine1: 'Launch Your Career in',
  headingHighlight: 'Aviation',
  subheading: 'Airport Ground Staff  |  Cabin Crew  |  Flight Dispatcher  |  Pilot Training  |  Airline Customer Service.',
  features: [
    '100% Placement Assistance',
    'Industry Expert Trainers',
    'Interview Preparation',
    'Airport Practical Training',
  ],
};

export const STATS = [
  { value: '12,000+', label: 'Students Trained' },
  { value: '850+', label: 'Students Placed' },
  { value: '15+', label: 'Hiring Airline Partners' },
  { value: '100%', label: 'Placement Assistance' },
];

// Grid card meta uses the main-page course-card values; `diploma` holds the
// "View Details" detail-card content, matching the Figma prototype overlays.
export const COURSES = [
  {
    id: 'cabin-crew',
    title: 'Cabin Crew / Air Hostess',
    eligibility: '12th Pass',
    salary: '₹50K - ₹80K/mo',
    duration: '6 to 12 Months',
    diploma: {
      title: 'Diploma in Cabin Crew',
      tagline: 'Turn Your Passion for Travel into a Professional Aviation Career',
      duration: '6 Months',
      salary: '₹35K – ₹70K/month',
      benefit: 'Placement Support',
      body: 'The Diploma in Cabin Crew is designed to equip aspiring aviation professionals with the knowledge, confidence, and practical skills required to work as cabin crew with domestic and international airlines. The course focuses on passenger safety, in-flight service, grooming, communication, emergency procedures, aviation regulations, and customer service excellence, preparing students for a dynamic career in the airline industry.',
      eligibility: [
        '10+2 (Higher Secondary) or Equivalent',
        'Freshers are welcome to apply',
        'Diploma or Any Degree Holders are also eligible',
        'Good communication skills and a positive attitude are an advantage',
      ],
      learn: [
        'Cabin Crew Roles & Responsibilities',
        'Aviation Safety & Emergency Procedures',
        'In-Flight Passenger Service',
        'Grooming & Professional Etiquette',
        'Airline Hospitality Standards',
        'Communication & Soft Skills',
        'First Aid & Safety Awareness',
        'Personality Development',
        'Interview Preparation',
      ],
    },
  },
  {
    id: 'ground-staff',
    title: 'Airport Ground Staff',
    eligibility: '10th/12th Pass',
    salary: '₹30K - ₹45K/mo',
    duration: '3 to 6 Months',
    diploma: {
      title: 'Diploma in Airport Ground Staff',
      tagline: "Build a Rewarding Career on the Ground at India's Top Airports",
      duration: '6 Months',
      salary: '₹20K – 35K/month',
      benefit: 'Placement Support',
      body: 'The Diploma in Airport Ground Handling is designed to prepare students with the practical knowledge and industry-relevant skills required for airport and airline operations. The program covers passenger handling, airport procedures, airline operations, customer service, baggage handling, aviation safety, airport security awareness, and professional communication to help students understand how airports operate efficiently.',
      eligibility: [
        '10+2 (Higher Secondary) or Equivalent',
        'Freshers are welcome to apply',
        'Good English communication is an advantage',
      ],
      learn: [
        'Airport Operations & Terminal Management',
        'Check-in & Boarding Procedures',
        'Baggage Handling & Reconciliation',
        'Ramp & Apron Services',
        'Passenger Handling & Assistance',
        'Aviation Security (AVSEC)',
        'Customer Service Excellence',
        'Computer Reservation Systems',
        'Interview Preparation',
      ],
    },
  },
  {
    id: 'flight-dispatch',
    title: 'Flight Dispatcher',
    eligibility: '12th Pass',
    salary: '₹80K - ₹1.25L/mo',
    duration: '6 to 12 Months',
    diploma: {
      title: 'Diploma in Flight Dispatch',
      tagline: 'Master the Science Behind Every Safe Flight',
      duration: '6 Months',
      salary: '₹25K – ₹50K/month',
      benefit: 'Placement Support',
      body: 'The Diploma in Flight Dispatch provides a strong foundation in airline operations and flight planning. Students learn how flights are planned safely and efficiently by understanding weather analysis, flight routing, aircraft performance, fuel planning, aviation regulations, airport operations, and operational documentation. The course is designed to develop analytical and decision-making skills essential for aviation operations.',
      eligibility: [
        '10+2 (Higher Secondary) or Equivalent',
        'Freshers and aviation enthusiasts are welcome to apply',
        'Diploma or Any Degree Holders are also eligible',
      ],
      learn: [
        'Introduction to Flight Dispatch',
        'Flight Planning & Route Analysis',
        'Aviation Meteorology',
        'NOTAM & Aeronautical Information',
        'Fuel Planning Fundamentals',
        'Aircraft Performance Basics',
        'Aviation Regulations & Operations',
        'Weight & Balance Fundamentals',
        'Operational Documentation',
        'Communication & Professional Skills',
      ],
    },
  },
  {
    id: 'pilot-training',
    title: 'Pilot Training',
    eligibility: '12th/Graduate Pass',
    salary: '₹1.5L - ₹2.5L/mo',
    duration: '1 Year',
    diploma: {
      title: 'Diploma in Commercial Pilot Training',
      tagline: 'Take Command of the Cockpit and Earn Your Wings',
      duration: '1 Year',
      salary: '₹1L – 2L/month',
      benefit: 'Placement Support',
      body: 'The Diploma in Commercial Pilot Training builds a strong foundation in aviation theory and flying fundamentals. Students master air navigation, meteorology, air regulations, aircraft technical knowledge, and flight planning while preparing for the DGCA CPL ground examinations and simulator familiarization required to begin a professional flying career.',
      eligibility: [
        '10+2 (Higher Secondary) with Physics and Mathematics',
        'Freshers and aviation enthusiasts are welcome to apply',
        'Valid Class II / Class I Medical Certificate (as applicable)',
        'Good communication skills in English',
      ],
      learn: [
        'Air Navigation',
        'Aviation Meteorology',
        'Air Regulations',
        'Aircraft Technical General & Specific',
        'Flight Performance & Planning',
        'Radio Telephony Procedures',
        'Flight Safety & Human Performance',
        'Aviation English & Communication',
        'Flight Simulator Familiarization',
        'CPL Ground Subjects',
      ],
    },
  },
  {
    id: 'rtr-training',
    title: 'RTR Training',
    eligibility: '12th Pass',
    salary: '₹40K - ₹60K/mo',
    duration: '6 to 12 Months',
    diploma: {
      title: 'Diploma in Radio Telephony Restricted Training',
      tagline: 'Master Aviation Communication and Clear the RTR (Aero) Exam',
      duration: '1 Year',
      salary: '₹25K – 60K/month',
      benefit: 'Placement Support',
      body: 'The Diploma in Radio Telephony Restricted Training prepares students to communicate confidently and correctly over aviation radio. The course covers standard ICAO phraseology, air traffic control procedures, navigation, meteorology, and aviation regulations, with focused preparation for the WPC RTR (Aero) licence examination.',
      eligibility: [
        '10+2 (Higher Secondary) or equivalent',
        'Graduates are also eligible',
        'Good communication skills in English are recommended',
        'Passion for the aviation industry',
      ],
      learn: [
        'Aviation Radio Telephony Procedures',
        'Standard ICAO Phraseology',
        'Air Traffic Control Basics',
        'Aircraft Performance & Operations',
        'Air Navigation',
        'Aviation Meteorology',
        'Aviation Regulations',
        'Communication & Coordination Skills',
        'Aviation Safety Procedures',
        'RTR Examination Preparation',
      ],
    },
  },
];

export const WHY_CHOOSE_FEATURES = [
  '100% Placement Support',
  'Industry Expert Trainers',
  'Industry Certification',
  'Modern Classrooms',
  'Interview Preparation',
];

export const SALARY_PACKAGES = [
  { title: 'Airport Ground Staff', range: '₹20K – 35K', gradient: 'var(--gradient-blue-navy)' },
  { title: 'Cabin Crew / Air Hostess', range: '₹35K – 70K', gradient: 'var(--gradient-red-navy)' },
  { title: 'Flight Dispatcher', range: '₹45K – 80K', gradient: null },
  { title: 'Pilot', range: '₹1L – 2L', gradient: 'var(--gradient-green-navy)' },
];

export const TESTIMONIALS = [
  {
    name: 'Jayasree',
    role: 'Cabin Crew',
    phone: '9566681246',
    salary: '₹52,000/mo',
    quote: 'Tigers Wings transformed my career. The grooming sessions and mock interviews helped me crack IndiGo on my first attempt!',
    avatarKey: 'fallback',
  },
  {
    name: 'Shafana Begum',
    role: 'Ground Staff',
    phone: '9677726203',
    salary: '₹28,000/mo',
    quote: 'Best aviation institute! Practical airport training gave me real-world confidence. Placed within 30 days of completion.',
    avatarKey: null,
  },
  {
    name: 'Vithuzan',
    role: 'Customer Service',
    phone: '95662 76704',
    salary: '₹85,000/mo',
    quote: 'International placement at Qatar was a dream! Tiger Wings trainers guided me through every step of the journey.',
    avatarKey: 'fallback2',
  },
];

export const FAQS = [
  {
    q: 'Why choose Tigers Wings Aviation Academy?',
    a: 'We offer diploma, certification, degree, and commercial pilot training programs in aviation, airport management, cabin crew, hospitality, and related fields.',
     image:faq_1 ,
  },
  {
    q: 'What courses do you offer?',
    a: 'We offer Cabin Crew / Air Hostess, Airport Ground Staff, Flight Dispatcher, Pilot Training, and RTR Training — each designed around real airline hiring requirements.',
     image:faq_2
  },
  {
    q: 'Do you provide placement assistance?',
    a: 'Yes, every student receives 100% placement support including mock interviews, grooming sessions, and direct introductions to our hiring airline partners.',
     image:faq_3
  },
  {
    q: 'Are scholarships available?',
    a: 'Yes, eligible students can receive scholarships of up to 50% based on merit and need — ask our counsellors for details during your free demo class.',
     image:faq_4
  },
  {
    q: 'How can I apply?',
    a: 'Book a free demo class from this page, or call/WhatsApp us directly. Our admissions team will guide you through the enrollment process.',
     image:faq_5
  },
];

export const FOOTER = {
  email: 'contact@tigerwings.com',
  phone: '9003480888',
  address: '4th Floor, Sai Pride, A24, 3rd Phase, SIDCO Industrial Estate, Guindy, Chennai, TN',
};
