// ============================================================
// PROJECTS DATA
// TODO: Replace these with your real projects!
// Each project needs: title, description, tags, and optional links.
// Ask Copilot: "Add a project card for a [project type] called [name]"
// ============================================================
const projects = [
  {
    title: "Contributor Catalyst",
    description: "Public fork of contributor-catalyst/program-info, used to explore and share project information in an open-source workflow.",
    tags: ["GitHub", "Open Source", "Collaboration"],
    github: "https://github.com/Jordin221/contributor-catalyst",
    demo: null,
  },
  {
    title: "FarmData2.1",
    description: "Main development repository for the FarmData2 Drupal module.",
    tags: ["Drupal", "Development", "Open Source"],
    github: "https://github.com/Jordin221/FarmData2.1",
    demo: null,
  },
  {
    title: "Portfolio Starter",
    description: "A custom personal portfolio site built with HTML, CSS, and JavaScript and deployed with GitHub Pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jordin221/portfolio-starter",
    demo: null,
  },
];

let currentProjectFilter = "All";

// ============================================================
// SKILLS DATA
// TODO: Replace with your actual skills.
// Ask Copilot to help format this list based on your resume.
// ============================================================
const skills = [
  "Python", "JavaScript", "Java", "C++",
  "HTML & CSS", "Git & GitHub",
  "Teamwork", "Communication",
  "React", "Node.js",
  "SQL", "Linux",
];

// ============================================================
// RENDER PROJECTS
// ============================================================
function renderProjectFilters() {
  const container = document.getElementById("project-filters");
  if (!container) return;

  const allTags = ["All", ...new Set(projects.flatMap((project) => project.tags))];

  container.innerHTML = allTags
    .map(
      (tag) => `
        <button type="button" class="project-filter${tag === currentProjectFilter ? " is-active" : ""}" data-filter="${tag}">
          ${tag}
        </button>
      `
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  const normalizedFilter = currentProjectFilter.toLowerCase();
  const visibleProjects =
    normalizedFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.some((tag) => tag.toLowerCase() === normalizedFilter));

  container.innerHTML = visibleProjects
    .map(
      (project) => `
      <div class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" target="_blank">GitHub →</a>` : ""}
          ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo →</a>` : ""}
        </div>
      </div>
    `
    )
    .join("");
}

function updateProjectFilter(filter) {
  currentProjectFilter = filter;
  renderProjectFilters();
  renderProjects();
}

// ============================================================
// RENDER SKILLS
// ============================================================
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = skills
    .map((skill) => `<span class="skill-badge">${skill}</span>`)
    .join("");
}

// ============================================================
// RENDER STARS
// ============================================================
function renderStars() {
  const starField = document.createElement("div");
  starField.className = "star-field";
  starField.setAttribute("aria-hidden", "true");

  const starChars = ["✦", "✧", "✩"];

  for (let index = 0; index < 40; index += 1) {
    const star = document.createElement("span");
    star.className = "floating-star";
    star.textContent = starChars[index % starChars.length];

    const size = 6 + Math.random() * 8;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = 3.5 + Math.random() * 4.5;
    const delay = Math.random() * 3;
    const driftDistance = 6 + Math.random() * 14;

    star.style.top = `${top}%`;
    star.style.left = `${left}%`;
    star.style.fontSize = `${size}px`;
    star.style.animationDuration = `${duration}s, ${duration * 0.75}s`;
    star.style.animationDelay = `${delay}s, ${delay * 0.5}s`;
    star.style.setProperty("--drift-distance", `${driftDistance}px`);

    starField.appendChild(star);
  }

  document.body.appendChild(starField);
}

// ============================================================
// ANIMATE SPACESHIP
// ============================================================
function animateSpaceship() {
  const ship = document.querySelector(".spaceship");
  if (!ship) return;

  const cycleDuration = 24000;
  let startTime = Date.now();
  let exploding = false;
  let resetTimer = null;

  function spawnExplosion(centerX, centerY) {
    const explosion = document.createElement("div");
    explosion.className = "ship-explosion";
    explosion.style.left = `${centerX}px`;
    explosion.style.top = `${centerY}px`;

    const flash = document.createElement("div");
    flash.className = "ship-flash";
    explosion.appendChild(flash);

    const colors = ["#fff7c7", "#ffd36d", "#ff9f6e", "#ff6b6b", "#9b7bff", "#6dd3ff", "#ffffff"];

    for (let index = 0; index < 42; index += 1) {
      const particle = document.createElement("span");
      particle.className = "ship-particle";
      const angle = (Math.PI * 2 * index) / 42 + Math.random() * 0.3;
      const distance = 90 + Math.random() * 180;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      const size = 5 + Math.random() * 6;

      particle.style.setProperty("--dx", `${dx}px`);
      particle.style.setProperty("--dy", `${dy}px`);
      particle.style.setProperty("--particle-color", colors[index % colors.length]);
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDelay = `${Math.random() * 0.16}s`;

      explosion.appendChild(particle);
    }

    document.body.appendChild(explosion);
    window.setTimeout(() => explosion.remove(), 1700);
  }

  function triggerExplosion() {
    if (exploding) return;
    exploding = true;

    const rect = ship.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    ship.style.opacity = "0";
    spawnExplosion(centerX, centerY);

    if (resetTimer) {
      window.clearTimeout(resetTimer);
    }

    resetTimer = window.setTimeout(() => {
      startTime = Date.now();
      exploding = false;
      ship.style.opacity = "0";
      updatePosition();
    }, 1600);
  }

  ship.addEventListener("click", triggerExplosion);

  function updatePosition() {
    if (exploding) return;

    const elapsed = (Date.now() - startTime) % cycleDuration;
    const progress = elapsed / cycleDuration;
    const viewportWidth = window.innerWidth;
    const shipWidth = ship.getBoundingClientRect().width || 48;
    const travelDistance = viewportWidth + shipWidth * 2;

    const x = -shipWidth - 20 + travelDistance * progress;
    const bob = Math.sin(progress * Math.PI * 6) * 10;
    const tilt = Math.sin(progress * Math.PI * 2) * 8;
    const fadeIn = Math.min(progress * 8, 1);
    const fadeOut = Math.min((1 - progress) * 8, 1);

    ship.style.opacity = `${Math.min(fadeIn, fadeOut)}`;
    ship.style.transform = `translate3d(${x}px, ${bob}px, 0) rotate(${tilt}deg)`;
  }

  updatePosition();
  setInterval(updatePosition, 50);
}

// ============================================================
// THEME TRANSITION ANIMATION
// ============================================================
function createThemeTransitionOverlay(nextTheme) {
  const overlay = document.createElement("div");
  overlay.className = "theme-transition-overlay";
  overlay.setAttribute("aria-hidden", "true");

  const isMobileViewport = window.innerWidth <= 768;

  const stars = document.createElement("div");
  stars.className = "theme-transition-stars";

  const starCount = isMobileViewport
    ? nextTheme === "dark"
      ? 120
      : 72
    : nextTheme === "dark"
      ? 140
      : 64;
  const starsAreDarkEntry = nextTheme === "dark";

  for (let index = 0; index < starCount; index += 1) {
    const star = document.createElement("span");
    star.className = "theme-transition-star";

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const angle = Math.random() * Math.PI * 2;
    const distance = isMobileViewport
      ? starsAreDarkEntry
        ? 140 + Math.random() * 260
        : 90 + Math.random() * 180
      : starsAreDarkEntry
        ? 160 + Math.random() * 360
        : 90 + Math.random() * 180;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const size = isMobileViewport
      ? starsAreDarkEntry
        ? 10 + Math.random() * 14
        : 8 + Math.random() * 12
      : starsAreDarkEntry
        ? 12 + Math.random() * 18
        : 10 + Math.random() * 12;
    const duration = isMobileViewport
      ? starsAreDarkEntry
        ? 720 + Math.random() * 280
        : 560 + Math.random() * 220
      : starsAreDarkEntry
        ? 850 + Math.random() * 420
        : 650 + Math.random() * 280;
    const rotation = 80 + Math.random() * 180;

    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.setProperty("--dx", `${dx}px`);
    star.style.setProperty("--dy", `${dy}px`);
    star.style.setProperty("--star-size", `${size}px`);
    star.style.setProperty("--star-duration", `${duration}ms`);
    star.style.setProperty("--rotation", `${rotation}deg`);

    stars.appendChild(star);
  }

  overlay.appendChild(stars);

  return overlay;
}

function playThemeTransition(nextTheme) {
  const existingOverlay = document.querySelector(".theme-transition-overlay");
  if (existingOverlay) {
    existingOverlay.remove();
  }

  const overlay = createThemeTransitionOverlay(nextTheme);
  document.body.appendChild(overlay);

  window.setTimeout(() => {
    applyTheme(nextTheme);
  }, 260);

  window.setTimeout(() => {
    overlay.remove();
  }, 1220);
}

// ============================================================
// DARK MODE TOGGLE
// ============================================================
const themeStorageKey = "portfolio-theme";

function getSavedTheme() {
  try {
    const savedTheme = localStorage.getItem(themeStorageKey);
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch (error) {
    return "dark";
  }

  return "dark";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  const themeToggle = document.querySelector(".theme-toggle");
  if (!themeToggle) return;

  const isLightMode = theme === "light";
  const toggleText = themeToggle.querySelector(".theme-toggle-text");
  const toggleIcon = themeToggle.querySelector(".theme-toggle-icon");

  themeToggle.setAttribute("aria-pressed", String(isLightMode));
  themeToggle.setAttribute("aria-label", isLightMode ? "Switch to dark mode" : "Switch to light mode");

  if (toggleText) {
    toggleText.textContent = isLightMode ? "Dark mode" : "Light mode";
  }

  if (toggleIcon) {
    toggleIcon.textContent = isLightMode ? "🌙" : "☀️";
  }
}

function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";

  playThemeTransition(nextTheme);

  try {
    localStorage.setItem(themeStorageKey, nextTheme);
  } catch (error) {
    // Ignore storage errors so the toggle still works in private browsing.
  }
}

function initializeThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");
  if (!themeToggle) return;

  applyTheme(getSavedTheme());
  themeToggle.addEventListener("click", toggleDarkMode);
}

// ============================================================
// MOBILE NAVIGATION
// ============================================================
function initializeMobileNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!navToggle || !navLinks) return;

  const closeMenu = () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}

// ============================================================
// BACK TO TOP
// ============================================================
function initializeBackToTop() {
  const backToTop = document.querySelector(".back-to-top");
  if (!backToTop) return;

  const sentinel = document.createElement("div");
  sentinel.className = "back-to-top-sentinel";
  sentinel.setAttribute("aria-hidden", "true");
  document.body.prepend(sentinel);

  const updateVisibility = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 400);
  };

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        backToTop.classList.toggle("is-visible", !entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    observer.observe(sentinel);
  }

  window.addEventListener("scroll", updateVisibility, { passive: true });
  window.setInterval(updateVisibility, 200);
  updateVisibility();
}

// ============================================================
// CONTACT FORM
// ============================================================
function initializeContactForm() {
  const form = document.getElementById("contact-form");
  const note = document.getElementById("contact-form-note");
  if (!form || !note) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const messageInput = document.getElementById("contact-message");

    const name = nameInput instanceof HTMLInputElement ? nameInput.value.trim() : "";
    const email = emailInput instanceof HTMLInputElement ? emailInput.value.trim() : "";
    const message = messageInput instanceof HTMLTextAreaElement ? messageInput.value.trim() : "";

    if (!name || !email || !message) {
      note.textContent = "Please fill out your name, email, and message.";
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailtoUrl = `mailto:j.a.jones107732@spartans.nsu.edu?subject=${subject}&body=${body}`;

    note.textContent = "Opening your email app...";
    window.location.href = mailtoUrl;
  });
}

// ============================================================
// PROJECT FILTERS
// ============================================================
function initializeProjectFilters() {
  const filtersContainer = document.getElementById("project-filters");
  if (!filtersContainer) return;

  filtersContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const filterButton = target.closest(".project-filter");
    if (!(filterButton instanceof HTMLButtonElement)) return;

    const nextFilter = filterButton.getAttribute("data-filter") || "All";
    updateProjectFilter(nextFilter);
  });

  renderProjectFilters();
}

// ============================================================
// UPDATE FOOTER YEAR
// ============================================================
function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initializeThemeToggle();
  initializeMobileNavigation();
  initializeProjectFilters();
  initializeContactForm();
  initializeBackToTop();
  renderStars();
  animateSpaceship();
  renderProjectFilters();
  renderProjects();
  renderSkills();
  updateYear();
});
