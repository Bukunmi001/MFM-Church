// All text and settings for the site live here. Edit this file to update the website.

// ---------------------------------------------------------------------------
// APPOINTMENT EMAILS
// Appointment requests are sent to this address (using the free FormSubmit service).
// FIRST TIME ONLY: send one test request from the website, then open this inbox and
// click "Activate Form" in the email from FormSubmit. After that, every request arrives here.
export const APPOINTMENT_EMAIL = "ogundejibukunmi5@gmail.com";
// ---------------------------------------------------------------------------

export const FACEBOOK_URL =
  "https://www.facebook.com/search/top?q=Tentmakres%20France"; // TODO: paste the page's real link

export const ADDRESS = {
  street: "30 Avenue du 8 Mai 1945",
  city: "95200 Sarcelles",
  country: "France",
};

const ADDRESS_QUERY = encodeURIComponent(`${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.country}`);
export const MAP_EMBED = `https://www.google.com/maps?q=${ADDRESS_QUERY}&output=embed`;
export const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${ADDRESS_QUERY}`;

export const LOGO = "/images/mfm-logo.png";

// Banner photos. Church photos live in /public/images.
// "position" chooses which part of the photo stays visible when it is cropped.
// The last two are free stock photos (Unsplash License).
export const SLIDES = [
  { src: "/images/slide-1.jpg", position: "center 25%" },
  { src: "/images/slide-2.jpg", position: "center 35%" },
  { src: "https://unsplash.com/photos/M1ZUtHSWXHI/download?w=1920", credit: "Terren Hurst", creditUrl: "https://unsplash.com/photos/a-group-of-people-reaching-up-in-the-air-M1ZUtHSWXHI" },
  { src: "https://unsplash.com/photos/uDT0QlDT5U0/download?w=1920", credit: "Luan Cabral", creditUrl: "https://unsplash.com/photos/people-standing-near-white-cross-uDT0QlDT5U0" },
];

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
];

// Appointment reasons. "email" is the bilingual label the pastor sees in the email.
export const REASONS = [
  { id: "prayer", email: "Prière / Prayer" },
  { id: "counselling", email: "Conseil pastoral / Pastoral counselling" },
  { id: "visit", email: "Première visite / First visit" },
  { id: "other", email: "Autre / Other" },
];

export const TEXT = {
  en: {
    churchName: "Mountain of Fire and Miracles Ministries",
    branch: "Tentmakers France",
    nav: { home: "Home", services: "Service times", visit: "Visit us", appointment: "Appointment", contact: "Contact" },
    languageLabel: "Language",
    slides: [
      { title: "Welcome to MFM Tentmakers France", text: "Worship with us in Sarcelles every Sunday." },
      { title: "Sunday service", text: "10:00 am to 1:00 pm — everyone is welcome." },
      { title: "Online prayer", text: "Every Thursday or Friday, 10:00 pm to 10:30 pm." },
      { title: "Find the hall", text: "30 Avenue du 8 Mai 1945, Sarcelles — third floor, on the left." },
    ],
    cta: { visit: "Plan your visit", appointment: "Book an appointment" },
    prev: "Previous photo", next: "Next photo", goTo: "Show photo", photoBy: "Photo",
    welcomeTitle: "You are welcome here",
    welcomeText: "Mountain of Fire and Miracles Ministries Tentmakers is a branch of MFM in France. Join us in person on Sundays and online during the week for prayer, worship and the Word.",
    servicesTitle: "Service times",
    services: [
      { name: "Sunday service", when: "Every Sunday", time: "10:00 am – 1:00 pm", where: "In person, Sarcelles" },
      { name: "Online prayer", when: "Every Thursday or Friday", time: "10:00 pm – 10:30 pm", where: "Online" },
    ],
    visitTitle: "Visit us", addressLabel: "Address", directionsLabel: "Getting to the hall",
    directions: "Third floor, on the left.", getDirections: "Get directions",
    mapTitle: "Map showing the church in Sarcelles",
    form: {
      title: "Book an appointment with the pastor",
      intro: "Fill in the form and the pastor will receive your request by email. He will contact you to confirm.",
      name: "Full name", email: "Email", phone: "Phone (optional)", date: "Preferred date", time: "Preferred time",
      reason: "Reason", message: "Message (optional)", messageHint: "Tell the pastor anything he should know before meeting you.",
      reasons: { prayer: "Prayer", counselling: "Pastoral counselling", visit: "First visit to the church", other: "Other" },
      submit: "Send request", sending: "Sending…",
      success: "Thank you, {name}. Your request for {date} has been sent. The pastor will contact you to confirm.",
      error: "Your request could not be sent. Check your internet connection and try again.",
      notSetUp: "Appointment emails are not set up yet. Add the email address in src/data/content.js.",
      privacy: "Your details are only sent to the pastor and are not shared.",
    },
    followTitle: "Follow us on Facebook",
    followText: "News, announcements and prayer meetings are shared on our Facebook page.",
    followCta: "Open Facebook page",
    footerTimes: "Service times", footerFind: "Find us", rights: "All rights reserved.",
  },

  fr: {
    churchName: "Ministère de la Montagne de Feu et des Miracles",
    branch: "Bâtisseurs de Tente",
    nav: { home: "Accueil", services: "Horaires", visit: "Nous rendre visite", appointment: "Rendez-vous", contact: "Contact" },
    languageLabel: "Langue",
    slides: [
      { title: "Bienvenue à MFM Bâtisseurs de Tente", text: "Venez adorer avec nous à Sarcelles chaque dimanche." },
      { title: "Culte du dimanche", text: "De 10 h à 13 h — tout le monde est le bienvenu." },
      { title: "Prière en ligne", text: "Tous les jeudis ou vendredis, de 22 h à 22 h 30." },
      { title: "Accès à la salle", text: "30 Avenue du 8 Mai 1945, Sarcelles — au troisième étage à gauche." },
    ],
    cta: { visit: "Préparer votre visite", appointment: "Prendre rendez-vous" },
    prev: "Photo précédente", next: "Photo suivante", goTo: "Afficher la photo", photoBy: "Photo",
    welcomeTitle: "Soyez les bienvenus",
    welcomeText: "Le Ministère de la Montagne de Feu et des Miracles, Bâtisseurs de Tente, est une branche de MFM en France. Rejoignez-nous sur place le dimanche et en ligne pendant la semaine pour la prière, la louange et la Parole.",
    servicesTitle: "Horaires",
    services: [
      { name: "Culte du dimanche", when: "Chaque dimanche", time: "10 h – 13 h", where: "Sur place, Sarcelles" },
      { name: "Prière en ligne", when: "Tous les jeudis ou vendredis", time: "22 h – 22 h 30", where: "En ligne" },
    ],
    visitTitle: "Nous rendre visite", addressLabel: "Adresse", directionsLabel: "Accès à la salle",
    directions: "Au troisième étage à gauche.", getDirections: "Itinéraire",
    mapTitle: "Carte indiquant l’église à Sarcelles",
    form: {
      title: "Prendre rendez-vous avec le pasteur",
      intro: "Remplissez le formulaire : le pasteur recevra votre demande par e-mail et vous contactera pour confirmer.",
      name: "Nom complet", email: "E-mail", phone: "Téléphone (facultatif)", date: "Date souhaitée", time: "Heure souhaitée",
      reason: "Motif", message: "Message (facultatif)", messageHint: "Indiquez au pasteur ce qu’il doit savoir avant de vous rencontrer.",
      reasons: { prayer: "Prière", counselling: "Conseil pastoral", visit: "Première visite à l’église", other: "Autre" },
      submit: "Envoyer la demande", sending: "Envoi…",
      success: "Merci, {name}. Votre demande pour le {date} a été envoyée. Le pasteur vous contactera pour confirmer.",
      error: "Votre demande n’a pas pu être envoyée. Vérifiez votre connexion internet et réessayez.",
      notSetUp: "L’envoi des rendez-vous n’est pas encore configuré. Ajoutez l’adresse e-mail dans src/data/content.js.",
      privacy: "Vos informations sont envoyées uniquement au pasteur et ne sont pas partagées.",
    },
    followTitle: "Suivez-nous sur Facebook",
    followText: "Actualités, annonces et réunions de prière sont publiées sur notre page Facebook.",
    followCta: "Ouvrir la page Facebook",
    footerTimes: "Horaires", footerFind: "Nous trouver", rights: "Tous droits réservés.",
  },

  es: {
    churchName: "Ministerio Montaña de Fuego y Milagros",
    branch: "Tentmakers France",
    nav: { home: "Inicio", services: "Horarios", visit: "Visítenos", appointment: "Cita", contact: "Contacto" },
    languageLabel: "Idioma",
    slides: [
      { title: "Bienvenidos a MFM Tentmakers France", text: "Adore con nosotros en Sarcelles cada domingo." },
      { title: "Culto dominical", text: "De 10:00 a 13:00 — todos son bienvenidos." },
      { title: "Oración en línea", text: "Todos los jueves o viernes, de 22:00 a 22:30." },
      { title: "Cómo llegar a la sala", text: "30 Avenue du 8 Mai 1945, Sarcelles — tercer piso, a la izquierda." },
    ],
    cta: { visit: "Planifique su visita", appointment: "Pedir una cita" },
    prev: "Foto anterior", next: "Foto siguiente", goTo: "Mostrar foto", photoBy: "Foto",
    welcomeTitle: "Aquí es bienvenido",
    welcomeText: "El Ministerio Montaña de Fuego y Milagros Tentmakers es una rama de MFM en Francia. Acompáñenos en persona los domingos y en línea durante la semana para orar, adorar y escuchar la Palabra.",
    servicesTitle: "Horarios",
    services: [
      { name: "Culto dominical", when: "Cada domingo", time: "10:00 – 13:00", where: "Presencial, Sarcelles" },
      { name: "Oración en línea", when: "Todos los jueves o viernes", time: "22:00 – 22:30", where: "En línea" },
    ],
    visitTitle: "Visítenos", addressLabel: "Dirección", directionsLabel: "Cómo llegar a la sala",
    directions: "Tercer piso, a la izquierda.", getDirections: "Cómo llegar",
    mapTitle: "Mapa con la iglesia en Sarcelles",
    form: {
      title: "Pida una cita con el pastor",
      intro: "Complete el formulario y el pastor recibirá su solicitud por correo electrónico. Le contactará para confirmar.",
      name: "Nombre completo", email: "Correo electrónico", phone: "Teléfono (opcional)", date: "Fecha preferida", time: "Hora preferida",
      reason: "Motivo", message: "Mensaje (opcional)", messageHint: "Cuéntele al pastor lo que debe saber antes de reunirse con usted.",
      reasons: { prayer: "Oración", counselling: "Consejería pastoral", visit: "Primera visita a la iglesia", other: "Otro" },
      submit: "Enviar solicitud", sending: "Enviando…",
      success: "Gracias, {name}. Su solicitud para el {date} ha sido enviada. El pastor le contactará para confirmar.",
      error: "No se pudo enviar su solicitud. Compruebe su conexión a internet e inténtelo de nuevo.",
      notSetUp: "El envío de citas aún no está configurado. Añada la dirección de correo en src/data/content.js.",
      privacy: "Sus datos solo se envían al pastor y no se comparten.",
    },
    followTitle: "Síganos en Facebook",
    followText: "Noticias, anuncios y reuniones de oración se publican en nuestra página de Facebook.",
    followCta: "Abrir la página de Facebook",
    footerTimes: "Horarios", footerFind: "Encuéntrenos", rights: "Todos los derechos reservados.",
  },

  it: {
    churchName: "Ministero Montagna di Fuoco e Miracoli",
    branch: "Tentmakers France",
    nav: { home: "Home", services: "Orari", visit: "Venite a trovarci", appointment: "Appuntamento", contact: "Contatti" },
    languageLabel: "Lingua",
    slides: [
      { title: "Benvenuti a MFM Tentmakers France", text: "Adorate con noi a Sarcelles ogni domenica." },
      { title: "Culto domenicale", text: "Dalle 10:00 alle 13:00 — tutti sono i benvenuti." },
      { title: "Preghiera online", text: "Ogni giovedì o venerdì, dalle 22:00 alle 22:30." },
      { title: "Come raggiungere la sala", text: "30 Avenue du 8 Mai 1945, Sarcelles — terzo piano, a sinistra." },
    ],
    cta: { visit: "Organizza la tua visita", appointment: "Prenota un appuntamento" },
    prev: "Foto precedente", next: "Foto successiva", goTo: "Mostra foto", photoBy: "Foto",
    welcomeTitle: "Qui sei il benvenuto",
    welcomeText: "Il Ministero Montagna di Fuoco e Miracoli Tentmakers è una sede di MFM in Francia. Unisciti a noi in presenza la domenica e online durante la settimana per la preghiera, la lode e la Parola.",
    servicesTitle: "Orari",
    services: [
      { name: "Culto domenicale", when: "Ogni domenica", time: "10:00 – 13:00", where: "In presenza, Sarcelles" },
      { name: "Preghiera online", when: "Ogni giovedì o venerdì", time: "22:00 – 22:30", where: "Online" },
    ],
    visitTitle: "Venite a trovarci", addressLabel: "Indirizzo", directionsLabel: "Come raggiungere la sala",
    directions: "Terzo piano, a sinistra.", getDirections: "Indicazioni stradali",
    mapTitle: "Mappa con la chiesa a Sarcelles",
    form: {
      title: "Prenota un appuntamento con il pastore",
      intro: "Compila il modulo e il pastore riceverà la tua richiesta via e-mail. Ti contatterà per confermare.",
      name: "Nome e cognome", email: "E-mail", phone: "Telefono (facoltativo)", date: "Data preferita", time: "Orario preferito",
      reason: "Motivo", message: "Messaggio (facoltativo)", messageHint: "Scrivi al pastore ciò che deve sapere prima di incontrarti.",
      reasons: { prayer: "Preghiera", counselling: "Consulenza pastorale", visit: "Prima visita in chiesa", other: "Altro" },
      submit: "Invia la richiesta", sending: "Invio…",
      success: "Grazie, {name}. La tua richiesta per il {date} è stata inviata. Il pastore ti contatterà per confermare.",
      error: "Impossibile inviare la richiesta. Controlla la connessione internet e riprova.",
      notSetUp: "L’invio degli appuntamenti non è ancora configurato. Aggiungi l’indirizzo e-mail in src/data/content.js.",
      privacy: "I tuoi dati vengono inviati solo al pastore e non sono condivisi.",
    },
    followTitle: "Seguici su Facebook",
    followText: "Notizie, annunci e incontri di preghiera vengono pubblicati sulla nostra pagina Facebook.",
    followCta: "Apri la pagina Facebook",
    footerTimes: "Orari", footerFind: "Dove siamo", rights: "Tutti i diritti riservati.",
  },
};
