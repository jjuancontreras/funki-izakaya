import type { Metadata } from "next";
import MenuBrowser from "@/components/MenuBrowser";
import { menuCategories, content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Menu | Funki Izakaya",
  description: "Yakitori, sushi, ramen, donburi, and more at Funki Izakaya.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Our Menu</p>
        <h1 className="text-display mt-2 text-4xl text-cream sm:text-5xl">
          Grilled, Rolled &amp; Poured
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-cream-dim">
          {content.menu.disclaimer}
        </p>
      </div>

      <MenuBrowser categories={menuCategories} />
    </div>
  );
}
