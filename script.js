/* ==================================================================
   SAAD_HUB — SCRIPT
   All product data lives in the arrays below — edit freely.
   ================================================================== */
(function(){
"use strict";

/* ---------------------------------------------------------
   0. CONFIG
--------------------------------------------------------- */
const WHATSAPP_NUMBER = "923245483848"; // international format, no +
const BRAND = "SAAD_HUB";

/* ---------------------------------------------------------
   1. PLACEHOLDER IMAGE GENERATOR
   Produces a clean monochrome placeholder (data URI) so the
   site works instantly even before real photos are dropped
   into /assets/. Replace the <img src="assets/..."> paths
   with real photos any time — the onerror fallback simply
   stops firing once a real file exists at that path.
--------------------------------------------------------- */
function placeholderImg(label, category, w, h){
  w = w || 600; h = h || 750;
  const bg = "#1c1b19", fg = "#f6f4ef", accent = "#9c8552";
  const initials = label.split(" ").map(w=>w[0]).slice(0,2).join("").toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="${w}" height="${h}" fill="${bg}"/>
    <rect x="18" y="18" width="${w-36}" height="${h-36}" fill="none" stroke="${accent}" stroke-width="1" opacity="0.5"/>
    <text x="50%" y="46%" font-family="Poppins,Helvetica,Arial,sans-serif" font-size="${Math.round(w*0.16)}" fill="${fg}" text-anchor="middle" font-weight="300">${initials}</text>
    <text x="50%" y="58%" font-family="Poppins,Helvetica,Arial,sans-serif" font-size="${Math.round(w*0.038)}" letter-spacing="2" fill="${accent}" text-anchor="middle">${category.toUpperCase()}</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}
window.placeholderImg = placeholderImg;

function imgWithFallback(src, name, category, w, h){
  return `src="${src}" onerror="this.onerror=null;this.src=placeholderImg('${name.replace(/'/g,"")}','${category}',${w||600},${h||750})"`;
}

/* ---------------------------------------------------------
   2. PRODUCT DATA
   NOTE: Har product apni khud ki "img" line rakhta hai —
   isliye har card ki image alag alag change ki ja sakti hai.
   Bas jis product ki image badalni ho, us line ka "img:"
   value apni filename se replace kar dein.
--------------------------------------------------------- */
const perfumes = [
  {
    id:"perfume-desire", name:"DESIRE", category:"perfumes", price:4200,
    tagline:"Bold • Seductive • Unforgettable",
    desc:"A captivating fragrance for those who love to make a lasting impression — rich and elegant, perfect for evenings and special occasions.",
    notes:"<strong>Top:</strong> Lychee, Mandarin Orange, Lotus, Bergamot<br><strong>Heart:</strong> Sea Notes, Orange, Brazilian Rosewood<br><strong>Base:</strong> Tonka Bean, Musk, Amber, Benzoin<br><strong>Size:</strong> 50ml Extrait De Parfum",
    img:"sh desire.jfif"
  },
  {
    id:"perfume-pookie", name:"POOKIE", category:"perfumes", price:3800,
    tagline:"Sweet • Elegant • Charming",
    desc:"A soft, elegant fragrance for those who love a graceful scent that feels luxurious, attractive and memorable.",
    notes:"<strong>Top:</strong> Fruity, Pear, Pink Pepper<br><strong>Heart:</strong> Floral, Rose, Jasmine<br><strong>Base:</strong> Vanilla, Musk, Amber<br><strong>Size:</strong> 50ml Extrait De Parfum",
    img:"sh pookie.jfif"
  },
  {
    id:"perfume-suroor", name:"SUROOR", category:"perfumes", price:4500,
    tagline:"Rich • Powerful • Sophisticated",
    desc:"A refined fragrance made for those who appreciate depth, elegance and a distinctive presence.",
    notes:"<strong>Top:</strong> Saffron, Spices<br><strong>Heart:</strong> Oud, Rose, Incense<br><strong>Base:</strong> Amber, Musk, Sandalwood<br><strong>Size:</strong> 50ml Extrait De Parfum",
    img:"sh sroor.jfif"
  },
  {
    id:"perfume-rebel", name:"REBEL", category:"perfumes", price:4000,
    tagline:"Bold • Confident • Unapologetic",
    desc:"Made for those who don't follow the crowd — a powerful, distinctive character that stays memorable long after you leave.",
    notes:"<strong>Top:</strong> Saffron, Bitter Almond, Bergamot<br><strong>Heart:</strong> Jasmine, Cedarwood<br><strong>Base:</strong> Amberwood, Musk, Oakmoss<br><strong>Size:</strong> 50ml Extrait De Parfum",
    img:"rebel.jfif"
  },
  {
    id:"perfume-ice", name:"ICE", category:"perfumes", price:3500,
    tagline:"Fresh • Cool • Invigorating",
    desc:"A refreshing, energetic fragrance for those who love a clean, cool and confident scent, perfect for everyday wear.",
    notes:"<strong>Top:</strong> Bergamot, Lemon, Apple<br><strong>Heart:</strong> Plum, Orange Blossom, Cardamom<br><strong>Base:</strong> Musk, Amber, Driftwood, Patchouli<br><strong>Size:</strong> 50ml Extrait De Parfum",
    img:"sh ice.jfif"
  }
];

/* ---- WATCHES ----
   Pehle sab watches ki image ek hi hardcoded line se aa rahi thi
   ("watch 1.jfif" — chahe koi bhi watch ho). Ab har watch ki apni
   alag "img" line hai, jise tum individually edit kar sakte ho. */
const watches = [
  {
    id:"watch-01", name:"Watch 01", category:"watches", price:4500,
    desc:"Minimal dial, stainless steel build and a strap made to go from desk to dinner.",
    img:"watch 1.jfif"
  },
  {
    id:"watch-02", name:"Watch 02", category:"watches", price:5200,
    desc:"Minimal dial, stainless steel build and a strap made to go from desk to dinner.",
    img:"watch 23.jfif"
  },
  {
    id:"watch-03", name:"Watch 03", category:"watches", price:5900,
    desc:"Minimal dial, stainless steel build and a strap made to go from desk to dinner.",
    img:"watch 3.jfif"
  },
  {
    id:"watch-04", name:"Watch 04", category:"watches", price:6600,
    desc:"Minimal dial, stainless steel build and a strap made to go from desk to dinner.",
    img:"watch 4.jfif"
  },
  {
    id:"watch-05", name:"Watch 05", category:"watches", price:7300,
    desc:"Minimal dial, stainless steel build and a strap made to go from desk to dinner.",
    img:"watch 5.jfif"
  }
];

/* ---- BRACELETS ----
   Har bracelet ki apni "img" line — filename/path apni marzi se
   badal sakte ho, baki data (id, price, desc) waisa hi rahega. */
const bracelets = [
  { id:"bracelet-01", name:"Bracelet 01", category:"bracelets", price:900,  desc:"Handcrafted men's bracelet in premium alloy, leather or beaded finish.", img:"brace 1.jfif" },
  { id:"bracelet-02", name:"Bracelet 02", category:"bracelets", price:1030, desc:"Handcrafted men's bracelet in premium alloy, leather or beaded finish.", img:"brace 2.jfif" },
  { id:"bracelet-03", name:"Bracelet 03", category:"bracelets", price:1160, desc:"Handcrafted men's bracelet in premium alloy, leather or beaded finish.", img:"brace 3.jfif" },
  { id:"bracelet-04", name:"Bracelet 04", category:"bracelets", price:1290, desc:"Handcrafted men's bracelet in premium alloy, leather or beaded finish.", img:"brace 8.jfif" },
  { id:"bracelet-05", name:"Bracelet 05", category:"bracelets", price:1420, desc:"Handcrafted men's bracelet in premium alloy, leather or beaded finish.", img:"brace 5.jfif" },
  { id:"bracelet-06", name:"Bracelet 06", category:"bracelets", price:900,  desc:"Handcrafted men's bracelet in premium alloy, leather or beaded finish.", img:"brace 6.jfif" },
  { id:"bracelet-07", name:"Bracelet 07", category:"bracelets", price:1030, desc:"Handcrafted men's bracelet in premium alloy, leather or beaded finish.", img:"brace 7.jfif" },

];

/* ---- WALLETS ----
   Har wallet ki apni "img" line. */
const wallets = [
  { id:"wallet-01", name:"Wallet 01", category:"wallets", price:1800, desc:"Slim genuine-leather wallet with multiple card slots and a clean finish.", img:"wallet 1.jfif" },
  { id:"wallet-02", name:"Wallet 02", category:"wallets", price:2020, desc:"Slim genuine-leather wallet with multiple card slots and a clean finish.", img:"wallet 2.jfif" },
  { id:"wallet-03", name:"Wallet 03", category:"wallets", price:2240, desc:"Slim genuine-leather wallet with multiple card slots and a clean finish.", img:"wallet 3.jfif" },
  { id:"wallet-04", name:"Wallet 04", category:"wallets", price:2460, desc:"Slim genuine-leather wallet with multiple card slots and a clean finish.", img:"wallet 4.jfif" },
  { id:"wallet-05", name:"Wallet 05", category:"wallets", price:2680, desc:"Slim genuine-leather wallet with multiple card slots and a clean finish.", img:"wallet 5.jfif" },
  { id:"wallet-06", name:"Wallet 06", category:"wallets", price:2900, desc:"Slim genuine-leather wallet with multiple card slots and a clean finish.", img:"wallet 6.jfif" },
  { id:"wallet-06", name:"Wallet 06", category:"wallets", price:2900, desc:"Slim genuine-leather wallet with multiple card slots and a clean finish.", img:"wallet 7.jfif" }
];

const allProducts = [...perfumes, ...watches, ...bracelets, ...wallets];

/* ---------------------------------------------------------
   3. HERO SLIDES + CATEGORIES DATA
--------------------------------------------------------- */
const heroSlides = [
  {
    eyebrow:"Discover The Collection", heading:"SAAD_HUB Perfumes",
    text:"Signature scents crafted for unforgettable impressions.",
    cta:"Shop Perfumes", link:"#perfumes",
    img:"perfume banner.png", key:"Perfumes", cat:"hero"
  },
  {
    eyebrow:"Precision On Your Wrist", heading:"SAAD_HUB Watches",
    text:"Clean dials and premium builds for the modern man.",
    cta:"Shop Watches", link:"#watches",
    img:"watches banner.png", key:"Watches", cat:"hero"
  },
  {
    eyebrow:"Everyday Essentials", heading:"Bracelets & Wallets",
    text:"Accessories built with premium materials and clean detailing.",
    cta:"Shop Accessories", link:"#accessories",
    img:"banner.png", key:"Accessories", cat:"hero"
  }
];

/* ---- CATEGORY CIRCLES ----
   FIX: pehle teeno category circles ka img "assets/banners/..."
   folder ki taraf point kar raha tha, aur agar wahan asal file
   maujood nahi thi tou onerror fallback chal ke placeholder show
   kar deta tha — isi wajah se lagta tha ke image change nahi ho
   rahi. Ab bhi har category ki apni ALAG "img" line hai (bilkul
   products jaisa) — bas neeche har line ka filename apni actual
   image se replace kar dein (jaise products mein "sh desire.jfif"
   waghera use hota hai, waisa hi flat filename yahan bhi likh
   sakte hain agar images root/assets folder mein rakhi hon). */
const categories = [
  {name:"Perfumes",    link:"#perfumes",     img:"rebel.jfif",    key:"Perfumes"},
  {name:"Watches",     link:"#watches",      img:"watch 4.jfif",     key:"Watches"},
  {name:"Accessories", link:"#accessories",  img:"wallet 1.jfif", key:"Accessories"}
];

/* ---------------------------------------------------------
   4. STATE (localStorage-backed)
--------------------------------------------------------- */
const store = {
  get cart(){ try{ return JSON.parse(localStorage.getItem("saadhub_cart")) || []; }catch(e){ return []; } },
  set cart(v){ localStorage.setItem("saadhub_cart", JSON.stringify(v)); },
  get wishlist(){ try{ return JSON.parse(localStorage.getItem("saadhub_wishlist")) || []; }catch(e){ return []; } },
  set wishlist(v){ localStorage.setItem("saadhub_wishlist", JSON.stringify(v)); }
};

function findProduct(id){ return allProducts.find(p=>p.id===id); }
function money(n){ return "Rs. " + n.toLocaleString("en-PK"); }

/* ---------------------------------------------------------
   5. NOTIFICATIONS
--------------------------------------------------------- */
function notify(msg){
  const wrap = document.getElementById("notifyWrap");
  const el = document.createElement("div");
  el.className = "notify";
  el.textContent = msg;
  wrap.appendChild(el);
  requestAnimationFrame(()=>el.classList.add("show"));
  setTimeout(()=>{
    el.classList.remove("show");
    setTimeout(()=>el.remove(), 350);
  }, 2600);
}

/* ---------------------------------------------------------
   6. RENDER: MARQUEE
--------------------------------------------------------- */
function renderMarquee(){
  const msgs = ["Free Delivery Across Pakistan","Premium Quality Products","COD Available","Shop SAAD_HUB","New Arrivals"];
  const track = document.getElementById("marqueeTrack");
  const group = document.createElement("span");
  msgs.forEach(m=>{
    group.insertAdjacentHTML("beforeend", `${m} <i class="fa-solid fa-circle"></i> `);
  });
  track.innerHTML = group.outerHTML + group.outerHTML; // duplicate for seamless loop
}

/* ---------------------------------------------------------
   7. RENDER: HERO SLIDER
--------------------------------------------------------- */
let heroIndex = 0, heroTimer = null;
function renderHero(){
  const hero = document.getElementById("heroSlider");
  let slidesHtml = heroSlides.map((s,i)=>`
    <div class="hero-slide${i===0?" active":""}" data-index="${i}" style="background-image:url('${s.img}')" role="group" aria-roledescription="slide" aria-label="${i+1} of ${heroSlides.length}">
      <div class="hero-content">
        <span class="eyebrow">${s.eyebrow}</span>
        <h1>${s.heading}</h1>
        <p>${s.text}</p>
        <a class="btn btn-light" href="${s.link}">${s.cta}</a>
      </div>
    </div>`).join("");

  hero.innerHTML = slidesHtml + `
    <div class="hero-arrows">
      <button id="heroPrev" aria-label="Previous slide"><i class="fa-solid fa-chevron-left"></i></button>
      <button id="heroNext" aria-label="Next slide"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
    <div class="hero-dots" id="heroDots">
      ${heroSlides.map((_,i)=>`<button data-index="${i}" class="${i===0?"active":""}" aria-label="Go to slide ${i+1}"></button>`).join("")}
    </div>`;

  // apply image fallbacks (background images can't use onerror, so pre-check)
  hero.querySelectorAll(".hero-slide").forEach((slide,i)=>{
    const testImg = new Image();
    testImg.onerror = ()=>{ slide.style.backgroundImage = `url('${placeholderImg(heroSlides[i].key,"banner",1600,1000)}')`; };
    testImg.src = heroSlides[i].img;
  });

  document.getElementById("heroPrev").addEventListener("click", ()=>goToHero(heroIndex-1));
  document.getElementById("heroNext").addEventListener("click", ()=>goToHero(heroIndex+1));
  document.getElementById("heroDots").addEventListener("click", (e)=>{
    const btn = e.target.closest("button[data-index]");
    if(btn) goToHero(parseInt(btn.dataset.index,10));
  });

  hero.addEventListener("mouseenter", stopHeroAutoplay);
  hero.addEventListener("mouseleave", startHeroAutoplay);

  // swipe support
  let touchStartX = 0;
  hero.addEventListener("touchstart", e=>{ touchStartX = e.changedTouches[0].screenX; }, {passive:true});
  hero.addEventListener("touchend", e=>{
    const dx = e.changedTouches[0].screenX - touchStartX;
    if(Math.abs(dx) > 40){ dx < 0 ? goToHero(heroIndex+1) : goToHero(heroIndex-1); }
  }, {passive:true});

  // keyboard support
  hero.setAttribute("tabindex","0");
  hero.addEventListener("keydown", e=>{
    if(e.key === "ArrowRight") goToHero(heroIndex+1);
    if(e.key === "ArrowLeft") goToHero(heroIndex-1);
  });

  startHeroAutoplay();
}
function goToHero(i){
  const n = heroSlides.length;
  heroIndex = ((i % n) + n) % n;
  document.querySelectorAll(".hero-slide").forEach((s,idx)=>s.classList.toggle("active", idx===heroIndex));
  document.querySelectorAll("#heroDots button").forEach((d,idx)=>d.classList.toggle("active", idx===heroIndex));
}
function startHeroAutoplay(){
  stopHeroAutoplay();
  heroTimer = setInterval(()=>goToHero(heroIndex+1), 5000);
}
function stopHeroAutoplay(){ if(heroTimer) clearInterval(heroTimer); }

/* ---------------------------------------------------------
   8. RENDER: CATEGORIES
--------------------------------------------------------- */
function renderCategories(){
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = categories.map(c=>`
    <a class="category-card reveal" href="${c.link}">
      <div class="category-circle">
        <img ${imgWithFallback(c.img, c.key, "category", 500, 500)} alt="${c.name} category">
      </div>
      <h3>${c.name}</h3>
      <span>Shop Now</span>
    </a>`).join("");
}

/* ---------------------------------------------------------
   9. RENDER: PRODUCT GRIDS
--------------------------------------------------------- */
function productCardHtml(p){
  const inWish = store.wishlist.includes(p.id);
  return `
  <div class="product-card reveal" data-id="${p.id}">
    <div class="product-media" data-action="quickview" data-id="${p.id}">
      <img ${imgWithFallback(p.img, p.name, p.category, 500, 625)} alt="${p.name} — SAAD_HUB ${p.category}" loading="lazy">
      <div class="product-quick">
        <button class="icon-btn wish-toggle ${inWish?"wishlisted":""}" data-id="${p.id}" aria-label="Toggle wishlist for ${p.name}">
          <i class="fa-${inWish?"solid":"regular"} fa-heart"></i>
        </button>
        <button class="icon-btn" data-action="quickview" data-id="${p.id}" aria-label="Quick view ${p.name}">
          <i class="fa-solid fa-eye"></i>
        </button>
      </div>
    </div>
    <div class="product-info">
      <span class="p-cat">${p.category}</span>
      <h3>${p.name}</h3>
      <p class="p-desc">${p.tagline ? p.tagline : p.desc}</p>
      <span class="p-price">${money(p.price)}</span>
      <div class="product-actions">
        <button class="btn-mini ghost add-cart" data-id="${p.id}">Add to Cart</button>
        <button class="btn-mini solid order-now" data-id="${p.id}">Order Now</button>
      </div>
    </div>
  </div>`;
}
function renderGrid(elId, list){
  document.getElementById(elId).innerHTML = list.map(productCardHtml).join("");
}
function renderAllGrids(){
  renderGrid("perfumeGrid", perfumes);
  renderGrid("watchGrid", watches);
  renderGrid("braceletGrid", bracelets);
  renderGrid("walletGrid", wallets);
}

/* ---------------------------------------------------------
   10. WISHLIST / CART LOGIC
--------------------------------------------------------- */
function toggleWishlist(id){
  let list = store.wishlist;
  const product = findProduct(id);
  if(list.includes(id)){
    list = list.filter(x=>x!==id);
    notify("Removed from wishlist.");
  } else {
    list.push(id);
    notify(`${product.name} added to wishlist.`);
  }
  store.wishlist = list;
  refreshWishUI();
}
function refreshWishUI(){
  const list = store.wishlist;
  const badge = document.getElementById("wishBadge");
  badge.style.display = list.length ? "flex" : "none";
  badge.textContent = list.length;
  document.querySelectorAll(".wish-toggle").forEach(btn=>{
    const on = list.includes(btn.dataset.id);
    btn.classList.toggle("wishlisted", on);
    btn.querySelector("i").className = `fa-${on?"solid":"regular"} fa-heart`;
  });
  renderWishlistPanel();
}
function renderWishlistPanel(){
  const body = document.getElementById("wishlistBody");
  const list = store.wishlist.map(findProduct).filter(Boolean);
  if(!list.length){
    body.innerHTML = `<p class="side-panel-empty">Your wishlist is empty. Tap the heart on any product to save it here.</p>`;
    return;
  }
  body.innerHTML = list.map(p=>`
    <div class="wish-line" data-id="${p.id}">
      <img ${imgWithFallback(p.img, p.name, p.category, 200, 240)} alt="${p.name}">
      <div class="wish-line-info">
        <div class="wl-name">${p.name}</div>
        <div class="wl-price">${money(p.price)}</div>
      </div>
      <div class="wish-line-actions">
        <button class="btn-mini ghost" style="padding:8px 12px;" data-action="wl-add-cart" data-id="${p.id}">Add to Cart</button>
        <button data-action="wl-remove" data-id="${p.id}">Remove</button>
      </div>
    </div>`).join("");
}

function addToCart(id, qty){
  qty = qty || 1;
  let cart = store.cart;
  const existing = cart.find(c=>c.id===id);
  if(existing){ existing.qty += qty; } else { cart.push({id, qty}); }
  store.cart = cart;
  const p = findProduct(id);
  notify(`${p.name} added to your cart.`);
  refreshCartUI();
}
function updateQty(id, delta){
  let cart = store.cart;
  const item = cart.find(c=>c.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(c=>c.id!==id);
  store.cart = cart;
  refreshCartUI();
}
function removeFromCart(id){
  store.cart = store.cart.filter(c=>c.id!==id);
  refreshCartUI();
}
function clearCart(){
  store.cart = [];
  refreshCartUI();
  notify("Cart emptied.");
}
function cartTotal(){
  return store.cart.reduce((sum,c)=>{
    const p = findProduct(c.id);
    return p ? sum + p.price*c.qty : sum;
  }, 0);
}
function cartCount(){
  return store.cart.reduce((sum,c)=>sum+c.qty, 0);
}
function refreshCartUI(){
  const cart = store.cart;
  const badge = document.getElementById("cartBadge");
  const count = cartCount();
  badge.style.display = count ? "flex" : "none";
  badge.textContent = count;

  const body = document.getElementById("cartBody");
  const foot = document.getElementById("cartFoot");
  if(!cart.length){
    body.innerHTML = `<p class="side-panel-empty">Your cart is empty. Start adding your favourite pieces.</p>`;
    foot.style.display = "none";
    return;
  }
  foot.style.display = "flex";
  body.innerHTML = cart.map(c=>{
    const p = findProduct(c.id);
    if(!p) return "";
    return `
    <div class="line-item" data-id="${p.id}">
      <img ${imgWithFallback(p.img, p.name, p.category, 200, 240)} alt="${p.name}">
      <div class="line-item-info">
        <span class="li-cat">${p.category}</span>
        <span class="li-name">${p.name}</span>
        <div class="qty-row">
          <button data-action="qty-minus" data-id="${p.id}" aria-label="Decrease quantity">−</button>
          <span>${c.qty}</span>
          <button data-action="qty-plus" data-id="${p.id}" aria-label="Increase quantity">+</button>
        </div>
        <button class="li-remove" data-action="cart-remove" data-id="${p.id}">Remove</button>
      </div>
      <div class="li-actions">
        <span class="li-price">${money(p.price*c.qty)}</span>
      </div>
    </div>`;
  }).join("");
  document.getElementById("cartSubtotal").textContent = money(cartTotal());
}

/* ---------------------------------------------------------
   11. QUICK VIEW MODAL
--------------------------------------------------------- */
let qvCurrentId = null, qvQty = 1;
function openQuickView(id){
  const p = findProduct(id);
  if(!p) return;
  qvCurrentId = id; qvQty = 1;
  document.getElementById("qvImage").setAttribute("src", p.img);
  document.getElementById("qvImage").setAttribute("onerror", `this.onerror=null;this.src=placeholderImg('${p.name}','${p.category}',700,875)`);
  document.getElementById("qvImage").alt = p.name;
  document.getElementById("qvCat").textContent = p.category;
  document.getElementById("qvName").textContent = p.name;
  document.getElementById("qvPrice").textContent = money(p.price);
  document.getElementById("qvDesc").textContent = p.desc;
  const notesEl = document.getElementById("qvNotes");
  if(p.notes){ notesEl.style.display = "block"; notesEl.innerHTML = p.notes; }
  else { notesEl.style.display = "none"; }
  document.getElementById("qvQty").textContent = qvQty;
  const wishBtn = document.getElementById("qvWishBtn");
  const inWish = store.wishlist.includes(id);
  wishBtn.classList.toggle("wishlisted", inWish);
  wishBtn.querySelector("i").className = `fa-${inWish?"solid":"regular"} fa-heart`;

  openModal("quickViewModal");
}
function openModal(id){
  document.getElementById(id).classList.add("open");
  document.getElementById("overlay").classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeAllOverlays(){
  document.querySelectorAll(".modal.open").forEach(m=>m.classList.remove("open"));
  document.querySelectorAll(".side-panel.open").forEach(m=>m.classList.remove("open"));
  document.getElementById("searchPanel").classList.remove("open");
  document.getElementById("mobileMenu").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
  document.body.style.overflow = "";
}

/* ---------------------------------------------------------
   12. SEARCH
--------------------------------------------------------- */
let searchDebounce = null;
function runSearch(term){
  const results = document.getElementById("searchResults");
  const hint = document.getElementById("searchHint");
  term = term.trim().toLowerCase();
  if(!term){
    results.innerHTML = "";
    hint.style.display = "block";
    return;
  }
  hint.style.display = "none";
  const matches = allProducts.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.category.toLowerCase().includes(term) ||
    (p.desc && p.desc.toLowerCase().includes(term)) ||
    (p.tagline && p.tagline.toLowerCase().includes(term))
  );
  if(!matches.length){
    results.innerHTML = `<p class="search-empty" style="grid-column:1/-1;">No products found.</p>`;
    return;
  }
  results.innerHTML = matches.map(p=>`
    <div class="search-result" data-id="${p.id}">
      <img ${imgWithFallback(p.img, p.name, p.category, 300, 300)} alt="${p.name}">
      <span class="sr-cat">${p.category}</span>
      <span class="sr-name">${p.name}</span>
      <span class="sr-price">${money(p.price)}</span>
    </div>`).join("");
}

/* ---------------------------------------------------------
   13. WHATSAPP ORDER SYSTEM
--------------------------------------------------------- */
let orderContext = null; // {mode:'single'|'cart', id, qty}

function openOrderForm(context){
  orderContext = context;
  const summary = document.getElementById("orderSummary");
  let lines = [], total = 0;
  if(context.mode === "single"){
    const p = findProduct(context.id);
    const lineTotal = p.price * context.qty;
    total = lineTotal;
    lines.push(`<div><span>${p.name} × ${context.qty}</span><span>${money(lineTotal)}</span></div>`);
  } else {
    const cart = store.cart;
    cart.forEach(c=>{
      const p = findProduct(c.id);
      if(!p) return;
      const lineTotal = p.price*c.qty;
      total += lineTotal;
      lines.push(`<div><span>${p.name} × ${c.qty}</span><span>${money(lineTotal)}</span></div>`);
    });
  }
  lines.push(`<div class="order-total"><span>Total</span><span>${money(total)}</span></div>`);
  summary.innerHTML = lines.join("");
  document.getElementById("orderForm").reset();
  openModal("orderModal");
}

function buildWhatsAppMessage(data){
  let productLines = [], total = 0;
  if(orderContext.mode === "single"){
    const p = findProduct(orderContext.id);
    const lineTotal = p.price*orderContext.qty;
    total = lineTotal;
    productLines.push(`1. ${p.name} x ${orderContext.qty} — ${money(p.price)}`);
  } else {
    store.cart.forEach((c,i)=>{
      const p = findProduct(c.id);
      if(!p) return;
      const lineTotal = p.price*c.qty;
      total += lineTotal;
      productLines.push(`${i+1}. ${p.name} x ${c.qty} — ${money(p.price)}`);
    });
  }
  let msg = `${BRAND} NEW ORDER\n\n`;
  msg += `Name: ${data.name}\n`;
  msg += `Phone: ${data.phone}\n`;
  msg += `City: ${data.city}\n`;
  msg += `Address: ${data.address}\n\n`;
  msg += `Products:\n${productLines.join("\n")}\n\n`;
  msg += `Total: ${money(total)}\n`;
  if(data.note && data.note.trim()){
    msg += `\nNote:\n${data.note.trim()}`;
  }
  return msg;
}

document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  const data = {
    name: document.getElementById("ofName").value.trim(),
    phone: document.getElementById("ofPhone").value.trim(),
    city: document.getElementById("ofCity").value.trim(),
    address: document.getElementById("ofAddress").value.trim(),
    note: document.getElementById("ofNote").value.trim()
  };
  const message = buildWhatsAppMessage(data);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
  closeAllOverlays();
  notify("Order sent — continue on WhatsApp.");
});

/* ---------------------------------------------------------
   14. COUNTERS (ScrollTrigger)
--------------------------------------------------------- */
function initCounters(){
  document.querySelectorAll(".num[data-count]").forEach(el=>{
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const obj = {val:0};
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: ()=>{
        gsap.to(obj, {
          val: target, duration: 1.6, ease: "power2.out",
          onUpdate: ()=>{ el.textContent = Math.round(obj.val) + suffix; }
        });
      }
    });
  });
}

/* ---------------------------------------------------------
   15. SCROLL ANIMATIONS
--------------------------------------------------------- */
function initScrollReveals(){
  gsap.utils.toArray(".reveal").forEach(el=>{
    gsap.to(el, {
      opacity:1, y:0, duration:0.9, ease:"power2.out",
      scrollTrigger:{ trigger: el, start:"top 90%" }
    });
  });
  gsap.utils.toArray(".product-card").forEach((card,i)=>{
    gsap.fromTo(card, {opacity:0,y:24}, {
      opacity:1,y:0,duration:.7,ease:"power2.out",delay:(i%4)*0.06,
      scrollTrigger:{ trigger: card, start:"top 92%" }
    });
  });
}
function initLoadSequence(){
  const tl = gsap.timeline();
  tl.from(".navbar", {y:-30, opacity:0, duration:.6, ease:"power2.out"})
    .from(".hero-content .eyebrow", {opacity:0, y:14, duration:.5}, "-=.2")
    .from(".hero-content h1", {opacity:0, y:26, duration:.7}, "-=.35")
    .from(".hero-content p", {opacity:0, y:16, duration:.5}, "-=.4")
    .from(".hero-content .btn", {opacity:0, y:16, duration:.5}, "-=.35");
}

/* ---------------------------------------------------------
   16. CUSTOM CURSOR
--------------------------------------------------------- */
function initCursor(){
  if(window.matchMedia("(pointer:coarse)").matches) { document.body.classList.add("no-cursor"); return; }
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  let mx=0,my=0, rx=0,ry=0;
  window.addEventListener("mousemove", e=>{
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx+"px"; dot.style.top = my+"px";
  });
  function loop(){
    rx += (mx-rx)*0.16; ry += (my-ry)*0.16;
    ring.style.left = rx+"px"; ring.style.top = ry+"px";
    requestAnimationFrame(loop);
  }
  loop();
  document.addEventListener("mouseover", e=>{
    if(e.target.closest("a, button, .product-card, input, textarea")){
      ring.classList.add("is-active");
    }
  });
  document.addEventListener("mouseout", e=>{
    if(e.target.closest("a, button, .product-card, input, textarea")){
      ring.classList.remove("is-active");
    }
  });
}

/* ---------------------------------------------------------
   17. SCROLL TO TOP + STICKY HELPERS
--------------------------------------------------------- */
function initScrollTop(){
  const btn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", ()=>{
    btn.classList.toggle("show", window.scrollY > 500);
  });
  btn.addEventListener("click", ()=>window.scrollTo({top:0, behavior:"smooth"}));
}

/* ---------------------------------------------------------
   18. EVENT WIRING (delegation)
--------------------------------------------------------- */
function wireEvents(){

  // ---- navbar actions ----
  document.getElementById("searchBtn").addEventListener("click", ()=>{
    document.getElementById("searchPanel").classList.add("open");
    document.getElementById("overlay").classList.add("show");
    setTimeout(()=>document.getElementById("searchInput").focus(), 350);
  });
  document.getElementById("closeSearch").addEventListener("click", closeAllOverlays);

  document.getElementById("wishlistBtn").addEventListener("click", ()=>openModal("wishlistPanel"));
  document.getElementById("closeWishlist").addEventListener("click", closeAllOverlays);

  document.getElementById("cartBtn").addEventListener("click", ()=>openModal("cartPanel"));
  document.getElementById("closeCart").addEventListener("click", closeAllOverlays);

  document.getElementById("hamburgerBtn").addEventListener("click", ()=>{
    document.getElementById("mobileMenu").classList.add("open");
  });
  document.getElementById("closeMobileMenu").addEventListener("click", closeAllOverlays);
  document.querySelectorAll("[data-mobile-link] a").forEach(a=>a.addEventListener("click", closeAllOverlays));

  document.getElementById("overlay").addEventListener("click", closeAllOverlays);
  document.getElementById("closeQuickView").addEventListener("click", closeAllOverlays);
  document.getElementById("closeOrderModal").addEventListener("click", closeAllOverlays);

  document.addEventListener("keydown", e=>{
    if(e.key === "Escape") closeAllOverlays();
  });

  // ---- search input ----
  document.getElementById("searchInput").addEventListener("input", e=>{
    clearTimeout(searchDebounce);
    const val = e.target.value;
    searchDebounce = setTimeout(()=>runSearch(val), 220);
  });
  document.getElementById("searchResults").addEventListener("click", e=>{
    const item = e.target.closest(".search-result");
    if(item){ closeAllOverlays(); openQuickView(item.dataset.id); }
  });

  // ---- product grid delegation (wishlist / cart / order / quickview) ----
  document.body.addEventListener("click", e=>{
    const wishBtn = e.target.closest(".wish-toggle");
    if(wishBtn){ toggleWishlist(wishBtn.dataset.id); return; }

    const addBtn = e.target.closest(".add-cart");
    if(addBtn){ addToCart(addBtn.dataset.id, 1); return; }

    const orderBtn = e.target.closest(".order-now");
    if(orderBtn){ closeAllOverlays(); openOrderForm({mode:"single", id:orderBtn.dataset.id, qty:1}); return; }

    const qv = e.target.closest("[data-action='quickview']");
    if(qv){ openQuickView(qv.dataset.id); return; }

    const qtyMinus = e.target.closest("[data-action='qty-minus']");
    if(qtyMinus){ updateQty(qtyMinus.dataset.id, -1); return; }
    const qtyPlus = e.target.closest("[data-action='qty-plus']");
    if(qtyPlus){ updateQty(qtyPlus.dataset.id, 1); return; }
    const cartRemove = e.target.closest("[data-action='cart-remove']");
    if(cartRemove){ removeFromCart(cartRemove.dataset.id); return; }

    const wlAddCart = e.target.closest("[data-action='wl-add-cart']");
    if(wlAddCart){ addToCart(wlAddCart.dataset.id, 1); return; }
    const wlRemove = e.target.closest("[data-action='wl-remove']");
    if(wlRemove){ toggleWishlist(wlRemove.dataset.id); return; }
  });

  // ---- cart footer ----
  document.getElementById("orderCartBtn").addEventListener("click", ()=>{
    if(!store.cart.length){ notify("Your cart is empty."); return; }
    closeAllOverlays();
    openOrderForm({mode:"cart"});
  });
  document.getElementById("clearCartBtn").addEventListener("click", clearCart);

  // ---- quick view controls ----
  document.getElementById("qvMinus").addEventListener("click", ()=>{
    qvQty = Math.max(1, qvQty-1);
    document.getElementById("qvQty").textContent = qvQty;
  });
  document.getElementById("qvPlus").addEventListener("click", ()=>{
    qvQty += 1;
    document.getElementById("qvQty").textContent = qvQty;
  });
  document.getElementById("qvWishBtn").addEventListener("click", ()=>toggleWishlist(qvCurrentId));
  document.getElementById("qvAddCart").addEventListener("click", ()=>{
    addToCart(qvCurrentId, qvQty);
    closeAllOverlays();
  });
  document.getElementById("qvOrderNow").addEventListener("click", ()=>{
    const id = qvCurrentId, qty = qvQty;
    closeAllOverlays();
    openOrderForm({mode:"single", id, qty});
  });
}

/* ---------------------------------------------------------
   19. INIT
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function(){
  renderMarquee();
  renderHero();
  renderCategories();
  renderAllGrids();
  refreshWishUI();
  refreshCartUI();
  wireEvents();
  initCursor();
  initScrollTop();

  if(window.gsap && window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    initLoadSequence();
    initScrollReveals();
    initCounters();
  }
});

})();