"use client";

import { motion, useReducedMotion } from "motion/react";

/** Animated bridge + remote workspace scene for the homepage hero. */
export function HeroScene() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <svg
        viewBox="0 0 480 420"
        className="h-auto w-full"
        role="img"
        aria-label="Illustration of a career bridge connecting preparation to remote opportunity"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a4d4a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0f2744" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="bridge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e8e4dc" />
            <stop offset="50%" stopColor="#7eb8a8" />
            <stop offset="100%" stopColor="#e8e4dc" />
          </linearGradient>
        </defs>

        <rect width="480" height="420" rx="18" fill="url(#sky)" />

        {/* Soft floating orbs */}
        <motion.circle
          cx="72"
          cy="70"
          r="28"
          fill="#e8f3f0"
          fillOpacity="0.18"
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="400"
          cy="96"
          r="18"
          fill="#e8e4dc"
          fillOpacity="0.22"
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />

        {/* Horizon hills */}
        <path
          d="M0 280 C80 240 140 250 220 265 C300 280 360 230 480 250 L480 420 L0 420 Z"
          fill="#0a1a2e"
          fillOpacity="0.45"
        />
        <path
          d="M0 310 C100 280 180 300 260 295 C340 290 400 270 480 290 L480 420 L0 420 Z"
          fill="#0a1a2e"
          fillOpacity="0.55"
        />

        {/* Animated bridge path */}
        <motion.path
          d="M40 300 C140 220 200 210 240 210 C280 210 340 220 440 300"
          fill="none"
          stroke="url(#bridge)"
          strokeWidth="10"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0, opacity: 0.4 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
        <motion.path
          d="M40 300 C140 220 200 210 240 210 C280 210 340 220 440 300"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.35"
          strokeDasharray="6 10"
          animate={reduce ? undefined : { strokeDashoffset: [0, -32] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />

        {/* Bridge pillars */}
        <rect x="118" y="248" width="8" height="72" rx="2" fill="#e8e4dc" fillOpacity="0.55" />
        <rect x="228" y="218" width="8" height="102" rx="2" fill="#7eb8a8" fillOpacity="0.7" />
        <rect x="348" y="248" width="8" height="72" rx="2" fill="#e8e4dc" fillOpacity="0.55" />

        {/* Traveler node along the bridge */}
        <motion.g
          animate={
            reduce
              ? undefined
              : {
                  offsetDistance: ["0%", "100%"],
                }
          }
        >
          <motion.circle
            r="9"
            fill="#ffffff"
            initial={{ cx: 40, cy: 300 }}
            animate={
              reduce
                ? { cx: 240, cy: 210 }
                : {
                    cx: [40, 140, 240, 340, 440],
                    cy: [300, 235, 210, 235, 300],
                  }
            }
            transition={
              reduce
                ? undefined
                : {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.8,
                  }
            }
          />
        </motion.g>

        {/* Workspace desk graphic */}
        <motion.g
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          <rect
            x="286"
            y="118"
            width="150"
            height="98"
            rx="10"
            fill="#ffffff"
            fillOpacity="0.92"
          />
          <rect x="298" y="130" width="126" height="62" rx="4" fill="#0f2744" />
          <rect x="308" y="140" width="50" height="6" rx="2" fill="#7eb8a8" />
          <rect
            x="308"
            y="154"
            width="86"
            height="4"
            rx="2"
            fill="#e8e4dc"
            fillOpacity="0.7"
          />
          <rect
            x="308"
            y="164"
            width="68"
            height="4"
            rx="2"
            fill="#e8e4dc"
            fillOpacity="0.45"
          />
          <motion.rect
            x="308"
            y="174"
            width="40"
            height="6"
            rx="2"
            fill="#1a6b5c"
            animate={reduce ? undefined : { width: [28, 52, 36, 48, 28] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <rect x="340" y="214" width="42" height="6" rx="2" fill="#d5dde5" />
          <rect x="286" y="224" width="150" height="10" rx="3" fill="#e8e4dc" />
        </motion.g>

        {/* Left marker: Preparation */}
        <motion.g
          initial={reduce ? false : { opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <rect x="28" y="318" width="108" height="36" rx="8" fill="#ffffff" fillOpacity="0.12" />
          <text
            x="82"
            y="341"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="12"
            fontFamily="var(--font-source-sans), sans-serif"
          >
            Preparation
          </text>
        </motion.g>

        {/* Right marker: Opportunity */}
        <motion.g
          initial={reduce ? false : { opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
        >
          <rect x="344" y="318" width="108" height="36" rx="8" fill="#ffffff" fillOpacity="0.12" />
          <text
            x="398"
            y="341"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="12"
            fontFamily="var(--font-source-sans), sans-serif"
          >
            Opportunity
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
