/**
 * Sri Boutique - Hosur, Tamil Nadu
 * Main Application Logic & Storefront Controller
 */

// Application State
const AppState = {
  products: [],
  activeCategory: 'all',
  searchQuery: '',
  priceFilter: 'all',
  sortBy: 'featured',
  wishlist: JSON.parse(localStorage.getItem('sri_boutique_wishlist') || '[]'),
  selectedProduct: null
};

// Fallback image generator for offline / broken image links
function getPlaceholderImage(title, code) {
  const cleanTitle = (title || 'Sri Boutique Saree').slice(0, 24);
  const cleanCode = code || 'SRI-BOUTIQUE';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
    <defs>
      <linearGradient id="maroonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6F0C22" />
        <stop offset="100%" stop-color="#450512" />
      </linearGradient>
      <pattern id="motif" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1.5" fill="#D4AF37" opacity="0.3"/>
      </pattern>
    </defs>
    <rect width="600" height="800" fill="url(#maroonGrad)"/>
    <rect width="600" height="800" fill="url(#motif)"/>
    <rect x="30" y="30" width="540" height="740" fill="none" stroke="#D4AF37" stroke-width="2" stroke-dasharray="10 5" opacity="0.6"/>
    <rect x="42" y="42" width="516" height="716" fill="none" stroke="#D4AF37" stroke-width="1" opacity="0.4"/>
    <g transform="translate(300, 360)">
      <circle cx="0" cy="0" r="60" fill="none" stroke="#D4AF37" stroke-width="2"/>
      <path d="M0 -40 C20 -20 20 20 0 40 C-20 20 -20 -20 0 -40" fill="#D4AF37" opacity="0.8"/>
      <path d="M-40 0 C-20 20 20 20 40 0 C20 -20 -20 -20 -40 0" fill="#D4AF37" opacity="0.8"/>
      <circle cx="0" cy="0" r="8" fill="#FFF"/>
    </g>
    <text x="300" y="470" font-family="'Cinzel', serif" font-size="22" font-weight="700" fill="#F5DE91" text-anchor="middle" letter-spacing="2">SRI BOUTIQUE</text>
    <text x="300" y="505" font-family="sans-serif" font-size="14" fill="#FFFFFF" text-anchor="middle" opacity="0.9">${cleanTitle}</text>
    <text x="300" y="535" font-family="sans-serif" font-size="13" font-weight="bold" fill="#D4AF37" text-anchor="middle" letter-spacing="1.5">[ ${cleanCode} ]</text>
    <text x="300" y="710" font-family="sans-serif" font-size="11" fill="#E8DFD3" text-anchor="middle" letter-spacing="1">HOSUR • TAMIL NADU • INDIA</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// Format Indian Rupee currency
function formatINR(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  AppState.products = getStoredProducts();
  populateShopConfig();
  renderCategoryTabs();
  renderProducts();
  renderCustomerFeedback('all');
  setupEventListeners();
  updateWishlistCount();
  setupStarPicker();
});

// Populate shop details from SHOP_CONFIG
function populateShopConfig() {
  // Update header and announcement bar links
  const callLinks = document.querySelectorAll('.dynamic-call-link');
  callLinks.forEach(link => {
    link.href = `tel:${SHOP_CONFIG.phone}`;
  });

  const waLinks = document.querySelectorAll('.dynamic-wa-link');
  waLinks.forEach(link => {
    link.href = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello Sri Boutique, Hosur! I am visiting your website and would like to inquire about saree collections.`)}`;
  });

  const phoneTexts = document.querySelectorAll('.dynamic-phone-text');
  phoneTexts.forEach(el => {
    el.textContent = SHOP_CONFIG.displayPhone;
  });

  const addressTexts = document.querySelectorAll('.dynamic-address-text');
  addressTexts.forEach(el => {
    el.textContent = SHOP_CONFIG.address;
  });

  const hoursTexts = document.querySelectorAll('.dynamic-hours-text');
  hoursTexts.forEach(el => {
    el.textContent = SHOP_CONFIG.businessHours;
  });
}

// Render Category Filter Tabs & Quick Jump chips
function renderCategoryTabs() {
  const tabsContainer = document.getElementById('category-tabs');
  const jumpContainer = document.getElementById('category-jump-list');
  if (!tabsContainer && !jumpContainer) return;

  const counts = { all: AppState.products.length };
  AppState.products.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });

  if (tabsContainer) {
    tabsContainer.innerHTML = CATEGORIES.map(cat => {
      const count = counts[cat.id] || 0;
      const isActive = cat.id === AppState.activeCategory ? 'active' : '';
      return `
        <button class="category-tab ${isActive}" data-category="${cat.id}">
          <span class="tab-icon">${cat.icon}</span>
          <span class="tab-label">${cat.name}</span>
          <span class="category-tab-count">${count}</span>
        </button>
      `;
    }).join('');
  }

  if (jumpContainer) {
    jumpContainer.innerHTML = CATEGORIES.map(cat => {
      const isActive = cat.id === AppState.activeCategory ? 'active' : '';
      return `
        <button class="jump-chip ${isActive}" data-category="${cat.id}">
          <span>${cat.icon}</span>
          <span>${cat.name}</span>
        </button>
      `;
    }).join('');
  }
}

// Filter and Sort Products
function getFilteredProducts() {
  let list = [...AppState.products];

  // 1. Category Filter
  if (AppState.activeCategory !== 'all') {
    list = list.filter(p => p.category === AppState.activeCategory);
  }

  // 2. Search Query Filter
  if (AppState.searchQuery.trim() !== '') {
    const q = AppState.searchQuery.toLowerCase().trim();
    list = list.filter(p => {
      return (
        (p.name && p.name.toLowerCase().includes(q)) ||
        (p.code && p.code.toLowerCase().includes(q)) ||
        (p.fabric && p.fabric.toLowerCase().includes(q)) ||
        (p.color && p.color.toLowerCase().includes(q)) ||
        (p.categoryName && p.categoryName.toLowerCase().includes(q)) ||
        (p.occasion && p.occasion.toLowerCase().includes(q)) ||
        (p.badge && p.badge.toLowerCase().includes(q))
      );
    });
  }

  // 3. Price Filter
  if (AppState.priceFilter !== 'all') {
    if (AppState.priceFilter === 'under-3000') {
      list = list.filter(p => p.price < 3000);
    } else if (AppState.priceFilter === '3000-7000') {
      list = list.filter(p => p.price >= 3000 && p.price <= 7000);
    } else if (AppState.priceFilter === '7000-15000') {
      list = list.filter(p => p.price > 7000 && p.price <= 15000);
    } else if (AppState.priceFilter === 'above-15000') {
      list = list.filter(p => p.price > 15000);
    }
  }

  // 4. Sort By
  if (AppState.sortBy === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (AppState.sortBy === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (AppState.sortBy === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  return list;
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('results-count-number');
  const catNameEl = document.getElementById('results-category-name');
  if (!grid) return;

  const filtered = getFilteredProducts();

  // Update counts
  if (countEl) countEl.textContent = filtered.length;
  if (catNameEl) {
    const activeCatObj = CATEGORIES.find(c => c.id === AppState.activeCategory);
    catNameEl.textContent = activeCatObj ? activeCatObj.name : 'Collections';
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="catalog-empty-state">
        <div class="empty-icon">🪷</div>
        <h3>No sarees found</h3>
        <p>We couldn't find any saree matching your current search or filter criteria. Try resetting filters or searching with another keyword.</p>
        <button class="btn-primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = AppState.wishlist.includes(product.id);
    const discount = product.mrp > product.price 
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100) 
      : 0;

    return `
      <div class="product-card" data-id="${product.id}" data-category="${product.category}">
        <div class="product-image-wrap">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="product-img" 
            loading="lazy"
            onerror="this.onerror=null; this.src=getPlaceholderImage('${escapeHtml(product.name)}', '${product.code}');"
          />
          ${product.badge ? `<span class="badge-tag">${product.badge}</span>` : ''}
          <span class="badge-code">${product.code}</span>
          
          <div class="card-quick-actions">
            <button class="btn-card-quickview" onclick="openQuickView('${product.id}')">
              <span>👁️</span> Quick View
            </button>
            <button class="btn-card-wishlist ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${product.id}', this)" title="Save to Wishlist">
              <span>${isWishlisted ? '❤️' : '🤍'}</span>
            </button>
          </div>
        </div>

        <div class="product-info">
          <div class="product-cat-name">${product.categoryName || 'Saree'}</div>
          <h3 class="product-name" title="${product.name}">${product.name}</h3>
          
          <div class="product-specs">
            <div class="spec-line">
              <span class="spec-dot"></span>
              <span><strong>Color:</strong> ${product.color}</span>
            </div>
            <div class="spec-line">
              <span class="spec-dot"></span>
              <span><strong>Fabric:</strong> ${product.fabric}</span>
            </div>
          </div>

          <div class="product-pricing">
            <span class="price-current">${formatINR(product.price)}</span>
            ${product.mrp ? `<span class="price-mrp">${formatINR(product.mrp)}</span>` : ''}
            ${discount > 0 ? `<span class="price-discount">${discount}% OFF</span>` : ''}
          </div>

          <!-- Individual WhatsApp Order Button -->
          <button class="btn-whatsapp-order" onclick="orderOnWhatsApp('${product.id}')">
            <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.37 7.33 9.11 7.39 8.89 7.63C8.67 7.87 8.05 8.45 8.05 9.63C8.05 10.81 8.91 11.95 9.03 12.11C9.15 12.27 10.72 14.69 13.12 15.73C13.69 15.98 14.14 16.13 14.48 16.24C15.06 16.43 15.58 16.4 16 16.34C16.47 16.27 17.44 15.75 17.64 15.19C17.84 14.63 17.84 14.15 17.78 14.05C17.72 13.95 17.56 13.89 17.32 13.77C17.08 13.65 15.9 13.07 15.68 12.99C15.46 12.91 15.3 12.87 15.14 13.11C14.98 13.35 14.52 13.89 14.38 14.05C14.24 14.21 14.1 14.23 13.86 14.11C13.62 13.99 12.85 13.74 11.93 12.92C11.22 12.28 10.74 11.5 10.6 11.26C10.46 11.02 10.58 10.89 10.7 10.77C10.81 10.66 10.95 10.48 11.07 10.34C11.19 10.2 11.23 10.1 11.31 9.94C11.39 9.78 11.35 9.64 11.29 9.52C11.23 9.4 10.77 8.27 10.58 7.81C10.39 7.37 10.2 7.43 10.05 7.42C9.91 7.42 9.75 7.33 9.53 7.33Z"/></svg>
            Order on WhatsApp
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// WhatsApp Order Button Functionality
function orderOnWhatsApp(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  const currentUrl = window.location.href.split('#')[0];
  const message = 
`Namaste Sri Boutique! 🌺
I am interested in ordering this saree from your Hosur boutique:

• *Saree Name:* ${product.name}
• *Product Code:* ${product.code}
• *Price:* ${formatINR(product.price)}
• *Category:* ${product.categoryName}
• *Fabric:* ${product.fabric}
• *Color:* ${product.color}
• *Catalog Link:* ${currentUrl}#product-${product.code}

Please let me know if this piece is available in stock and kindly share the payment and shipping / delivery details to my address. Thank you!`;

  const waUrl = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

// Open Quick View Modal
function openQuickView(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  AppState.selectedProduct = product;
  const modal = document.getElementById('quick-view-modal');
  const content = document.getElementById('quick-view-content');
  if (!modal || !content) return;

  const isWishlisted = AppState.wishlist.includes(product.id);
  const discount = product.mrp > product.price 
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100) 
    : 0;

  content.innerHTML = `
    <div class="modal-product-grid">
      <div class="modal-product-gallery">
        <div class="modal-main-image-wrap">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="modal-main-img" 
            onerror="this.onerror=null; this.src=getPlaceholderImage('${escapeHtml(product.name)}', '${product.code}');"
          />
        </div>
      </div>

      <div class="modal-product-details">
        <div class="modal-badge-row">
          ${product.badge ? `<span class="badge-tag" style="position:static;">${product.badge}</span>` : ''}
          <span class="badge-tag" style="position:static; background: var(--bg-cream-alt); color: var(--primary-maroon); border-color: var(--accent-gold);">${product.categoryName}</span>
        </div>

        <h2 class="modal-title">${product.name}</h2>
        
        <div class="modal-code-chip" onclick="copyProductCode('${product.code}')" title="Click to copy code">
          <span>🔖 Code: <strong>${product.code}</strong></span>
          <span style="font-size: 0.7rem; color: var(--accent-gold-dark);">📋 Copy</span>
        </div>

        <div class="modal-price-box">
          <span class="modal-price-current">${formatINR(product.price)}</span>
          ${product.mrp ? `<span class="modal-price-mrp">${formatINR(product.mrp)}</span>` : ''}
          ${discount > 0 ? `<span class="price-discount">${discount}% OFF</span>` : ''}
        </div>

        <p class="modal-desc">${product.description || 'Authentic ethnic saree crafted by master weavers with utmost precision and purity.'}</p>

        <div class="modal-spec-table">
          <div class="spec-cell">
            <span class="spec-cell-label">Fabric / Weave</span>
            <span class="spec-cell-val">${product.fabric}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-cell-label">Color Shade</span>
            <span class="spec-cell-val">${product.color}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-cell-label">Blouse Piece</span>
            <span class="spec-cell-val">${product.blouse || 'Included (0.8m)'}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-cell-label">Best Suited Occasion</span>
            <span class="spec-cell-val">${product.occasion || 'Festive / Wedding'}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-cell-label">Saree Length</span>
            <span class="spec-cell-val">5.5 Meters + 0.8m Blouse</span>
          </div>
          <div class="spec-cell">
            <span class="spec-cell-label">Care Instructions</span>
            <span class="spec-cell-val">Dry Clean Only (Silk)</span>
          </div>
        </div>

        <div class="modal-action-row">
          <button class="btn-whatsapp-order" style="padding: 0.85rem 1.25rem; font-size: 0.95rem;" onclick="orderOnWhatsApp('${product.id}')">
            <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.37 7.33 9.11 7.39 8.89 7.63C8.67 7.87 8.05 8.45 8.05 9.63C8.05 10.81 8.91 11.95 9.03 12.11C9.15 12.27 10.72 14.69 13.12 15.73C13.69 15.98 14.14 16.13 14.48 16.24C15.06 16.43 15.58 16.4 16 16.34C16.47 16.27 17.44 15.75 17.64 15.19C17.84 14.63 17.84 14.15 17.78 14.05C17.72 13.95 17.56 13.89 17.32 13.77C17.08 13.65 15.9 13.07 15.68 12.99C15.46 12.91 15.3 12.87 15.14 13.11C14.98 13.35 14.52 13.89 14.38 14.05C14.24 14.21 14.1 14.23 13.86 14.11C13.62 13.99 12.85 13.74 11.93 12.92C11.22 12.28 10.74 11.5 10.6 11.26C10.46 11.02 10.58 10.89 10.7 10.77C10.81 10.66 10.95 10.48 11.07 10.34C11.19 10.2 11.23 10.1 11.31 9.94C11.39 9.78 11.35 9.64 11.29 9.52C11.23 9.4 10.77 8.27 10.58 7.81C10.39 7.37 10.2 7.43 10.05 7.42C9.91 7.42 9.75 7.33 9.53 7.33Z"/></svg>
            Order this on WhatsApp
          </button>
          <button class="btn-card-wishlist ${isWishlisted ? 'active' : ''}" style="width: 48px; height: 48px; font-size: 1.25rem;" onclick="toggleWishlist('${product.id}', this)">
            ${isWishlisted ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Copy Product Code
function copyProductCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`Copied saree code: ${code}`);
  }).catch(() => {
    showToast(`Product code: ${code}`);
  });
}

// Wishlist Functionality
function toggleWishlist(productId, btnElement) {
  const index = AppState.wishlist.indexOf(productId);
  if (index > -1) {
    AppState.wishlist.splice(index, 1);
    if (btnElement) {
      btnElement.classList.remove('active');
      btnElement.innerHTML = '🤍';
    }
    showToast('Removed from your Wishlist');
  } else {
    AppState.wishlist.push(productId);
    if (btnElement) {
      btnElement.classList.add('active');
      btnElement.innerHTML = '❤️';
    }
    showToast('Added to your Wishlist ❤️');
  }
  localStorage.setItem('sri_boutique_wishlist', JSON.stringify(AppState.wishlist));
  updateWishlistCount();
}

function updateWishlistCount() {
  const badge = document.getElementById('wishlist-badge');
  if (badge) {
    const count = Array.isArray(AppState.wishlist) ? AppState.wishlist.length : 0;
    badge.textContent = count;
    // Hide the red badge pill if empty (0 items) so it doesn't show an unnecessary count pill
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// Show Wishlisted Items Filter
function filterWishlistOnly() {
  if (AppState.wishlist.length === 0) {
    showToast('Your wishlist is empty! Tap 🤍 on any saree to save it.');
    return;
  }
  AppState.searchQuery = '';
  const searchInput = document.getElementById('product-search');
  if (searchInput) searchInput.value = '';

  const grid = document.getElementById('products-grid');
  const filtered = AppState.products.filter(p => AppState.wishlist.includes(p.id));
  
  const countEl = document.getElementById('results-count-number');
  const catNameEl = document.getElementById('results-category-name');
  if (countEl) countEl.textContent = filtered.length;
  if (catNameEl) catNameEl.textContent = 'My Wishlist ❤️';

  grid.innerHTML = filtered.map(product => {
    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" onerror="this.onerror=null; this.src=getPlaceholderImage('${escapeHtml(product.name)}', '${product.code}');" />
          <span class="badge-code">${product.code}</span>
          <div class="card-quick-actions">
            <button class="btn-card-quickview" onclick="openQuickView('${product.id}')"><span>👁️</span> Quick View</button>
            <button class="btn-card-wishlist active" onclick="toggleWishlist('${product.id}', this)">❤️</button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-cat-name">${product.categoryName}</div>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-pricing">
            <span class="price-current">${formatINR(product.price)}</span>
          </div>
          <button class="btn-whatsapp-order" onclick="orderOnWhatsApp('${product.id}')">
            Order on WhatsApp
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Scroll to catalog smoothly
  document.getElementById('collections-catalog')?.scrollIntoView({ behavior: 'smooth' });
}

// Current feedback filter type ('all', 'video', 'story', 'feedback')
let currentFeedbackFilter = 'all';

// Helper to convert YouTube link into embed URL
function getYouTubeEmbedUrl(url) {
  if (!url) return '';
  if (url.includes('youtube.com/embed/')) return url;
  
  // Handle youtu.be/<id>
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch && shortMatch[1]) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }
  
  // Handle youtube.com/watch?v=<id>
  const longMatch = url.match(/watch\?v=([a-zA-Z0-9_-]+)/);
  if (longMatch && longMatch[1]) {
    return `https://www.youtube.com/embed/${longMatch[1]}`;
  }

  // Handle youtube.com/shorts/<id>
  const shortsMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch && shortsMatch[1]) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}`;
  }

  return url;
}

// Render Customer Feedback, Drape Stories & Video Reviews
function renderCustomerFeedback(filterType = 'all') {
  currentFeedbackFilter = filterType;
  const container = document.getElementById('feedback-videos-grid');
  if (!container) return;

  let allFeedbacks = getStoredFeedback();
  if (!Array.isArray(allFeedbacks) || allFeedbacks.length === 0) {
    allFeedbacks = INITIAL_FEEDBACK;
  }

  let list = [...allFeedbacks];
  if (filterType !== 'all') {
    list = list.filter(item => (item.type || 'feedback') === filterType);
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; background: white; border-radius: var(--radius-md); border: 1px dashed var(--border-light);">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🌟</div>
        <h4 style="color: var(--primary-maroon); font-family: var(--font-serif); margin-bottom: 0.35rem;">No reviews found in this category</h4>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1rem;">Be the first to share your saree experience!</p>
        <button class="btn-primary" onclick="openWriteFeedbackModal('${filterType !== 'all' ? filterType : 'feedback'}')" style="padding: 0.6rem 1.25rem;">
          <span>✍️</span> Share Your Feedback
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(item => {
    const stars = '★'.repeat(item.rating || 5);
    const type = item.type || 'feedback';
    const isNew = item.isUserSubmitted;

    // 1. VIDEO REVIEW CARD
    if (type === 'video') {
      const isYouTube = item.videoUrl && (item.videoUrl.includes('youtube.com') || item.videoUrl.includes('youtu.be'));
      const embedUrl = isYouTube ? getYouTubeEmbedUrl(item.videoUrl) : '';

      return `
        <div class="feedback-card">
          ${isYouTube ? `
            <div class="feedback-youtube-wrapper">
              <iframe 
                src="${embedUrl}" 
                title="${escapeHtml(item.title || 'Sri Boutique Saree Video Review')}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
              </iframe>
            </div>
          ` : `
            <div class="feedback-video-wrapper" onclick="togglePlayVideo(this)">
              <video loop playsinline preload="metadata" poster="${item.poster || 'assets/images/hero-saree.jpg'}">
                <source src="${item.videoUrl}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <div class="feedback-poster-overlay">
                <div class="feedback-verified-pill">
                  <span>✓</span> ${item.verified || 'Verified Buyer'}
                </div>
                <div class="feedback-play-center">▶</div>
                <div class="feedback-video-meta">
                  <span class="saree-tag">${item.sareePurchased || 'Silk Saree'}</span>
                </div>
              </div>
            </div>
          `}
          <div class="feedback-body">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
              <div class="feedback-rating">${stars}</div>
              <span class="feedback-type-pill pill-video">📹 Video Review</span>
            </div>
            ${isNew ? `<span class="feedback-new-badge" style="align-self: flex-start; margin-bottom: 0.4rem;">✨ Just Added</span>` : ''}
            <h4 class="feedback-title">${escapeHtml(item.title)}</h4>
            <p class="feedback-quote">"${escapeHtml(item.quote)}"</p>
            <div class="feedback-author">
              <div class="author-avatar">${item.customerName ? item.customerName.charAt(0) : 'S'}</div>
              <div class="author-info">
                <h6>${escapeHtml(item.customerName)}</h6>
                <p>📍 ${escapeHtml(item.location || 'Tamil Nadu')} • <span style="color:var(--accent-gold-dark); font-weight:600;">${escapeHtml(item.sareePurchased || '')}</span></p>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 2. CUSTOMER DRAPE STORY CARD
    if (type === 'story') {
      return `
        <div class="feedback-card">
          <div class="feedback-story-image-wrap">
            <img 
              src="${item.photo || 'assets/images/hero-saree.jpg'}" 
              alt="${escapeHtml(item.title || 'Customer Drape Story')}" 
              class="feedback-story-img" 
              loading="lazy" 
              onerror="this.src='assets/images/hero-saree.jpg';"
            />
            ${item.occasion ? `<div class="feedback-occasion-badge">👑 ${escapeHtml(item.occasion)}</div>` : ''}
          </div>
          <div class="feedback-body">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
              <div class="feedback-rating">${stars}</div>
              <span class="feedback-type-pill pill-story">📖 Drape Story</span>
            </div>
            ${isNew ? `<span class="feedback-new-badge" style="align-self: flex-start; margin-bottom: 0.4rem;">✨ Just Added</span>` : ''}
            <h4 class="feedback-title">${escapeHtml(item.title)}</h4>
            <p class="feedback-quote">"${escapeHtml(item.quote)}"</p>
            <div class="feedback-author">
              <div class="author-avatar">${item.customerName ? item.customerName.charAt(0) : 'S'}</div>
              <div class="author-info">
                <h6>${escapeHtml(item.customerName)}</h6>
                <p>📍 ${escapeHtml(item.location || 'Tamil Nadu')} • <span style="color:var(--accent-gold-dark); font-weight:600;">${escapeHtml(item.sareePurchased || '')}</span></p>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 3. SHARE FEEDBACK / REVIEW CARD
    return `
      <div class="feedback-card text-review-card">
        <div class="feedback-card-header">
          <span class="feedback-type-pill pill-review">💬 Customer Review</span>
          ${isNew ? `<span class="feedback-new-badge">✨ Just Added</span>` : `<span style="font-size:0.75rem; color:var(--text-light);">${item.date || 'Verified Buyer'}</span>`}
        </div>
        <div class="feedback-body">
          <div class="feedback-rating">${stars}</div>
          <h4 class="feedback-title">${escapeHtml(item.title)}</h4>
          <p class="feedback-quote">"${escapeHtml(item.quote)}"</p>
          <div class="feedback-author">
            <div class="author-avatar">${item.customerName ? item.customerName.charAt(0) : 'S'}</div>
            <div class="author-info">
              <h6>${escapeHtml(item.customerName)}</h6>
              <p>📍 ${escapeHtml(item.location || 'Tamil Nadu')} • <span style="color:var(--accent-gold-dark); font-weight:600;">${escapeHtml(item.sareePurchased || 'Pure Saree')}</span></p>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Backwards compatibility
function renderFeedbackVideos() {
  renderCustomerFeedback('all');
}

// Filter Feedback by Type ('all', 'video', 'story', 'feedback')
function filterFeedbackType(type, buttonEl) {
  document.querySelectorAll('.feedback-chip').forEach(chip => chip.classList.remove('active'));
  if (buttonEl) buttonEl.classList.add('active');
  renderCustomerFeedback(type);
}

// Switch Feedback Modal Form Type
function switchFeedbackFormType(type) {
  const typeInput = document.getElementById('feedback-type-value');
  const titleEl = document.getElementById('feedback-modal-header-title');
  const videoFields = document.getElementById('fb-video-fields');
  const storyFields = document.getElementById('fb-story-fields');
  const submitBtn = document.getElementById('btn-submit-feedback');

  if (typeInput) typeInput.value = type;

  // Toggle active chip inside modal
  ['feedback', 'video', 'story'].forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    if (btn) {
      if (t === type) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });

  if (type === 'video') {
    if (titleEl) titleEl.textContent = 'Add Saree Video Review';
    if (videoFields) videoFields.style.display = 'block';
    if (storyFields) storyFields.style.display = 'none';
    if (submitBtn) submitBtn.innerHTML = '<span>📹</span> Post Video Review';
  } else if (type === 'story') {
    if (titleEl) titleEl.textContent = 'Share Your Customer Story & Drape Photo';
    if (videoFields) videoFields.style.display = 'none';
    if (storyFields) storyFields.style.display = 'block';
    if (submitBtn) submitBtn.innerHTML = '<span>📖</span> Post Customer Story';
  } else {
    if (titleEl) titleEl.textContent = 'Share Your Saree Experience';
    if (videoFields) videoFields.style.display = 'none';
    if (storyFields) storyFields.style.display = 'none';
    if (submitBtn) submitBtn.innerHTML = '<span>⭐</span> Post Review to Website';
  }
}

// Open Write Feedback Modal
function openWriteFeedbackModal(type = 'feedback') {
  const modal = document.getElementById('write-feedback-modal');
  if (!modal) return;

  switchFeedbackFormType(type);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close Write Feedback Modal
function closeWriteFeedbackModal() {
  const modal = document.getElementById('write-feedback-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Interactive Star Picker
function setupStarPicker() {
  const picker = document.getElementById('star-rating-picker');
  const starInput = document.getElementById('feedback-star-value');
  if (!picker || !starInput) return;

  const stars = picker.querySelectorAll('.star-pick');
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const val = parseInt(star.dataset.val, 10);
      starInput.value = val;
      stars.forEach(s => {
        const sVal = parseInt(s.dataset.val, 10);
        if (sVal <= val) {
          s.classList.add('active');
          s.style.color = '#E29500';
        } else {
          s.classList.remove('active');
          s.style.color = '#CCC';
        }
      });
    });
  });
}

// Drape Photo file upload handler for stories
function handleStoryFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    document.getElementById('fb-story-photo').value = evt.target.result;
    updateStoryPhotoPreview();
  };
  reader.readAsDataURL(file);
}

function updateStoryPhotoPreview() {
  const url = document.getElementById('fb-story-photo')?.value || '';
  const wrap = document.getElementById('story-photo-preview-wrap');
  const img = document.getElementById('story-photo-preview');
  if (url && wrap && img) {
    img.src = url;
    wrap.style.display = 'block';
  } else if (wrap) {
    wrap.style.display = 'none';
  }
}

// Handle Customer Feedback Submission (Post to Website)
function handleCustomerFeedbackSubmit(e) {
  e.preventDefault();

  const type = document.getElementById('feedback-type-value')?.value || 'feedback';
  const name = document.getElementById('fb-cust-name')?.value.trim() || 'Valued Customer';
  const location = document.getElementById('fb-cust-location')?.value.trim() || 'Hosur, Tamil Nadu';
  const saree = document.getElementById('fb-saree-bought')?.value.trim() || 'Silk Saree';
  const title = document.getElementById('fb-review-title')?.value.trim() || 'Exceptional Quality Saree';
  const quote = document.getElementById('fb-review-comment')?.value.trim() || '';
  const rating = parseInt(document.getElementById('feedback-star-value')?.value || '5', 10);

  const videoUrl = document.getElementById('fb-video-url')?.value.trim() || '';
  const poster = document.getElementById('fb-video-poster')?.value.trim() || 'assets/images/hero-saree.jpg';
  const photo = document.getElementById('fb-story-photo')?.value.trim() || 'assets/images/hero-saree.jpg';
  const occasion = document.getElementById('fb-occasion-name')?.value.trim() || '';

  const newFeedback = {
    id: 'fb-user-' + Date.now(),
    type: type,
    customerName: name,
    location: location,
    sareePurchased: saree,
    rating: rating,
    title: title,
    quote: quote,
    verified: 'Verified Customer',
    isUserSubmitted: true,
    date: 'Just Now'
  };

  if (type === 'video') {
    newFeedback.videoUrl = videoUrl || 'https://www.youtube.com/embed/oH8tSjSnpdU';
    newFeedback.poster = poster;
  } else if (type === 'story') {
    newFeedback.photo = photo;
    newFeedback.occasion = occasion || 'Special Celebration';
  }

  // Prepend to stored feedback
  let currentList = getStoredFeedback();
  if (!Array.isArray(currentList)) currentList = [...INITIAL_FEEDBACK];
  currentList.unshift(newFeedback);
  saveFeedbackToStorage(currentList);

  // Close modal and reset form
  closeWriteFeedbackModal();
  document.getElementById('customer-feedback-form')?.reset();
  const previewWrap = document.getElementById('story-photo-preview-wrap');
  if (previewWrap) previewWrap.style.display = 'none';

  // Render and toast
  renderCustomerFeedback('all');
  showToast('🎉 Thank you! Your review has been published on Sri Boutique.');
}

// Send Feedback Directly to WhatsApp
function submitFeedbackViaWhatsApp() {
  const type = document.getElementById('feedback-type-value')?.value || 'feedback';
  const name = document.getElementById('fb-cust-name')?.value.trim() || '';
  const location = document.getElementById('fb-cust-location')?.value.trim() || '';
  const saree = document.getElementById('fb-saree-bought')?.value.trim() || '';
  const title = document.getElementById('fb-review-title')?.value.trim() || '';
  const quote = document.getElementById('fb-review-comment')?.value.trim() || '';
  const rating = document.getElementById('feedback-star-value')?.value || '5';
  const videoUrl = document.getElementById('fb-video-url')?.value.trim() || '';

  const stars = '⭐'.repeat(parseInt(rating, 10));

  let msg = `Namaste Sri Boutique! 🌺\nI would like to share my customer review:\n\n• *Name:* ${name || 'Customer'}\n• *Location:* ${location || 'Hosur'}\n• *Saree:* ${saree || 'Silk Saree'}\n• *Rating:* ${stars} (${rating}/5)\n• *Title:* ${title}\n• *Review:* ${quote}`;

  if (type === 'video' && videoUrl) {
    msg += `\n• *Video Link:* ${videoUrl}`;
  }

  const waUrl = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
  showToast('Opening WhatsApp with your review...');
}

// Play / Pause Feedback Video on click
function togglePlayVideo(wrapper) {
  const video = wrapper.querySelector('video');
  const overlay = wrapper.querySelector('.feedback-poster-overlay');
  if (!video) return;

  if (video.paused) {
    // Pause other playing videos
    document.querySelectorAll('.feedback-video-wrapper video').forEach(v => {
      if (v !== video && !v.paused) {
        v.pause();
        const otherOverlay = v.parentElement.querySelector('.feedback-poster-overlay');
        if (otherOverlay) otherOverlay.style.opacity = '1';
      }
    });

    video.play().then(() => {
      if (overlay) overlay.style.opacity = '0';
    }).catch(err => {
      console.log('Video play interrupted or muted required', err);
      video.muted = true;
      video.play();
      if (overlay) overlay.style.opacity = '0';
    });
  } else {
    video.pause();
    if (overlay) overlay.style.opacity = '1';
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Category tabs click
  document.addEventListener('click', (e) => {
    const tab = e.target.closest('.category-tab') || e.target.closest('.jump-chip');
    if (tab) {
      const cat = tab.dataset.category;
      if (cat) {
        AppState.activeCategory = cat;
        // update active classes
        document.querySelectorAll('.category-tab, .jump-chip').forEach(t => {
          if (t.dataset.category === cat) {
            t.classList.add('active');
          } else {
            t.classList.remove('active');
          }
        });
        renderProducts();
        
        // Scroll to catalog section if jump chip clicked
        if (tab.classList.contains('jump-chip')) {
          document.getElementById('collections-catalog')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  });

  // Search input live filter
  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        AppState.searchQuery = e.target.value;
        renderProducts();
      }, 200);
    });
  }

  // Price filter
  const priceSelect = document.getElementById('price-filter');
  if (priceSelect) {
    priceSelect.addEventListener('change', (e) => {
      AppState.priceFilter = e.target.value;
      renderProducts();
    });
  }

  // Sort select
  const sortSelect = document.getElementById('sort-filter');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
    // Close nav on link click
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => mainNav.classList.remove('open'));
    });
  }

  // Modal close button and overlay click
  const modalClose = document.getElementById('modal-close-btn');
  const modal = document.getElementById('quick-view-modal');
  if (modalClose) modalClose.addEventListener('click', closeQuickView);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeQuickView();
    });
  }

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeQuickView();
  });

  // Inquiry form submission via WhatsApp
  const inquiryForm = document.getElementById('contact-inquiry-form');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inquiry-name')?.value || '';
      const phone = document.getElementById('inquiry-phone')?.value || '';
      const category = document.getElementById('inquiry-category')?.value || 'General Inquiry';
      const msg = document.getElementById('inquiry-msg')?.value || '';

      const waText = 
`Hello Sri Boutique, Hosur! 🌺
I would like to inquire about saree collections:

• *Customer Name:* ${name}
• *Phone:* ${phone}
• *Interested In:* ${category}
• *Message:* ${msg}

Please connect with me.`;

      window.open(`https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`, '_blank');
      showToast('Opening WhatsApp with your inquiry...');
      inquiryForm.reset();
    });
  }
}

// Reset all filters
function resetAllFilters() {
  AppState.activeCategory = 'all';
  AppState.searchQuery = '';
  AppState.priceFilter = 'all';
  AppState.sortBy = 'featured';

  const searchInput = document.getElementById('product-search');
  if (searchInput) searchInput.value = '';

  const priceSelect = document.getElementById('price-filter');
  if (priceSelect) priceSelect.value = 'all';

  const sortSelect = document.getElementById('sort-filter');
  if (sortSelect) sortSelect.value = 'featured';

  document.querySelectorAll('.category-tab, .jump-chip').forEach(t => {
    if (t.dataset.category === 'all') {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  renderProducts();
  showToast('Filters cleared');
}

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Utility: escape HTML
function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
