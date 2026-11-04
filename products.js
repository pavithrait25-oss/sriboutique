/**
 * Sri Boutique - Hosur, Tamil Nadu, India
 * Saree Catalog & Boutique Configuration
 * 
 * TO CHANGE SHOP PHONE NUMBER OR WHATSAPP NUMBER:
 * Simply edit the `whatsappNumber` and `phone` fields below.
 * 
 * TO CHANGE A SAREE PHOTO OR PRICE:
 * Locate the saree item below by its `id` or `code`, and update the `price` and `image` properties.
 */

const SHOP_CONFIG = {
  shopName: "Sri Boutique",
  tagline: "Heritage Silk & Designer Sarees",
  location: "Hosur, Tamil Nadu, India",
  phone: "9566750694",
  whatsappNumber: "919566750694", // Country code 91 + 10-digit number
  displayPhone: "+91 9566750694",
  businessHours: "9:00 AM - 7:00 PM (All 7 Days)",
  // PLACEHOLDER: Please replace with exact street address before public launch
  address: "Gandhi Salai, Near Old Bus Stand, Hosur - 635109, Tamil Nadu, India",
  googleMapsQuery: "Sri Boutique Hosur Tamil Nadu India",
  email: "sriboutique.hosur@gmail.com",
  socialLinks: {
    whatsapp: "https://wa.me/919566750694",
    instagram: "https://instagram.com/[Placeholder: sriboutique_hosur]",
    facebook: "https://facebook.com/[Placeholder: sriboutiquehosur]",
    youtube: "https://youtube.com/[Placeholder: sriboutiquehosur]"
  }
};

const CATEGORIES = [
  { id: "all", name: "All Collections", icon: "✨" },
  { id: "kanchipuram", name: "Kanchipuram Silk", icon: "👑" },
  { id: "banarasi", name: "Banarasi Silk", icon: "🪡" },
  { id: "soft-silk", name: "Soft Silk", icon: "🪷" },
  { id: "cotton", name: "Cotton Sarees", icon: "🌿" },
  { id: "linen", name: "Linen Sarees", icon: "🧵" },
  { id: "printed", name: "Printed Sarees", icon: "🎨" },
  { id: "georgette", name: "Georgette Sarees", icon: "🌺" },
  { id: "chiffon", name: "Chiffon Sarees", icon: "🪶" },
  { id: "designer", name: "Designer Sarees", icon: "💎" },
  { id: "party-wear", name: "Party Wear", icon: "✨" },
  { id: "bridal", name: "Bridal Sarees", icon: "👰" }
];

const INITIAL_PRODUCTS = [
  // ==========================================
  // 1. KANCHIPURAM SILK (8 COLLECTIONS)
  // ==========================================
  {
    id: "kan-101",
    code: "SB-KAN-101",
    name: "Royal Purple & Antique Gold Temple Kanchipuram Pure Silk",
    category: "kanchipuram",
    categoryName: "Kanchipuram Silk",
    price: 15800,
    mrp: 19999,
    image: "assets/images/hero-saree.jpg",
    color: "Royal Purple & Antique Gold",
    fabric: "Pure Mulberry Silk with Tested Temple Zari",
    blouse: "Attached Contrast Gold Brocade Blouse (0.85m)",
    badge: "Bestseller",
    occasion: "Bridal, Muhurtham & Grand Festivals",
    description: "Featured flagship pure Kanchipuram silk saree with majestic temple gopuram and mayil motifs handwoven in rich antique gold zari."
  },
  {
    id: "kan-102",
    code: "SB-KAN-102",
    name: "Emerald Green Korvai Kanchipuram Silk",
    category: "kanchipuram",
    categoryName: "Kanchipuram Silk",
    price: 13200,
    mrp: 16500,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    color: "Bottle Green & Ruby Red",
    fabric: "Handloom Pure Silk with Gold Zari",
    blouse: "Attached Contrast Red Blouse (0.85m)",
    badge: "Traditional",
    occasion: "Weddings & Festivals",
    description: "Classic Korvai interlocking border technique with rudraksham motifs along the borders and rich thazhampoo rekku pallu."
  },
  {
    id: "kan-103",
    code: "SB-KAN-103",
    name: "Sunlit Mustard Yellow & Maroon Kanjivaram",
    category: "kanchipuram",
    categoryName: "Kanchipuram Silk",
    price: 11800,
    mrp: 14999,
    image: "https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf?auto=format&fit=crop&w=800&q=80",
    color: "Mustard Gold & Maroon",
    fabric: "Pure Kanchi Silk",
    blouse: "Matching Maroon Brocade Blouse Piece",
    badge: "Auspicious",
    occasion: "Haldi & Seemantham",
    description: "Radiant golden-yellow body embellished with delicate floral jaal, paired with an elaborate maroon zari rich pallu."
  },
  {
    id: "kan-104",
    code: "SB-KAN-104",
    name: "Peacock Blue Dual Tone Kanchipuram Silk",
    category: "kanchipuram",
    categoryName: "Kanchipuram Silk",
    price: 12900,
    mrp: 16000,
    image: "https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?auto=format&fit=crop&w=800&q=80",
    color: "Peacock Blue & Magenta",
    fabric: "Pure Kanchipuram Silk",
    blouse: "Contrast Magenta Silk Blouse Piece",
    badge: "Trending",
    occasion: "Reception & Evening Events",
    description: "Mesmerizing dual-tone sheen woven with silver and gold zari checks, accented by a majestic magenta temple border."
  },
  {
    id: "kan-105",
    code: "SB-KAN-105",
    name: "Rani Pink Vaira Oosi Kanjivaram Silk",
    category: "kanchipuram",
    categoryName: "Kanchipuram Silk",
    price: 15800,
    mrp: 19500,
    image: "https://images.unsplash.com/photo-1679006831648-7c9ea12e5807?auto=format&fit=crop&w=800&q=80",
    color: "Rani Pink & Royal Purple",
    fabric: "Pure Handwoven Silk",
    blouse: "Embroidered Border Blouse Piece",
    badge: "Heritage",
    occasion: "Bridal Wear",
    description: "Prestigious Vaira Oosi (diamond needle) needlepoint thin zari stripes across vibrant rani pink body with solid antique zari border."
  },
  {
    id: "kan-106",
    code: "SB-KAN-106",
    name: "Pastel Lavender Tissue Kanchipuram Saree",
    category: "kanchipuram",
    categoryName: "Kanchipuram Silk",
    price: 13900,
    mrp: 17200,
    image: "https://images.unsplash.com/photo-1710967074868-2041e4f44c17?auto=format&fit=crop&w=800&q=80",
    color: "Pastel Lavender & Silver Zari",
    fabric: "Silk Tissue with Silver Zari",
    blouse: "Contrast Silver Tissue Blouse Piece",
    badge: "Modern Classic",
    occasion: "Reception & Sangeet",
    description: "Subtle, ethereal shimmer woven with fine silver metallic yarns and subtle pastel lavender silk. Very lightweight yet regal."
  },
  {
    id: "kan-107",
    code: "SB-KAN-107",
    name: "Deep Wine Maroon Traditional Kanchipuram",
    category: "kanchipuram",
    categoryName: "Kanchipuram Silk",
    price: 12400,
    mrp: 15400,
    image: "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?auto=format&fit=crop&w=800&q=80",
    color: "Deep Wine & Gold",
    fabric: "100% Pure Silk",
    blouse: "Contrast Antique Gold Blouse (0.8m)",
    badge: "Popular",
    occasion: "Family Weddings",
    description: "Rich wine shade with intricate chakram (wheel) and elephant motifs on the border, woven by seasoned Kanchi artisans."
  },
  {
    id: "kan-108",
    code: "SB-KAN-108",
    name: "Ivory White & Crimson Red Kanchi Muhurtham Silk",
    category: "kanchipuram",
    categoryName: "Kanchipuram Silk",
    price: 16500,
    mrp: 21000,
    image: "https://images.unsplash.com/photo-1739429942851-9083ee185d3d?auto=format&fit=crop&w=800&q=80",
    color: "Creamy Ivory & Crimson Red",
    fabric: "Pure Kanchi Silk with Certified Silk Mark",
    blouse: "Contrast Crimson Heavy Zari Blouse",
    badge: "Bridal Special",
    occasion: "Muhurtham Ceremony",
    description: "The timeless South Indian Muhurtham palette: untouched natural ivory silk contrasted with pure red korvai border and gold zari kalasam pallu."
  },

  // ==========================================
  // 2. BANARASI SILK (8 COLLECTIONS)
  // ==========================================
  {
    id: "ban-201",
    code: "SB-BAN-201",
    name: "Royal Red Katan Banarasi Silk Saree",
    category: "banarasi",
    categoryName: "Banarasi Silk",
    price: 12800,
    mrp: 16900,
    image: "https://images.unsplash.com/photo-1616756141603-6d37d5cde2a2?auto=format&fit=crop&w=800&q=80",
    color: "Scarlet Red & Antique Gold",
    fabric: "Pure Katan Silk with Kadwa Weave",
    blouse: "Running Silk Blouse with Zari Border",
    badge: "Bestseller",
    occasion: "Bridal & Grand Receptions",
    description: "Direct from Varanasi master weavers: opulent Kadwa floral jaal across scarlet pure Katan silk with intricate meenakari detailing."
  },
  {
    id: "ban-202",
    code: "SB-BAN-202",
    name: "Midnight Navy Blue Banarasi Brocade Saree",
    category: "banarasi",
    categoryName: "Banarasi Silk",
    price: 11500,
    mrp: 14800,
    image: "https://images.unsplash.com/photo-1692992193981-d3d92fabd9cb?auto=format&fit=crop&w=800&q=80",
    color: "Midnight Blue & Silver-Gold Zari",
    fabric: "Handwoven Banarasi Silk",
    blouse: "Matching Brocade Blouse Piece (0.8m)",
    badge: "Royal Pick",
    occasion: "Evening Gala & Cocktail",
    description: "Stately midnight blue silk adorned with delicate sonrupa (gold and silver zari) bootis and a majestic floral kalkan border."
  },
  {
    id: "ban-203",
    code: "SB-BAN-203",
    name: "Turquoise Green Banarasi Meenakari Silk",
    category: "banarasi",
    categoryName: "Banarasi Silk",
    price: 10900,
    mrp: 13900,
    image: "https://images.unsplash.com/photo-1761125135357-99cbe52a6271?auto=format&fit=crop&w=800&q=80",
    color: "Seafoam Turquoise & Multi Zari",
    fabric: "Pure Banarasi Silk",
    blouse: "Brocade Blouse Included",
    badge: "Exclusive",
    occasion: "Festive Poojas & Anniversaries",
    description: "Intricately hand-woven meenakari colored resham threads intertwined with gold zari vines across shimmering turquoise silk."
  },
  {
    id: "ban-204",
    code: "SB-BAN-204",
    name: "Pastel Peach Organza Banarasi Tissue Saree",
    category: "banarasi",
    categoryName: "Banarasi Silk",
    price: 9800,
    mrp: 12500,
    image: "https://images.unsplash.com/photo-1710967075806-327bc44da2cb?auto=format&fit=crop&w=800&q=80",
    color: "Soft Peach & Rose Gold",
    fabric: "Kora Organza Banarasi Silk",
    blouse: "Unstitched Raw Silk Blouse Piece",
    badge: "Lightweight Luxury",
    occasion: "Day Weddings & Sangeet",
    description: "Ultra-fine crisp organza silk drape woven with lightweight rose gold zari jaal. Airy, grand, and effortless to carry."
  },
  {
    id: "ban-205",
    code: "SB-BAN-205",
    name: "Ganga Jamuna Banarasi Dual Border Saree",
    category: "banarasi",
    categoryName: "Banarasi Silk",
    price: 11900,
    mrp: 15200,
    image: "https://images.unsplash.com/photo-1610189012906-4c0aa9b9781e?auto=format&fit=crop&w=800&q=80",
    color: "Mustard Body with Green & Maroon Borders",
    fabric: "Pure Banarasi Silk",
    blouse: "Contrast Dual Tone Blouse Piece",
    badge: "Handcrafted",
    occasion: "Festivals & Traditional Events",
    description: "Iconic Ganga-Jamuna dual colored selvedge border featuring green on one side and maroon on the other, surrounding warm mustard gold."
  },
  {
    id: "ban-206",
    code: "SB-BAN-206",
    name: "Fuchsia Pink Jangla Banarasi Silk",
    category: "banarasi",
    categoryName: "Banarasi Silk",
    price: 13500,
    mrp: 17500,
    image: "https://images.unsplash.com/photo-1676696706907-0e04665b80bd?auto=format&fit=crop&w=800&q=80",
    color: "Fuchsia Pink & Rich Gold",
    fabric: "High Density Pure Katan Silk",
    blouse: "Heavy Zari Blouse Piece Included",
    badge: "Bridal Choice",
    occasion: "Weddings & Receptions",
    description: "All-over heavy Jangla scrollwork floral pattern meticulously woven with pure gold zari. Drapes like royalty."
  },
  {
    id: "ban-207",
    code: "SB-BAN-207",
    name: "Champagne Gold Banarasi Tissue Silk Saree",
    category: "banarasi",
    categoryName: "Banarasi Silk",
    price: 14200,
    mrp: 18000,
    image: "https://images.unsplash.com/photo-1588140686379-1b76a52103dc?auto=format&fit=crop&w=800&q=80",
    color: "Champagne Shimmer Gold",
    fabric: "Pure Silk Tissue with Zari Warp",
    blouse: "Matching Brocade Tissue Blouse Piece",
    badge: "Celebrity Style",
    occasion: "Reception & Red Carpet",
    description: "Luminous champagne tissue saree woven with pure metallic zari threads creating an intoxicating molten gold aesthetic."
  },
  {
    id: "ban-208",
    code: "SB-BAN-208",
    name: "Deep Purple Shikargah Banarasi Silk",
    category: "banarasi",
    categoryName: "Banarasi Silk",
    price: 12600,
    mrp: 15900,
    image: "https://images.unsplash.com/photo-1702295406045-53302d8157dc?auto=format&fit=crop&w=800&q=80",
    color: "Aubergine Purple & Antique Gold",
    fabric: "Pure Banarasi Handloom Silk",
    blouse: "Running Silk Blouse with Shikargah Border",
    badge: "Collector Edition",
    occasion: "Special Occasions",
    description: "Features antique Shikargah hunting motifs of deer, peacocks, and foliage woven in antique muted gold zari across regal purple."
  },

  // ==========================================
  // 3. SOFT SILK (8 COLLECTIONS)
  // ==========================================
  {
    id: "sft-301",
    code: "SB-SFT-301",
    name: "Pastel Mint Green Butter Soft Silk Saree",
    category: "soft-silk",
    categoryName: "Soft Silk",
    price: 5200,
    mrp: 6800,
    image: "https://images.unsplash.com/photo-1609748340041-f5d61e061ebc?auto=format&fit=crop&w=800&q=80",
    color: "Mint Green & Rose Gold",
    fabric: "Mulberry Soft Silk",
    blouse: "Attached Contrast Pink Blouse (0.8m)",
    badge: "Bestseller",
    occasion: "Festive & Office Parties",
    description: "Featherlight, buttery soft silk with minimal rose-gold floral buttis and gentle drape that stays crisp all day."
  },
  {
    id: "sft-302",
    code: "SB-SFT-302",
    name: "Coral Peach & Silver Soft Silk Saree",
    category: "soft-silk",
    categoryName: "Soft Silk",
    price: 4800,
    mrp: 6200,
    image: "https://images.unsplash.com/photo-1610189013429-a703f4b245cf?auto=format&fit=crop&w=800&q=80",
    color: "Coral Peach & Soft Silver",
    fabric: "High Count Soft Silk",
    blouse: "Self Colored Blouse with Silver Border",
    badge: "Easy Drape",
    occasion: "Day Functions & Temple Visits",
    description: "Pleasant pastel coral shade that radiates elegance in natural sunlight. Soft touch against skin and crease-resistant."
  },
  {
    id: "sft-303",
    code: "SB-SFT-303",
    name: "Indigo Blue & Mustard Soft Silk Saree",
    category: "soft-silk",
    categoryName: "Soft Silk",
    price: 5500,
    mrp: 7000,
    image: "https://images.unsplash.com/photo-1697263021095-1b702c092026?auto=format&fit=crop&w=800&q=80",
    color: "Indigo Blue & Warm Mustard",
    fabric: "Pure Blended Soft Silk",
    blouse: "Contrast Mustard Yellow Blouse",
    badge: "Popular",
    occasion: "Festivals & Get-Togethers",
    description: "Striking color harmony with intricate geometric butties and a rich contrasting mustard pallu with tassels."
  },
  {
    id: "sft-304",
    code: "SB-SFT-304",
    name: "Maroon & Antique Copper Soft Silk Saree",
    category: "soft-silk",
    categoryName: "Soft Silk",
    price: 5900,
    mrp: 7500,
    image: "https://images.unsplash.com/photo-1563248712-0e46341652ca?auto=format&fit=crop&w=800&q=80",
    color: "Deep Maroon & Copper Zari",
    fabric: "Premium Soft Silk",
    blouse: "Copper Weave Blouse Included",
    badge: "Classic",
    occasion: "Evening Pujas & Weddings",
    description: "Features antique copper metallic zari that glistens warmly against deep crimson maroon silk."
  },
  {
    id: "sft-305",
    code: "SB-SFT-305",
    name: "Lilac Violet Feather Soft Silk Saree",
    category: "soft-silk",
    categoryName: "Soft Silk",
    price: 4950,
    mrp: 6400,
    image: "https://images.unsplash.com/photo-1621495619455-2869cd1d7a93?auto=format&fit=crop&w=800&q=80",
    color: "Lilac Violet & Silver",
    fabric: "Pure Soft Silk Weave",
    blouse: "Matching Blouse Piece",
    badge: "Pastel Love",
    occasion: "Engagements & Dinners",
    description: "Trendy pastel lilac shade with floral silver motifs, offering the grandeur of silk with the ease of chiffon."
  },
  {
    id: "sft-306",
    code: "SB-SFT-306",
    name: "Mustard Gold Traditional Soft Silk Saree",
    category: "soft-silk",
    categoryName: "Soft Silk",
    price: 5300,
    mrp: 6900,
    image: "https://images.unsplash.com/photo-1644523729338-f00c0b6ed5a4?auto=format&fit=crop&w=800&q=80",
    color: "Mustard Gold & Green Border",
    fabric: "High Grade Soft Silk",
    blouse: "Bottle Green Contrast Blouse",
    badge: "Festive Ready",
    occasion: "Varalakshmi Pooja & Diwali",
    description: "Traditional auspicious yellow adorned with temple border and fine zari pallu. Extremely comfortable for 8+ hour wear."
  },
  {
    id: "sft-307",
    code: "SB-SFT-307",
    name: "Bottle Green Peacock Feather Soft Silk",
    category: "soft-silk",
    categoryName: "Soft Silk",
    price: 5650,
    mrp: 7200,
    image: "https://images.unsplash.com/photo-1692982169530-1a3435ac9c51?auto=format&fit=crop&w=800&q=80",
    color: "Bottle Green & Pink",
    fabric: "Lustrous Soft Silk",
    blouse: "Pink Contrast Blouse Included",
    badge: "Trending",
    occasion: "Family Receptions",
    description: "Deep jungle green body with delicate peacock feather buttis and rich baby pink border with gold piping."
  },
  {
    id: "sft-308",
    code: "SB-SFT-308",
    name: "Teal Blue & Silver Shimmer Soft Silk Saree",
    category: "soft-silk",
    categoryName: "Soft Silk",
    price: 5400,
    mrp: 6950,
    image: "https://images.unsplash.com/photo-1565860045270-a41178237e0a?auto=format&fit=crop&w=800&q=80",
    color: "Teal Blue & Silver",
    fabric: "Soft Silk with Silver Zari",
    blouse: "Brocade Silver Blouse Piece",
    badge: "Top Rated",
    occasion: "Cocktails & Evening Parties",
    description: "Rich oceanic teal tone paired with elegant silver border. Drapes gracefully without stiff pleating."
  },

  // ==========================================
  // 4. COTTON SAREES (8 COLLECTIONS)
  // ==========================================
  {
    id: "cot-401",
    code: "SB-COT-401",
    name: "Chettinad Mustard Cotton Temple Border Saree",
    category: "cotton",
    categoryName: "Cotton Sarees",
    price: 2450,
    mrp: 3200,
    image: "https://images.unsplash.com/photo-1551688222-44d309c1284f?auto=format&fit=crop&w=800&q=80",
    color: "Mustard & Maroon Temple Border",
    fabric: "100% Pure Chettinad Handloom Cotton (80s count)",
    blouse: "Contrast Blouse Included (0.8m)",
    badge: "Tamil Nadu Handloom",
    occasion: "Daily Wear & Temple Visits",
    description: "Traditional Tamil Nadu Chettinad cotton woven with authentic thick thread border, auspicious colors, and breathable natural cotton."
  },
  {
    id: "cot-402",
    code: "SB-COT-402",
    name: "Coimbatore Sungudi Cotton Blue Saree",
    category: "cotton",
    categoryName: "Cotton Sarees",
    price: 1950,
    mrp: 2600,
    image: "https://images.unsplash.com/photo-1601214755690-918224082f8e?auto=format&fit=crop&w=800&q=80",
    color: "Royal Blue & White Dots",
    fabric: "Pure Madurai/Coimbatore Sungudi Cotton",
    blouse: "Running Blouse Piece",
    badge: "Heritage Craft",
    occasion: "Daily Office & Summer Wear",
    description: "Authentic tie-and-dye ring dots with traditional zari border. Softens with each wash, perfect for Hosur and tropical climates."
  },
  {
    id: "cot-403",
    code: "SB-COT-403",
    name: "Mangalagiri Pure Cotton Pattu Border Saree",
    category: "cotton",
    categoryName: "Cotton Sarees",
    price: 2800,
    mrp: 3600,
    image: "https://images.unsplash.com/photo-1762415796791-039fe54e36b1?auto=format&fit=crop&w=800&q=80",
    color: "Olive Green & Gold Nizam Border",
    fabric: "Fine Mangalagiri Cotton with Zari Border",
    blouse: "Attached Plain Blouse with Border",
    badge: "Pure Cotton",
    occasion: "Formal Meetings & Functions",
    description: "Woven with signature Nizam gold zari border on soft olive cotton body. Crisp, dignified, and effortlessly comfortable."
  },
  {
    id: "cot-404",
    code: "SB-COT-404",
    name: "Bengal Mulmul Soft Floral Cotton Saree",
    category: "cotton",
    categoryName: "Cotton Sarees",
    price: 1850,
    mrp: 2400,
    image: "https://images.unsplash.com/photo-1561053659-d615c7c0a9b8?auto=format&fit=crop&w=800&q=80",
    color: "Ivory White & Pastel Pink Florals",
    fabric: "Ultra Soft Bengal Mulmul Cotton (100s count)",
    blouse: "Printed Cotton Blouse Piece",
    badge: "Super Soft",
    occasion: "Everyday Elegance",
    description: "Cloud-soft muslin cotton printed with graceful vintage English botanicals. Ideal for summer heat and effortless draping."
  },
  {
    id: "cot-405",
    code: "SB-COT-405",
    name: "Kalamkari Handblock Print Cotton Saree",
    category: "cotton",
    categoryName: "Cotton Sarees",
    price: 2650,
    mrp: 3400,
    image: "https://images.unsplash.com/photo-1766159806734-1a93b039954f?auto=format&fit=crop&w=800&q=80",
    color: "Beige & Terracotta Red",
    fabric: "Natural Dyes Handblock Cotton",
    blouse: "Printed Kalamkari Blouse (0.85m)",
    badge: "Artisan Made",
    occasion: "Cultural Events & College Wear",
    description: "Hand block printed with vegetable dyes depicting traditional tree of life and mythological motifs on breathable rustic cotton."
  },
  {
    id: "cot-406",
    code: "SB-COT-406",
    name: "Ikat Pochampally Mercerised Cotton Saree",
    category: "cotton",
    categoryName: "Cotton Sarees",
    price: 2950,
    mrp: 3800,
    image: "https://images.unsplash.com/photo-1726981448126-c7fc9237cdb5?auto=format&fit=crop&w=800&q=80",
    color: "Black, Red & White Geometric",
    fabric: "Mercerised Double Ikat Cotton",
    blouse: "Contrast Red Ikat Blouse",
    badge: "Handloom",
    occasion: "Festive & Professional",
    description: "Distinctive double-ikat diamond checks tie-dyed before weaving. Rich color fastness with silky lustrous cotton finish."
  },
  {
    id: "cot-407",
    code: "SB-COT-407",
    name: "Chanderi Cotton Silk Pastel Saree",
    category: "cotton",
    categoryName: "Cotton Sarees",
    price: 3400,
    mrp: 4400,
    image: "https://images.unsplash.com/photo-1736568763905-49d82575d936?auto=format&fit=crop&w=800&q=80",
    color: "Pastel Lemon Yellow & Zari",
    fabric: "Chanderi Cotton Silk with Gold Buttis",
    blouse: "Contrast Brocade Blouse Piece",
    badge: "Semi-Formal",
    occasion: "Poojas & Small Gatherings",
    description: "The sheen of silk balanced with the lightness of cotton. Accented with subtle golden ashrafi buttis and zari border."
  },
  {
    id: "cot-408",
    code: "SB-COT-408",
    name: "Gadwal Cotton Rich Silk Border Saree",
    category: "cotton",
    categoryName: "Cotton Sarees",
    price: 3900,
    mrp: 4999,
    image: "https://images.unsplash.com/photo-1719324083356-43e7d63268e5?auto=format&fit=crop&w=800&q=80",
    color: "Off-White Body & Maroon Silk Border",
    fabric: "Fine Cotton Body with Pure Silk Zari Border",
    blouse: "Contrast Silk Blouse Included",
    badge: "Festive Pick",
    occasion: "Temple Festivals & Poojas",
    description: "Handcrafted Gadwal weaving: cool, lightweight cotton body with attached rich pure silk kuttu border and heavy pallu."
  },

  // ==========================================
  // 5. LINEN SAREES (7 COLLECTIONS)
  // ==========================================
  {
    id: "lin-501",
    code: "SB-LIN-501",
    name: "Pure 100 Count Organic Linen Saree with Silver Border",
    category: "linen",
    categoryName: "Linen Sarees",
    price: 3800,
    mrp: 4900,
    image: "https://images.unsplash.com/photo-1736568764358-03183c1a34aa?auto=format&fit=crop&w=800&q=80",
    color: "Natural Oatmeal Beige & Silver",
    fabric: "100% Pure Organic European Flax Linen",
    blouse: "Running Linen Blouse Piece",
    badge: "Eco Luxury",
    occasion: "Conferences & Sophisticated Daywear",
    description: "Crafted from fine 100 count pure flax linen yarn with a subtle woven silver zari selvedge. Breathable, textured, and deeply elegant."
  },
  {
    id: "lin-502",
    code: "SB-LIN-502",
    name: "Handcrafted Floral Embroidered Linen Saree",
    category: "linen",
    categoryName: "Linen Sarees",
    price: 4500,
    mrp: 5800,
    image: "https://images.unsplash.com/photo-1547702128-e8e44b310045?auto=format&fit=crop&w=800&q=80",
    color: "Dusty Rose Pink",
    fabric: "Pure Linen with Thread Embroidery",
    blouse: "Embroidered Blouse Piece (0.9m)",
    badge: "Bestseller",
    occasion: "Brunch & Daytime Celebrations",
    description: "Delicate Kashmiri threadwork blooming across dusty rose linen. Beautiful artisanal drape with matching tassels on pallu."
  },
  {
    id: "lin-503",
    code: "SB-LIN-503",
    name: "Sage Green Zari Check Pure Linen Saree",
    category: "linen",
    categoryName: "Linen Sarees",
    price: 3950,
    mrp: 5100,
    image: "https://images.unsplash.com/photo-1732381915285-953ce9832512?auto=format&fit=crop&w=800&q=80",
    color: "Sage Green & Dull Gold",
    fabric: "High Grade Linen with Zari Grid",
    blouse: "Matching Linen Blouse",
    badge: "Modern Ethnic",
    occasion: "Office Wear & Art Exhibitions",
    description: "Understated calm sage green infused with subtle micro zari windowpane checks. Crisp structure that falls with natural poise."
  },
  {
    id: "lin-504",
    code: "SB-LIN-504",
    name: "Mustard & Charcoal Handloom Linen Saree",
    category: "linen",
    categoryName: "Linen Sarees",
    price: 3600,
    mrp: 4700,
    image: "https://images.unsplash.com/photo-1732381917488-39f31539cd4f?auto=format&fit=crop&w=800&q=80",
    color: "Mustard Gold & Charcoal Grey",
    fabric: "Handspun Linen with Tassels",
    blouse: "Contrast Charcoal Blouse Piece",
    badge: "Contemporary",
    occasion: "Casual & Semi-Formal",
    description: "Bold contrasting colors with hand-tied fringe tassels along the pallu. Made for the modern woman who values organic textures."
  },
  {
    id: "lin-505",
    code: "SB-LIN-505",
    name: "Navy Blue Silver Zari Border Linen Saree",
    category: "linen",
    categoryName: "Linen Sarees",
    price: 4100,
    mrp: 5300,
    image: "https://images.unsplash.com/photo-1732381917604-bc8f046965ee?auto=format&fit=crop&w=800&q=80",
    color: "Deep Navy Blue & Silver",
    fabric: "100 Count Mercerized Linen",
    blouse: "Silver Sheen Linen Blouse",
    badge: "Trending",
    occasion: "Evening Gatherings",
    description: "Intense navy blue pure linen with a crisp silver zari border that adds just the right hint of glamour to a relaxed textile."
  },
  {
    id: "lin-506",
    code: "SB-LIN-506",
    name: "Peach Jamdani Weave Linen Saree",
    category: "linen",
    categoryName: "Linen Sarees",
    price: 4800,
    mrp: 6200,
    image: "https://images.unsplash.com/photo-1732381914274-07e58b4f6dce?auto=format&fit=crop&w=800&q=80",
    color: "Soft Peach & White Jamdani",
    fabric: "Linen Body with Hand-woven Jamdani",
    blouse: "Attached Contrast Blouse Piece",
    badge: "Handloom Gem",
    occasion: "Poojas & Festivals",
    description: "Authentic Jamdani shuttle-weave floral patterns floating gracefully over light peach linen. High artisanal value."
  },
  {
    id: "lin-507",
    code: "SB-LIN-507",
    name: "White & Gold Temple Pallu Linen Saree",
    category: "linen",
    categoryName: "Linen Sarees",
    price: 3750,
    mrp: 4850,
    image: "https://images.unsplash.com/photo-1732381916738-29ed5884c183?auto=format&fit=crop&w=800&q=80",
    color: "Kerala White & Muted Gold",
    fabric: "Pure Flax Linen",
    blouse: "Matching Linen Blouse with Gold Piping",
    badge: "Auspicious",
    occasion: "Onam, Pongal & Temple Visits",
    description: "Traditional South Indian white and gold Kasavu aesthetic reimagined on breathable luxury linen for all-day comfort."
  },

  // ==========================================
  // 6. PRINTED SAREES (7 COLLECTIONS)
  // ==========================================
  {
    id: "prt-601",
    code: "SB-PRT-601",
    name: "Digital Botanical Rose Silk Crepe Printed Saree",
    category: "printed",
    categoryName: "Printed Sarees",
    price: 2750,
    mrp: 3600,
    image: "https://images.unsplash.com/photo-1732381915250-f3cfaf6710a1?auto=format&fit=crop&w=800&q=80",
    color: "Blush Pink & English Florals",
    fabric: "Silk Crepe Satin",
    blouse: "Printed Matching Blouse Piece",
    badge: "Trending",
    occasion: "Kitty Parties & Social Gatherings",
    description: "Lush digital print featuring English peonies and watercolor roses on fluid crepe silk with sleek drape."
  },
  {
    id: "prt-602",
    code: "SB-PRT-602",
    name: "Pichwai Art Digital Print Soft Organza Saree",
    category: "printed",
    categoryName: "Printed Sarees",
    price: 3200,
    mrp: 4200,
    image: "https://images.unsplash.com/photo-1651132164857-b61aa4cf7472?auto=format&fit=crop&w=800&q=80",
    color: "Lotus Cream & Indigo Blue",
    fabric: "Soft Silk Organza",
    blouse: "Plain Satin Blouse Piece with Lace",
    badge: "Heritage Art",
    occasion: "Festive Occasions & Poojas",
    description: "Features traditional Rajasthan Pichwai motifs of sacred cows, blooming lotuses, and Krishna kadamb trees."
  },
  {
    id: "prt-603",
    code: "SB-PRT-603",
    name: "Ajrakh Geometric Block Printed Modal Silk Saree",
    category: "printed",
    categoryName: "Printed Sarees",
    price: 3600,
    mrp: 4700,
    image: "https://images.unsplash.com/photo-1651132133386-a64fbf794081?auto=format&fit=crop&w=800&q=80",
    color: "Indigo, Rust & Black",
    fabric: "Pure Modal Silk",
    blouse: "Coordinated Ajrakh Blouse",
    badge: "Craft Heritage",
    occasion: "Formal Occasions & Cultural Events",
    description: "Authentic Kutch Ajrakh 14-stage block printing with natural indigo and madder dyes on silky lustrous modal."
  },
  {
    id: "prt-604",
    code: "SB-PRT-604",
    name: "Abstract Watercolor Ombre Satin Silk Saree",
    category: "printed",
    categoryName: "Printed Sarees",
    price: 2850,
    mrp: 3700,
    image: "https://images.unsplash.com/photo-1732381914466-db00fbffa46b?auto=format&fit=crop&w=800&q=80",
    color: "Sunset Coral & Mango Orange",
    fabric: "Fluid Satin Silk",
    blouse: "Monochrome Coral Blouse Piece",
    badge: "Party Wear",
    occasion: "Cocktails & Evening Functions",
    description: "Gradated ombre wash blending from warm butter yellow into radiant coral pink with glossy liquid drape."
  },
  {
    id: "prt-605",
    code: "SB-PRT-605",
    name: "Bandhani Print Fusion Georgette Saree",
    category: "printed",
    categoryName: "Printed Sarees",
    price: 2400,
    mrp: 3100,
    image: "https://images.unsplash.com/photo-1732382255625-24e8547a23d9?auto=format&fit=crop&w=800&q=80",
    color: "Bright Yellow & Rani Pink Border",
    fabric: "Poly Georgette with Gotta Patti",
    blouse: "Gotta Lace Blouse Piece",
    badge: "Vibrant",
    occasion: "Haldi & Navratri",
    description: "All-over traditional Gujarati Bandhani speckle pattern highlighted by delicate gotta patti border."
  },
  {
    id: "prt-606",
    code: "SB-PRT-606",
    name: "Baroque Foil Print Black & Gold Saree",
    category: "printed",
    categoryName: "Printed Sarees",
    price: 3100,
    mrp: 4100,
    image: "https://images.unsplash.com/photo-1610030469668-8e9f641aaf27?auto=format&fit=crop&w=800&q=80",
    color: "Jet Black & Antique Gold Foil",
    fabric: "Heavy Lycra Silk Blend",
    blouse: "Black Velvet Blouse Piece",
    badge: "Evening Glam",
    occasion: "Farewells & Sangeet",
    description: "Metallic gold foil filigree damask patterns on midnight black. Catches party lighting beautifully."
  },
  {
    id: "prt-607",
    code: "SB-PRT-607",
    name: "Japanese Shibori Print Indigo Tussar Saree",
    category: "printed",
    categoryName: "Printed Sarees",
    price: 3450,
    mrp: 4500,
    image: "https://images.unsplash.com/photo-1787554497632-1727c23e58cb?auto=format&fit=crop&w=800&q=80",
    color: "Indigo & Off-White",
    fabric: "Raw Tussar Silk Blend",
    blouse: "Contrast Plain Indigo Blouse",
    badge: "Hand-Dyed",
    occasion: "Daytime Socials",
    description: "Dramatic diagonal accordion Shibori patterns created through manual clamping and indigo dyeing."
  },

  // ==========================================
  // 7. GEORGETTE SAREES (7 COLLECTIONS)
  // ==========================================
  {
    id: "geo-701",
    code: "SB-GEO-701",
    name: "Midnight Sequin Embellished Pure Georgette",
    category: "georgette",
    categoryName: "Georgette Sarees",
    price: 4900,
    mrp: 6500,
    image: "https://images.unsplash.com/photo-1619516388835-2b60acc4049e?auto=format&fit=crop&w=800&q=80",
    color: "Midnight Blue & Tone-on-Tone Sequins",
    fabric: "Viscose Pure Georgette (60gm)",
    blouse: "Heavy Sequined Designer Blouse (0.9m)",
    badge: "Bollywood Style",
    occasion: "Reception & Cocktail Night",
    description: "Micro-sequins hand-embroidered in linear stripes across 60gm viscose georgette for maximum movement and shimmer."
  },
  {
    id: "geo-702",
    code: "SB-GEO-702",
    name: "Emerald Green Chikankari Work Georgette Saree",
    category: "georgette",
    categoryName: "Georgette Sarees",
    price: 5200,
    mrp: 6900,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    color: "Emerald Green & White Resham",
    fabric: "Georgette with Lucknowi Chikankari",
    blouse: "Chikankari Worked Blouse Piece",
    badge: "Hand Embroidered",
    occasion: "Festive Poojas & Receptions",
    description: "Authentic Lucknowi Bakhiya and Phanda stitches accented with subtle mukaish silver badla dots."
  },
  {
    id: "geo-703",
    code: "SB-GEO-703",
    name: "Dusty Lavender Cutdana Border Georgette Saree",
    category: "georgette",
    categoryName: "Georgette Sarees",
    price: 4600,
    mrp: 6100,
    image: "https://images.unsplash.com/photo-1710967074868-2041e4f44c17?auto=format&fit=crop&w=800&q=80",
    color: "Dusty Lavender & Glass Cutdana",
    fabric: "Pure Viscose Georgette",
    blouse: "Heavy Cutdana Work Blouse",
    badge: "Trending",
    occasion: "Sangeet & Engagements",
    description: "Delicate lavender shade with a scalloped edge hand-finished with Japanese glass cutdana and pearl beads."
  },
  {
    id: "geo-704",
    code: "SB-GEO-704",
    name: "Ruby Red Gotta Patti Georgette Festive Saree",
    category: "georgette",
    categoryName: "Georgette Sarees",
    price: 4300,
    mrp: 5700,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    color: "Deep Ruby Red & Gold Gotta",
    fabric: "Flowy Pure Georgette",
    blouse: "Raw Silk Gotta Worked Blouse",
    badge: "Festive Favorite",
    occasion: "Karwa Chauth & Diwali",
    description: "Jaipur hand-stitched gotta patti flowers and dori borders on lightweight fiery ruby red georgette."
  },
  {
    id: "geo-705",
    code: "SB-GEO-705",
    name: "Powder Blue Mukaish Sparkle Georgette Saree",
    category: "georgette",
    categoryName: "Georgette Sarees",
    price: 3950,
    mrp: 5200,
    image: "https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?auto=format&fit=crop&w=800&q=80",
    color: "Powder Blue & Silver Badla",
    fabric: "Lightweight Georgette",
    blouse: "Matching Sparkle Blouse Piece",
    badge: "Subtle Glam",
    occasion: "Day Weddings & Dinners",
    description: "All-over hand hammered silver mukaish dots that sparkle like morning dew on sky blue fabric."
  },
  {
    id: "geo-706",
    code: "SB-GEO-706",
    name: "Maroon & Antique Zari Border Georgette Saree",
    category: "georgette",
    categoryName: "Georgette Sarees",
    price: 3700,
    mrp: 4900,
    image: "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?auto=format&fit=crop&w=800&q=80",
    color: "Maroon & Dull Antique Gold",
    fabric: "Poly Georgette with Zari Weave",
    blouse: "Brocade Blouse Included",
    badge: "Classic",
    occasion: "Family Events",
    description: "Rich maroon body balanced with traditional woven antique zari border. Easy to iron and drape."
  },
  {
    id: "geo-707",
    code: "SB-GEO-707",
    name: "Dual Shade Ombre Georgette Cocktail Saree",
    category: "georgette",
    categoryName: "Georgette Sarees",
    price: 4400,
    mrp: 5800,
    image: "https://images.unsplash.com/photo-1679006831648-7c9ea12e5807?auto=format&fit=crop&w=800&q=80",
    color: "Plum into Champagne Ombre",
    fabric: "Viscose Flow Georgette",
    blouse: "Designer Embroidered Blouse",
    badge: "Cocktail Pick",
    occasion: "Receptions & Farewell",
    description: "Dramatic horizontal dip-dye from light champagne waist down into deep wine plum pallu."
  },

  // ==========================================
  // 8. CHIFFON SAREES (7 COLLECTIONS)
  // ==========================================
  {
    id: "chf-801",
    code: "SB-CHF-801",
    name: "Pure Bemberg Chiffon Pastel Floral Saree",
    category: "chiffon",
    categoryName: "Chiffon Sarees",
    price: 3600,
    mrp: 4800,
    image: "https://images.unsplash.com/photo-1787220272461-2c53528c9349?auto=format&fit=crop&w=800&q=80",
    color: "Pastel Lemon & Pink Florals",
    fabric: "100% Pure Bemberg Chiffon",
    blouse: "Satin Silk Plain Blouse Piece",
    badge: "Feather Light",
    occasion: "High Tea & Summer Parties",
    description: "The epitome of weightless comfort: genuine imported Bemberg chiffon with hand-painted delicate watercolor blooms."
  },
  {
    id: "chf-802",
    code: "SB-CHF-802",
    name: "Classic Crimson Bollywood Plain Chiffon Saree",
    category: "chiffon",
    categoryName: "Chiffon Sarees",
    price: 2900,
    mrp: 3900,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    color: "True Scarlet Red",
    fabric: "Pure Silk Chiffon",
    blouse: "Heavy Sequin Work Red Blouse (0.9m)",
    badge: "Iconic",
    occasion: "Romantic Dinners & Receptions",
    description: "The timeless Yash Chopra Bollywood chiffon look: pure crimson red draped saree paired with a heavy sequin designer blouse."
  },
  {
    id: "chf-803",
    code: "SB-CHF-803",
    name: "Leheriya Tie-Dye Chiffon Saree with Zari Border",
    category: "chiffon",
    categoryName: "Chiffon Sarees",
    price: 3200,
    mrp: 4200,
    image: "https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf?auto=format&fit=crop&w=800&q=80",
    color: "Magenta & Orange Leheriya",
    fabric: "Pure Chiffon Hand-Dyed",
    blouse: "Contrast Silk Blouse Piece",
    badge: "Rajasthan Craft",
    occasion: "Teej, Gangaur & Festivals",
    description: "Authentic diagonal wave Leheriya dyed by traditional artisans in Rajasthan on airy, floating chiffon."
  },
  {
    id: "chf-804",
    code: "SB-CHF-804",
    name: "Ivory Pearl Border Chiffon Evening Saree",
    category: "chiffon",
    categoryName: "Chiffon Sarees",
    price: 3800,
    mrp: 5000,
    image: "https://images.unsplash.com/photo-1710967075806-327bc44da2cb?auto=format&fit=crop&w=800&q=80",
    color: "Ivory Cream & Hand-Stitched Pearls",
    fabric: "Premium Viscose Chiffon",
    blouse: "Pearl-Studded Raw Silk Blouse",
    badge: "Pure Grace",
    occasion: "Anniversaries & Gatherings",
    description: "Soft ivory drape lined with unbroken rows of dainty hand-stitched faux pearls. Quintessential old-money elegance."
  },
  {
    id: "chf-805",
    code: "SB-CHF-805",
    name: "Mint & Sea Green Ombre Shaded Chiffon Saree",
    category: "chiffon",
    categoryName: "Chiffon Sarees",
    price: 3100,
    mrp: 4100,
    image: "https://images.unsplash.com/photo-1609748340041-f5d61e061ebc?auto=format&fit=crop&w=800&q=80",
    color: "Mint Green into Ocean Teal",
    fabric: "High Grade Soft Chiffon",
    blouse: "Teal Satin Blouse Included",
    badge: "Cool Tones",
    occasion: "Daytime Festive",
    description: "Gentle dual color shading that flatters every silhouette. Ultra lightweight and requires zero effort to manage."
  },
  {
    id: "chf-806",
    code: "SB-CHF-806",
    name: "Dusk Mauve Scallop Border Chiffon Saree",
    category: "chiffon",
    categoryName: "Chiffon Sarees",
    price: 3450,
    mrp: 4600,
    image: "https://images.unsplash.com/photo-1621495619455-2869cd1d7a93?auto=format&fit=crop&w=800&q=80",
    color: "Dusk Mauve & Zari Scallop",
    fabric: "Pure Bemberg Chiffon",
    blouse: "Embroidered Mauve Blouse Piece",
    badge: "Trending",
    occasion: "Farewell & Dinners",
    description: "Contemporary laser-cut scalloped borders finished with micro zari embroidery along the entire length."
  },
  {
    id: "chf-807",
    code: "SB-CHF-807",
    name: "Golden Polka Dot Black Chiffon Saree",
    category: "chiffon",
    categoryName: "Chiffon Sarees",
    price: 3300,
    mrp: 4300,
    image: "https://images.unsplash.com/photo-1616756141603-6d37d5cde2a2?auto=format&fit=crop&w=800&q=80",
    color: "Midnight Black & Gold Foil Dots",
    fabric: "Fine Chiffon",
    blouse: "Black Jacquard Blouse Piece",
    badge: "Vintage Retro",
    occasion: "Evening Cocktail",
    description: "Retro charm redefined: scattered metallic golden polka dots across deep black floating chiffon."
  },

  // ==========================================
  // 9. DESIGNER SAREES (7 COLLECTIONS)
  // ==========================================
  {
    id: "des-901",
    code: "SB-DES-901",
    name: "Pre-Draped Ready-to-Wear Shimmer Lycra Saree",
    category: "designer",
    categoryName: "Designer Sarees",
    price: 6800,
    mrp: 8900,
    image: "https://images.unsplash.com/photo-1588140686379-1b76a52103dc?auto=format&fit=crop&w=800&q=80",
    color: "Champagne Metallic Shimmer",
    fabric: "Imported Stretch Metallic Lycra",
    blouse: "Fully Stitched Bustier Blouse (Size 34-40)",
    badge: "Ready to Wear",
    occasion: "Cocktail & Reception",
    description: "Zero pleating hassle! Pre-stitched saree with designer metallic belt and stitched crystal bustier. Slip on in 60 seconds."
  },
  {
    id: "des-902",
    code: "SB-DES-902",
    name: "Cape Sleeve Indo-Western Designer Saree",
    category: "designer",
    categoryName: "Designer Sarees",
    price: 7900,
    mrp: 10500,
    image: "https://images.unsplash.com/photo-1676696706907-0e04665b80bd?auto=format&fit=crop&w=800&q=80",
    color: "Royal Wine & Gold Zardozi",
    fabric: "Georgette with Floor-Length Organza Cape",
    blouse: "Zardozi Handwork Blouse + Cape",
    badge: "Runway Style",
    occasion: "Destination Weddings & Sangeet",
    description: "Features a dramatic floor-sweeping sheer organza cape embellished with floral zardozi bullion thread and crystals."
  },
  {
    id: "des-903",
    code: "SB-DES-903",
    name: "Tiered Ruffle Border Organza Designer Saree",
    category: "designer",
    categoryName: "Designer Sarees",
    price: 6200,
    mrp: 8200,
    image: "https://images.unsplash.com/photo-1710967074868-2041e4f44c17?auto=format&fit=crop&w=800&q=80",
    color: "Dusty Salmon & Micro Frills",
    fabric: "Korean Organza Silk",
    blouse: "Heavy Pearl Embroidered Blouse",
    badge: "Trending",
    occasion: "Day Weddings & Mehendi",
    description: "Triple-layer pleated ruffle hem along the skirt and pallu, creating volumetric drama with zero bulk."
  },
  {
    id: "des-904",
    code: "SB-DES-904",
    name: "Mirror & Mirror-Resham Cutwork Designer Saree",
    category: "designer",
    categoryName: "Designer Sarees",
    price: 7200,
    mrp: 9500,
    image: "https://images.unsplash.com/photo-1692992193981-d3d92fabd9cb?auto=format&fit=crop&w=800&q=80",
    color: "Mustard Ochre & Real Glass Mirrors",
    fabric: "Raw Silk Blend with Cutwork",
    blouse: "Matching Mirror Work Blouse Piece",
    badge: "Handcrafted",
    occasion: "Sangeet & Haldi Night",
    description: "Hundreds of real convex glass mirrors hand-anchored in resham thread embroidery with intricate scalloped cutwork edge."
  },
  {
    id: "des-905",
    code: "SB-DES-905",
    name: "Monochrome Feather Fringe Designer Saree",
    category: "designer",
    categoryName: "Designer Sarees",
    price: 7500,
    mrp: 9900,
    image: "https://images.unsplash.com/photo-1761125135357-99cbe52a6271?auto=format&fit=crop&w=800&q=80",
    color: "Charcoal Grey & Black Feathers",
    fabric: "Textured Satin Georgette",
    blouse: "Black Sequin Bustier Included",
    badge: "Glamorous",
    occasion: "Red Carpet & Gala",
    description: "Pallu edged with cascading soft ostrich feather accents and delicate crystal hangings. A true showstopper."
  },
  {
    id: "des-906",
    code: "SB-DES-906",
    name: "Emerald Corset Belt Fusion Silk Saree",
    category: "designer",
    categoryName: "Designer Sarees",
    price: 6900,
    mrp: 8900,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    color: "Emerald Green with Embroidered Belt",
    fabric: "Chanderi Silk Georgette",
    blouse: "Bustier with Detachable Waist Cinch Belt",
    badge: "Modern Fit",
    occasion: "Reception & Engagement",
    description: "Comes with an embroidered zari corset belt that snugs the waist and keeps the pallu securely pleated."
  },
  {
    id: "des-907",
    code: "SB-DES-907",
    name: "Crystal Drizzle Sheer Net Designer Saree",
    category: "designer",
    categoryName: "Designer Sarees",
    price: 8400,
    mrp: 11200,
    image: "https://images.unsplash.com/photo-1702295406045-53302d8157dc?auto=format&fit=crop&w=800&q=80",
    color: "Soft Ivory & Swarovski Crystal Dust",
    fabric: "French Tulle Net",
    blouse: "Heavy Hand Embroidered Raw Silk Blouse",
    badge: "Haute Couture",
    occasion: "Wedding Reception",
    description: "Ultra delicate French net draped with hand-set Swarovski crystals that catch light from every angle like a starlit night."
  },

  // ==========================================
  // 10. PARTY WEAR (7 COLLECTIONS)
  // ==========================================
  {
    id: "pty-1001",
    code: "SB-PTY-1001",
    name: "Glimmering Copper Rose Gold Party Wear Saree",
    category: "party-wear",
    categoryName: "Party Wear",
    price: 5800,
    mrp: 7600,
    image: "https://images.unsplash.com/photo-1563248712-0e46341652ca?auto=format&fit=crop&w=800&q=80",
    color: "Rose Gold & Copper Shimmer",
    fabric: "Lurex Metallic Tissue Silk",
    blouse: "Embellished Designer Blouse Piece",
    badge: "Bestseller",
    occasion: "Cocktail Dinners & Receptions",
    description: "Gleams with multi-dimensional metallic yarn. Fluid drape that hugs curves effortlessly without feeling heavy."
  },
  {
    id: "pty-1002",
    code: "SB-PTY-1002",
    name: "Midnight Black Diamond Cut Sequin Saree",
    category: "party-wear",
    categoryName: "Party Wear",
    price: 5400,
    mrp: 7100,
    image: "https://images.unsplash.com/photo-1610030469668-8e9f641aaf27?auto=format&fit=crop&w=800&q=80",
    color: "Jet Black & Holographic Sequins",
    fabric: "Fine Poly Georgette",
    blouse: "Velvet Sequin Worked Blouse Piece",
    badge: "Night Glam",
    occasion: "Parties & Music Nights",
    description: "Covered with 3mm matte and holographic sequins in geometric chevron stripes. Catches spotlights like diamonds."
  },
  {
    id: "pty-1003",
    code: "SB-PTY-1003",
    name: "Wine Burgundy Velvet Border Party Saree",
    category: "party-wear",
    categoryName: "Party Wear",
    price: 6100,
    mrp: 7900,
    image: "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?auto=format&fit=crop&w=800&q=80",
    color: "Burgundy Wine & Gold Zari",
    fabric: "Satin Silk with Micro Velvet Border",
    blouse: "Heavy Embroidered Velvet Blouse (0.85m)",
    badge: "Royal Feel",
    occasion: "Winter Receptions",
    description: "Sleek flowing satin body accented by rich micro velvet borders adorned with zardozi wirework."
  },
  {
    id: "pty-1004",
    code: "SB-PTY-1004",
    name: "Teal Turquoise Gotapatti Border Party Saree",
    category: "party-wear",
    categoryName: "Party Wear",
    price: 4950,
    mrp: 6400,
    image: "https://images.unsplash.com/photo-1565860045270-a41178237e0a?auto=format&fit=crop&w=800&q=80",
    color: "Teal Turquoise & Silver Gotta",
    fabric: "Viscose Chiffon Blend",
    blouse: "Contrast Brocade Blouse Piece",
    badge: "Vibrant",
    occasion: "Sangeet & Festive Nights",
    description: "Electrifying teal color with hand-stitched silver gotta border and handcrafted pom-pom tassels on the pallu."
  },
  {
    id: "pty-1005",
    code: "SB-PTY-1005",
    name: "Blush Pink Mirror Sprinkled Party Saree",
    category: "party-wear",
    categoryName: "Party Wear",
    price: 5200,
    mrp: 6800,
    image: "https://images.unsplash.com/photo-1710967074868-2041e4f44c17?auto=format&fit=crop&w=800&q=80",
    color: "Blush Baby Pink & Silver Foils",
    fabric: "Georgette Silk",
    blouse: "Heavy Mirror Work Blouse Included",
    badge: "Pastel Chic",
    occasion: "Day Weddings & Engagements",
    description: "Soft romantic pink hue scattered with mini foiled mirrors that twinkle softly in candlelight or sunshine."
  },
  {
    id: "pty-1006",
    code: "SB-PTY-1006",
    name: "Royal Purple Shimmer Organza Party Saree",
    category: "party-wear",
    categoryName: "Party Wear",
    price: 5600,
    mrp: 7300,
    image: "https://images.unsplash.com/photo-1679006831648-7c9ea12e5807?auto=format&fit=crop&w=800&q=80",
    color: "Regal Purple & Gold Buttas",
    fabric: "Metallic Glass Organza",
    blouse: "Gold Brocade Blouse Piece",
    badge: "Statement Piece",
    occasion: "Wedding Receptions",
    description: "Crisp architectural organza with a golden metallic sheen that gives an ultra-luxurious, modern silhouette."
  },
  {
    id: "pty-1007",
    code: "SB-PTY-1007",
    name: "Sunburst Yellow Festive Mirror Party Saree",
    category: "party-wear",
    categoryName: "Party Wear",
    price: 4750,
    mrp: 6200,
    image: "https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf?auto=format&fit=crop&w=800&q=80",
    color: "Marigold Yellow & Silver Zari",
    fabric: "Soft Silk Georgette Blend",
    blouse: "Contrast Pink Embroidered Blouse",
    badge: "Festive Ready",
    occasion: "Haldi & Dandiya Nights",
    description: "Radiant sunny hue crafted for joyful celebrations, with festive mirror borders and joyful contrast color accents."
  },

  // ==========================================
  // 11. BRIDAL SAREES (8 COLLECTIONS)
  // ==========================================
  {
    id: "bri-1101",
    code: "SB-BRI-1101",
    name: "Grand Muhurtham Pure Gold Zari Kanchipuram Bridal Silk",
    category: "bridal",
    categoryName: "Bridal Sarees",
    price: 24500,
    mrp: 31000,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    color: "Sindoor Red & 2G Pure Gold Zari",
    fabric: "Certified Silk Mark Pure Kanchipuram Silk",
    blouse: "Heavy Hand Embroidered Aari Work Blouse Piece (1m)",
    badge: "Masterpiece",
    occasion: "Muhurtham & Wedding Ceremony",
    description: "The crown jewel of Sri Boutique: woven with pure 2-ply twisted silk and tested silver-gold zari depicting Goddess Lakshmi and Mayil peafowls."
  },
  {
    id: "bri-1102",
    code: "SB-BRI-1102",
    name: "Rani Pink & Forest Green Korvai Bridal Silk",
    category: "bridal",
    categoryName: "Bridal Sarees",
    price: 19800,
    mrp: 25500,
    image: "https://images.unsplash.com/photo-1679006831648-7c9ea12e5807?auto=format&fit=crop&w=800&q=80",
    color: "Rani Pink & Forest Green",
    fabric: "Pure Handloom Silk with Pure Zari",
    blouse: "Contrast Forest Green Brocade Blouse Piece",
    badge: "Heritage Bridal",
    occasion: "Wedding Reception & Muhurtham",
    description: "Timeless Korvai interlocking technique with grand elephant and lion (Yali) motifs on the heavy 18-inch border."
  },
  {
    id: "bri-1103",
    code: "SB-BRI-1103",
    name: "Heritage Banarasi Kadwa Bridal Red Silk",
    category: "bridal",
    categoryName: "Bridal Sarees",
    price: 18500,
    mrp: 23900,
    image: "https://images.unsplash.com/photo-1616756141603-6d37d5cde2a2?auto=format&fit=crop&w=800&q=80",
    color: "Deep Scarlet Red & Antique Gold",
    fabric: "Pure Katan Silk with Kadwa Floral Jaal",
    blouse: "Bespoke Zari Blouse Included",
    badge: "Varanasi Bridal",
    occasion: "Pheras & Wedding Ceremony",
    description: "Each floral motif is individually locked by hand using the ancient Kadwa technique, leaving zero loose threads on the reverse."
  },
  {
    id: "bri-1104",
    code: "SB-BRI-1104",
    name: "Pastel Rose Gold Tissue Bridal Kanjivaram",
    category: "bridal",
    categoryName: "Bridal Sarees",
    price: 21500,
    mrp: 27500,
    image: "https://images.unsplash.com/photo-1710967074868-2041e4f44c17?auto=format&fit=crop&w=800&q=80",
    color: "Rose Gold Shimmer Tissue",
    fabric: "Pure Silk Tissue with Real Zari",
    blouse: "Heavy Hand Embroidered Maggam Work Blouse (1m)",
    badge: "Modern Bride",
    occasion: "Reception & Sangeet",
    description: "The preferred choice of contemporary South Indian brides: full tissue body with warm rose gold luster and temple rekku pallu."
  },
  {
    id: "bri-1105",
    code: "SB-BRI-1105",
    name: "Sunlit Yellow & Crimson Red Traditional Bridal Silk",
    category: "bridal",
    categoryName: "Bridal Sarees",
    price: 17800,
    mrp: 22800,
    image: "https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf?auto=format&fit=crop&w=800&q=80",
    color: "Auspicious Haldi Yellow & Crimson",
    fabric: "Pure Kanchipuram Handloom Silk",
    blouse: "Crimson Red Zari Blouse Piece",
    badge: "Auspicious Pick",
    occasion: "Oonjal & Vrutham",
    description: "Deep spiritual significance with traditional kodi visiri (creeper vine) border and heavy rudraksha and thazhampoo motifs."
  },
  {
    id: "bri-1106",
    code: "SB-BRI-1106",
    name: "Peacock Blue & Magenta Heavy Brocade Bridal Saree",
    category: "bridal",
    categoryName: "Bridal Sarees",
    price: 22000,
    mrp: 28000,
    image: "https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?auto=format&fit=crop&w=800&q=80",
    color: "Peacock Neelambari Blue & Magenta",
    fabric: "Heavy Mulberry Silk with Pure Zari",
    blouse: "Contrast Magenta Heavy Pallu Blouse",
    badge: "Royal Choice",
    occasion: "Reception & Engagement",
    description: "Deep jewel tones interwoven with solid gold zari checks and an awe-inspiring 24-inch grand magenta pallu."
  },
  {
    id: "bri-1107",
    code: "SB-BRI-1107",
    name: "Ivory Cream & Antique Gold Temple Muhurtham Saree",
    category: "bridal",
    categoryName: "Bridal Sarees",
    price: 20500,
    mrp: 26500,
    image: "https://images.unsplash.com/photo-1739429942851-9083ee185d3d?auto=format&fit=crop&w=800&q=80",
    color: "Natural Ivory Cream & Antique Gold",
    fabric: "Pure Silk Mark Certified Kanchipuram Silk",
    blouse: "Ivory & Gold Zari Blouse Piece",
    badge: "Temple Heritage",
    occasion: "Muhurtham & Temple Wedding",
    description: "Pure, pristine ivory silk paired with intricate antique gold temple borders depicting dancing apsaras and gopurams."
  },
  {
    id: "bri-1108",
    code: "SB-BRI-1108",
    name: "Deep Maroon Zardozi Handwork Bridal Silk Saree",
    category: "bridal",
    categoryName: "Bridal Sarees",
    price: 23500,
    mrp: 29900,
    image: "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?auto=format&fit=crop&w=800&q=80",
    color: "Deep Maroon & French Wire Zardozi",
    fabric: "Pure Silk Body with Hand Embroidery Border",
    blouse: "Full Hand Embroidered Bridal Blouse (1m)",
    badge: "Bespoke Bridal",
    occasion: "Pheras & Grand Wedding",
    description: "Combines the richness of handwoven South Indian silk with the regal grandeur of North Indian zardozi and dabka hand embroidery."
  }
];

// Customer Feedback, Drape Stories & Video Reviews
const INITIAL_FEEDBACK = [
  {
    id: "fb-2",
    type: "story",
    customerName: "Sowmya & Karthik",
    location: "Hosur, Tamil Nadu",
    sareePurchased: "Bridal Muhurtham Pure Gold Zari (SB-BRI-1101)",
    rating: 5,
    title: "Our Wedding Muhurtham was Complete with Sri Boutique!",
    quote: "For our Muhurtham ceremony at Hosur, we wanted a genuine Silk Mark Certified saree. The Mayil motifs and 2G gold zari pallu caught all the stage lights. Everyone praised the royal color!",
    photo: "assets/images/hero-saree.jpg",
    occasion: "Wedding Muhurtham",
    verified: "Bride & Groom Verified",
    date: "Oct 2026"
  },
  {
    id: "fb-3",
    type: "video",
    customerName: "Ananya Venkatesh",
    location: "Bangalore (Near Hosur border)",
    sareePurchased: "Banarasi Kadwa Silk (SB-BAN-201)",
    rating: 5,
    title: "Ordered directly through WhatsApp, reached in 24 hours!",
    quote: "Sri Boutique shared a live WhatsApp video call showing the pleats and pallu in daylight. Ordered at 10 AM, and it arrived in Bangalore the very next afternoon. Beautiful packaging!",
    videoUrl: "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/04fd3d5f-99d7-476e-98a4-46c08518ffb3.mp4",
    poster: "https://images.unsplash.com/photo-1616756141603-6d37d5cde2a2?auto=format&fit=crop&w=800&q=80",
    verified: "Verified WhatsApp Buyer",
    date: "Sep 2026"
  },
  {
    id: "fb-4",
    type: "story",
    customerName: "Meenakshi Sundaram",
    location: "Bangalore, Karnataka",
    sareePurchased: "Royal Crimson Bridal Kanjivaram (SB-KAN-101)",
    rating: 5,
    title: "Felt Like Royalty on My Reception Evening",
    quote: "We drove down from Electronic City to Sri Boutique in Hosur after hearing recommendations from family. The saree drape was so graceful and comfortable even after 6 hours on stage.",
    photo: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    occasion: "Reception & Sangeet",
    verified: "Verified Buyer",
    date: "Aug 2026"
  },
  {
    id: "fb-5",
    type: "feedback",
    customerName: "Divya Sundaram",
    location: "Chennai, Tamil Nadu",
    sareePurchased: "Pastel Soft Silk Saree (SB-SFT-301)",
    rating: 5,
    title: "Featherlight soft silk, drape stayed intact all day",
    quote: "The mint green soft silk saree is unbelievably lightweight. I wore it for 9 hours straight during a family reception and felt so comfortable. The color in real life is even more radiant than photos!",
    photo: "https://images.unsplash.com/photo-1609748340041-f5d61e061ebc?auto=format&fit=crop&w=800&q=80",
    verified: "Verified Festive Buyer",
    date: "Sep 2026"
  },
  {
    id: "fb-6",
    type: "feedback",
    customerName: "Kavitha Murugan",
    location: "Salem, Tamil Nadu",
    sareePurchased: "Chettinad Handloom Cotton (SB-COT-401)",
    rating: 5,
    title: "True 80s count handloom cotton at honest price",
    quote: "Sri Boutique's cotton collection is authentic handloom. The weave is dense yet so breathable. We ordered 4 sarees for family pooja through their WhatsApp number 9566750694. Very humble and attentive service!",
    photo: "https://images.unsplash.com/photo-1551688222-44d309c1284f?auto=format&fit=crop&w=800&q=80",
    verified: "Repeat Customer",
    date: "Jul 2026"
  }
];

// Backwards compatibility alias
const FEEDBACK_VIDEOS = INITIAL_FEEDBACK;

// Helper functions for feedback storage
function getStoredFeedback() {
  const stored = localStorage.getItem("sri_boutique_feedback");
  if (stored) {
    try {
      let parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Filter out legacy deleted fb-1 review if previously cached
        const filtered = parsed.filter(item => item.id !== 'fb-1');
        if (filtered.length !== parsed.length) {
          saveFeedbackToStorage(filtered);
          return filtered;
        }
        return parsed;
      }
    } catch (e) {
      console.warn("Could not parse stored feedback, falling back to initial", e);
    }
  }
  return INITIAL_FEEDBACK;
}

function saveFeedbackToStorage(feedbacks) {
  localStorage.setItem("sri_boutique_feedback", JSON.stringify(feedbacks));
}

function resetFeedbackToDefault() {
  localStorage.removeItem("sri_boutique_feedback");
  return INITIAL_FEEDBACK;
}

// Admin Credentials & Authentication Helpers
const DEFAULT_ADMIN = {
  username: "admin",
  password: "sriboutique123"
};

function getAdminCredentials() {
  const stored = localStorage.getItem("sri_boutique_admin_creds");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.warn("Error parsing admin credentials", e);
    }
  }
  return DEFAULT_ADMIN;
}

function saveAdminCredentials(username, password) {
  localStorage.setItem("sri_boutique_admin_creds", JSON.stringify({
    username: username.trim(),
    password: password.trim()
  }));
}

function verifyAdminLogin(username, password) {
  const creds = getAdminCredentials();
  return (
    username.trim().toLowerCase() === creds.username.trim().toLowerCase() &&
    password.trim() === creds.password.trim()
  );
}

// Helper functions for products storage and updates
function getStoredProducts() {
  const stored = localStorage.getItem("sri_boutique_products");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.warn("Could not parse stored products, falling back to initial", e);
    }
  }
  return INITIAL_PRODUCTS;
}

function saveProductsToStorage(products) {
  localStorage.setItem("sri_boutique_products", JSON.stringify(products));
}

function resetProductsToDefault() {
  localStorage.removeItem("sri_boutique_products");
  return INITIAL_PRODUCTS;
}
