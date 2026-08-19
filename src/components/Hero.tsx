"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { btnPrimary } from "@/lib/styles";

const embers = [
  { left: "12%", size: 6, delay: 0 },
  { left: "24%", size: 4, delay: 0.8 },
  { left: "38%", size: 5, delay: 1.6 },
  { left: "55%", size: 3, delay: 0.4 },
  { left: "68%", size: 6, delay: 2 },
  { left: "80%", size: 4, delay: 1.2 },
  { left: "90%", size: 5, delay: 2.4 },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative flex h-[92vh] min-h-[560px] items-end overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/brand/hero-alley-night.jpg"
          alt="Lantern-lit izakaya alley at night"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/60" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {embers.map((e, i) => (
          <span
            key={i}
            className="animate-ember absolute bottom-24 rounded-full bg-ember/80 blur-[1px]"
            style={{
              left: e.left,
              width: e.size,
              height: e.size,
              animationDelay: `${e.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-brand"
        >
          Modern Yakitoria &middot; モダン焼き鳥屋
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-display mt-3 text-5xl leading-[0.95] text-cream sm:text-7xl md:text-8xl"
        >
          FUNKI IZAKAYA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-5 max-w-xl text-base text-cream-dim sm:text-lg"
        >
          Yakitori grilled over charcoal, sushi rolled fresh, and a slushie in hand — casual
          izakaya-street-food energy, three branches across Metro Manila.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href="/menu"
            className={`${btnPrimary("px-7 py-3")} hover:bg-brand/90`}
          >
            View Menu
          </Link>
          <Link
            href="/locations"
            className="rounded-full border border-cream/30 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:border-brand hover:text-brand"
          >
            Find a Branch
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
