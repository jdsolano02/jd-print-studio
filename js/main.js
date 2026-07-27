const CATEGORY_LABELS = {
  speedcubing: "Speedcubing",
  coffee: "Coffee",
  tcg: "TCG",
  varios: "Varios",
  personalizado: "Pedido Personalizado",
};

const CATEGORY_ICONS = {
  speedcubing: "🧩",
  coffee: "☕",
  tcg: "🃏",
  varios: "✨",
  personalizado: "🛠️",
};

const CATEGORY_ORDER = Object.keys(CATEGORY_LABELS);

// Sub-categorías disponibles por categoría. Un producto puede tener
// varias a la vez (ver PRODUCTS.subcategories en js/products.js).
const SUBCATEGORIES = {
  speedcubing: [
    { id: "cajas", label: "Cajas" },
    { id: "expositores", label: "Expositores" },
    { id: "tapacubos", label: "Tapacubos" },
  ],
  coffee: [
    { id: "negociadores", label: "Negociadores" },
    { id: "melodrip", label: "Melodrip" },
    { id: "aeropress", label: "Aeropress" },
    { id: "filter-holders", label: "Filter Holders" },
    { id: "metodos", label: "Métodos" },
    { id: "comandante", label: "Comandante" },
    { id: "accesorios", label: "Accesorios" },
    { id: "llaveros", label: "Llaveros" },
  ],
  tcg: [
    { id: "mtg", label: "Magic (MTG)" },
    { id: "pokemon", label: "Pokémon" },
    { id: "yugi", label: "Yu-Gi-Oh!" },
    { id: "accesorios", label: "Accesorios" },
    { id: "deckbox", label: "Deckbox" },
  ],
};

function subcategoryLabel(category, subId) {
  return (SUBCATEGORIES[category] || []).find((s) => s.id === subId)?.label || subId;
}

let currentFilter = "all";
let activeSubcategories = new Set();

const FILTER_ACTIVE_CLASSES = ["bg-mint", "text-black"];
const FILTER_INACTIVE_CLASSES = ["text-white", "hover:bg-mint/10"];
const SUBFILTER_ACTIVE_CLASSES = ["bg-mint", "text-black", "border-mint"];
const SUBFILTER_INACTIVE_CLASSES = ["text-white/80", "hover:border-mint"];

function formatCRC(amount) {
  return "₡" + amount.toLocaleString("es-CR");
}

function igLink() {
  return `https://instagram.com/${CONTACT.instagram}`;
}

function customOrderWaLink() {
  const msg = "Hola! Quiero cotizar un pedido personalizado.";
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
}

// ============================================================
// Carrito (persistido en localStorage)
// ============================================================
const CART_STORAGE_KEY = "jd-print-studio-cart";

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

let cart = loadCart();

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function getQuantity(productId) {
  return cart[productId] || 0;
}

function setQuantity(productId, qty) {
  if (qty <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = qty;
  }
  saveCart();
  updateCartUI();
}

function changeQuantity(productId, delta) {
  setQuantity(productId, getQuantity(productId) + delta);
}

function getCartItems() {
  return Object.entries(cart)
    .map(([id, qty]) => {
      const product = PRODUCTS.find((p) => p.id === id);
      return product ? { product, qty } : null;
    })
    .filter(Boolean);
}

function getCartCount() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.product.price * item.qty, 0);
}

function buildWhatsAppOrderMessage() {
  const items = getCartItems();
  const lines = items.map(
    (item) =>
      `- ${item.qty}x ${item.product.name} (${formatCRC(item.product.price)} c/u) = ${formatCRC(item.product.price * item.qty)}`
  );
  return ["Hola! Quiero hacer este pedido:", "", ...lines, "", `Total: ${formatCRC(getCartTotal())}`].join("\n");
}

function cartWaLink() {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(buildWhatsAppOrderMessage())}`;
}

function renderCartPanel() {
  const list = document.getElementById("cart-items");
  if (!list) return;

  const emptyMsg = document.getElementById("cart-empty");
  const footer = document.getElementById("cart-footer");
  const items = getCartItems();

  if (items.length === 0) {
    list.innerHTML = "";
    emptyMsg.classList.remove("hidden");
    footer.classList.add("hidden");
    return;
  }

  emptyMsg.classList.add("hidden");
  footer.classList.remove("hidden");

  list.innerHTML = items
    .map(
      (item) => `
        <div class="flex items-center gap-3 py-3 border-b border-black/10">
          <div class="flex-1 min-w-0">
            <p class="font-semibold text-sm truncate">${item.product.name}</p>
            <p class="text-xs text-black/60">${formatCRC(item.product.price)} c/u</p>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <button class="cart-qty-btn w-7 h-7 rounded-md border border-forest/30 text-forest font-bold hover:bg-black/5 transition-colors" data-id="${item.product.id}" data-delta="-1" aria-label="Quitar uno">−</button>
            <span class="w-5 text-center font-semibold text-sm">${item.qty}</span>
            <button class="cart-qty-btn w-7 h-7 rounded-md bg-mint text-black font-bold hover:bg-mint/80 transition-colors" data-id="${item.product.id}" data-delta="1" aria-label="Agregar uno">+</button>
          </div>
          <span class="font-bold text-sm w-20 text-right shrink-0">${formatCRC(item.product.price * item.qty)}</span>
        </div>
      `
    )
    .join("");

  document.getElementById("cart-total").textContent = formatCRC(getCartTotal());
  document.getElementById("cart-whatsapp-link").href = cartWaLink();
}

function updateCartUI() {
  const badge = document.getElementById("cart-badge");
  const count = getCartCount();
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle("hidden", count === 0);
  }

  document.querySelectorAll("[data-qty-display]").forEach((el) => {
    el.textContent = getQuantity(el.dataset.qtyDisplay);
  });

  renderCartPanel();
}

function openCart() {
  document.getElementById("cart-overlay").classList.remove("hidden");
  document.getElementById("cart-panel").classList.remove("hidden");
}

function closeCart() {
  document.getElementById("cart-overlay").classList.add("hidden");
  document.getElementById("cart-panel").classList.add("hidden");
}

function setupCart() {
  document.getElementById("cart-fab").addEventListener("click", openCart);
  document.getElementById("cart-close").addEventListener("click", closeCart);
  document.getElementById("cart-overlay").addEventListener("click", closeCart);

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".card-qty-btn, .cart-qty-btn");
    if (!btn) return;
    changeQuantity(btn.dataset.id, Number(btn.dataset.delta));
  });
}

function placeholderMarkup(product) {
  const initials = product.name
    .split(" ")
    .filter((w) => w.length > 1)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
  return `
    <div class="w-full h-full flex flex-col items-center justify-center gap-1.5 bg-forest text-center px-2">
      <span class="text-3xl">${CATEGORY_ICONS[product.category]}</span>
      <span class="text-lg font-bold tracking-wide text-mint">${initials}</span>
      <span class="text-xs text-white/70">Foto próximamente</span>
    </div>
  `;
}

function renderCard(product) {
  const card = document.createElement("article");
  card.className = "bg-white text-black rounded-2xl overflow-hidden shadow-lg flex flex-col";
  card.dataset.category = product.category;

  const subcatBadges = (product.subcategories || [])
    .map(
      (subId) =>
        `<span class="text-[10px] font-semibold text-forest/70 border border-forest/20 rounded px-1.5 py-0.5">${subcategoryLabel(product.category, subId)}</span>`
    )
    .join("");

  card.innerHTML = `
    <div class="aspect-[9/16] bg-forest overflow-hidden flex items-center justify-center">
      <img
        class="w-full h-full object-contain block"
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
        onerror="this.parentElement.innerHTML = document.getElementById('placeholder-${product.id}').innerHTML;"
      />
      <template id="placeholder-${product.id}">${placeholderMarkup(product)}</template>
    </div>
    <div class="p-4 flex flex-col gap-1.5 flex-1">
      <div class="flex items-center flex-wrap gap-1.5">
        <span class="inline-flex items-center gap-1 w-fit bg-mint text-black text-xs font-bold px-2.5 py-1 rounded-full">${CATEGORY_ICONS[product.category]} ${CATEGORY_LABELS[product.category]}</span>
        ${subcatBadges}
      </div>
      <h3 class="text-base font-bold mt-1">${product.name}</h3>
      <p class="text-sm text-black/60 flex-1">${product.description}</p>
      <div class="flex items-center justify-between mt-2">
        <span class="font-bold text-black">${formatCRC(product.price)}</span>
        <div class="flex items-center gap-1.5 bg-black/5 rounded-lg p-1">
          <button class="card-qty-btn w-7 h-7 rounded-md text-forest font-bold text-lg hover:bg-black/10 transition-colors" data-id="${product.id}" data-delta="-1" aria-label="Quitar uno">−</button>
          <span class="w-6 text-center font-semibold text-sm" data-qty-display="${product.id}">${getQuantity(product.id)}</span>
          <button class="card-qty-btn w-7 h-7 rounded-md bg-mint text-black font-bold text-lg hover:bg-mint/80 transition-colors" data-id="${product.id}" data-delta="1" aria-label="Agregar uno">+</button>
        </div>
      </div>
    </div>
  `;
  return card;
}

function renderCustomOrderCard() {
  const card = document.createElement("div");
  card.className =
    "col-span-full bg-white text-black rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left";
  card.innerHTML = `
    <div class="flex-1">
      <h3 class="text-xl font-bold mb-2">${CATEGORY_ICONS.personalizado} ¿Tienes una idea en mente?</h3>
      <p class="text-black/60">Diseñamos e imprimimos piezas a medida para lo que necesites. Contanos tu idea y te damos una cotización sin compromiso.</p>
    </div>
    <a class="shrink-0 whitespace-nowrap bg-mint text-black font-bold px-6 py-3 rounded-lg hover:bg-mint/80 transition-colors" href="${customOrderWaLink()}" target="_blank" rel="noopener">Cotizar por WhatsApp</a>
  `;
  return card;
}

function renderCategoryDivider(category) {
  const divider = document.createElement("div");
  divider.className = "col-span-full flex items-center gap-3 mt-4 first:mt-0";
  divider.innerHTML = `
    <span class="text-lg font-bold text-mint whitespace-nowrap">${CATEGORY_ICONS[category]} ${CATEGORY_LABELS[category]}</span>
    <span class="flex-1 h-px bg-mint/30"></span>
  `;
  return divider;
}

function matchesActiveSubcategories(product) {
  if (activeSubcategories.size === 0) return true;
  return (product.subcategories || []).some((s) => activeSubcategories.has(s));
}

function renderSubfilters() {
  const container = document.getElementById("subfilters");
  const subs = SUBCATEGORIES[currentFilter];
  activeSubcategories = new Set();

  if (!subs || subs.length === 0) {
    container.innerHTML = "";
    container.classList.add("hidden");
    container.classList.remove("flex", "flex-wrap");
    return;
  }

  container.classList.remove("hidden");
  container.classList.add("flex", "flex-wrap");
  container.innerHTML = subs
    .map(
      (s) =>
        `<button class="subfilter-btn border border-mint/40 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors text-white/80 hover:border-mint" data-subfilter="${s.id}">${s.label}</button>`
    )
    .join("");
}

function setupSubfilters() {
  document.getElementById("subfilters").addEventListener("click", (e) => {
    const btn = e.target.closest(".subfilter-btn");
    if (!btn) return;
    const id = btn.dataset.subfilter;
    if (activeSubcategories.has(id)) {
      activeSubcategories.delete(id);
      btn.classList.remove(...SUBFILTER_ACTIVE_CLASSES);
      btn.classList.add(...SUBFILTER_INACTIVE_CLASSES);
    } else {
      activeSubcategories.add(id);
      btn.classList.add(...SUBFILTER_ACTIVE_CLASSES);
      btn.classList.remove(...SUBFILTER_INACTIVE_CLASSES);
    }
    renderCatalogue();
  });
}

function renderCatalogue() {
  const grid = document.getElementById("catalogue-grid");
  grid.innerHTML = "";

  if (currentFilter === "personalizado") {
    grid.appendChild(renderCustomOrderCard());
    return;
  }

  const products = (currentFilter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === currentFilter))
    .filter(matchesActiveSubcategories)
    .slice()
    .sort((a, b) => {
      if (currentFilter === "all" && a.category !== b.category) {
        return CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
      }
      return a.name.localeCompare(b.name, "es", { sensitivity: "base" });
    });

  if (products.length === 0) {
    grid.innerHTML = `<p class="col-span-full text-center text-white/70 py-10">Todavía no hay productos en esta categoría.</p>`;
    return;
  }

  products.forEach((p, index) => {
    if (currentFilter === "all" && (index === 0 || p.category !== products[index - 1].category)) {
      grid.appendChild(renderCategoryDivider(p.category));
    }
    grid.appendChild(renderCard(p));
  });

  if (currentFilter === "all") {
    grid.appendChild(renderCategoryDivider("personalizado"));
    grid.appendChild(renderCustomOrderCard());
  }
}

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove(...FILTER_ACTIVE_CLASSES);
        b.classList.add(...FILTER_INACTIVE_CLASSES);
      });
      btn.classList.remove(...FILTER_INACTIVE_CLASSES);
      btn.classList.add(...FILTER_ACTIVE_CLASSES);
      currentFilter = btn.dataset.filter;
      renderSubfilters();
      renderCatalogue();
    });
  });
}

function setupContactLinks() {
  document.querySelectorAll(".wa-link").forEach((el) => (el.href = `https://wa.me/${CONTACT.whatsapp}`));
  document.querySelectorAll(".ig-link").forEach((el) => (el.href = igLink()));
  document.querySelectorAll(".mail-link").forEach((el) => (el.href = `mailto:${CONTACT.email}`));
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  setupFilters();
  setupSubfilters();
  setupContactLinks();
  setupCart();
  renderCatalogue();
  updateCartUI();
});
