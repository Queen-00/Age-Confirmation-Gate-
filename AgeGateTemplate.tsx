// === My Age Gate Template (Green • Blue • Purple Colors) ===
// Drop this inside your Hero.tsx or component. It’s self contained and ready to use with easy copy paste for ya.

"use client";
import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function AgeGateTemplate() {
  // You can change this key if you want to use a diff localStorage flag ofc
  const STORAGE_KEY = "ageCheck";

  const [ageConfirmed, setAgeConfirmed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setAgeConfirmed(saved === "true");
  }, []);

  const confirmAge = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setAgeConfirmed(true);
  };

  // --- Show the age gate until the user confirms ---
  if (!ageConfirmed) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-[#021a12] via-black to-[#0c0820] flex items-center justify-center px-4 text-center">
        <div className="bg-black/60 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-lg w-full border border-cyan-400/40">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="text-cyan-400" size={64} />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 animate-gradient-x">
            Age Verification
          </h1>

          {/* Accent Divider */}
          <div className="h-1 w-32 mx-auto my-4 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 animate-shimmer"></div>

          {/* Description (filler text) */}
          <p className="text-lg text-cyan-100/90 leading-relaxed mb-6">
            This site may include content intended for mature audiences.
            <br />
            <strong>Please select your age</strong> to continue.
          </p>

          {/* Actions */}
          <div className="flex justify-center gap-6">
            <button
              onClick={confirmAge}
              className="px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-emerald-500 to-cyan-600 hover:scale-105 hover:shadow-lg transition-all duration-300 heartbeat"
              aria-label="I Am 18+"
            >
              I AM 18+
            </button>

            {/* Replace this href here with your redirect for under 18 users, wherever your prefer*/}
            <a href="https://www.google.com" aria-label="Not 18+ (Leave)">
              <button
                className="px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-slate-600 to-slate-800 hover:scale-105 hover:shadow-lg transition-all duration-300 heartbeat"
              >
                I AM NOT 18+
              </button>
            </a>
          </div>
        </div>

        {/* Animations (lightweight + reusable) */}
        <style jsx>{`
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.05); }
            50% { transform: scale(1.1); }
            75% { transform: scale(1.05); }
          }
          .heartbeat {
            animation: heartbeat 1.5s ease-in-out infinite;
          }

          @keyframes shimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: shimmer 5s linear infinite;
          }
          .animate-shimmer {
            background-size: 200% 200%;
            animation: shimmer 3s linear infinite;
          }
        `}</style>
      </section>
    );
  }

  // --- After confirming, render nothing (or your actual page content if used inline) ---
  return null;
}
