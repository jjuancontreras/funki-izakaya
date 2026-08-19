import raw from "@/data/content.json";

export type Branch = {
  id: string;
  name: string;
  shortName: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  hours: string;
  hoursVerified: boolean;
  mapQuery: string;
  menuStyle: string;
  notes: string;
};

export type MenuItem = {
  name: string;
  price?: number;
  priceRange?: string;
  note?: string;
  tags?: string[];
  description?: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
  note?: string;
};

export type Content = typeof raw;

export const content = raw as Content;
export const branches = raw.branches as Branch[];
export const menuCategories = raw.menu.categories as MenuCategory[];
export const brand = raw.brand;

// `as` casts above don't validate content.json at build time, so a typo'd or
// missing optional field (e.g. `hoursVerified`) would silently fall through
// as `undefined` instead of failing loudly. Catch that class of mistake here.
function validateContent() {
  for (const b of branches) {
    if (typeof b.hoursVerified !== "boolean") {
      console.warn(`content.json: branch "${b.id}" has a non-boolean hoursVerified (${b.hoursVerified})`);
    }
    if (typeof b.hours !== "string" || !b.hours) {
      console.warn(`content.json: branch "${b.id}" is missing "hours"`);
    }
  }
  for (const cat of menuCategories) {
    for (const item of cat.items) {
      if (item.price === undefined && item.priceRange === undefined) {
        console.warn(`content.json: menu item "${item.name}" in "${cat.id}" has no price or priceRange`);
      }
    }
  }
}

if (process.env.NODE_ENV !== "production") {
  validateContent();
}

export function formatPrice(item: MenuItem): string {
  if (item.priceRange) return `₱${item.priceRange}`;
  if (typeof item.price === "number") return `₱${item.price.toLocaleString()}`;
  return "";
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}
