import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { branches, brand, telHref } from "@/lib/content";
import { btnPrimary } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Contact | Funki Izakaya",
  description: "Get in touch with Funki Izakaya — call a branch, DM us, or send an email.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Get In Touch</p>
        <h1 className="text-display mt-2 text-4xl text-cream sm:text-5xl">
          Reach Out, We&rsquo;ll Save You a Seat
        </h1>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <AnimatedSection className="space-y-8">
          <div>
            <h2 className="text-display text-2xl tracking-wide text-cream">Call a Branch</h2>
            <ul className="mt-4 space-y-3">
              {branches.map((b) => (
                <li
                  key={b.id}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-charcoal/60 px-4 py-3"
                >
                  <span className="text-cream-dim">{b.shortName}</span>
                  <a href={telHref(b.phone)} className="font-semibold text-brand">
                    {b.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-display text-2xl tracking-wide text-cream">Message Us</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={brand.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary()}
              >
                DM on Instagram
              </a>
              <a
                href={brand.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:border-brand hover:text-brand"
              >
                DM on Facebook
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-display text-2xl tracking-wide text-cream">Email</h2>
            <a href={`mailto:${brand.email}`} className="mt-2 block text-cream-dim hover:text-brand">
              {brand.email}
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="rounded-xl border border-white/10 bg-charcoal/60 p-6">
          <h2 className="text-display text-2xl tracking-wide text-cream">Send a Message</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
