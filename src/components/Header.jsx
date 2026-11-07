import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSelect from "./LanguageSelect";
import { LOGO } from "../data/content";

export default function Header({ t, lang, onLangChange }) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#top", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#visit", label: t.nav.visit },
    { href: "#appointment", label: t.nav.appointment },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="header">
      <div className="wrap header__bar">
        <a href="#top" className="brand" aria-label={t.churchName}>
          <img src={LOGO} alt="" className="brand__logo" width="48" height="48" />
          <span className="brand__text">
            <strong>{t.churchName}</strong>
            <span>{t.branch}</span>
          </span>
        </a>

        <nav className="nav" aria-label="Main">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          <LanguageSelect lang={lang} onChange={onLangChange} label={t.languageLabel} />
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <LanguageSelect lang={lang} onChange={(v) => { onLangChange(v); setOpen(false); }} label={t.languageLabel} />
        </nav>
      )}
    </header>
  );
}
