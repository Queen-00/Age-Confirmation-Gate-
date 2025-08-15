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

<!-- Animated typing banner -->
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

<br/>

---

<h2 align="center">📝 Overview</h2>

A simple, reusable **React + Next.js** age check component with a neon **green → blue → purple** style.  
Blocks site access until users confirm they're 18+, storing the choice in `localStorage`.  

---

<h2 align="center">✨ Features</h2>

- Copy & Paste Ready  
- Vibrant neon theme  
- Persistent state via `localStorage`  
- Mobile + desktop friendly  
- Lightweight animations  

---

<h2 align="center">🛠 Requirements</h2>

- **Language:** JavaScript / TypeScript (React)  
- **Framework:** Next.js 13+ (`"use client"`)  
- **Styling:** Tailwind CSS  
- **Icons:** Lucide React  

Install required packages:  
```bash
npm install tailwindcss lucide-react
# or
yarn add tailwindcss lucide-react


---

📂 Where to Put Code??
Option 1: Inside Hero.tsx directly

import AgeGateTemplate from "@/components/AgeGateTemplate";

export default function Hero() {
  return (
    <>
      <AgeGateTemplate />
      {/* Rest of your Hero content */}
    </>
  );
}

Option 2: As a separate file
Save as components/AgeGateTemplate.tsx and import into Hero.tsx the same way.


---

📜 How It Works
On load, checks localStorage for "ageCheck".


2. If "true", gate is skipped.


3. If not set, gate appears with:

Title + description

I AM 18+ → saves "true" and hides gate

I AM NOT 18+ → redirects you





---

🖥️ Step-by-Step Installation
 Copy the AgeGateTemplate component into your project.


2. Install dependencies:

npm install tailwindcss lucide-react


3. Place <AgeGateTemplate /> at the top of your Hero.tsx.


4. Customize title, description, colors, and redirect link.


5. Build locally, then deploy.




---

🎨 Example Appearance
The gate appears centered with:

A shield icon

Neon animated title text

Shimmering divider

Gradient buttons with hover effects



---

📄 License
Free to use and modify in personal or commercial projects. Credit appreciated but not required.

---
