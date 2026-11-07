# MFM Tentmakers France — website

Ministère de la Montagne de Feu et des Miracles, Bâtisseurs de Tente
30 Avenue du 8 Mai 1945, 95200 Sarcelles, France

Languages: English, Français, Español, Italiano (switch in the header).

## Run on your computer
1. Install Node.js (LTS) from https://nodejs.org
2. Open this folder in VS Code, then open the terminal (Ctrl + `)
3. Run:
   npm install
   npm run dev
4. The site opens at http://localhost:5173

## Appointment emails
Requests are sent to the address in APPOINTMENT_EMAIL (src/data/content.js), currently
ogundejibukunmi5@gmail.com, using the free FormSubmit service.
First time only: send one test request from the site, open that inbox, and click
"Activate Form" in the email from FormSubmit (check spam). Then send the test again.
To send requests to another address (e.g. the pastor), change APPOINTMENT_EMAIL and activate again.

## Where to edit
- All text in 4 languages, address, times, photos, Facebook link, appointment email: src/data/content.js
- Colours and layout: src/index.css
- Sections: src/components/ (Header, Banner, Content, AppointmentForm, Footer)

## Publish online
   npm run build
This creates a "dist" folder. Upload it to Netlify (app.netlify.com/drop), Vercel or any web host.
