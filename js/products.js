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
//   speedcubing -> "cajas" | "expositores" | "tapacubos" | "fidgets"
//   coffee      -> "negociadores" | "melodrip" | "aeropress" | "filter-holders" |
//                  "metodos" | "comandante" | "accesorios" | "llaveros"
//   tcg         -> "mtg" | "pokemon" | "yugi" | "accesorios" | "deckbox"
//   varios      -> (no tiene sub-categorías)
//
// image: ruta a la foto del producto dentro de images/products/<categoria>/
// (ej. images/products/coffee/mi-producto.jpeg). Cada categoría tiene su
// propia sub-carpeta: speedcubing/, coffee/, tcg/, varios/.
// Si el archivo no existe todavía, se muestra automáticamente un
// placeholder bonito — así que puedes dejarlo apuntando al nombre
// que usarás cuando tengas la foto lista.
// ============================================================

const PRODUCTS = [
  // ---------------- Speedcubing ----------------

  {
    id: "caja-cubos-56x56mm",
    name: "Caja Cubos distintos tamaños",
    category: "speedcubing",
    subcategories: ["cajas"],
    price: 2500,
    description:
      "Caja protectora para cubos desde 2x2 a 7x7, medidad desde 50x50mm hasta 65x65mm. precio depende del tamaño",
    image: "images/products/speedcubing/caja-cubos-56x56.jpeg",
  },
  {
    id: "tapacubos-square-1",
    name: "Tapacubos Square-1",
    category: "speedcubing",
    subcategories: ["tapacubos"],
    price: 5000,
    description:
      "Para practicar y que tu Square-1 no se mueva, provocando miss scrambles",
    image: "images/products/speedcubing/tapacubos-square-1.jpeg",
  },
  {
    id: "placa-logo-gan-pared",
    name: "Placa Logo GAN Pared",
    category: "speedcubing",
    subcategories: ["expositores"],
    price: 6500,
    description: "Placa decorativa del logo GAN para colgar en la pared.",
    image: "images/products/speedcubing/placa-logo-gan-pared.jpeg",
  },
  {
    id: "stand-brazos-s",
    name: "Stand Brazos S",
    category: "speedcubing",
    subcategories: ["expositores"],
    price: 2500,
    description: "Soporte con brazos, tamaño S, para exhibir tu cubo.",
    image: "images/products/speedcubing/stand-brazos-s.jpeg",
  },
  {
    id: "stand-brazos-m",
    name: "Stand Brazos M",
    category: "speedcubing",
    subcategories: ["expositores"],
    price: 3000,
    description: "Soporte con brazos, tamaño M, para exhibir tu cubo.",
    image: "images/products/speedcubing/stand-brazos-m.jpeg",
  },
  {
    id: "stand-brazos-clock",
    name: "Stand Brazos Clock",
    category: "speedcubing",
    subcategories: ["expositores"],
    price: 3500,
    description: "Soporte con brazos diseñado para cubos Clock.",
    image: "images/products/speedcubing/stand-brazos-clock.jpeg",
  },
  {
    id: "stand-brazos-pyraminx",
    name: "Stand Brazos Pyraminx",
    category: "speedcubing",
    subcategories: ["expositores"],
    price: 3500,
    description: "Soporte con brazos diseñado para Pyraminx.",
    image: "images/products/speedcubing/stand-brazos-pyraminx.jpeg",
  },
  {
    id: "stand-brazos-megaminx",
    name: "Stand Brazos Megaminx",
    category: "speedcubing",
    subcategories: ["expositores"],
    price: 3500,
    description: "Soporte con brazos diseñado para Megaminx.",
    image: "images/products/speedcubing/stand-brazos-megaminx.jpeg",
  },
  {
    id: "stand-movible-3x3",
    name: "Stand Movible 3x3",
    category: "speedcubing",
    subcategories: ["expositores"],
    price: 2500,
    description: "Soporte movible para exhibir tu cubo 3x3.",
    image: "images/products/speedcubing/stand-movible-3x3.jpeg",
  },
  {
    id: "stand-tipo-trofeo",
    name: "Stand Tipo Trofeo",
    category: "speedcubing",
    subcategories: ["expositores"],
    price: 3500,
    description: "Soporte estilo trofeo para exhibir tu cubo con estilo.",
    image: "images/products/speedcubing/stand-tipo-trofeo.jpeg",
  },
  {
    id: "stand-atlas",
    name: "Stand Atlas",
    category: "speedcubing",
    subcategories: ["expositores"],
    price: 2500,
    description: "Soporte tipo Atlas para exhibir tu cubo.",
    image: "images/products/speedcubing/stand-atlas.jpeg",
  },
  {
    id: "stand-fto",
    name: "Stand FTO",
    category: "speedcubing",
    subcategories: ["expositores"],
    price: 1000,
    description: "Soporte diseñado para cubos FTO (Face-Turning Octahedron).",
    image: "images/products/speedcubing/stand-fto.jpeg",
  },
  {
    id: "stand-twisted",
    name: "Stand Twisted",
    category: "speedcubing",
    subcategories: ["expositores"],
    price: 1000,
    description: "Soporte de diseño twisted para exhibir tu cubo.",
    image: "images/products/speedcubing/stand-twisted.jpeg",
  },
  {
    id: "stand-articulado",
    name: "Stand Articulado",
    category: "speedcubing",
    subcategories: ["expositores"],
    price: 2000,
    description:
      "Soporte articulado, ajustable en ángulo para exhibir tu cubo.",
    image: "images/products/speedcubing/stand-articulado.jpeg",
  },
  {
    id: "stand-basico",
    name: "Stand Básico",
    category: "speedcubing",
    subcategories: ["expositores"],
    price: 750,
    description: "Soporte básico y económico para exhibir tu cubo.",
    image: "images/products/speedcubing/stand-basico.jpeg",
  },
  {
    id: "cubo-gear-fidget",
    name: "Cubo Gear Fidget",
    category: "speedcubing",
    subcategories: ["fidgets"],
    price: 6500,
    description:
      "Cubo fidget con engranajes, ideal para entretenerte y relajarte.",
    image: "images/products/speedcubing/cubo-gear-fidget.jpeg",
  },
  {
    id: "infinity-cube-fidget",
    name: "Infinity Cube Fidget",
    category: "speedcubing",
    subcategories: ["fidgets"],
    price: 2500,
    description:
      "Cubo infinito fidget, se pliega en todas direcciones sin parar.",
    image: "images/products/speedcubing/infinity-cube-fidget.jpeg",
  },

  // ---------------- Coffee ----------------
  {
    id: "aerodrip",
    name: "AeroDrip",
    category: "coffee",
    subcategories: ["aeropress", "melodrip"],
    price: 4000,
    description: "Adaptador de tapa de Aeropress para ser usada como Melodrip",
    image: "images/products/coffee/aerodrip.jpeg",
  },
  {
    id: "aeropress-filter-box",
    name: "Aeropress Filter Box",
    category: "coffee",
    subcategories: ["aeropress"],
    price: 3500,
    description: "Caja para llevar tus filtros de Aeropress.",
    image: "images/products/coffee/aeropress-filter-box.jpeg",
  },
  {
    id: "air-dripper",
    name: "Air Dripper",
    category: "coffee",
    subcategories: ["metodos"],
    price: 7000,
    description:
      "Dripper sin contacto externo. El filtro quieda suspendido en el aire lo que hace que toda el agua tenga que pasar por el café, haciendo un No Bypass brew.",
    image: "images/products/coffee/air-dripper.jpeg",
  },
  {
    id: "comandante-half-steps",
    name: "Comandante Half Steps",
    category: "coffee",
    subcategories: ["comandante"],
    price: 2000,
    description:
      "Anillo de ajuste de half-steps para tu molino Comandante C40., suplica tus clicks, también fuinciona con los 'Red Clix' para aún más precisión",
    image: "images/products/coffee/comandante-half-steps.jpeg",
  },
  {
    id: "coffee-bean-funnel",
    name: "Embudo para granos de café",
    category: "coffee",
    subcategories: ["accesorios"],
    price: 1500,
    description: "Embudo para dosificar tus granos café sin derrames.",
    image: "images/products/coffee/coffee-bean-funnel.jpeg",
  },
  {
    id: "holder-filtros-kalita",
    name: "Holder Filtros Kalita",
    category: "coffee",
    subcategories: ["filter-holders"],
    price: 6000,
    description:
      "Organizador de filtros Kalita o Wave para mantener tu barra de café ordenada. y que tus filtros no pierdan su forma",
    image: "images/products/coffee/holder-filtros-kalita.jpeg",
  },
  {
    id: "holder-monte-fuji-graycano-m",
    name: "Holder Monte Fuji Graycano (M)",
    category: "coffee",
    subcategories: ["filter-holders"],
    price: 4500,
    description: "Soporte tamaño M para filtros Graycano o similares.",
    image: "images/products/coffee/holder-monte-fuji-graycano-m.jpeg",
  },
  {
    id: "holder-monte-fuji-sibarist-fast-l",
    name: "Holder Monte Fuji Sibarist Fast (L)",
    category: "coffee",
    subcategories: ["filter-holders"],
    price: 5000,
    description: "Soporte tamaño L para filtros Sibarist Fast o similares",
    image: "images/products/coffee/holder-monte-fuji-sibarist-fast-l.jpeg",
  },
  {
    id: "holder-monte-fuji-ufo-s",
    name: "Holder Monte Fuji UFO (S)",
    category: "coffee",
    subcategories: ["filter-holders"],
    price: 4000,
    description: "Soporte tamaño S para filtros UFO o similares.",
    image: "images/products/coffee/holder-monte-fuji-ufo-s.jpeg",
  },
  {
    id: "melodrip-tray-aeropress",
    name: "Melodrip Tray Aeropress",
    category: "coffee",
    subcategories: ["melodrip", "aeropress"],
    price: 1500,
    description:
      "Bandeja para Melodrip diseñada para Aeropress, Usa el Melodrip sin preocupaciones",
    image: "images/products/coffee/melodrip-tray-aeropress.jpeg",
  },
  {
    id: "melodrip-tray-v2",
    name: "Melodrip Tray v2",
    category: "coffee",
    subcategories: ["melodrip"],
    price: 4000,
    description:
      "Bandeja para tu Melodrip que es compatible con bastantes metodos comerciales, para poder usarlo sin preocupaciones (no compatible con Origami M)",
    image: "images/products/coffee/melodrip-tray-v2.jpeg",
  },
  {
    id: "negociador-v60-02",
    name: "Negociador V60 02",
    category: "coffee",
    subcategories: ["negociadores"],
    price: 5000,
    description:
      "Para ayudarte a colocar el  filtro de la mejor manera dentro de tu V60",
    image: "images/products/coffee/negociador-v60-02.jpeg",
  },
  {
    id: "tapa-aeropress-repuesto",
    name: "Tapa Aeropress Repuesto",
    category: "coffee",
    subcategories: ["aeropress"],
    price: 3000,
    description: "Tapa de repuesto para tu Aeropress, ajuste perfecto.",
    image: "images/products/coffee/tapa-aeropress-repuesto.jpeg",
  },
  {
    id: "tapa-comandante-con-clip",
    name: "Tapa Comandante con Clip",
    category: "coffee",
    subcategories: ["comandante"],
    price: 1500,
    description: "Tapa con clip para el molino manual Comandante C40.",
    image: "images/products/coffee/tapa-comandante-con-clip.jpeg",
  },

  {
    id: "llavero-grano-de-cafe",
    name: "Llavero Grano de Café",
    category: "coffee",
    subcategories: ["llaveros"],
    price: 1000,
    description:
      "Llavero con forma de grano de café, el accesorio perfecto para cafeteros.",
    image: "images/products/coffee/llavero-grano-de-cafe.jpeg",
  },
  {
    id: "llavero-tetera",
    name: "Llavero Tetera",
    category: "coffee",
    subcategories: ["llaveros"],
    price: 1000,
    description:
      "Llavero con forma de tetera, el accesorio perfecto para cafeteros.",
    image: "images/products/coffee/llavero-tetera.jpeg",
  },

  // ---------------- TCG ----------------
  {
    id: "mtg-commander-dice-tray",
    name: "MTG Commander Dice Tray Apilable",
    category: "tcg",
    subcategories: ["mtg", "accesorios"],
    price: 4000,
    description: "Bandeja de dados apilable para tus partidas de Commander.",
    image: "images/products/tcg/mtg-commander-dice-tray.jpeg",
  },
  {
    id: "mtg-commander-box-sin-dice-tray",
    name: "MTG Commander Box (sin Dice Tray)",
    category: "tcg",
    subcategories: ["mtg", "deckbox"],
    price: 5000,
    description:
      "Caja para guardar tu mazo de Commander, sin bandeja de dados integrada. Entran 118 cartas en single sleeve + 25 de side deck, más 1 al frente como expositor.",
    image: "images/products/tcg/mtg-commander-box-sin-dice-tray.jpeg",
  },
  {
    id: "mtg-commander-deckbox-apilable-con-dice-tray",
    name: "MTG Commander Deckbox Apilable con Dice Tray",
    category: "tcg",
    subcategories: ["mtg", "deckbox"],
    price: 6000,
    description:
      "Deckbox apilable para Commander con bandeja de dados integrada. Entran 118 cartas en single sleeve + 25 de side deck, más 1 al frente como expositor.",
    image:
      "images/products/tcg/mtg-commander-deckbox-apilable-con-dice-tray.jpeg",
  },
  {
    id: "mtg-commander-6-decks",
    name: "MTG Commander 6 Decks",
    category: "tcg",
    subcategories: ["mtg", "deckbox"],
    price: 16000,
    description: "Caja organizadora para guardar hasta 6 mazos de Commander.",
    image: "images/products/tcg/mtg-commander-6-decks.jpeg",
  },
  {
    id: "mtg-double-sleeve-commander-deck",
    name: "MTG Double Sleeve Commander Deck",
    category: "tcg",
    subcategories: ["mtg", "deckbox"],
    price: 7500,
    description:
      "Caja para mazo de Commander con doble sleeve (protector doble).",
    image: "images/products/tcg/mtg-double-sleeve-commander-deck.jpeg",
  },
  {
    id: "pokemon-expositor-cartas-jumbo",
    name: "Pokemon Expositor Cartas Jumbo",
    category: "tcg",
    subcategories: ["pokemon", "accesorios"],
    price: 3000,
    description: "Expositor para cartas Pokémon tamaño jumbo.",
    image: "images/products/tcg/pokemon-expositor-cartas-jumbo.jpeg",
  },
  {
    id: "pokemon-tracker-de-turno",
    name: "Pokemon Tracker de Turno",
    category: "tcg",
    subcategories: ["pokemon", "accesorios"],
    price: 3000,
    description: "Tracker para llevar el turno en tus partidas de Pokémon TCG.",
    image: "images/products/tcg/pokemon-tracker-de-turno.jpeg",
  },
  {
    id: "pokemon-mini-tin-insert-completa",
    name: "Pokemon Mini Tin Insert Completa",
    category: "tcg",
    subcategories: ["pokemon", "accesorios"],
    price: 5000,
    description: "Insert completo para organizar tu Mini Tin de Pokémon.",
    image: "images/products/tcg/pokemon-mini-tin-insert-completa.jpeg",
  },
  {
    id: "pokemon-mini-tin-insert-trackers",
    name: "Pokemon Mini Tin Insert Trackers",
    category: "tcg",
    subcategories: ["pokemon", "accesorios"],
    price: 2500,
    description: "Insert para trackers dentro de tu Mini Tin de Pokémon.",
    image: "images/products/tcg/pokemon-mini-tin-insert-trackers.jpeg",
  },
  {
    id: "pokemon-mini-tin-insert-sola",
    name: "Pokemon Mini Tin Insert Sola",
    category: "tcg",
    subcategories: ["pokemon", "accesorios"],
    price: 3500,
    description: "Insert individual para tu Mini Tin de Pokémon.",
    image: "images/products/tcg/pokemon-mini-tin-insert-sola.jpeg",
  },
  {
    id: "pokemon-lonchera-insert-completo",
    name: "Pokemon Lonchera Insert Completo",
    category: "tcg",
    subcategories: ["pokemon", "accesorios"],
    price: 12500,
    description:
      "Insert completo para organizar tu lonchera de cartas Pokémon.",
    image: "images/products/tcg/pokemon-lonchera-insert-completo.jpeg",
  },
  {
    id: "pokemon-display-cartas-con-sleeve",
    name: "Pokemon Display para Cartas con Sleeve",
    category: "tcg",
    subcategories: ["pokemon", "accesorios"],
    price: 4000,
    description: "Display para exhibir tus cartas Pokémon con sleeve puesto.",
    image: "images/products/tcg/pokemon-display-cartas-con-sleeve.jpeg",
  },
  {
    id: "pokemon-display-monedas",
    name: "Pokemon Display para Monedas",
    category: "tcg",
    subcategories: ["pokemon", "accesorios"],
    price: 6500,
    description: "Display para exhibir y coleccionar tus monedas de Pokémon.",
    image: "images/products/tcg/pokemon-display-monedas.jpeg",
  },
  {
    id: "pokemon-tracker-usaditto-pack-6",
    name: 'Pokemon Tracker de Habilidad "Usaditto" Pack de 6',
    category: "tcg",
    subcategories: ["pokemon", "accesorios"],
    price: 3500,
    description:
      'Pack de 6 trackers de habilidad "Usaditto" para tus partidas de Pokémon TCG.',
    image: "images/products/tcg/pokemon-tracker-usaditto-pack-6.jpeg",
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
    image: "images/products/varios/medal-holder.jpeg",
  },
  {
    id: "tripode-portatil-celular",
    name: "Trípode Portátil para Celular",
    category: "varios",
    subcategories: [],
    price: 1500,
    description: "Trípode portátil y compacto para tu celular.",
    image: "images/products/varios/tripode-portatil-celular.jpeg",
  },
  {
    id: "dummy-13",
    name: "Dummy 13",
    category: "varios",
    subcategories: [],
    price: 4000,
    description:
      "Muñeco articulado totalmente poseable, ideal para crear tus propias poses y fotos.",
    image: "images/products/varios/dummy-13.jpeg",
  },
];
