import imgAirIndia from '../../assets/figma/web/placement-partners/img-air-india2023-svg1.png';
import imgIndigo from '../../assets/figma/web/placement-partners/img-indigo-ns-big-bfe5-efa91.png';
import imgQatar from '../../assets/figma/web/placement-partners/img-qatar-airways-logo-svg1.png';
import imgSingapore from '../../assets/figma/web/placement-partners/img-singapore-airlines-logo2-svg1.png';
import imgEmirates from '../../assets/figma/web/placement-partners/img-emirates-logo-svg1.png';
import imgVirgin from '../../assets/figma/web/placement-partners/img-virgin-atlantic-logo-svg1.png';
import imgIATA from '../../assets/figma/web/placement-partners/img-image1.png';
import imgAAI from '../../assets/figma/web/placement-partners/img-image7.png';
import imgGAA from '../../assets/figma/web/placement-partners/img-image2.png';
import imgAASSC from '../../assets/figma/web/placement-partners/img-image3.png';
import './PlacementPartners.css';

const LOGOS = [
  { name: 'Air India', src: imgAirIndia },
  { name: 'IndiGo', src: imgIndigo },
  { name: 'Qatar Airways', src: imgQatar },
  { name: 'Singapore Airlines', src: imgSingapore },
  { name: 'Emirates', src: imgEmirates },
  { name: 'Virgin Atlantic', src: imgVirgin },
  { name: 'IATA', src: imgIATA },
  { name: 'Airport Authority of India (AAI)', src: imgAAI, label: 'Airport Authority of India(AAI)' },
  { name: 'Gulf Aviation Academy', src: imgGAA },
  { name: 'Aerospace & Aviation Sector Skill Council', src: imgAASSC },
];

function LogoItem({ logo }) {
  return (
    <div className="partners__item">
      <img src={logo.src} alt={logo.name} title={logo.name} loading="lazy" className="partners__logo" />
      {logo.label && <span className="partners__item-label">{logo.label}</span>}
    </div>
  );
}

function PlacementPartners() {
  return (
    <section className="partners section">
      <div className="container">
        <h2 className="partners__heading">Placement Partners</h2>
      </div>

      <div className="partners__marquee">
        <div className="partners__track">
          {LOGOS.map((logo) => (
            <LogoItem key={`a-${logo.name}`} logo={logo} />
          ))}
          {LOGOS.map((logo) => (
            <LogoItem key={`b-${logo.name}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlacementPartners;
