import { Globe } from "lucide-react";
import { LANGUAGES } from "../data/content";

export default function LanguageSelect({ lang, onChange, label }) {
  return (
    <label className="lang-select">
      <Globe size={16} aria-hidden="true" />
      <span className="sr-only">{label}</span>
      <select value={lang} onChange={(e) => onChange(e.target.value)} aria-label={label}>
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>{l.label}</option>
        ))}
      </select>
    </label>
  );
}
