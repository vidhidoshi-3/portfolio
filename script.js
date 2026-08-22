/*
  CONTENT CONFIG
  Update the Google Drive URLs and image paths here.
  The HTML page will build the project cards automatically.
*/
const workThemes = [
  { id: "educational", label: "Educational", kicker: "EDUCATIONAL", description: "Institutional campuses shaped through master planning, movement, infrastructure and long-term development strategy." },
  { id: "sports", label: "Sports", kicker: "SPORTS", description: "Inclusive sports environments balancing access, training, recreation and public-realm character." },
  { id: "community", label: "Community Infrastructure", kicker: "COMMUNITY INFRASTRUCTURE", description: "Community-oriented infrastructure designed around everyday needs, resilience and local use." },
  { id: "transport", label: "Transport", kicker: "TRANSPORT", description: "Transit-focused planning connecting mobility, feasibility, development potential and user experience." },
  { id: "tod", label: "TOD", kicker: "TRANSIT-ORIENTED DEVELOPMENT", description: "Mobility and safety studies translated into walkable, legible and place-based urban interventions." },
  { id: "township", label: "Township Masterplanning", kicker: "TOWNSHIP MASTERPLANNING", description: "Integrated township thinking balancing accessibility, community interaction and residential privacy." },
  { id: "public-realm", label: "Public Realm", kicker: "PUBLIC REALM", description: "Human-scale urban interventions that strengthen edges, streets, pedestrian movement and civic life." }
];

const projects = [
  {
    theme: "educational",
    number: "01",
    name: "IIM Mumbai",
    subtitle: "65-acre Campus Redevelopment",
    year: "2024—25",
    tags: "Master Planning · Infrastructure · Tender",
    image: "assets/images/iim-mumbai.svg",
    description: "Redevelopment framework for a 65-acre institutional campus, integrating master planning, road infrastructure, utility coordination and implementation documentation.",
    role: "Urban Design · Master Planning · MEP Coordination · EPC Tender Documentation",
    driveUrl: "https://drive.google.com/file/d/1TkFvypcIOYl5uz-9l4VMo03m6ugkix2t/view",
    videoUrl: ""
  },
  {
    theme: "educational",
    number: "02",
    name: "IIT Dhanbad",
    subtitle: "200-acre Brownfield Campus",
    year: "2024—25",
    tags: "Urban Design · Campus Strategy",
    image: "assets/images/iit-dhanbad.svg",
    description: "A brownfield campus framework translating land use, zoning, movement networks and public-realm principles into a coherent development strategy.",
    role: "Urban Design · Guidelines · Campus Development Strategy",
    driveUrl: "https://drive.google.com/file/d/1O-zC4xrhoCx0OcMSRRNuwRYkcuvTqwU4/view",
    videoUrl: ""
  },
  {
    theme: "sports",
    number: "03",
    name: "Bengaluru Sports City",
    subtitle: "20-acre Inclusive Sports City",
    year: "2024—25",
    tags: "Master Planning · Accessibility · Sports",
    image: "assets/images/bengaluru-sports-city.svg",
    description: "A masterplan and conceptual framework for an inclusive sports city centred on Paralympic sports, training and accessible recreation.",
    role: "Master Planning · Concept Design · Accessible Public Realm",
    driveUrl: "https://drive.google.com/file/d/1jG1UvjPEU2aEIjb8W6olXcc2pun7yITa/view?usp=drive_link",
    videoUrl: "https://drive.google.com/file/d/1-je8sf6b_Al1dt0-4VfvV4_UwSL8py8r/view?usp=drive_link"
  },
  {
    theme: "community",
    number: "04",
    name: "Goa Fisheries",
    subtitle: "Community Infrastructure · 25 Sites",
    year: "2024—25",
    tags: "Infrastructure · DPR · Community",
    image: "assets/images/goa-fisheries.svg",
    description: "A multi-site infrastructure programme addressing fishing-community needs through net-mending sheds, ramps, jetties, dredging and supporting amenities.",
    role: "DPR Preparation · Infrastructure Planning · Community Amenities",
    driveUrl: "https://drive.google.com/drive/folders/1c4klfRtpPfqoQJgSS0A3ypL3vWV4fVK2?usp=drive_link",
    videoUrl: ""
  },
  {
    theme: "transport",
    number: "05",
    name: "MSRTC",
    subtitle: "Bus Stations & Depots · 12 Sites",
    year: "2024—25",
    tags: "Transport · PPP · Feasibility",
    image: "assets/images/msrtc.svg",
    description: "Master planning and feasibility studies for bus stations and depots across Maharashtra, explored through a PPP development model.",
    role: "Master Planning · Market Studies · FSI Feasibility",
    driveUrl: "https://drive.google.com/file/d/1Jt-2AoHu3BLkY2UOk8Ou0n0Vs4Y1qK6C/view",
    videoUrl: ""
  },
  {
    theme: "tod",
    number: "06",
    name: "LAMP & Safety Audit",
    subtitle: "Transit-Oriented Development Zones · Bengaluru",
    year: "2023",
    tags: "TOD · Mobility · Safety · Placemaking",
    image: "assets/images/lamp-safety-audit.svg",
    description: "Assessment of Local Area Mobility Parameters and safety conditions around two proposed TOD zones, using survey data to shape placemaking and mobility interventions.",
    role: "Mobility Analysis · Safety Audit · Placemaking · Urban Design",
    driveUrl: "https://drive.google.com/drive/folders/1mPhn4nCrZdKhKIZn-UI6ORdkcJbyxeen?usp=drive_link",
    videoUrl: "https://dult.karnataka.gov.in/uploads/media_to_upload1700045435.pdf"
  },
  {
    theme: "township",
    number: "07",
    name: "BLEND.in",
    subtitle: "Integrated Township · Gandhinagar",
    year: "Academic",
    tags: "Township · Community · Residential",
    image: "assets/images/blend-in.svg",
    description: "An integrated township framework balancing public accessibility, community interaction and residential privacy through inclusive urban design strategies.",
    role: "Township Planning · Urban Design · Spatial Strategy",
    driveUrl: "https://drive.google.com/file/d/1xH7GQc_s5175sRCyK1kzLiOAEGDrRZhr/view",
    videoUrl: ""
  },
  {
    theme: "public-realm",
    number: "08",
    name: "Infusing Edges",
    subtitle: "Institutional Edges · Ahmedabad",
    year: "Academic",
    tags: "Urban Design · Public Realm · Placemaking",
    image: "assets/images/infusing-edges.svg",
    description: "Reimagining institutional edges as inclusive public spaces by connecting campuses with surrounding urban villages through spatial design and activity programming.",
    role: "Urban Design · Public Realm · Activity Programming",
    driveUrl: "https://drive.google.com/file/d/1vnESsVxwcpsDettLw7kJBOOW8s1T3aYC/view",
    videoUrl: ""
  },
  {
    theme: "public-realm",
    number: "09",
    name: "Shivranjani Cross Road",
    subtitle: "Urban Intersection · Ahmedabad",
    year: "Academic",
    tags: "Mobility · Public Realm · Street Design",
    image: "assets/images/shivranjani.svg",
    description: "An urban design proposal focused on pedestrian mobility, public-realm quality and street character at a key Ahmedabad intersection.",
    role: "Street Design · Mobility · Public Realm",
    driveUrl: "https://drive.google.com/file/d/1NK0zdYTBgimdw9bUMZpwBVgL9bQ6WTgf/view",
    videoUrl: ""
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

workThemes.forEach((theme) => {
  const section = document.createElement("section");
  section.className = "project-theme-section";
  section.id = `theme-${theme.id}`;
  section.dataset.themeId = theme.id;
  const themeProjects = projects.filter(project => project.theme === theme.id);
  const projectCount = themeProjects.length.toString().padStart(2, "0");
  section.innerHTML = `
    <div class="theme-section-head">
      <div class="theme-section-copy">
        <div class="theme-section-topline">
          <p class="theme-label">${theme.kicker}</p>
          <span class="theme-count">${projectCount} ${themeProjects.length === 1 ? "PROJECT" : "PROJECTS"}</span>
        </div>
        <h3 class="theme-section-title">${theme.label}</h3>
        <p class="theme-section-description">${theme.description}</p>
      </div>
      <div class="theme-section-marker" aria-hidden="true"><span></span></div>
    </div>
    <div class="project-list"></div>
  `;

  const list = section.querySelector(".project-list");
  themeProjects.forEach((project, index) => {
    const article = document.createElement("article");
    article.className = "project-card";
    const validDriveUrl = safeUrl(project.driveUrl);
    const validVideoUrl = safeUrl(project.videoUrl);

    const deckLink = validDriveUrl
      ? `<a class="project-link" href="${validDriveUrl}" target="_blank" rel="noopener noreferrer">View Project ↗</a>`
      : "";

    const videoLink = validVideoUrl
      ? `<a class="project-link project-video-link" href="${validVideoUrl}" target="_blank" rel="noopener noreferrer" aria-label="Watch project video">
          <svg class="watch-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10-6.5L8 5.5Z"></path></svg>
          <span>Watch</span>
        </a>`
      : "";

    const cta = `<div class="project-actions">${deckLink}${videoLink}</div>`;

    article.innerHTML = `
      <button class="project-visual image-trigger" type="button" aria-label="Open ${project.name} image in full view">
        <img src="${project.image}" alt="${project.name} — ${project.subtitle}" loading="${project.number === '01' || project.number === '03' ? 'eager' : 'lazy'}">
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
    list.appendChild(article);
  });

  projectList.appendChild(section);
});

document.querySelectorAll('.placeholder-link').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert(`Add the Google Drive URL for “${link.dataset.project}” in script.js.`);
  });
});

const primaryNavLinks = [...document.querySelectorAll("[data-nav-section]")];
const primaryNavSections = ["about", "work", "experience", "contact"]
  .map(id => document.getElementById(id))
  .filter(Boolean);
const workSection = document.getElementById("work");

function activatePrimaryNav(id) {
  primaryNavLinks.forEach(link => {
    link.classList.toggle("is-active", link.dataset.navSection === id);
  });
}

// The primary nav is driven by section boundaries rather than by the
// individual theme sections. This keeps "Work" active for the entire
// Work area, including every project theme.
function updatePrimaryNav() {
  if (!primaryNavSections.length) return;

  const probeY = window.scrollY + Math.min(140, window.innerHeight * 0.22);
  let activeId = primaryNavSections[0].id;

  for (const section of primaryNavSections) {
    if (section.offsetTop <= probeY) activeId = section.id;
  }

  activatePrimaryNav(activeId);
}

let primaryNavRaf = null;
window.addEventListener("scroll", () => {
  if (primaryNavRaf) return;
  primaryNavRaf = requestAnimationFrame(() => {
    updatePrimaryNav();
    primaryNavRaf = null;
  });
}, { passive: true });

window.addEventListener("resize", updatePrimaryNav);
window.addEventListener("load", updatePrimaryNav);
updatePrimaryNav();

primaryNavLinks.forEach(link => {
  link.addEventListener("click", () => {
    activatePrimaryNav(link.dataset.navSection);
  });
});

const workThemeLinks = [...document.querySelectorAll(".work-theme")];
const workThemeSections = [...document.querySelectorAll(".project-theme-section")];

function activateWorkTheme(id) {
  workThemeLinks.forEach(link => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#theme-${id}`);
  });
}

if (workThemeSections.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible[0]) activateWorkTheme(visible[0].target.dataset.themeId);
  }, { rootMargin: "-18% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] });
  workThemeSections.forEach(section => observer.observe(section));
}

workThemeLinks.forEach(link => {
  link.addEventListener("click", () => {
    activateWorkTheme(link.getAttribute("href").replace("#theme-", ""));
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
