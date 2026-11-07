import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SLIDES } from "../data/content";

export default function Banner({ t }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = SLIDES.length;

  const go = useCallback((step) => setIndex((i) => (i + step + count) % count), [count]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
  }, [paused, go]);

  const caption = t.slides[index];

  return (
    <section
      id="top"
      className="banner"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt=""
          className={`banner__img ${i === index ? "is-active" : ""}`}
          style={{ objectPosition: s.position || "center" }}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="banner__shade" />

      <div className="wrap banner__content">
        <div key={index} className="banner__caption" aria-live="polite">
          <h1>{caption.title}</h1>
          <p>{caption.text}</p>
          <div className="banner__ctas">
            <a href="#visit" className="btn btn--fire">{t.cta.visit}</a>
            <a href="#appointment" className="btn btn--ghost">{t.cta.appointment}</a>
          </div>
        </div>
      </div>

      <div className="banner__controls">
        <button className="round-btn" onClick={() => go(-1)} aria-label={t.prev}><ChevronLeft size={20} /></button>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "is-active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`${t.goTo} ${i + 1}`}
            aria-current={i === index}
          />
        ))}
        <button className="round-btn" onClick={() => go(1)} aria-label={t.next}><ChevronRight size={20} /></button>
      </div>

      {SLIDES[index].credit && (
        <a className="banner__credit" href={SLIDES[index].creditUrl} target="_blank" rel="noreferrer">
          {t.photoBy}: {SLIDES[index].credit} / Unsplash
        </a>
      )}
    </section>
  );
}
