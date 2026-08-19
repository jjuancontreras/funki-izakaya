import fs from "node:fs";
import path from "node:path";

const file = path.resolve(import.meta.dirname, "../src/data/content.json");
const data = JSON.parse(fs.readFileSync(file, "utf8"));

const descriptions = {
  Gyoza: "Pan-seared pork and vegetable dumplings, crisp on the bottom.",
  "Potato Truffle Strings": "Shoestring fries tossed in truffle oil and parmesan.",
  Edamame: "Steamed young soybeans lightly salted, served in the pod.",
  "Miso Soup": "Classic soybean-paste broth with tofu, seaweed, and scallions.",
  "Kyuri Salad": "Chilled cucumber tossed in a light sesame-vinegar dressing.",
  "Kani Salad": "Crab stick salad with Japanese mayo and tobiko.",
  "Spicy Seafood Salad": "Mixed seafood tossed in a spicy mayo dressing.",
  "Wakame Salad": "Marinated seaweed salad with sesame and rice vinegar.",
  "Seafood Dumplings": "Steamed dumplings packed with shrimp and seafood filling.",

  Katsudon: "Crispy pork cutlet simmered in savory-sweet egg over rice.",
  Oyakodon: "Chicken and egg simmered in dashi-soy sauce over rice.",
  Teriyakidon: "Grilled chicken glazed in teriyaki sauce over steamed rice.",
  "Katsu Curry (Chicken/Pork)": "Crispy cutlet smothered in Japanese curry over rice.",
  Gyudon: "Simmered beef and onions in sweet soy sauce over rice.",
  Spamudon: "Grilled Spam and egg over rice, Filipino-Japanese comfort food.",
  "Namazu Kabayaki": "Grilled catfish glazed in sweet soy kabayaki sauce over rice.",
  Wagyudon: "Seared wagyu beef over rice in a savory soy glaze.",
  Chirashidon: "Assorted sashimi scattered over seasoned sushi rice.",
  Salmondon: "Fresh salmon sashimi served over seasoned sushi rice.",
  "Ebi Fry": "Panko-breaded fried shrimp served with tartar sauce and rice.",

  "RM1 — Chicken thigh, pork belly, quail egg bacon": "3 charcoal-grilled skewers served with steamed rice.",
  "RM2 — Chicken thigh, pork belly, Taiwan sausage": "3 charcoal-grilled skewers served with steamed rice.",
  "RM3 — Chicken thigh, 2 pork belly": "3 charcoal-grilled skewers served with steamed rice.",
  "RM4 — 2 chicken thigh, pork belly": "3 charcoal-grilled skewers served with steamed rice.",
  "RM5 — Taiwan sausage, Japanese sausage, sliced longganisa": "3 charcoal-grilled skewers served with steamed rice.",

  "California Maki": "Kani, mango, and cucumber rolled fresh daily.",
  "Funki Roll (Salmon, kani, cream cheese)": "House specialty roll with salmon, crab, and cream cheese.",
  "Spicy Salmon Roll": "Salmon, shrimp, and kani in a spicy mayo roll.",
  "Crunchy Bacon Roll": "Bacon, shrimp, and kani rolled with a crispy crunch.",
  "Truffle Wagyu Maki": "Wagyu and cucumber roll topped with crispy truffle potato.",
  "Namazu Maki": "Grilled catfish and cucumber roll in teriyaki glaze.",
  "Cali Chizu": "California roll topped with a layer of melted cheese.",
  "Dragon Dance (Dancing Dragon Roll)": "Shrimp, kani, and cucumber roll topped with cheese.",
  "Yellow Submarine": "Kani, cream cheese, cucumber, and mango rolled together.",
  "Crispy Rice Tuna": "Spicy tuna and tempura bits over crispy fried rice.",
  "Sunset Roll": "Shrimp, tamago, and cream cheese rolled together.",
  "Salmon Crunch Roll": "Deep-fried salmon roll with kani, cream cheese, and mango.",
  "Sashimi Plate (Salmon, tuna, tamago)": "Chef's selection of fresh salmon, tuna, and tamago sashimi.",

  "Chicken Teriyaki": "Grilled chicken glazed in a sweet soy teriyaki sauce.",
  Tempura: "Lightly battered and fried shrimp and vegetables.",
  "Classic Karaage": "Japanese-style fried chicken, crispy outside and juicy inside.",
  "Soy-Glazed Karaage": "Classic karaage tossed in a savory soy glaze.",
  "Chicken Teppan": "Grilled chicken served sizzling on a hot teppan plate.",
  "Seafood Teppan": "Mixed seafood grilled and served sizzling on a hot plate.",
  "Tofu Agedashi": "Lightly fried tofu in a savory dashi broth.",
  "Yasai Itame": "Stir-fried mixed vegetables in a light savory sauce.",
  "Sakana Chizu": "Grilled fish topped with melted cheese.",

  "Shoyu Ramen": "Soy-based clear broth with chashu, a Tokyo classic.",
  "Hakata Ramen": "Rich, creamy pork bone broth topped with chashu.",
  "Tantanmen Ramen": "Creamy sesame-chili broth with spicy stir-fried pork.",
  "Gomoku Ramen": "Light seafood broth with salmon, tuna, shrimp, and vegetables.",
  "Chicken Paitan Ramen": "Milky chicken bone broth topped with grilled chicken.",
  Sukiyaki: "Simmered beef, tofu, and vegetables in a sweet soy broth.",
  "Yaki Udon": "Stir-fried thick udon noodles with savory sauce.",
  "Tempura Udon": "Udon noodles in broth topped with crispy tempura.",
  "Beef Steak Udon": "Udon noodles topped with grilled beef steak slices.",

  "Angus Beef Bacon": "Angus beef wrapped in bacon, grilled over charcoal.",
  "Bacon Enoki": "Enoki mushrooms wrapped in bacon, char-grilled.",
  "Chicken Breast": "Lean chicken breast skewers grilled over binchotan charcoal.",
  "Chicken Thigh": "Juicy chicken thigh skewers grilled over binchotan charcoal.",
  Corn: "Charred corn on a stick, lightly glazed.",
  "Japanese Sausage": "Grilled Japanese-style pork sausage skewers.",
  "Pork Belly": "Charcoal-grilled pork belly skewers, crisp at the edges.",
  "Quail Egg Bacon": "Quail eggs wrapped in bacon, grilled over charcoal.",
  "Shitake Mushroom": "Charcoal-grilled shitake mushroom skewers.",
  Shrimps: "Charcoal-grilled shrimp skewers.",
  "Sliced Longganisa": "Grilled Filipino sweet sausage skewers.",
  "Taiwan Sausage": "Grilled Taiwanese-style sausage skewers.",
  "Wagyu Cubes": "Wagyu cubes grilled over binchotan charcoal.",

  "Yaki Ichi — 10-stick sampler": "10 mixed yakitori skewers, a sampler of our best sticks.",
  "Yaki Ni — 5 sticks (wagyu, chicken, pork belly, quail egg bacon, Taiwan sausage)":
    "5 skewers: wagyu, chicken, pork belly, quail egg bacon, Taiwan sausage.",
  "Yaki San — 5 sticks": "5 mixed yakitori skewers, chef's pick.",
  "Yaki Shi — 5 sticks": "5 mixed yakitori skewers, chef's pick.",
  "Yaki Go — 5 sticks": "5 mixed yakitori skewers, chef's pick.",
  "Yaki Roku — 5 sticks": "5 mixed yakitori skewers, chef's pick.",
  "Yakitori Sampler Party Platter — 33 sticks": "33 skewers, one of every stick on the menu.",
  "Funki Recommended — 30 sticks": "30 skewers, our staff's top picks.",
  "Funki Meat Lovers — 30 sticks": "30 skewers loaded with beef, pork, and chicken.",
  "Funki Healthy or Not — 30 sticks": "30 skewers mixing lighter bites with indulgent ones.",

  "Plain Rice": "Steamed white rice.",
  "Chahan (Fried Rice)": "Japanese-style fried rice.",
  "Ebi Chahan": "Shrimp fried rice, wok-tossed with egg and vegetables.",
  "Strawberry Kakigori": "Shaved ice dessert topped with strawberry syrup.",
  "Dezāto Gyoza (Banana Biscoff / Mango Nutella)":
    "Sweet dessert dumplings filled with banana biscoff or mango nutella.",

  "Funki Slink Alcoslushie (Narita Freeze / Fuji Frost / Sakura Slush)":
    "Frozen cocktail slushie, mix your own flavor.",
  "Bottled Water": "Still bottled water.",
  "Soda in Can": "Assorted canned sodas.",
  "Iced Tea": "Chilled iced tea.",
  "Iced Matcha": "Chilled iced matcha green tea.",
  "Brewed Coffee": "Hot brewed coffee.",
  "Red Bull": "Energy drink.",

  "San Mig / Pale Pilsen / Red Horse": "Classic local beer, ice-cold.",
  "Hoegaarden / Heineken / Budweiser": "Imported beer, ice-cold.",
  "Asahi / Sapporo / Kirin Ichiban": "Japanese beer, ice-cold.",
  "5+1 Bucket": "5 beers plus 1 free, your choice of brand.",
  "Bottles (Jack Daniels, Jameson, Absolut, etc.)": "Full bottle service, ask for the complete list.",
};

const images = {
  Katsudon: "/images/food/katsudon-bowl.jpg",
  "Tantanmen Ramen": "/images/food/ramen.jpg",
  "Wagyu Cubes": "/images/brand/hero-yakitori-grill-macro.jpg",
  "Salmon Crunch Roll": "/images/food/sashimi-roll.jpg",
  Gyoza: "/images/food/sushi-plate.jpg",
  "Yaki Ichi — 10-stick sampler": "/images/food/carousel-dish.jpg",
};

let missing = [];
for (const cat of data.menu.categories) {
  for (const item of cat.items) {
    if (descriptions[item.name]) {
      item.description = descriptions[item.name];
    } else {
      missing.push(item.name);
    }
    if (images[item.name]) {
      item.image = images[item.name];
    }
  }
}

if (missing.length) {
  console.log("MISSING DESCRIPTIONS FOR:", missing);
  process.exit(1);
}

fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
console.log("done, updated", file);
