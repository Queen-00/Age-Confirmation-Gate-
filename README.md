<div align="center"><!-- Animated SVG Title (blue neon shimmer) --><svg width="100%" height="110" viewBox="0 0 1200 110" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad">
      <stop offset="0%" stop-color="#60A5FA"/>
      <stop offset="50%" stop-color="#22D3EE"/>
      <stop offset="100%" stop-color="#A78BFA"/>
    </linearGradient>
    <linearGradient id="shine">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <mask id="mask">
      <rect width="1200" height="110" fill="black"/>
      <text x="50%" y="72%" dominant-baseline="middle" text-anchor="middle"
            font-family="Orbitron, ui-sans-serif, system-ui" font-size="38" font-weight="800">
        Age Gate Template (Green • Blue • Purple Theme)
      </text>
    </mask>
  </defs>
  <rect width="1200" height="110" fill="url(#grad)" mask="url(#mask)"/>
  <rect width="240" height="110" fill="url(#shine)" mask="url(#mask)">
    <animate attributeName="x" from="-240" to="1200" dur="4s" repeatCount="indefinite" />
  </rect>
</svg><!-- Tech badges --><p>
  <img alt="React" src="https://img.shields.io/badge/React-20232a?logo=react&logoColor=61dafb&labelColor=20232a">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white">
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind_CSS-0b1120?logo=tailwindcss&logoColor=38bdf8">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-1f2937?logo=typescript&logoColor=3178c6">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-1f2937?logo=javascript&logoColor=f7df1e">
  <img alt="Lucide" src="https://img.shields.io/badge/Lucide-0b1324?logo=lucide&logoColor=9b89ff">
</p></div>
---

<img alt="badge" src="https://img.shields.io/badge/Overview-111827?style=for-the-badge&labelColor=0b1324&color=22d3ee">Here’s my simply README.md style guide you can drop my template code directly into your GitHub repo for your Age Check Gate.
It’s written in simple, clear language so even as a beginner you can follow it. 🤗

A very simple, reusable React + Next.js age check component with a neon green → blue → purple color scheme/style.
It blocks viewing access to your page/site til users confirms they're 18+, storing their confirmation in localStorage so they don’t see it again. Ultimately this is not an actual age verification lol it obviously doesn't check or scan IDs etc its literally just a pretty hey this sites intended for adults, type of notice.


---

<img alt="badge" src="https://img.shields.io/badge/✨%20Features-111827?style=for-the-badge&labelColor=0b1324&color=a78bfa">Copy & Paste Ready – Self-contained, minimal setup needed.

Neon Theme – vibrant green, blue, and purple gradients.

Persistent State – Remembers confirmation using localStorage.

Fully Responsive – Works on mobile and desktop.

Lightweight Animations – Includes heartbeat and shimmer effects.



---

<img alt="badge" src="https://img.shields.io/badge/🛠️%20Requirements-111827?style=for-the-badge&labelColor=0b1324&color=22d3ee">Language: JavaScript / TypeScript (React)
Framework: Next.js 13+ (supports the "use client" directive)
Styling: Tailwind CSS for utility classes
Icons: Lucide React for ShieldCheck icon

You need to have Tailwind CSS and Lucide React installed in your Next.js project! to do so use npm or yarn with:

# install tailwind & lucide
npm install tailwindcss lucide-react
# or
yarn add tailwindcss lucide-react


---

<img alt="badge" src="https://img.shields.io/badge/📂%20Where%20to%20Put%20Code??-111827?style=for-the-badge&labelColor=0b1324&color=34d399">Soo you can either:

1) Inside Hero.tsx directly

Paste the entire snippet at the top of the file, above your main Hero function.
Call <AgeGateTemplate /> at the start of your return so it shows before any other content.

// Hero.tsx (example usage)
import AgeGateTemplate from "@/components/AgeGateTemplate";

export default function Hero() {
  return (
    <>
      <AgeGateTemplate />
      {/* Rest of your Hero content */}
    </>
  );
}

2) As a separate file

Save it as components/AgeGateTemplate.tsx.
And then import it to your Hero.tsx:

import AgeGateTemplate from "@/components/AgeGateTemplate";

Render at the top of your JSX like so:

return (
  <>
    <AgeGateTemplate />
    {/* Rest of your Hero content */}
  </>
);


---

<img alt="badge" src="https://img.shields.io/badge/📜%20How%20It%20Works?-111827?style=for-the-badge&labelColor=0b1324&color=60a5fa">1. When it loads, it checks localStorage for a 'key' ("ageCheck" by default).


2. When the value is "true", it means a user already confirmed and the gate won’t be shown.


3. When not confirmed, it displays:

Title ("Age Verification")

Short description ("Please select your age")

Two buttons:

I AM 18+ – saves "true" to localStorage and hides the gate.

I AM NOT 18+ – redirects to another URL (you can customize this to your preference ofc).




4. The gradient background, text colors, and animations have all been built using Tailwind classes and very simple CSS animations.




---

<img alt="badge" src="https://img.shields.io/badge/🖥️%20Step--by--Step%20Installation-111827?style=for-the-badge&labelColor=0b1324&color=22d3ee">1) Copy my Code lol

Copy the full AgeGateTemplate component into your project either directly into Hero.tsx or as its own separate component.

2) Install Required Packages

Make sure Tailwind CSS and Lucide React are installed using yarn or npm.

npm install tailwindcss lucide-react
# or
yarn add tailwindcss lucide-react

If you haven’t set up Tailwind, follow the official guide.

3) Place It in Hero

Example inside Hero.tsx:

import AgeGateTemplate from "@/components/AgeGateTemplate";

export default function Hero() {
  return (
    <>
      <AgeGateTemplate />
      {/* Your Hero section stuff here */}
    </>
  );
}

4) Customize

Text: Change the title & description inside <h1> and <p>.

Colors: Edit the Tailwind gradient classes (from-emerald-400 via-cyan-400 to-purple-500).

Redirect: Change the <a href="https://www.google.com"> to your preferred under-18 page.

Storage Key: Change const STORAGE_KEY = "ageCheck" if you want a diff localStorage key.


5) Test and View

First run a build test using yarn or npm to make sure it compiles properly without error, saves inconvenience and steps to deploy successfully without build errors. Always test in your local environments, run something like yarn build etc before deployment.

Visit your page in the browser — you should see the age gate.
Click I AM 18+ and refresh — the gate should not appear again.
To reset, run in browser console (or if you dont want to reset just load site in mew incognito tab to test the other buttons redirect):

localStorage.removeItem("ageCheck"); 
location.reload();


---

<img alt="badge" src="https://img.shields.io/badge/🎨%20Example%20Appearance-111827?style=for-the-badge&labelColor=0b1324&color=a78bfa">The gate should appear centered on the screen with:

A shield icon at the top.

Neon green-blue-purple animated title text.

Shimmering divider line.

Gradient buttons with hover effects.



---

<img alt="badge" src="https://img.shields.io/badge/📄%20Licenses?-111827?style=for-the-badge&labelColor=0b1324&color=34d399">This template is mine and free to use, modify, and distribute in personal or commercial projects. No credit or anything necessary (but always appreciated!)


---

🔁 Optional: Slide‑Style Sections (for a slick GitHub look)

<details>
  <summary><b>Slide 1 – Languages & Tools</b></summary>JavaScript / TypeScript (React) • Next.js 13+ • Tailwind CSS • Lucide React

npm install tailwindcss lucide-react
# or
yarn add tailwindcss lucide-react

</details><details>
  <summary><b>Slide 2 – Installation Quickstart</b></summary># 1) Add the component
# 2) Install deps (tailwindcss, lucide-react)
# 3) Import and render in Hero.tsx
# 4) Customize text/colors/redirect
# 5) Test locally (yarn build)

</details><details>
  <summary><b>Slide 3 – Usage Snippet</b></summary>import AgeGateTemplate from "@/components/AgeGateTemplate";

export default function Hero() {
  return (
    <>
      <AgeGateTemplate />
      {/* Hero content */}
    </>
  );
}

</details><details>
  <summary><b>Slide 4 – Reset / QA</b></summary>// Reset the gate for testing:
localStorage.removeItem("ageCheck");
location.reload();

</details>
---

