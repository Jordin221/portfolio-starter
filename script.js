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
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects
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
// DARK MODE TOGGLE
// TODO: Implement this! Here's a stub to get you started.
// Ask Copilot (inline chat on this function): "Implement dark mode
// toggle that saves preference to localStorage"
// ============================================================
function toggleDarkMode() {
  // Your implementation here
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
  renderStars();
  animateSpaceship();
  renderProjects();
  renderSkills();
  updateYear();

  // TODO: Wire up your dark mode toggle button here once you add it
});
