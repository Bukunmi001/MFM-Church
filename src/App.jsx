import { useState, useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { TEXT } from "./data/content";

function initialLanguage() {
  try {
    const saved = localStorage.getItem("mfm-lang");
    if (saved && TEXT[saved]) return saved;
  } catch { /* storage unavailable */ }
  const browser = (navigator.language || "fr").slice(0, 2);
  return TEXT[browser] ? browser : "fr";
}

export default function App() {
  const [lang, setLang] = useState(initialLanguage);
  const t = TEXT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = `MFM ${t.branch} — Sarcelles`;
    try { localStorage.setItem("mfm-lang", lang); } catch { /* ignore */ }
  }, [lang, t.branch]);

  return (
    <>
      <Header t={t} lang={lang} onLangChange={setLang} />
      <Banner t={t} />
      <Content t={t} lang={lang} />
      <Footer t={t} />
    </>
  );
}
