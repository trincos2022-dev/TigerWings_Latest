import mailIcon from '../../assets/figma/web/hero/img-vuesax-linear-sms-star.svg';
import userIcon from '../../assets/figma/web/hero/img-icon5.svg';
import mobileIcon from '../../assets/figma/web/hero/img-icon6.svg';
import trophyIcon from '../../assets/figma/web/hero/img-icon9.svg';
import planeIcon from '../../assets/figma/web/hero/img-icon10.svg';  
import graduationIcon from '../../assets/figma/web/hero/img-icon8.svg'; 
 


const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
});

export function BriefcaseIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="7.5" width="18" height="12" rx="2" stroke={color} strokeWidth="1.6" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 12h18" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

export function UserIcon({ size = 18, color = 'currentColor' }) {
  return (
    <img
      src={userIcon}
      alt="check"
      width={size}
      height={size}
    />
  );
}

export function GraduationCapIcon({ size = 22, color = 'currentColor' }) {
  return (
    <img
      src={graduationIcon}
      alt="check"
      width={size}
      height={size}
    />
  );
}

export function TrophyIcon({ size = 22, color = 'currentColor' }) {
  return (
    <img
      src={trophyIcon}
      alt="check"
      width={size}
      height={size}
    />
  );
}

export function ShieldCheckIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3 5 5.5V11c0 4.5 3 7.8 7 9.5 4-1.7 7-5 7-9.5V5.5L12 3Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m9 11.5 2 2 4-4.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ size = 18, color = 'currentColor' }) {
  return (
    <img
      src={mobileIcon}
      alt="check"
      width={size}
      height={size}
    />
  );
}

export function MailIcon({ size = 18, color = 'currentColor' }) {
return (
    <img
      src={mailIcon}
      alt="check"
      width={size}
      height={size}
    />
  );
}

export function MapPinIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

export function ClockIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WalletIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 7.5A2.5 2.5 0 0 1 5.5 5h11A2.5 2.5 0 0 1 19 7.5V8H5.5A2.5 2.5 0 0 1 3 5.5v2Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 18.5 8H5.5A2.5 2.5 0 0 1 3 5.5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="13" r="1.25" fill={color} />
    </svg>
  );
}

export function TrendingUpIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 16.5 9.5 10l4 4L21 6.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 6.5h6v6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
        fill={color}
      />
    </svg>
  );
}

export function PaperPlaneIcon({ size = 18, color = 'currentColor', className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21.44 2.56 2.98 9.72c-.72.28-.7 1.31.02 1.56l7.1 2.47a1 1 0 0 1 .61.61l2.47 7.1c.25.72 1.28.74 1.56.02l7.16-18.46c.24-.63-.38-1.24-1-1z"
        fill={color}
      />
    </svg>
  );
}

export function LandingPlaneIcon({ size = 18, color = 'currentColor', className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30.6112 30.6112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.7035 24.4891L20.4076 14.0303L24.8718 9.56619C26.785 7.65299 27.4227 5.10206 26.785 3.82659C25.5095 3.18886 22.9586 3.82659 21.0454 5.73979L16.5813 10.2039L6.12244 7.90808C5.48471 7.78053 4.97452 8.03563 4.71943 8.54581L4.33679 9.18355C4.0817 9.82128 4.20924 10.459 4.71943 10.8417L11.4794 15.3058L8.92846 19.1322H5.10207L3.8266 20.4076L7.653 22.9586L10.2039 26.785L11.4794 25.5095V21.6831L15.3058 19.1322L19.7699 25.8921C20.1526 26.4023 20.7903 26.5299 21.428 26.2748L22.0658 26.0197C22.5759 25.637 22.831 25.1269 22.7035 24.4891Z"
        stroke={color}
        strokeWidth="2.55093"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2"/>
      <path
        d="m7.5 12.5 3 3 6-6.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5v14M5 12h14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MinusIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m6 9 6 6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuoteIcon({ size = 34, color = '#ffc107' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 8.5c-3.9 1.2-6.5 4.6-6.5 9.2V23h7.2v-7.2h-3.4c0-2.4 1.2-3.9 3.4-4.6L13 8.5Zm12 0c-3.9 1.2-6.5 4.6-6.5 9.2V23h7.2v-7.2h-3.4c0-2.4 1.2-3.9 3.4-4.6L25 8.5Z"
        fill={color}
      />
    </svg>
  );
}

export function StarIcon({ size = 16, color = '#ffc107' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m12 2.5 2.9 6.06 6.6.79-4.87 4.6 1.27 6.55L12 17.3l-5.9 3.2 1.27-6.55-4.87-4.6 6.6-.79L12 2.5Z"
        fill={color}
      />
    </svg>
  );
}

export function PlayIcon({ size = 20, color = '#0a2a66' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" fill={color} />
    </svg>
  );
}

export function CapBadgeIcon({ size = 18, color = 'currentColor', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M2 9L12 4L22 9L12 14L2 9Z" stroke={color} strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M6 11.2V15.5C6 15.5 8 18.5 12 18.5C16 18.5 18 15.5 18 15.5V11.2" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 9V14.5" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function PlaneIcon({ size = 18, color = 'currentColor', className }) {
  return (
      <img
      src={planeIcon}
      alt="check"
      width={size}
      height={size}
      className={className}
    />
  );
}

export function SparkleIcon({ size = 14, color = '#ffc107', className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M12 2c.5 3.6 1.9 5 5.5 5.5-3.6.5-5 1.9-5.5 5.5-.5-3.6-1.9-5-5.5-5.5 3.6-.5 5-1.9 5.5-5.5Z"
        fill={color}
      />
      <path
        d="M19 14c.28 1.8.95 2.5 2.75 2.75-1.8.25-2.47.95-2.75 2.75-.28-1.8-.95-2.5-2.75-2.75 1.8-.25 2.47-.95 2.75-2.75Z"
        fill={color}
      />
    </svg>
  );
}

export function MaximizeIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 4H4v5M15 4h5v5M15 20h5v-5M9 20H4v-5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke={color} strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill={color} />
    </svg>
  );
}

export function LinkedInIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke={color} strokeWidth="1.6" />
      <path d="M7.5 10v6.5M7.5 7.5v.01M12 16.5V10M12 12.8c0-1.8 1-2.8 2.3-2.8 1.3 0 2.2 1 2.2 2.8v3.7" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6" />
      <path d="M13.8 8.6h-1.2c-.5 0-1 .4-1 1v1.4h2.2l-.3 2.1h-1.9V19h-2.1v-6h-1.5v-2h1.5V9.4c0-1.5 1-2.6 2.5-2.6h1.8v1.8Z" fill={color} />
    </svg>
  );
}

export function CallOutlineIcon({ size = 20, color = 'currentColor' }) {
  return <PhoneIcon size={size} color={color} />;
}
