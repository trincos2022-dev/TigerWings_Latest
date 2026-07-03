import { STATS } from '../../data/content';
import { GraduationCapIcon, TrophyIcon, PlaneIcon, ShieldCheckIcon } from '../icons/Icons';
import './Stats.css';

const ICONS = [GraduationCapIcon, TrophyIcon, PlaneIcon, ShieldCheckIcon];

function Stats() {
  return (
    <div className="stats container">
      <div className="stats__grid">
        {STATS.map((stat, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div className="stats__card" key={stat.label}>
              <span className="stats__icon">
                <Icon size={22} color="#ffffff" />
              </span>
              <span className="stats__value">{stat.value}</span>
              <span className="stats__label">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stats;
