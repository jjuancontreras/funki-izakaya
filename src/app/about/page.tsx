import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";

export const metadata: Metadata = {
  title: "About | Funki Izakaya",
  description: "The story behind Funki Izakaya's modern yakitoria.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="relative flex h-[50vh] min-h-[360px] items-end overflow-hidden">
        <ParallaxImage
          src="/images/brand/izakaya-bar-interior.jpg"
          alt="Funki Izakaya bar counter"
          preload
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-12 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Our Story</p>
          <h1 className="text-display mt-2 text-4xl text-cream sm:text-6xl">
            Three Branches, One Funki Energy
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <AnimatedSection className="space-y-6 text-lg leading-relaxed text-cream-dim">
          <p>
            Funki Izakaya started as a single stall inside The Pop-Up Katipunan — a scrappy,
            street-side take on the Japanese izakaya, built for people who wanted real yakitori
            without the formality. Charcoal-grilled skewers, cold drinks, and a soundtrack loud
            enough to match the sizzle on the grill.
          </p>
          <p>
            What began as a food-park favorite grew into something bigger: a Masinag branch that
            brought the full izakaya experience — sushi, ramen, donburi, the works — to Antipolo,
            and most recently a Blue Ridge location that put Funki right back on Katipunan Avenue,
            just a short walk from where it all started.
          </p>
          <p>
            The name says it all. <span className="text-cream">Funki</span> — because this was
            never meant to be a stiff, quiet dining room. It&rsquo;s grill smoke and neon, cold
            slushies and hot skewers, the energy of a Tokyo back-alley izakaya translated for a
            Manila crowd that wants good food and a good time in the same sitting.
          </p>
          <p>
            Every branch keeps the same DNA — binchotan-grilled yakitori, generous rice bowls,
            fresh-rolled maki — while adapting to its neighborhood. Same funk, different room.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
