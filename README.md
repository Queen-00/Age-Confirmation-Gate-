<div align="center">

<!-- Animated SVG Title (blue neon shimmer) -->
<svg width="100%" height="110" viewBox="0 0 1200 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Age Gate Template (Green • Blue • Purple Theme)">
  <defs>
    <linearGradient id="grad">
      <stop offset="0%" stop-color="#60A5FA"/>
      <stop offset="50%" stop-color="#22D3EE"/>
      <stop offset="100%" stop-color="#A78BFA"/>
    </linearGradient>
    <linearGradient id="shine">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <mask id="title-mask">
      <rect width="1200" height="110" fill="black"/>
      <text x="50%" y="72%" dominant-baseline="middle" text-anchor="middle"
            font-family="Orbitron, ui-sans-serif, system-ui" font-size="38" font-weight="800">
        Age Gate Template (Green • Blue • Purple Theme)
      </text>
    </mask>
  </defs>
  <rect width="1200" height="110" fill="url(#grad)" mask="url(#title-mask)"/>
  <rect width="260" height="110" fill="url(#shine)" mask="url(#title-mask)">
    <animate attributeName="x" from="-260" to="1200" dur="4s" repeatCount="indefinite" />
  </rect>
</svg>

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

---

## 📝 Overview
Here’s my simple README.md style guide you can drop my template code directly into your GitHub repo for your Age Check Gate.  
It’s written in simple, clear language so even as a beginner you can follow it. 🤗

A very simple, reusable **React + Next.js** age check component with a neon **green → blue → purple** color scheme/style.  
It blocks viewing access to your page/site til users confirms they're 18+, storing their confirmation in `localStorage` so they don’t see it again. Ultimately this is not an actual age verification lol it obviously doesn't check or scan IDs etc its literally just a pretty hey this sites intended for adults, type of notice.

---

## ✨ Features
- Copy & Paste Ready – Self-contained, minimal setup needed.  
- Neon Theme – vibrant green, blue, and purple gradients.  
- Persistent State – Remembers confirmation using `localStorage`.  
- Fully Responsive – Works on mobile and desktop.  
- Lightweight Animations – Includes heartbeat and shimmer effects.

---

## 🛠 Requirements
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

📂 Where to Put Code??

Soo you can either:

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

📜 How It Works?

1. When it loads, it checks localStorage for a 'key' ("ageCheck" by default).


2. When the value is "true", it means a user already confirmed and the gate won’t be shown.


3. When not confirmed, it displays:

Title ("Age Verification")

Short description ("Please select your age")

Two buttons:

I AM 18+ – saves "true" to localStorage and hides the gate.

I AM NOT 18+ – redirects to another URL (you can customize this to your preference ofc).




4. The gradient background, text colors, and animations have all been built using Tailwind classes and very simple CSS animations.




---

🖥️ Step-by-Step Installation

1. Copy my Code lol
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

🎨 Example Appearance

The gate should appear centered on the screen with:

A shield icon at the top.

Neon green-blue-purple animated title text.

Shimmering divider line.

Gradient buttons with hover effects.



---

📄 Licenses?

This template is mine and free to use, modify, and distribute in personal or commercial projects. No credit or anything necessary (but always appreciated!)


---

<!-- 🔁 Animated SLIDE CAROUSEL (SVG) --><div align="center"><svg width="100%" height="160" viewBox="0 0 1200 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Slide Carousel">
  <defs>
    <linearGradient id="slideGrad" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stop-color="#34D399"/>
      <stop offset="50%" stop-color="#22D3EE"/>
      <stop offset="100%" stop-color="#A78BFA"/>
    </linearGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>  <!-- Common title bar -->  <rect x="20" y="20" rx="10" ry="10" width="1160" height="120" fill="#0b1324" stroke="url(#slideGrad)" stroke-width="2"/>
  <rect x="20" y="20" rx="10" ry="10" width="1160" height="42" fill="url(#slideGrad)" opacity="0.12"/>  <!-- KEY TIMES: 0, 0.2, 0.4, 0.6, 0.8, 1 over 25s (5s per slide) -->  <!-- Slide 1 -->  <g opacity="0" filter="url(#glow)">
    <text x="40" y="48" font-size="16" font-weight="700" fill="#E5FDFB">Slide 1 — Languages & Tools</text>
    <text x="40" y="78" font-size="15" fill="#CFFAFE">JavaScript / TypeScript (React) · Next.js 13+ · Tailwind CSS · Lucide React</text>
    <text x="40" y="104" font-size="14" fill="#BAE6FD">Neon theme: emerald → cyan → purple</text>
    <animate attributeName="opacity" dur="25s" repeatCount="indefinite"
      keyTimes="0;0.2;0.4;0.6;0.8;1" values="1;0;0;0;0;0" calcMode="discrete"/>
  </g>  <!-- Slide 2 -->  <g opacity="0" filter="url(#glow)">
    <text x="40" y="48" font-size="16" font-weight="700" fill="#E5FDFB">Slide 2 — Install Deps</text>
    <text x="40" y="78" font-size="15" fill="#CFFAFE">📦 Install with npm or yarn:</text>
    <text x="40" y="104" font-size="14" fill="#BAE6FD">npm install tailwindcss lucide-react  ·  yarn add tailwindcss lucide-react</text>
    <animate attributeName="opacity" dur="25s" repeatCount="indefinite"
      keyTimes="0;0.2;0.4;0.6;0.8;1" values="0;1;0;0;0;0" calcMode="discrete"/>
  </g>  <!-- Slide 3 -->  <g opacity="0" filter="url(#glow)">
    <text x="40" y="48" font-size="16" font-weight="700" fill="#E5FDFB">Slide 3 — Where to Put Code</text>
    <text x="40" y="78" font-size="15" fill="#CFFAFE">① Inline in Hero.tsx (top of file)  •  ② components/AgeGateTemplate.tsx and import into Hero</text>
    <text x="40" y="104" font-size="14" fill="#BAE6FD">Render &lt;AgeGateTemplate /&gt; at the top so it shows before other content</text>
    <animate attributeName="opacity" dur="25s" repeatCount="indefinite"
      keyTimes="0;0.2;0.4;0.6;0.8;1" values="0;0;1;0;0;0" calcMode="discrete"/>
  </g>  <!-- Slide 4 -->  <g opacity="0" filter="url(#glow)">
    <text x="40" y="48" font-size="16" font-weight="700" fill="#E5FDFB">Slide 4 — Usage</text>
    <text x="40" y="78" font-size="15" fill="#CFFAFE">Checks localStorage "ageCheck" on load; shows gate until user clicks ✅ I AM 18+</text>
