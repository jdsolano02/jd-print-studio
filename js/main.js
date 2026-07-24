const CATEGORY_LABELS = {
  speedcubing: "Speedcubing",
  coffee: "Coffee",
  varios: "Varios",
};

const CATEGORY_ICONS = {
  speedcubing: "🧩",
  coffee: "☕",
  varios: "✨",
};

const CATEGORY_ORDER = Object.keys(CATEGORY_LABELS);

const FILTER_ACTIVE_CLASSES = ["bg-mint", "text-black"];
const FILTER_INACTIVE_CLASSES = ["text-white", "hover:bg-mint/10"];

function formatCRC(amount) {
  return "₡" + amount.toLocaleString("es-CR");
}

function igLink() {
  return `https://instagram.com/${CONTACT.instagram}`;
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
      <span class="inline-flex items-center gap-1 w-fit bg-mint text-black text-xs font-bold px-2.5 py-1 rounded-full">${CATEGORY_ICONS[product.category]} ${CATEGORY_LABELS[product.category]}</span>
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

function renderCatalogue(filter) {
  const grid = document.getElementById("catalogue-grid");
  grid.innerHTML = "";
  const products = (filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter))
    .slice()
    .sort((a, b) => {
      if (filter === "all" && a.category !== b.category) {
        return CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
      }
      return a.name.localeCompare(b.name, "es", { sensitivity: "base" });
    });

  if (products.length === 0) {
    grid.innerHTML = `<p class="col-span-full text-center text-white/70 py-10">Todavía no hay productos en esta categoría.</p>`;
    return;
  }

  products.forEach((p) => grid.appendChild(renderCard(p)));
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
      renderCatalogue(btn.dataset.filter);
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
  setupContactLinks();
  setupCart();
  renderCatalogue("all");
  updateCartUI();
});
