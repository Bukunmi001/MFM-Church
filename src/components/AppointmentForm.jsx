import { useState } from "react";
import { CalendarCheck, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { APPOINTMENT_EMAIL, REASONS, LANGUAGES } from "../data/content";

const EMPTY = { name: "", email: "", phone: "", date: "", time: "", reason: "prayer", message: "" };
const isConfigured = Boolean(APPOINTMENT_EMAIL && APPOINTMENT_EMAIL.includes("@"));

function today() {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

export default function AppointmentForm({ t, lang }) {
  const f = t.form;
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [sentFor, setSentFor] = useState(null);
  const [serverMsg, setServerMsg] = useState("");

  const update = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const formatDate = (iso) =>
    new Date(`${iso}T12:00:00`).toLocaleDateString(lang, { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isConfigured) { setStatus("error"); return; }
    if (e.target.botcheck.checked) return; // spam bot

    setStatus("sending");
    setServerMsg("");
    const reason = REASONS.find((r) => r.id === values.reason);
    const languageName = LANGUAGES.find((l) => l.code === lang)?.label;

    // Field names are bilingual so the pastor can read them in French or English.
    const payload = {
      _subject: `Nouveau rendez-vous / New appointment — ${values.name} — ${values.date}`,
      _replyto: values.email,
      _template: "table",
      _captcha: "false",
      "Nom / Name": values.name,
      "E-mail": values.email,
      "Téléphone / Phone": values.phone || "—",
      "Date souhaitée / Preferred date": formatDate(values.date),
      "Heure souhaitée / Preferred time": values.time,
      "Motif / Reason": reason.email,
      "Message": values.message || "—",
      "Langue du visiteur / Visitor's language": languageName,
    };

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${APPOINTMENT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || String(data.success) !== "true") throw new Error(data.message);
      setSentFor({ name: values.name.split(" ")[0], date: formatDate(values.date) });
      setValues(EMPTY);
      setStatus("success");
    } catch (err) {
      console.error("Appointment form error:", err);
      setServerMsg(err.message || "");
      setStatus("error");
    }
  }

  return (
    <section id="appointment" className="section section--mist">
      <div className="wrap appointment">
        <div className="appointment__intro">
          <span className="service__icon"><CalendarCheck /></span>
          <h2 className="section__title">{f.title}</h2>
          <p>{f.intro}</p>
          <p className="appointment__privacy">{f.privacy}</p>
        </div>

        <form className="form" onSubmit={handleSubmit} noValidate={false}>
          <input type="checkbox" name="botcheck" className="sr-only" tabIndex={-1} aria-hidden="true" />

          <div className="field">
            <label htmlFor="ap-name">{f.name}</label>
            <input id="ap-name" name="name" required autoComplete="name" value={values.name} onChange={update} />
          </div>

          <div className="form__row">
            <div className="field">
              <label htmlFor="ap-email">{f.email}</label>
              <input id="ap-email" name="email" type="email" required autoComplete="email" value={values.email} onChange={update} />
            </div>
            <div className="field">
              <label htmlFor="ap-phone">{f.phone}</label>
              <input id="ap-phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={update} />
            </div>
          </div>

          <div className="form__row">
            <div className="field">
              <label htmlFor="ap-date">{f.date}</label>
              <input id="ap-date" name="date" type="date" required min={today()} value={values.date} onChange={update} />
            </div>
            <div className="field">
              <label htmlFor="ap-time">{f.time}</label>
              <input id="ap-time" name="time" type="time" required value={values.time} onChange={update} />
            </div>
          </div>

          <div className="field">
            <label htmlFor="ap-reason">{f.reason}</label>
            <select id="ap-reason" name="reason" value={values.reason} onChange={update}>
              {REASONS.map((r) => <option key={r.id} value={r.id}>{f.reasons[r.id]}</option>)}
            </select>
          </div>

          <div className="field">
            <label htmlFor="ap-message">{f.message}</label>
            <textarea id="ap-message" name="message" rows={4} placeholder={f.messageHint} value={values.message} onChange={update} />
          </div>

          <button type="submit" className="btn btn--fire" disabled={status === "sending"}>
            <Send size={17} /> {status === "sending" ? f.sending : f.submit}
          </button>

          {status === "success" && sentFor && (
            <p className="form__msg form__msg--ok" role="status">
              <CheckCircle2 size={20} />
              {f.success.replace("{name}", sentFor.name).replace("{date}", sentFor.date)}
            </p>
          )}
          {status === "error" && (
            <p className="form__msg form__msg--err" role="alert">
              <AlertCircle size={20} />
              <span>
                {isConfigured ? f.error : f.notSetUp}
                {serverMsg && <small className="form__detail">{serverMsg}</small>}
              </span>
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
