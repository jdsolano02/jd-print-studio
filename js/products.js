// ============================================================
// JD Print Studio — Configuración de contacto y catálogo
// ============================================================
// EDITA AQUÍ tus datos de contacto reales.
const CONTACT = {
  // Número de WhatsApp con código de país, SIN "+", SIN espacios. Ej: Costa Rica -> "506XXXXXXXX"
  whatsapp: "50684131406",
  // Usuario de Instagram, SIN "@". Ej: "jdprintstudio"
  instagram: "JD_PrintStudio",
  // Email de contacto
  email: "jdsolano03@gmail.com",
};

// ============================================================
// Catálogo de productos
// ============================================================
// Para AGREGAR un producto nuevo, copia un bloque { ... } y pégalo
// dentro del arreglo, cambiando los valores. No hay límite de productos.
// Los productos se muestran ordenados alfabéticamente dentro de cada
// categoría automáticamente, así que no importa en qué orden los
// agregues aquí.
//
// category debe ser: "speedcubing" | "coffee" | "tcg" | "varios"
//
// subcategories: arreglo de sub-categorías (etiquetas) dentro de la
// categoría del producto. Un producto puede tener varias a la vez, o
// ninguna (arreglo vacío []). Las opciones válidas por categoría están
// definidas en SUBCATEGORIES, dentro de js/main.js:
//   speedcubing -> "cajas" | "expositores" | "tapacubos"
//   coffee      -> "negociadores" | "melodrip" | "aeropress" | "filter-holders"
//   tcg         -> "mtg" | "pokemon" | "yugi" | "accesorios" | "deckbox"
//   varios      -> (no tiene sub-categorías)
//
// image: ruta a la foto del producto dentro de images/products/.
// Si el archivo no existe todavía, se muestra automáticamente un
// placeholder bonito — así que puedes dejarlo apuntando al nombre
// que usarás cuando tengas la foto lista.
// ============================================================

const PRODUCTS = [
  // ---------------- Speedcubing ----------------

  {
    id: "caja-cubos-56x56mm",
    name: "Caja Cubos 56x56mm",
    category: "speedcubing",
    subcategories: ["cajas"],
    price: 3000,
    description:
      "Caja protectora para cubos 56x56mm, ideal para transportar y coleccionar.",
    image: "images/products/caja-cubos-56x56.jpeg",
  },
  {
    id: "caja-cubos-56-5mm",
    name: "Caja Cubos 56.5mm",
    category: "speedcubing",
    subcategories: ["cajas"],
    price: 3000,
    description:
      "Caja protectora ideal para cubos 3x3 transportar y coleccionar.",
    image: "images/products/caja-cubos-56-5mm.jpeg",
  },
  {
    id: "tapacubos-square-1",
    name: "Tapacubos Square-1",
    category: "speedcubing",
    subcategories: ["tapacubos"],
    price: 5000,
    description:
      "Para practicar y que tu Square-1 no se mueva, provocando miss scrambles",
    image: "images/products/tapacubos-square-1.jpeg",
  },

  // ---------------- Coffee ----------------
  {
    id: "aerodrip",
    name: "AeroDrip",
    category: "coffee",
    subcategories: ["aeropress", "melodrip"],
    price: 4000,
    description: "Adaptador de tapa de Aeropress para ser usada como Melodrip",
    image: "images/products/aerodrip.jpeg",
  },
  {
    id: "aeropress-filter-box",
    name: "Aeropress Filter Box",
    category: "coffee",
    subcategories: ["aeropress"],
    price: 3500,
    description: "Caja para llevar tus filtros de Aeropress.",
    image: "images/products/aeropress-filter-box.jpeg",
  },
  {
    id: "air-dripper",
    name: "Air Dripper",
    category: "coffee",
    subcategories: ["metodos"],
    price: 7000,
    description:
      "Dripper sin contacto externo. El filtro quieda suspendido en el aire lo que hace que toda el agua tenga que pasar por el café, haciendo un No Bypass brew.",
    image: "images/products/air-dripper.jpeg",
  },
  {
    id: "comandante-half-steps",
    name: "Comandante Half Steps",
    category: "coffee",
    subcategories: ["comandante"],
    price: 2000,
    description:
      "Anillo de ajuste de half-steps para tu molino Comandante C40., suplica tus clicks, también fuinciona con los 'Red Clix' para aún más precisión",
    image: "images/products/comandante-half-steps.jpeg",
  },
  {
    id: "coffee-bean-funnel",
    name: "Embudo para granos de café",
    category: "coffee",
    subcategories: ["accesorios"],
    price: 1500,
    description: "Embudo para dosificar tus granos café sin derrames.",
    image: "images/products/coffee-bean-funnel.jpeg",
  },
  {
    id: "holder-filtros-kalita",
    name: "Holder Filtros Kalita",
    category: "coffee",
    subcategories: ["filter-holders"],
    price: 6000,
    description:
      "Organizador de filtros Kalita o Wave para mantener tu barra de café ordenada. y que tus filtros no pierdan su forma",
    image: "images/products/holder-filtros-kalita.jpeg",
  },
  {
    id: "holder-monte-fuji-graycano-m",
    name: "Holder Monte Fuji Graycano (M)",
    category: "coffee",
    subcategories: ["filter-holders"],
    price: 4500,
    description: "Soporte tamaño M para filtros Graycano o similares.",
    image: "images/products/holder-monte-fuji-graycano-m.jpeg",
  },
  {
    id: "holder-monte-fuji-sibarist-fast-l",
    name: "Holder Monte Fuji Sibarist Fast (L)",
    category: "coffee",
    subcategories: ["filter-holders"],
    price: 5000,
    description: "Soporte tamaño L para filtros Sibarist Fast o similares",
    image: "images/products/holder-monte-fuji-sibarist-fast-l.jpeg",
  },
  {
    id: "holder-monte-fuji-ufo-s",
    name: "Holder Monte Fuji UFO (S)",
    category: "coffee",
    subcategories: ["filter-holders"],
    price: 4000,
    description: "Soporte tamaño S para filtros UFO o similares.",
    image: "images/products/holder-monte-fuji-ufo-s.jpeg",
  },
  {
    id: "melodrip-tray-aeropress",
    name: "Melodrip Tray Aeropress",
    category: "coffee",
    subcategories: ["melodrip", "aeropress"],
    price: 1500,
    description:
      "Bandeja para Melodrip diseñada para Aeropress, Usa el Melodrip sin preocupaciones",
    image: "images/products/melodrip-tray-aeropress.jpeg",
  },
  {
    id: "melodrip-tray-v2",
    name: "Melodrip Tray v2",
    category: "coffee",
    subcategories: ["melodrip"],
    price: 4000,
    description:
      "Bandeja para tu Melodrip que es compatible con bastantes metodos comerciales, para poder usarlo sin preocupaciones (no compatible con Origami M)",
    image: "images/products/melodrip-tray-v2.jpeg",
  },
  {
    id: "negociador-v60-02",
    name: "Negociador V60 02",
    category: "coffee",
    subcategories: ["negociadores"],
    price: 5000,
    description:
      "Para ayudarte a colocar el  filtro de la mejor manera dentro de tu V60",
    image: "images/products/negociador-v60-02.jpeg",
  },
  {
    id: "tapa-aeropress-repuesto",
    name: "Tapa Aeropress Repuesto",
    category: "coffee",
    subcategories: ["aeropress"],
    price: 3000,
    description: "Tapa de repuesto para tu Aeropress, ajuste perfecto.",
    image: "images/products/tapa-aeropress-repuesto.jpeg",
  },
  {
    id: "tapa-comandante-con-clip",
    name: "Tapa Comandante con Clip",
    category: "coffee",
    subcategories: ["comandante"],
    price: 1500,
    description: "Tapa con clip para el molino manual Comandante C40.",
    image: "images/products/tapa-comandante-con-clip.jpeg",
  },

  {
    id: "llavero-grano-de-cafe",
    name: "Llavero Grano de Café",
    category: "coffee",
    subcategories: ["llaveros"],
    price: 1000,
    description:
      "Llavero con forma de grano de café, el accesorio perfecto para cafeteros.",
    image: "images/products/llavero-grano-de-cafe.jpeg",
  },
  {
    id: "llavero-tetera",
    name: "Llavero Tetera",
    category: "coffee",
    subcategories: ["llaveros"],
    price: 1000,
    description:
      "Llavero con forma de tetera, el accesorio perfecto para cafeteros.",
    image: "images/products/llavero-tetera.jpeg",
  },

  // ---------------- TCG ----------------
  {
    id: "mtg-commander-dice-tray",
    name: "MTG Commander Dice Tray Apilable",
    category: "tcg",
    subcategories: ["mtg", "accesorios"],
    price: 4000,
    description: "Bandeja de dados apilable para tus partidas de Commander.",
    image: "images/products/mtg-commander-dice-tray.jpeg",
  },
  {
    id: "mtg-commander-box-sin-dice-tray",
    name: "MTG Commander Box (sin Dice Tray)",
    category: "tcg",
    subcategories: ["mtg", "deckbox"],
    price: 5000,
    description:
      "Caja para guardar tu mazo de Commander, sin bandeja de dados integrada. Entran 118 cartas en single sleeve + 25 de side deck, más 1 al frente como expositor.",
    image: "images/products/mtg-commander-box-sin-dice-tray.jpeg",
  },
  {
    id: "mtg-commander-deckbox-apilable-con-dice-tray",
    name: "MTG Commander Deckbox Apilable con Dice Tray",
    category: "tcg",
    subcategories: ["mtg", "deckbox"],
    price: 6000,
    description:
      "Deckbox apilable para Commander con bandeja de dados integrada. Entran 118 cartas en single sleeve + 25 de side deck, más 1 al frente como expositor.",
    image: "images/products/mtg-commander-deckbox-apilable-con-dice-tray.jpeg",
  },
  {
    id: "mtg-commander-6-decks",
    name: "MTG Commander 6 Decks",
    category: "tcg",
    subcategories: ["mtg", "deckbox"],
    price: 16000,
    description: "Caja organizadora para guardar hasta 6 mazos de Commander.",
    image: "images/products/mtg-commander-6-decks.jpeg",
  },
  {
    id: "mtg-double-sleeve-commander-deck",
    name: "MTG Double Sleeve Commander Deck",
    category: "tcg",
    subcategories: ["mtg", "deckbox"],
    price: 7500,
    description:
      "Caja para mazo de Commander con doble sleeve (protector doble).",
    image: "images/products/mtg-double-sleeve-commander-deck.jpeg",
  },

  // ---------------- Varios ----------------
  {
    id: "medal-holder",
    name: "Expositor de Medallas",
    category: "varios",
    subcategories: [],
    price: 3500,
    description:
      "Soporte para exhibir y organizar tus medallas de competencia.",
    image: "images/products/medal-holder.jpeg",
  },
];
