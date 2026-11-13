/* ===================================================================
   SRI BOUTIQUE - Interactive Logic & Product Catalog
   =================================================================== */

// WhatsApp Boutique Contact Number
const BOUTIQUE_PHONE = "919566750694";

// Saree Products Catalog Data
// 4 categories with exactly 4 distinct sarees per category (total 16 sample products)
const sareeProducts = [
  // --- Category: Kanchipuram Silk Sarees (4 Sarees) ---
  {
    id: "ks-01",
    category: "kanchipuram",
    categoryLabel: "Kanchipuram Silk",
    name: "Multicolor Checkered Brocade Kanchipuram Silk",
    price: "₹18,500",
    samplePriceNote: "Sample Boutique Price",
    image: "images/kanchi-1.jpg",
    description: "Vibrant multicolored checkered pure mulberry silk adorned with intricate gold floral buttis and traditional grand golden brocade border.",
    weave: "Handloom Korvai Pure Silk",
    zari: "Antique Gold Tested Zari",
    length: "6.3 Meters with contrast matching blouse piece",
    occasion: "Muhurtham, Grand Weddings & Trousseau"
  },
  {
    id: "ks-02",
    category: "kanchipuram",
    categoryLabel: "Kanchipuram Silk",
    name: "Emerald Green Temple Border Kanchipuram",
    price: "₹16,900",
    samplePriceNote: "Sample Boutique Price",
    image: "images/kanchi-2.jpg",
    description: "Vibrant bottle green Kanchipuram silk featuring intricate paisley gold buttis and contrast magenta pink rich zari woven border.",
    weave: "Traditional Kanchipuram Handloom",
    zari: "Pure Gold Hue Zari",
    length: "6.3 Meters with unstitched blouse",
    occasion: "Bridal Receptions, Seemantham & Festivities"
  },
  {
    id: "ks-03",
    category: "kanchipuram",
    categoryLabel: "Kanchipuram Silk",
    name: "Imperial Royal Violet & Pink Kanchipuram Silk",
    price: "₹19,200",
    samplePriceNote: "Sample Boutique Price",
    image: "images/kanchi-3.jpg",
    description: "Regal dual-tone royal purple silk woven with exquisite golden mango motifs and an opulent baby pink brocade pallu.",
    weave: "Double Warp Pure Silk (Kanchi)",
    zari: "Authentic Zari Work",
    length: "6.3 Meters with contrast blouse piece",
    occasion: "Weddings, Engagements & Grand Anniversaries"
  },
  {
    id: "ks-04",
    category: "kanchipuram",
    categoryLabel: "Kanchipuram Silk",
    name: "Parrot Green Gold Brocade Kanchipuram Silk",
    price: "₹21,500",
    samplePriceNote: "Sample Boutique Price",
    image: "images/kanchi-4.jpg",
    description: "Luminous parrot green pure silk saree with heavy traditional golden peacock buttis and rich all-over woven bridal zari motifs.",
    weave: "Heavy Bridal Handloom Silk",
    zari: "Tested Gold Brocade Zari",
    length: "6.3 Meters with grand blouse piece",
    occasion: "Bridal Muhurtham & Sacred Temple Festivities"
  },

  // --- Category: Soft Silk Sarees (4 Sarees) ---
  {
    id: "ss-01",
    category: "soft-silk",
    categoryLabel: "Soft Silk",
    name: "Midnight Violet & Teal Contrast Soft Silk",
    price: "₹7,800",
    samplePriceNote: "Sample Boutique Price",
    image: "images/silk-1.jpg",
    description: "Featherlight pure soft silk in rich midnight purple with elegant gold motifs and contrast sea green teal zari pallu.",
    weave: "Soft Luster Mulberry Silk",
    zari: "Fine Matte Gold Zari",
    length: "6.25 Meters with contrast running blouse",
    occasion: "Festivals, Family Gatherings & Housewarmings"
  },
  {
    id: "ss-02",
    category: "soft-silk",
    categoryLabel: "Soft Silk",
    name: "Sea Green & Crimson Maroon Soft Silk",
    price: "₹6,950",
    samplePriceNote: "Sample Boutique Price",
    image: "images/silk-2.jpg",
    description: "Refreshing emerald turquoise soft silk highlighted with rich maroon pallu, ornate temple mandala zari, and effortless drape.",
    weave: "Lightweight Spun Soft Silk",
    zari: "Subtle Gold Metallic Zari",
    length: "6.25 Meters with designer blouse fabric",
    occasion: "Day Weddings, Puja & Elegant Celebrations"
  },
  {
    id: "ss-03",
    category: "soft-silk",
    categoryLabel: "Soft Silk",
    name: "Crimson Maroon & Sky Blue Dual Soft Silk",
    price: "₹8,400",
    samplePriceNote: "Sample Boutique Price",
    image: "images/silk-3.jpg",
    description: "Rich maroon soft silk saree featuring contemporary circular peacock zari buttis and contrast sky blue tassel pallu.",
    weave: "Artisanal Soft Silk",
    zari: "Champagne Gold Zari",
    length: "6.25 Meters with matching blouse",
    occasion: "Receptions, Diwali & Festive Occasions"
  },
  {
    id: "ss-04",
    category: "soft-silk",
    categoryLabel: "Soft Silk",
    name: "Plum Wine & Olive Lime Border Soft Silk",
    price: "₹8,900",
    samplePriceNote: "Sample Boutique Price",
    image: "images/silk-4.jpg",
    description: "Mesmerizing deep plum violet soft silk saree finished with intricate floral silver butis and elegant lime green gold borders.",
    weave: "Featherweight Soft Silk Weave",
    zari: "Antique Gold & Silver Zari",
    length: "6.25 Meters with contrast pallu blouse",
    occasion: "Boutique Parties & Sangeet Evenings"
  },

  // --- Category: Cotton Sarees (4 Sarees) ---
  {
    id: "cs-01",
    category: "cotton",
    categoryLabel: "Cotton Saree",
    name: "Cyan & Navy Checkered Handloom Cotton",
    price: "₹2,650",
    samplePriceNote: "Sample Boutique Price",
    image: "images/cotton-1.jpg",
    description: "Authentic Chettinad style pure cotton saree in bold dual blue checks with traditional gold zari borders and breathable drape.",
    weave: "100% Handloom Organic Cotton (80s Count)",
    zari: "Traditional Woven Zari Border",
    length: "6.2 Meters with running blouse piece",
    occasion: "Daily Office, Cultural Events & Summer Festivities"
  },
  {
    id: "cs-02",
    category: "cotton",
    categoryLabel: "Cotton Saree",
    name: "Mustard Gold & Bottle Green Border Cotton",
    price: "₹3,200",
    samplePriceNote: "Sample Boutique Price",
    image: "images/cotton-2.jpg",
    description: "Classic fine cotton in warm mustard yellow checks adorned with delicate emerald green temple zari borders.",
    weave: "Finest Handloom Cotton (100s Count)",
    zari: "Gentle Zari Temple Border",
    length: "6.2 Meters with contrast blouse piece",
    occasion: "Temple Visits, Teachers' Day & Formal Wear"
  },
  {
    id: "cs-03",
    category: "cotton",
    categoryLabel: "Cotton Saree",
    name: "Beige & Midnight Blue Peacock Cotton",
    price: "₹3,850",
    samplePriceNote: "Sample Boutique Price",
    image: "images/cotton-3.jpg",
    description: "Lightweight natural beige handloom cotton with rich navy blue contrast border adorned with regal golden peacock motifs.",
    weave: "Handloom Textured Cotton",
    zari: "Golden Thread Border",
    length: "6.25 Meters with attached blouse",
    occasion: "Festive Luncheons & Evening Gatherings"
  },
  {
    id: "cs-04",
    category: "cotton",
    categoryLabel: "Cotton Saree",
    name: "Berry Magenta & Royal Zari Border Cotton",
    price: "₹2,400",
    samplePriceNote: "Sample Boutique Price",
    image: "images/cotton-4.jpg",
    description: "Rich magenta pink pure cotton saree with broad traditional gold elephant zari border and green edging.",
    weave: "Pure Handloom Cotton",
    zari: "Woven Zari Border",
    length: "6.0 Meters with running blouse",
    occasion: "Traditions, Daily Elegance & Festivals"
  },

  // --- Category: Designer Sarees (4 Sarees) ---
  {
    id: "ds-01",
    category: "designer",
    categoryLabel: "Designer Saree",
    name: "Lilac Lavender Embroidered Organza Saree",
    price: "₹11,500",
    samplePriceNote: "Sample Boutique Price",
    image: "images/designer-1.jpg",
    description: "Sculpted lilac sheer organza designer saree featuring intricate scalloped cutwork borders, delicate resham embroidery, and tonal sequin motifs.",
    weave: "Pure Silk Organza & Tissue",
    zari: "Hand Embroidery & Cutwork",
    length: "5.8 Meters with heavy designer unstitched blouse",
    occasion: "Cocktail Dinners, Receptions & High Glamour"
  },
  {
    id: "ds-02",
    category: "designer",
    categoryLabel: "Designer Saree",
    name: "Champagne Gold Floral Sequin Net Designer",
    price: "₹12,800",
    samplePriceNote: "Sample Boutique Price",
    image: "images/designer-2.jpg",
    description: "Breathtaking champagne gold net saree drenched in all-over floral sequin embroidery and intricate threadwork with matching blouse.",
    weave: "Fine Embroidered Net & Georgette",
    zari: "Micro Sequin & Resham Work",
    length: "5.8 Meters with designer embroidered blouse piece",
    occasion: "Sangeet, Cocktail Evenings & Grand Receptions"
  },
  {
    id: "ds-03",
    category: "designer",
    categoryLabel: "Designer Saree",
    name: "Rose Gold Satin Silk Shimmer Designer",
    price: "₹10,500",
    samplePriceNote: "Sample Boutique Price",
    image: "images/designer-3.jpg",
    description: "Lustrous rose gold satin silk saree finished with delicately embroidered scalloped border, mirror accents, and designer pink blouse.",
    weave: "Lustrous Heavy Satin Silk",
    zari: "Scallop Embroidered Border",
    length: "6.0 Meters with designer blouse piece",
    occasion: "Weddings, Reception Parties & Festive Galas"
  },
  {
    id: "ds-04",
    category: "designer",
    categoryLabel: "Designer Saree",
    name: "Rose Gold Regal Draped Designer Saree",
    price: "₹13,900",
    samplePriceNote: "Sample Boutique Price",
    image: "images/designer-4.jpg",
    description: "Luminescent rose gold metallic satin silk statement saree hand-embellished with exquisite handcrafted borders and royal shimmer drape.",
    weave: "Pure Satin Silk Blend",
    zari: "Handcrafted Zari & Cutwork",
    length: "5.8 Meters with embroidered blouse fabric",
    occasion: "Boutique Fashion Shows & Grand Receptions"
  }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");
  setupNavigation();
  setupFilterTabs();
  setupHeaderScroll();
});

// Render Product Cards
function renderProducts(categoryFilter = "all") {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  const filtered = categoryFilter === "all" 
    ? sareeProducts 
    : sareeProducts.filter(p => p.category === categoryFilter);

  container.innerHTML = filtered.map(product => `
    <article class="product-card" data-category="${product.category}">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
        <span class="product-category-pill">${product.categoryLabel}</span>
        <span class="product-sample-tag">Sample Price</span>
      </div>
      <div class="product-details">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price-row">
          <span class="product-price">${product.price}</span>
          <span class="sample-badge">${product.samplePriceNote}</span>
        </div>
        <p class="product-desc">${product.description}</p>
        <div class="product-actions">
          <button class="btn-card-details" onclick="openProductModal('${product.id}')">
            <i class="fa-regular fa-eye"></i> View Details
          </button>
          <a href="${getWhatsAppEnquiryUrl(product)}" target="_blank" class="btn-card-wa" aria-label="WhatsApp Enquiry for ${product.name}">
            <i class="fa-brands fa-whatsapp"></i> Enquiry
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

// Generate Custom WhatsApp URL for Product
function getWhatsAppEnquiryUrl(product) {
  const text = `Hello Sri Boutique, I am interested in purchasing/enquiring about:
*Product:* ${product.name}
*Category:* ${product.categoryLabel}
*Sample Price:* ${product.price}
Could you please share more pictures, video call availability, and delivery options?`;
  return `https://wa.me/${BOUTIQUE_PHONE}?text=${encodeURIComponent(text)}`;
}

// Setup Filter Tabs
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-category");
      renderProducts(category);
    });
  });
}

// Filter from External Links (e.g. Collections section or Footer)
function filterShop(category) {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    if (tab.getAttribute("data-category") === category) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  renderProducts(category);

  // Smooth scroll down to shop gallery
  const shopSection = document.getElementById("shop");
  if (shopSection) {
    shopSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Open Product Modal
function openProductModal(productId) {
  const product = sareeProducts.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("productModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <div class="modal-content-grid">
      <div class="modal-image-box">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="modal-info-box">
        <span class="modal-category">${product.categoryLabel}</span>
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-price-row">
          <span class="modal-price">${product.price}</span>
          <span class="sample-badge">${product.samplePriceNote}</span>
        </div>
        <p class="modal-desc">${product.description}</p>
        
        <ul class="modal-spec-list">
          <li><i class="fa-solid fa-scroll"></i> <strong>Weave:</strong> ${product.weave}</li>
          <li><i class="fa-solid fa-wand-magic-sparkles"></i> <strong>Zari & Embellishment:</strong> ${product.zari}</li>
          <li><i class="fa-solid fa-ruler-combined"></i> <strong>Length:</strong> ${product.length}</li>
          <li><i class="fa-solid fa-champagne-glasses"></i> <strong>Ideal For:</strong> ${product.occasion}</li>
          <li><i class="fa-solid fa-certificate"></i> <strong>Purity Guarantee:</strong> Certified Authenticity Sri Boutique</li>
        </ul>

        <div class="modal-actions">
          <a href="${getWhatsAppEnquiryUrl(product)}" target="_blank" class="btn btn-wa-green btn-full">
            <i class="fa-brands fa-whatsapp"></i> Instant WhatsApp Enquiry
          </a>
          <a href="tel:+919566750694" class="btn btn-outline-gold btn-full">
            <i class="fa-solid fa-phone"></i> Call Boutique (+91 95667 50694)
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

// Close Product Modal
function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
  document.body.style.overflow = "";
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProductModal();
  }
});

// Setup Mobile Navigation & Smooth Scroll
function setupNavigation() {
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const drawerClose = document.getElementById("drawerClose");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  const openDrawer = () => {
    mobileDrawer.classList.add("active");
    drawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove("active");
    drawerOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (mobileToggle) mobileToggle.addEventListener("click", openDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  // Highlight active menu on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add("active");
        } else {
          navItem.classList.remove("active");
        }
      }
    });
  });
}

// Sticky Header Box Shadow
function setupHeaderScroll() {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Handle Contact Form Submission
function handleContactSubmit(event) {
  event.preventDefault();
  const form = document.getElementById("boutiqueContactForm");
  const alertBox = document.getElementById("formStatusAlert");

  const name = document.getElementById("contactName").value;
  const phone = document.getElementById("contactPhone").value;
  const category = document.getElementById("contactCategory").value;

  alertBox.className = "form-status-alert success";
  alertBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, <strong>${name}</strong>! Your inquiry for <strong>${category}</strong> has been received. Our Hosur boutique stylist will contact you at <strong>${phone}</strong> shortly.`;

  form.reset();
}

// Submit via WhatsApp Directly from Form
function submitViaWhatsApp() {
  const name = document.getElementById("contactName").value.trim();
  const phone = document.getElementById("contactPhone").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const category = document.getElementById("contactCategory").value;
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !phone) {
    alert("Please enter your Name and Phone Number before sending via WhatsApp.");
    return;
  }

  const text = `*New Customer Saree Enquiry - Sri Boutique*
*Name:* ${name}
*Phone:* ${phone}
${email ? `*Email:* ${email}\n` : ""}*Category of Interest:* ${category}
*Message:* ${message || "I would like to explore this collection with Sri Boutique."}
*Store:* Hosur, Tamil Nadu`;

  window.open(`https://wa.me/${BOUTIQUE_PHONE}?text=${encodeURIComponent(text)}`, "_blank");
}

// Set Star Rating for Customer Feedback Form
function setRating(rating) {
  const hiddenInput = document.getElementById("fbRatingVal");
  if (hiddenInput) hiddenInput.value = rating;

  const starBtns = document.querySelectorAll(".star-rating-picker .star-btn");
  starBtns.forEach(btn => {
    const starVal = parseInt(btn.getAttribute("data-rating"), 10);
    if (starVal <= rating) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const ratingStatusText = document.getElementById("ratingStatusText");
  if (ratingStatusText) {
    const labels = {
      1: "1.0 - Needs Improvement",
      2: "2.0 - Satisfactory",
      3: "3.0 - Good Experience",
      4: "4.0 - Wonderful Drape",
      5: "5.0 - Royal Experience!"
    };
    ratingStatusText.textContent = labels[rating] || `${rating}.0`;
  }
}

// Handle Customer Feedback Form Submission
function handleFeedbackSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("fbName").value.trim();
  const city = document.getElementById("fbCity").value.trim();
  const category = document.getElementById("fbCategory").value;
  const review = document.getElementById("fbReview").value.trim();
  const rating = parseInt(document.getElementById("fbRatingVal")?.value || "5", 10);
  const alertBox = document.getElementById("feedbackStatusAlert");

  if (!name || !review) return;

  // Dynamically add the submitted review to the reviews grid
  const reviewsGrid = document.getElementById("feedbackReviewsGrid");
  if (reviewsGrid) {
    const initials = name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2) || "SB";
    let starsHtml = "";
    for (let i = 0; i < 5; i++) {
      starsHtml += i < rating 
        ? '<i class="fa-solid fa-star"></i>' 
        : '<i class="fa-regular fa-star"></i>';
    }

    const newCard = document.createElement("div");
    newCard.className = "review-card";
    newCard.innerHTML = `
      <div class="review-stars">${starsHtml}</div>
      <p class="review-text">"${review}"</p>
      <div class="reviewer-meta">
        <div class="reviewer-avatar">${initials}</div>
        <div class="reviewer-info">
          <span class="reviewer-name">${name} (${city})</span>
          <span class="reviewer-badge"><i class="fa-solid fa-circle-check"></i> Verified Patron &bull; ${category}</span>
        </div>
      </div>
    `;

    reviewsGrid.insertBefore(newCard, reviewsGrid.firstChild);
  }

  if (alertBox) {
    alertBox.className = "form-status-alert success";
    alertBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you so much, <strong>${name}</strong>! Your valuable feedback has been received and added to our wall of patrons.`;
  }

  document.getElementById("customerFeedbackForm").reset();
  setRating(5);
}

// Submit Customer Feedback via WhatsApp
function submitFeedbackViaWhatsApp() {
  const name = document.getElementById("fbName").value.trim();
  const city = document.getElementById("fbCity").value.trim();
  const category = document.getElementById("fbCategory").value;
  const review = document.getElementById("fbReview").value.trim();
  const rating = document.getElementById("fbRatingVal")?.value || "5";

  if (!name || !review) {
    alert("Please enter your name and feedback review first.");
    return;
  }

  const starIcons = "⭐".repeat(parseInt(rating, 10));
  const text = `*Customer Saree Feedback - Sri Boutique*
*Name:* ${name}
*Location:* ${city || "Hosur / Online"}
*Category:* ${category}
*Rating:* ${starIcons} (${rating}/5)
*Review:* "${review}"`;

  window.open(`https://wa.me/${BOUTIQUE_PHONE}?text=${encodeURIComponent(text)}`, "_blank");
}
