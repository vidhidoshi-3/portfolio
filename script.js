/*
  CONTENT CONFIG
  Update the Google Drive URLs and image paths here.
  The HTML page will build the project cards automatically.
*/
const projects = [
  {
    number: "01",
    name: "IIM Mumbai",
    subtitle: "65-acre Campus Redevelopment",
    year: "2024—25",
    tags: "Master Planning · Infrastructure · Tender",
    image: "assets/images/iim-mumbai.svg",
    description: "Redevelopment framework for a 65-acre institutional campus, integrating master planning, road infrastructure, utility coordination and implementation documentation.",
    role: "Urban Design · Master Planning · MEP Coordination · EPC Tender Documentation",
    driveUrl: "PASTE_GOOGLE_DRIVE_LINK_HERE"
  },
  {
    number: "02",
    name: "IIT Dhanbad",
    subtitle: "200-acre Brownfield Campus",
    year: "2024—25",
    tags: "Urban Design · Campus Strategy",
    image: "assets/images/iit-dhanbad.svg",
    description: "A brownfield campus framework translating land use, zoning, movement networks and public-realm principles into a coherent development strategy.",
    role: "Urban Design · Guidelines · Campus Development Strategy",
    driveUrl: "PASTE_GOOGLE_DRIVE_LINK_HERE"
  },
  {
    number: "03",
    name: "Bengaluru Sports City",
    subtitle: "20-acre Inclusive Sports City",
    year: "2024—25",
    tags: "Master Planning · Accessibility · Sports",
    image: "assets/images/bengaluru-sports-city.svg",
    description: "A masterplan and conceptual framework for an inclusive sports city centred on Paralympic sports, training and accessible recreation.",
    role: "Master Planning · Concept Design · Accessible Public Realm",
    driveUrl: "PASTE_GOOGLE_DRIVE_LINK_HERE"
  },
  {
    number: "04",
    name: "Goa Fisheries",
    subtitle: "Community Infrastructure · 25 Sites",
    year: "2024—25",
    tags: "Infrastructure · DPR · Community",
    image: "assets/images/goa-fisheries.svg",
    description: "A multi-site infrastructure programme addressing fishing-community needs through net-mending sheds, ramps, jetties, dredging and supporting amenities.",
    role: "DPR Preparation · Infrastructure Planning · Community Amenities",
    driveUrl: "PASTE_GOOGLE_DRIVE_LINK_HERE"
  },
  {
    number: "05",
    name: "MSRTC",
    subtitle: "Bus Stations & Depots · 12 Sites",
    year: "2024—25",
    tags: "Transport · PPP · Feasibility",
    image: "assets/images/msrtc.svg",
    description: "Master planning and feasibility studies for bus stations and depots across Maharashtra, explored through a PPP development model.",
    role: "Master Planning · Market Studies · FSI Feasibility",
    driveUrl: "PASTE_GOOGLE_DRIVE_LINK_HERE"
  },
  {
    number: "06",
    name: "Infusing Edges",
    subtitle: "Institutional Edges · Ahmedabad",
    year: "Academic",
    tags: "Urban Design · Public Realm · Placemaking",
    image: "assets/images/infusing-edges.svg",
    description: "Reimagining institutional edges as inclusive public spaces by connecting campuses with surrounding urban villages through spatial design and activity programming.",
    role: "Urban Design · Public Realm · Activity Programming",
    driveUrl: "PASTE_GOOGLE_DRIVE_LINK_HERE"
  },
  {
    number: "07",
    name: "BLEND.in",
    subtitle: "Integrated Township · Gandhinagar",
    year: "Academic",
    tags: "Township · Community · Residential",
    image: "assets/images/blend-in.svg",
    description: "An integrated township framework balancing public accessibility, community interaction and residential privacy through inclusive urban design strategies.",
    role: "Township Planning · Urban Design · Spatial Strategy",
    driveUrl: "PASTE_GOOGLE_DRIVE_LINK_HERE"
  },
  {
    number: "08",
    name: "Shivranjani Cross Road",
    subtitle: "Urban Intersection · Ahmedabad",
    year: "Academic",
    tags: "Mobility · Public Realm · Street Design",
    image: "assets/images/shivranjani.svg",
    description: "An urban design proposal focused on pedestrian mobility, public-realm quality and street character at a key Ahmedabad intersection.",
    role: "Street Design · Mobility · Public Realm",
    driveUrl: "PASTE_GOOGLE_DRIVE_LINK_HERE"
  }
];

const experiences = [
  {
    date: "May 2026 — Present",
    org: "INI Design Studio",
    role: "Urban Designer",
    note: "Godrej Properties, Nagpur · plot cut sheets and planning documentation; TIFR Hyderabad · boulevard paving patterns and streetscape character."
  },
  {
    date: "Jul 2024 — Oct 2025",
    org: "Shashi Prabhu & Associates",
    role: "Urban Designer",
    note: "Institutional campuses, sports city, fisheries infrastructure, MSRTC transport sites and additional bid / concept design work."
  },
  {
    date: "May 2023 — Jul 2023",
    org: "Directorate of Urban Land Transport",
    role: "Planner Intern",
    note: "LAMP and safety audit around proposed TOD zones; survey analysis, placemaking and mobility solutions."
  },
  {
    date: "Nov 2021 — Jun 2025",
    org: "Studio Nirmaanam",
    role: "Independent Practice",
    note: "Led end-to-end design and project management for two 2BHK residences and a 1,000 sq. ft office, including team and site execution."
  },
  {
    date: "May 2020 — Oct 2021",
    org: "Rathin Goghari Architects · Rudiments Architects",
    role: "Architectural Experience",
    note: "Detailed architectural and interior drawings, design development, detailing and site execution across residential, institutional, retail and healthcare projects."
  }
];

function safeUrl(url) {
  return /^https?:\/\//i.test(url || "") ? url : null;
}

const projectList = document.getElementById("project-list");
projects.forEach((project, index) => {
  const article = document.createElement("article");
  article.className = "project-card";
  const validDriveUrl = safeUrl(project.driveUrl);
  const cta = validDriveUrl
    ? `<a class="project-link" href="${validDriveUrl}" target="_blank" rel="noopener noreferrer">Open project deck ↗</a>`
    : `<a class="project-link placeholder-link" href="#" data-project="${project.name}">Add project deck ↗</a>`;

  article.innerHTML = `
    <button class="project-visual image-trigger" type="button" aria-label="Open ${project.name} image in full view">
      <img src="${project.image}" alt="${project.name} — ${project.subtitle}" loading="${index < 2 ? 'eager' : 'lazy'}">
      <span class="project-number">${project.number}</span>
    </button>
    <div class="project-body">
      <div class="project-meta"><span>${project.tags}</span><span>${project.year}</span></div>
      <h3>${project.name}</h3>
      <p class="project-type">${project.subtitle}</p>
      <p class="project-desc">${project.description}</p>
      <div class="project-role"><small>Her role</small><div>${project.role}</div></div>
      ${cta}
    </div>
  `;
  projectList.appendChild(article);
});

document.querySelectorAll('.placeholder-link').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert(`Add the Google Drive URL for “${link.dataset.project}” in script.js.`);
  });
});

const experienceList = document.getElementById("experience-list");
experiences.forEach(item => {
  const row = document.createElement("div");
  row.className = "timeline-item";
  row.innerHTML = `
    <div class="timeline-date">${item.date}</div>
    <div><div class="timeline-org">${item.org}</div><div class="timeline-role">${item.role}</div></div>
    <div class="timeline-note">${item.note}</div>
  `;
  experienceList.appendChild(row);
});

document.getElementById("year").textContent = new Date().getFullYear();


// Theme system: Light ↔ Dark.
// On first visit, use the system preference; subsequent visits remember the choice.
const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle?.querySelector(".theme-icon");
const themes = ["light", "dark"];

function updateThemeIcon(theme) {
  if (!themeIcon) return;
  // Show a sun in light mode and a half-moon in dark mode.
  themeIcon.innerHTML = theme === "dark"
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.2A8.3 8.3 0 0 1 8.8 4 8.3 8.3 0 1 0 20 15.2Z" fill="currentColor"></path></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor"></circle><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 2.2v2.2M12 19.6v2.2M2.2 12h2.2M19.6 12h2.2M5.1 5.1l1.6 1.6M17.3 17.3l1.6 1.6M18.9 5.1l-1.6 1.6M6.7 17.3l-1.6 1.6"></path></g></svg>';
}

function applyTheme(theme, persist = true) {
  const nextTheme = themes.includes(theme) ? theme : "light";
  root.dataset.theme = nextTheme;
  const favicon = document.getElementById("theme-favicon");
  if (favicon) favicon.href = nextTheme === "dark" ? "assets/favicon-dark.png" : "assets/favicon-light.png";
  if (persist) localStorage.setItem("vidhi-theme", nextTheme);
  const next = nextTheme === "dark" ? "light" : "dark";
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(nextTheme === "dark"));
    themeToggle.setAttribute("aria-label", `Switch to ${next} theme`);
    themeToggle.setAttribute("title", `Switch to ${next} theme`);
  }
  updateThemeIcon(nextTheme);
}

const savedTheme = localStorage.getItem("vidhi-theme");
applyTheme(themes.includes(savedTheme) ? savedTheme : "light", false);

themeToggle?.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
});



// Project image lightbox. Clicking an image opens it in place; click X or outside to close.
const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.classList.remove("lightbox-open");
}

function openLightbox(image) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt || "";
  if (lightboxCaption) lightboxCaption.textContent = image.alt || "";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".image-trigger");
  if (trigger) {
    event.preventDefault();
    const image = trigger.querySelector("img");
    if (image) openLightbox(image);
    return;
  }
  if (event.target.closest("[data-lightbox-close=\"true\"]") || event.target.closest("#lightbox-close")) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
