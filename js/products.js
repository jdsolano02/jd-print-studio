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
// category debe ser: "speedcubing" | "coffee" | "varios"
//
// image: ruta a la foto del producto dentro de images/products/.
// Si el archivo no existe todavía, se muestra automáticamente un
// placeholder bonito — así que puedes dejarlo apuntando al nombre
// que usarás cuando tengas la foto lista.
// ============================================================

const PRODUCTS = [
  // ---------------- Speedcubing ----------------
  {
    id: "caja-cubos-56-5mm",
    name: "Caja Cubos 56.5mm",
    category: "speedcubing",
    price: 5000,
    description:
      "Caja protectora ideal para cubos 3x3 transportar y coleccionar.",
    image: "images/products/caja-cubos-56-5mm.jpg",
  },
  {
    id: "tapacubos-square-1",
    name: "Tapacubos Square-1",
    category: "speedcubing",
    price: 2000,
    description: "Soporte/base a medida para exhibir tu Square-1.",
    image: "images/products/tapacubos-square-1.jpg",
  },

  // ---------------- Coffee ----------------
  {
    id: "aerodrip",
    name: "AeroDrip",
    category: "coffee",
    price: 4000,
    description: "Adaptador de tapa de Aeropress para ser usada como Melodrip",
    image: "images/products/aerodrip.jpeg",
  },
  {
    id: "aeropress-filter-box",
    name: "Aeropress Filter Box",
    category: "coffee",
    price: 4500,
    description: "Caja para llevar tus filtros de Aeropress.",
    image: "images/products/aeropress-filter-box.jpg",
  },
  {
    id: "comandante-half-steps",
    name: "Comandante Half Steps",
    category: "coffee",
    price: 1000,
    description:
      "Anillo de ajuste de half-steps para tu molino Comandante C40., suplica tus clicks, también fuinciona con los 'Red Clix' para aún más precisión",
    image: "images/products/comandante-half-steps.jpeg",
  },
  {
    id: "coffee-bean-funnel",
    name: "Embudo para granos de café",
    category: "coffee",
    price: 1500,
    description: "Embudo para dosificar tus granos café sin derrames.",
    image: "images/products/coffee-bean-funnel.jpeg",
  },
  {
    id: "holder-filtros-kalita",
    name: "Holder Filtros Kalita",
    category: "coffee",
    price: 14000,
    description:
      "Organizador de filtros Kalita o Wave para mantener tu barra de café ordenada. y que tus filtros no pierdan su forma",
    image: "images/products/holder-filtros-kalita.jpeg",
  },
  {
    id: "holder-monte-fuji-graycano-m",
    name: "Holder Monte Fuji Graycano (M)",
    category: "coffee",
    price: 6000,
    description: "Soporte tamaño M para dripper Monte Fuji Graycano.",
    image: "images/products/holder-monte-fuji-graycano-m.jpg",
  },
  {
    id: "holder-monte-fuji-sibarist-fast-l",
    name: "Holder Monte Fuji Sibarist Fast (L)",
    category: "coffee",
    price: 8000,
    description: "Soporte tamaño L para dripper Monte Fuji Sibarist Fast.",
    image: "images/products/holder-monte-fuji-sibarist-fast-l.jpg",
  },
  {
    id: "holder-monte-fuji-ufo-s",
    name: "Holder Monte Fuji UFO (S)",
    category: "coffee",
    price: 3500,
    description: "Soporte tamaño S para tu dripper Monte Fuji UFO.",
    image: "images/products/holder-monte-fuji-ufo-s.jpg",
  },
  {
    id: "melodrip-tray-aeropress",
    name: "Melodrip Tray Aeropress",
    category: "coffee",
    price: 1000,
    description:
      "Bandeja para Melodrip diseñada para Aeropress, Usa el Melodrip sin preocupaciones",
    image: "images/products/melodrip-tray-aeropress.jpg",
  },
  {
    id: "melodrip-tray-v2",
    name: "Melodrip Tray v2",
    category: "coffee",
    price: 7000,
    description:
      "Bandeja para tu Melodrip que evita goteos y mantiene tu espacio limpio.",
    image: "images/products/melodrip-tray-v2.jpeg",
  },
  {
    id: "negociador-v60-02",
    name: "Negociador V60 02",
    category: "coffee",
    price: 6000,
    description:
      'Soporte "Negociador" para tu dripper V60 02, estabilidad total al servir.',
    image: "images/products/negociador-v60-02.jpg",
  },
  {
    id: "tapa-aeropress-repuesto",
    name: "Tapa Aeropress Repuesto",
    category: "coffee",
    price: 4000,
    description: "Tapa de repuesto para tu Aeropress, ajuste perfecto.",
    image: "images/products/tapa-aeropress-repuesto.jpeg",
  },
  {
    id: "tapa-comandante-con-clip",
    name: "Tapa Comandante con Clip",
    category: "coffee",
    price: 1500,
    description:
      "Tapa con clip para el recipiente de tu Comandante C40, sella el aroma.",
    image: "images/products/tapa-comandante-con-clip.jpeg",
  },

  // ---------------- Varios ----------------
  {
    id: "llavero-grano-de-cafe",
    name: "Llavero Grano de Café",
    category: "varios",
    price: 1000,
    description:
      "Llavero con forma de grano de café, el accesorio perfecto para cafeteros.",
    image: "images/products/llavero-grano-de-cafe.jpeg",
  },
  {
    id: "llavero-tetera",
    name: "Llavero Tetera",
    category: "varios",
    price: 1000,
    description:
      "Llavero con forma de tetera, el accesorio perfecto para cafeteros.",
    image: "images/products/llavero-tetera.jpeg",
  },
];
