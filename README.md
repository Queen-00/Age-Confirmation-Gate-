<div align="center">

<!-- Badge-Style Title (pill button with neon gradient + subtle animated shine) -->
<svg width="560" height="74" viewBox="0 0 560 74" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Age Gate Template">
  <defs>
    <linearGradient id="badgeGrad" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stop-color="#34D399"/>
      <stop offset="50%" stop-color="#22D3EE"/>
      <stop offset="100%" stop-color="#A78BFA"/>
    </linearGradient>
    <filter id="badgeGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <linearGradient id="shine" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- pill -->
  <rect x="4" y="7" rx="24" ry="24" width="552" height="60" fill="#0b1324" stroke="url(#badgeGrad)" stroke-width="2.5" filter="url(#badgeGlow)"/>
  <!-- animated shine -->
  <rect x="-180" y="7" rx="24" ry="24" width="180" height="60" fill="url(#shine)" opacity="0.6">
    <animate attributeName="x" from="-180" to="560" dur="3.8s" repeatCount="indefinite"/>
  </rect>
  <!-- text -->
  <text x="50%" y="50%" fill="url(#badgeGrad)" font-family="Orbitron, ui-sans-serif, system-ui" font-size="24" font-weight="800" dominant-baseline="middle" text-anchor="middle">
    Age Gate Template
  </text>
</svg>

<!-- Animated typing banner (under title, above icons) -->
<p align="center">
  <img
    src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&duration=2500&pause=900&center=true&vCenter=true&width=720&color=00E5FF&repeat=true&lines=%E2%80%A2%20Age%20Verification%20Gate%20%E2%80%A2;%E2%80%A2%20Ready%20to%20Use%20%E2%80%A2;%E2%80%A2%20React%20%2B%20Next.js%20%E2%80%A2;%E2%80%A2%20Tailwind%20CSS%20%2B%20Lucide%20Icons%20%E2%80%A2;%E2%80%A2%20Neon%20Theme%20%26%20LocalStorage%20%E2%80%A2"
    alt="Animated note"
  />
</p>

<!-- Tech badges -->
<p>
  <img alt="React" src="https://img.shields.io/badge/React-20232a?logo=react&logoColor=61dafb&labelColor=20232a">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white">
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind_CSS-0b1120?logo=tailwindcss&logoColor=38bdf8">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-1f2937?logo=typescript&logoColor=3178c6">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-1f2937?logo=javascript&logoColor=f7df1e">
  <img alt="Lucide" src="https://img.shields.io/badge/Lucide-0b1324?logo=lucide&logoColor=9b89ff">
</p>
</div>

<!-- spacer to ensure the next heading doesn't sit inline with the badges -->
<br/>

---

<h2 align="center">📝 Overview</h2>

Here’s my simple README.md style guide you can drop my template code directly into your GitHub repo for your Age Check Gate.  
It’s written in simple, clear language so even as a beginner you can follow it. 🤗

A very simple, reusable **React + Next.js** age check component with a neon **green → blue → purple** color scheme/style.  
It blocks viewing access to your page/site til users confirms they're 18+, storing their confirmation in `localStorage` so they don’t see it again. Ultimately this is not an actual age verification lol it obviously doesn't check or scan IDs etc its literally just a pretty hey this sites intended for adults, type of notice.

---

<h2 align="center">✨ Features</h2>

- Copy & Paste Ready – Self-contained, minimal setup needed.  
- Neon Theme – vibrant green, blue, and purple gradients.  
- Persistent State – Remembers confirmation using `localStorage`.  
- Fully Responsive – Works on mobile and desktop.  
- Lightweight Animations – Includes heartbeat and shimmer effects.

---

<h2 align="center">🛠 Requirements</h2>

- Language: JavaScript / TypeScript (React)  
- Framework: Next.js 13+ (supports the "use client" directive)  
- Styling: Tailwind CSS for utility classes  
- Icons: Lucide React for ShieldCheck icon  

Install Tailwind CSS & Lucide React:
```bash
npm install tailwindcss lucide-react
# or
yarn add tailwindcss lucide-react


---

<h2 align="center">📂 Where to Put Code??</h2>Soo you can either:

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

<h2 align="center">📜 How It Works?</h2>1. When it loads, it checks localStorage for a 'key' ("ageCheck" by default).


2. When the value is "true", it means a user already confirmed and the gate won’t be shown.


3. When not confirmed, it displays:

Title ("Age Verification")

Short description ("Please select your age")

Two buttons:

I AM 18+ – saves "true" to localStorage and hides the gate.

I AM NOT 18+ – redirects to another URL (you can customize this to your preference ofc).




4. The gradient background, text colors, and animations have all been built using Tailwind classes and very simple CSS animations.




---

<h2 align="center">🖥️ Step-by-Step Installation</h2>1. Copy my Code lol
Copy the full AgeGateTemplate component into your project either directly into Hero.tsx or as its own separate component.


2. Install Required Packages
Make sure Tailwind CSS and Lucide React are installed using yarn or npm.

npm install tailwindcss lucide-react
# or
yarn add tailwindcss lucide-react

If you haven’t set up Tailwind, follow the official guide.


3. Place It in Hero
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


4. Customize

Text: Change the title & description inside <h1> and <p>.

Colors: Edit the Tailwind gradient classes (from-emerald-400 via-cyan-400 to-purple-500).

Redirect: Change the <a href="https://www.google.com"> to your preferred under-18 page.

Storage Key: Change const STORAGE_KEY = "ageCheck" if you want a diff localStorage key.



5. Test and View
First run a build test using yarn or npm to make sure it compiles properly without error, saves inconvenience and steps to deploy successfully without build errors. Always test in your local environments, run something like yarn build etc before deployment.

Visit your page in the browser — you should see the age gate.
Click I AM 18+ and refresh — the gate should not appear again.
To reset, run in browser console (or if you dont want to reset just load site in mew incognito tab to test the other buttons redirect):

localStorage.removeItem("ageCheck"); 
location.reload();




---

<h2 align="center">🎨 Example Appearance</h2>The gate should appear centered on the screen with:

A shield icon at the top.

Neon green-blue-purple animated title text.

Shimmering divider line.

Gradient buttons with hover effects.



---

<h2 align="center">📄 Licenses?</h2>This template is mine and free to use, modify, etc. No credit or anything necessary (but always appreciated!)
