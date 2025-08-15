Here’s my simply README.md style guide you can drop my template code directly into your GitHub repo for your Age Check Gate.
It’s written in simple, clear language so even as a beginner you can follow it. 🤗


---

Age Gate Template (Green • Blue • Purple Theme)

A very simple, reusable React + Next.js age check component with a neon green → blue → purple color scheme/style.
It blocks viewing access to your page/site til users confirms they're 18+, storing their confirmation in localStorage so they don’t see it again. Ultimately this is not an actual age verification lol it obviously doesn't check or scan IDs etc its literally just a pretty hey this sites intended for adults, type of notice. 


---

✨ Features

• Copy & Paste Ready – Self-contained, minimal setup needed.

• Neon Theme – vibrant green, blue, and purple gradients.

• Persistent State – Remembers confirmation using localStorage.

• Fully Responsive – Works on mobile and desktop.

• Lightweight Animations – Includes heartbeat and shimmer effects.



---

🛠️ Requirements

Language: JavaScript / TypeScript (React)

Framework: Next.js 13+ (supports the "use client" directive)

Styling: Tailwind CSS for utility classes

Icons: Lucide React for ShieldCheck icon


You need to have Tailwind CSS and Lucide React installed in your Next.js project! to do so use npm or yarn with:

'install tailwindcss lucide-react'


---

📂 Where to Put Code??

Soo you can either:

1. Inside Hero.tsx directly

Paste the entire snippet at the top of the file, above your main Hero function.

Call <AgeGateTemplate /> at the start of your return so it shows before any other content.


2. As a separate file

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

First run a build test using yarn or npm to make sure it compiles properly without error,  saves inconvenience and steps to deploy successfully without build errors. Always test in your local environments,  run something like yarn build etc before deployment. 

Visit your page in the browser — you should see the age gate.

Click I AM 18+ and refresh — the gate should not appear again.

To reset, run in browser console (or if you dont want to reset just load site in mew incognito tab to test the other buttons redirect:


localStorage.removeItem("ageCheck"); location.reload();


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




