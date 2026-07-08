# Prompt Journal

Log of the main Copilot prompts used while building this portfolio.

---

## Phase 1 — Setup & Orientation

### Entry 1
- **Feature/task:** Start a galaxy-themed portfolio starter and personalize it.
- **Copilot feature used:** Ask/Edit.
- **Prompt:**
  > make the portfolio feel like space with stars and a galaxy theme
- **Result:** Strong visual direction; started the dark-space style and star effects.
- **What I changed or did next:** Kept the theme and iterated on the background and motion.

---

## Phase 2 — Guided Tasks

### Entry 2 — About section
- **Feature/task:** Write the about section for Jordin Jones.
- **Copilot feature used:** Edit.
- **Prompt:**
  > write a short professional bio for a CS student interested in gaming and front-end projects
- **Result:** Useful starting copy, then refined manually for tone and detail.
- **What I changed or did next:** Updated the bio with Norfolk State University, mentoring work, and personal interests.

### Entry 3 — Projects
- **Feature/task:** Add real projects to the portfolio.
- **Copilot feature used:** Edit.
- **Prompt:**
  > add project cards for my GitHub repositories
- **Result:** Replaced placeholder projects with real repositories.
- **What I changed or did next:** Added Contributor Catalyst, FarmData2.1, and Portfolio Starter.

### Entry 4 — Dark mode / styling
- **Feature/task:** Make the site feel like outer space.
- **Copilot feature used:** Edit.
- **Prompt:**
  > create a galaxy theme with stars, glow, and a dark background
- **Result:** Good foundation for the animated background and glowing accents.
- **What I changed or did next:** Added stronger gradients, glows, and animated stars.

### Entry 5 — Responsive layout
- **Feature/task:** Make the layout work on smaller screens.
- **Copilot feature used:** Ask/Edit.
- **Prompt:**
  > improve the responsive styles for screens under 600px
- **Result:** Helped shape the responsive structure.
- **What I changed or did next:** Tuned the layout so sections stack better on mobile.

---

## Phase 3 — Independent Feature

**Feature I chose:** Animated space visuals and custom content sections.

### Entry 6
- **Copilot feature used:** Edit.
- **Prompt:**
  > add an animated star field with about 15 stars across the page
- **Result:** Generated a usable star animation, then expanded it later.
- **What I changed or did next:** Increased the count, reduced the size, and refined the motion.

### Entry 7
- **Copilot feature used:** Edit.
- **Prompt:**
  > make the galaxy picture move in the background indicating real space theme
- **Result:** Added drifting background motion with layered gradients.
- **What I changed or did next:** Slowed and tuned the movement for a deeper space feel.

### Entry 8 — A prompt that didn't work well
- **Copilot feature used:** Edit.
- **What I asked:**
  > put my email in the button
- **What went wrong:** The link was treated like a normal web address and caused a 404.
- **How I fixed it (revised prompt or manual edit):** Changed it to a proper `mailto:` link with subject and body text.

### Entry 9 — Avatar image
- **Copilot feature used:** Edit.
- **Prompt:**
  > can you put this in the avatar image
- **Result:** It worked only after the file was saved in the project and linked with a relative path.
- **What I changed or did next:** Moved the portrait into the `images` folder and updated the `img` source.

### Entry 10 — Bottom image cleanup
- **Copilot feature used:** Edit.
- **Prompt:**
  > remove the picture at the bottom please
- **Result:** Removed the extra bottom image section and cleaned up the unused CSS.
- **What I changed or did next:** Later swapped broken image references so the page no longer showed 404s.

### Entry 11 — Star field
- **Copilot feature used:** Edit.
- **Prompt:**
  > add multiple stars on the page that are animated about 15
- **Result:** Created an animated star field across the site.
- **What I changed or did next:** Increased the star count, reduced the size, and tuned the glow.

### Entry 12 — Background motion
- **Copilot feature used:** Edit.
- **Prompt:**
  > make the galaxy picture move in the background indicating real space theme
- **Result:** Added drifting motion to the hero background.
- **What I changed or did next:** Slowed and softened the movement so it felt more like deep space.

### Entry 13 — Spaceship animation
- **Copilot feature used:** Edit.
- **Prompt:**
  > could we have a space ship travel through the page at the bottom
- **Result:** Added a rocket at the bottom of the page.
- **What I changed or did next:** Made it slower and then switched to JavaScript-based motion when the CSS-only version was too subtle.

### Entry 14 — Experience and education section
- **Copilot feature used:** Edit.
- **Prompt:**
  > make this into a chart and add another header so it can display on the page
- **Result:** Added an Experience & Education section to the site.
- **What I changed or did next:** Reworked it into a bullet chart and then into two large separated circles.

### Entry 15 — Email fix
- **Copilot feature used:** Edit.
- **Prompt:**
  > how can i add my email because each time i add it it gives a 404 error
- **Result:** Identified that the email button needed a `mailto:` link.
- **What I changed or did next:** Added `mailto:` plus a subject and body so the button opens a real email draft.

---

## Reflection

**1. What feature are you most proud of?**

The animated space theme and the custom portfolio layout. The site feels personal and visual instead of plain.

---

**2. Describe a time Copilot gave you something wrong or unhelpful. What did you do?**

The email link was wrong at first because it was missing `mailto:`. I fixed the link manually and tested it again.

---

**3. What did you learn about writing better prompts?**

Specific prompts worked better. Saying exactly what section to change and what effect I wanted gave better results than broad requests.

---

**4. What's one part of the codebase you now understand better than at the start?**

How the HTML sections, CSS layout, and JavaScript rendering work together on a static site.

---

**5. What would you build or improve next?**

I would make the experience and education section more interactive and add a real project preview or contact form.
