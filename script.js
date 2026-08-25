const SMS = "sms:+18583262860";
const LANG_KEY = "hacks-lang";

const I18N = {
  en: {
    navOrder: "Work order",
    navCrew: "Crew",
    navHours: "Hours",
    navJob: "Dispatch",
    winter: "Winter special · $100 off any invoice over $1,000",
    woKind: "COMMERCIAL GREASE-TRAP / HYDRO-JET WORK ORDER",
    woArea: "San Diego County",
    woFam: "Family-owned · over 20 years",
    h1: "Drains are the specialty. Jet the line. Camera the rest.",
    lede: "Hack’s Plumbing & Drain is a family-owned team serving homeowners and businesses across San Diego County. Licensed and insured. Upfront pricing. No hidden fees. 100% satisfaction. 24/7 emergency. Hours: Mon–Fri 7am–7pm, Sat 7am–5pm.",
    ck1: "Grease trap",
    ck2: "Hydro jet",
    ck3: "Camera",
    ck4: "Gas line",
    textJob: "Text the work order",
    callNow: "Call (858) 326-2860",
    scopeT: "On this work order",
    s1t: "Drain cleaning",
    s1b: "Drains are the specialty. Equipment to handle drain problems.",
    s2t: "Hydro jetting",
    s2b: "High-pressure jetters for tough clogs. Persistent clogs, grease, roots, slow drains, sewer lines, commercial kitchens.",
    s3t: "Camera inspections",
    s3b: "Pinpoint the problem and record it on video before the repair starts.",
    s4t: "Commercial plumbing",
    s4b: "Grease trap installations, drain maintenance, boilers, sewer repairs, and more.",
    s5t: "Gas line repairs",
    s5b: "Professional gas line repair and replacement. Experienced gas line plumbers.",
    s6t: "Water heaters",
    s6b: "Home water heaters through commercial boilers — repair and replace.",
    more: "Also: leaking faucets, clogged drains, water heater installation, emergency repairs, leak detection, sewer and gas line work, repipes, toilets, shower valves, garbage disposals, septic line locating. Free, no-obligation estimates. One call for repairs, installations, drain clearing, gas lines, hydro jetting, emergency plumbing.",
    jobsT: "On the books",
    j1: "Recirculating pump replacement in Oceanside",
    j2: "Commercial water heater replacement in San Diego",
    j3: "Shower and tub replacement in San Diego",
    crewT: "What customers wrote",
    hoursT: "Hours",
    hoursB: "Monday – Friday, 7:00 AM – 7:00 PM; Saturday, 7:00 AM – 5:00 PM (Pacific Time). 24/7 emergency plumbing. Serving San Diego County, CA.",
    v1: "Integrity first — no upsells, no pressure, no shortcuts. Honest work and clear communication.",
    v2: "Customer-first — on time, listen, respect schedule and budget.",
    v3: "Community driven — family-owned, supporting the people, families, and businesses that trust them.",
    jobT: "Dispatch the work order",
    jobLede: "Name and need required. Address is for the house call. Submit opens a text to (858) 326-2860.",
    fName: "Name",
    fNeed: "Need",
    fAddr: "Address (house call)",
    fMsg: "Details (optional)",
    phName: "Your name",
    phAddr: "Street, city",
    phMsg: "Kitchen floor drain, HOA, restaurant…",
    needPick: "Select the work",
    need1: "Drain cleaning",
    need2: "Hydro jetting",
    need3: "Camera inspection",
    need4: "Commercial grease trap",
    need5: "Gas line",
    need6: "Water heater",
    need7: "Emergency plumbing",
    need8: "Other plumbing",
    fSend: "Text the work order",
    orCall: "Or call (858) 326-2860",
    orSms: "Open a blank text",
    footLine: "Family-owned · San Diego County · over 20 years · licensed and insured",
    footSms: "Text",
    footRev: "Leave a review",
    docTitle: "Hack’s Plumbing & Drain · San Diego County"
  },
  es: {
    navOrder: "Orden",
    navCrew: "Cuadrilla",
    navHours: "Horario",
    navJob: "Despacho",
    winter: "Especial de invierno · $100 de descuento en factura de más de $1,000",
    woKind: "ORDEN DE TRAMPA DE GRASA / HIDROJET COMERCIAL",
    woArea: "Condado de San Diego",
    woFam: "De familia · más de 20 años",
    h1: "Los drenajes son la especialidad. Jetea la línea. Cámara el resto.",
    lede: "Hack’s Plumbing & Drain es un equipo familiar que atiende casas y negocios en el Condado de San Diego. Con licencia y asegurados. Precio por adelantado. Sin cargos ocultos. 100% de satisfacción. Emergencia 24/7. Horario: lun–vie 7am–7pm, sáb 7am–5pm.",
    ck1: "Trampa de grasa",
    ck2: "Hidrojet",
    ck3: "Cámara",
    ck4: "Línea de gas",
    textJob: "Textear la orden",
    callNow: "Llamar al (858) 326-2860",
    scopeT: "En esta orden",
    s1t: "Limpieza de drenajes",
    s1b: "Los drenajes son la especialidad. Equipo para cualquier problema de drenaje.",
    s2t: "Hidrojet",
    s2b: "Jetters de alta presión para tapones duros. Grasa, raíces, drenajes lentos, alcantarilla, cocinas comerciales.",
    s3t: "Inspección con cámara",
    s3b: "Ubicar el problema y grabarlo en video antes de empezar la reparación.",
    s4t: "Plomería comercial",
    s4b: "Instalación de trampas de grasa, mantenimiento de drenajes, calderas, reparación de alcantarilla y más.",
    s5t: "Líneas de gas",
    s5b: "Reparación y reemplazo profesional de líneas de gas.",
    s6t: "Calentadores",
    s6b: "De calentadores de casa a calderas comerciales — reparación y reemplazo.",
    more: "También: llaves que gotean, drenajes tapados, instalación de calentador, emergencias, detección de fugas, alcantarilla y gas, repipes, inodoros, válvulas de ducha, trituradores, localización de fosa. Presupuestos sin compromiso. Una llamada para reparaciones, instalaciones, drenaje, gas, hidrojet y emergencias.",
    jobsT: "En los libros",
    j1: "Reemplazo de bomba de recirculación en Oceanside",
    j2: "Reemplazo de calentador comercial en San Diego",
    j3: "Reemplazo de ducha y tina en San Diego",
    crewT: "Lo que escribieron clientes",
    hoursT: "Horario",
    hoursB: "Lunes a viernes, 7:00 a.m. – 7:00 p.m.; sábado, 7:00 a.m. – 5:00 p.m. (hora del Pacífico). Plomería de emergencia 24/7. Sirve el Condado de San Diego, CA.",
    v1: "Integridad primero — sin ventas de más, sin presión, sin atajos. Trabajo honesto y comunicación clara.",
    v2: "El cliente primero — a tiempo, escuchar, respetar horario y presupuesto.",
    v3: "De la comunidad — de familia, apoyando a las personas, familias y negocios que confían en ellos.",
    jobT: "Despachar la orden",
    jobLede: "Nombre y necesidad son obligatorios. La dirección es para la visita. Enviar abre un texto al (858) 326-2860.",
    fName: "Nombre",
    fNeed: "Necesidad",
    fAddr: "Dirección (visita a casa)",
    fMsg: "Detalles (opcional)",
    phName: "Su nombre",
    phAddr: "Calle, ciudad",
    phMsg: "Drenaje de cocina, HOA, restaurante…",
    needPick: "Elija el trabajo",
    need1: "Limpieza de drenajes",
    need2: "Hidrojet",
    need3: "Inspección con cámara",
    need4: "Trampa de grasa comercial",
    need5: "Línea de gas",
    need6: "Calentador",
    need7: "Plomería de emergencia",
    need8: "Otra plomería",
    fSend: "Textear la orden",
    orCall: "O llame al (858) 326-2860",
    orSms: "Abrir un texto en blanco",
    footLine: "De familia · Condado de San Diego · más de 20 años · con licencia y asegurados",
    footSms: "Texto",
    footRev: "Dejar reseña",
    docTitle: "Hack’s Plumbing & Drain · Condado de San Diego"
  }
};

function setLang(lang) {
  const pack = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  if (pack.docTitle) document.title = pack.docTitle;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && pack[key] != null) el.textContent = pack[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key && pack[key] != null) el.setAttribute("placeholder", pack[key]);
  });
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });
  try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
}

document.querySelectorAll(".lang button").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});
try {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === "es" || saved === "en") setLang(saved);
} catch (_) {}

const form = document.getElementById("sms-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = (form.elements.name.value || "").trim();
    const need = (form.elements.need.value || "").trim();
    const address = (form.elements.address.value || "").trim();
    const details = (form.elements.details.value || "").trim();
    if (!name || !need) return;
    let body = "Name: " + name + "\nNeed: " + need;
    if (address) body += "\nAddress: " + address;
    if (details) body += "\nDetails: " + details;
    window.location.href = SMS + "?body=" + encodeURIComponent(body);
  });
}

const printBtn = document.getElementById("print-card");
if (printBtn) printBtn.addEventListener("click", () => window.print());
