"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { formatPrice, type MenuItem } from "@/lib/content";

const tagStyles: Record<string, string> = {
  "best-seller": "bg-brand/15 text-brand",
  signature: "bg-ember/15 text-ember",
  spicy: "bg-spice/15 text-spice",
};

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const expandable = Boolean(item.description || item.image);

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-charcoal/60 transition-colors hover:border-brand/40">
      <button
        type="button"
        onClick={() => expandable && setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex w-full items-start justify-between gap-4 p-4 text-left ${
          expandable ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <div>
          <p className="font-medium text-cream">{item.name}</p>
          {item.note && <p className="mt-1 text-xs text-cream-dim">{item.note}</p>}
          {item.tags && item.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                    tagStyles[tag] ?? "bg-white/10 text-cream-dim"
                  }`}
                >
                  {tag.replace("-", " ")}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="font-semibold text-cream">{formatPrice(item)}</span>
          {expandable && (
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className={`h-4 w-4 text-cream-dim transition-transform ${open ? "rotate-180" : ""}`}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expandable && open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-4 border-t border-white/10 p-4">
              {item.image && (
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md">
                  <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                </div>
              )}
              {item.description && <p className="text-sm text-cream-dim">{item.description}</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
