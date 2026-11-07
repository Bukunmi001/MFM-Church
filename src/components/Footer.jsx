import { MapPin, Clock, Facebook } from "lucide-react";
import { ADDRESS, FACEBOOK_URL, MAP_DIRECTIONS, LOGO } from "../data/content";

export default function Footer({ t }) {
  return (
    <footer id="contact" className="footer">
      <div className="wrap footer__grid">
        <div>
          <img src={LOGO} alt="" className="footer__logo" width="72" height="72" />
          <p className="footer__name">{t.churchName}</p>
          <p className="footer__branch">{t.branch}</p>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="footer__social">
            <Facebook size={18} /> Tentmakers France
          </a>
        </div>

        <div>
          <p className="footer__heading">{t.footerTimes}</p>
          {t.services.map((s) => (
            <p key={s.name} className="footer__row">
              <Clock size={16} />
              <span>{s.name}<br /><small>{s.when}, {s.time}</small></span>
            </p>
          ))}
        </div>

        <div>
          <p className="footer__heading">{t.footerFind}</p>
          <a href={MAP_DIRECTIONS} target="_blank" rel="noreferrer" className="footer__row">
            <MapPin size={16} />
            <span>{ADDRESS.street}<br />{ADDRESS.city}, {ADDRESS.country}<br /><small>{t.directions}</small></span>
          </a>
        </div>
      </div>

      <p className="footer__copy">
        © {new Date().getFullYear()} {t.churchName} — {t.branch}. {t.rights}
      </p>
    </footer>
  );
}
