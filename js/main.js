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

function waLink(product) {
  const msg = `Hola! Me interesa el producto: ${product.name} (${formatCRC(product.price)})`;
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
}

function igLink() {
  return `https://instagram.com/${CONTACT.instagram}`;
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
        <a class="bg-mint text-black font-semibold text-sm px-4 py-2 rounded-lg hover:bg-mint/80 transition-colors" href="${waLink(product)}" target="_blank" rel="noopener">Pedir</a>
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
  renderCatalogue("all");
});
