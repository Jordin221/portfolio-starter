// ============================================================
// PROJECTS DATA
// TODO: Replace these with your real projects!
// Each project needs: title, description, tags, and optional links.
// Ask Copilot: "Add a project card for a [project type] called [name]"
// ============================================================
const projects = [
  {
    title: "Project One",
    description: "A short description of what this project does and why you built it.",
    tags: ["Python", "Flask"],
    github: "https://github.com/yourusername/project-one",
    demo: null,
  },
  {
    title: "Project Two",
    description: "Another project you're proud of. What problem did it solve?",
    tags: ["JavaScript", "React"],
    github: "https://github.com/yourusername/project-two",
    demo: "https://yourproject.netlify.app",
  },
  {
    title: "Project Three",
    description: "Keep it brief — one or two sentences is plenty.",
    tags: ["Java", "Algorithms"],
    github: "https://github.com/yourusername/project-three",
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

  for (let index = 0; index < 15; index += 1) {
    const star = document.createElement("span");
    star.className = "floating-star";
    star.textContent = starChars[index % starChars.length];

    const size = 10 + Math.random() * 18;
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
  renderProjects();
  renderSkills();
  updateYear();

  // TODO: Wire up your dark mode toggle button here once you add it
});
