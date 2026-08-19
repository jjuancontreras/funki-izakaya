import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import BranchCard from "@/components/BranchCard";
import { branches } from "@/lib/content";

export const metadata: Metadata = {
  title: "Locations | Funki Izakaya",
  description: "Find Funki Izakaya at Pop-Up Katipunan, Masinag, and Blue Ridge.",
};

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
          Three Branches
        </p>
        <h1 className="text-display mt-2 text-4xl text-cream sm:text-5xl">Find a Funki Near You</h1>
        <p className="mx-auto mt-4 max-w-xl text-cream-dim">
          Reservations are currently phone-only per branch — give us a call and we&rsquo;ll save
          your table.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {branches.map((branch, i) => (
          <AnimatedSection key={branch.id} delay={i * 0.1}>
            <BranchCard branch={branch} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
