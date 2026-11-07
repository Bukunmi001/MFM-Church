import { Clock, MapPin, Navigation, Facebook, Wifi, Church } from "lucide-react";
import { ADDRESS, MAP_EMBED, MAP_DIRECTIONS, FACEBOOK_URL } from "../data/content";
import AppointmentForm from "./AppointmentForm";

export default function Content({ t, lang }) {
  return (
    <main>
      <section className="section welcome">
        <div className="wrap welcome__inner">
          <div className="flame-rule" />
          <h2>{t.welcomeTitle}</h2>
          <p>{t.welcomeText}</p>
        </div>
      </section>

      <section id="services" className="section section--mist">
        <div className="wrap">
          <h2 className="section__title">{t.servicesTitle}</h2>
          <div className="services">
            {t.services.map((s, i) => (
              <article key={s.name} className="service">
                <span className="service__icon">{i === 0 ? <Church /> : <Wifi />}</span>
                <h3>{s.name}</h3>
                <p className="service__when">{s.when}</p>
                <p className="service__time"><Clock size={18} /> {s.time}</p>
                <p className="service__where">{s.where}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="section">
        <div className="wrap visit">
          <div>
            <h2 className="section__title">{t.visitTitle}</h2>
            <dl className="visit__list">
              <div>
                <dt><MapPin size={18} /> {t.addressLabel}</dt>
                <dd>{ADDRESS.street}<br />{ADDRESS.city}<br />{ADDRESS.country}</dd>
              </div>
              <div>
                <dt><Navigation size={18} /> {t.directionsLabel}</dt>
                <dd>{t.directions}</dd>
              </div>
            </dl>
            <a href={MAP_DIRECTIONS} target="_blank" rel="noreferrer" className="btn btn--fire">
              <Navigation size={17} /> {t.getDirections}
            </a>
          </div>
          <iframe className="visit__map" title={t.mapTitle} src={MAP_EMBED} loading="lazy" />
        </div>
      </section>

      <AppointmentForm t={t} lang={lang} />

      <section className="section follow">
        <div className="wrap follow__inner">
          <div>
            <h2>{t.followTitle}</h2>
            <p>{t.followText}</p>
          </div>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="btn btn--light">
            <Facebook size={18} /> {t.followCta}
          </a>
        </div>
      </section>
    </main>
  );
}
