# Sri Boutique - Premium Indian Ethnic Saree Boutique Website
**Location:** Hosur, Tamil Nadu, India  
**Phone / WhatsApp:** +91 9566750694  
**Business Hours:** 9:00 AM to 7:00 PM (Monday – Sunday)

A mobile-friendly website designed specifically for **Sri Boutique** in Hosur, Tamil Nadu. Built with semantic HTML5, modern CSS3, and vanilla JavaScript.

---

## 🌟 Key Features

1. **Brand Aesthetic:** Warm cream background with royal maroon (`#6F0C22`) and antique zari gold accents (`#C59837`).
2. **11 Saree Collections (82 Handpicked Sarees):**
   - **Kanchipuram Silk** (8 collections)
   - **Banarasi Silk** (8 collections)
   - **Soft Silk** (8 collections)
   - **Cotton Sarees** (Chettinad, Coimbatore, Mangalagiri, Mulmul) (8 collections)
   - **Linen Sarees** (7 collections)
   - **Printed Sarees** (Ajrakh, Pichwai, Floral Satin) (7 collections)
   - **Georgette Sarees** (Lucknowi, Sequins, Mukaish) (7 collections)
   - **Chiffon Sarees** (Bemberg, Leheriya, Pearls) (7 collections)
   - **Designer Sarees** (Ready-to-wear, Ruffles, Capes) (7 collections)
   - **Party Wear Sarees** (7 collections)
   - **Bridal Sarees** (Muhurtham Pure Gold Zari, 2G Silk Mark) (8 collections)
3. **Instant WhatsApp Ordering:**
   - Every product has its own **"Order on WhatsApp"** button.
   - Automatically opens WhatsApp with a pre-formatted message including the saree name, product code, price, and link.
4. **Interactive Gallery:**
   - Real-time search by saree name, product code (e.g. `SB-KAN-101`), fabric, color, or occasion.
   - Price range filters (Under ₹3,000, ₹3,000 - ₹7,000, ₹7,000 - ₹15,000, Above ₹15,000).
   - Sort by Featured, Price (Low to High), Price (High to Low), and Name.
   - Quick View Modal with zoom preview, specifications table, and copy product code button.
   - Wishlist system saved in the browser (`localStorage`).
5. **Customer Feedback Review Videos:**
   - Video player cards showcasing customer unboxing, drape reviews, and wedding feedback.
6. **Mobile First & Responsive:**
   - Sticky call & WhatsApp bottom bar on mobile phones.
   - Fluid typography and responsive layout for smartphones, tablets, laptops, and 4K displays.
7. **Offline-Safe / Resilient Image Loading:**
   - Includes automatic SVG fallback generator if internet drops or an image fails to load.

---

## 📁 Project Structure

```
boutique/
│
├── index.html          # Main storefront for customers
├── manage.html         # Visual Saree Catalog Manager (Add, Edit price/photo, Delete)
├── README.md           # Documentation & instructions
│
├── css/
│   └── style.css       # Ethnic luxury theme styling
│
├── js/
│   ├── products.js     # Shop settings & saree database (82 sarees across 11 categories)
│   └── app.js          # Interactive search, filters, WhatsApp orders, modals
│
└── assets/
    └── images/
        └── logo.jpg    # Official Sri Sarees Boutique Logo
```

---

## 🔐 Saree Manager / Admin Panel Login

Access the management dashboard by clicking **"⚙️ Saree Manager"** at the top or footer of the website, or by opening `manage.html` directly in your browser.

- **Default Username:** `admin`
- **Default Password:** `sriboutique123`
- *Change Password:* Once logged in, click **"🔑 Change Password"** in the top-right corner to set a custom username and password.

### Admin Panel Capabilities:
1. **Saree Inventory Manager:**
   - Search by code, title, or category.
   - Click **"✏️ Edit"** on any saree to change photo (paste URL or upload image) and price.
   - Click **"➕ Add Saree"** to add new arrivals.
   - Click **"🗑️"** to remove any piece.
2. **Customer Feedback & Reviews Manager:**
   - View all customer reviews (Video Reviews, Drape Stories, and Customer Feedback).
   - Click **"➕ Add Review"** to manually post a customer review, video link, or wedding story.
   - Delete any review using the **"🗑️"** button.

---

## 🌟 Customer Feedback, Video Reviews & Drape Stories

Customers visiting the store can browse and submit reviews in three formats:
1. **📹 Video Reviews:** Upload or link customer drape videos (including YouTube Shorts and YouTube videos).
2. **📖 Customer Stories:** Share drape photos and wedding/festival occasion stories.
3. **💬 Share Feedback:** Quick star rating and review comments.

Customers can post reviews directly to the live website and optionally send a pre-filled review directly to Sri Boutique's WhatsApp (`+91 9566750694`).

---

### Method 2: Editing `js/products.js` Directly
Open `js/products.js` in any text editor (Notepad, VS Code, etc.).

#### 1. To Change Shop Phone or WhatsApp Number:
Edit lines 14–17 in `js/products.js`:
```javascript
const SHOP_CONFIG = {
  shopName: "Sri Boutique",
  phone: "9566750694",               // Your call phone number
  whatsappNumber: "919566750694",     // Country code (91) + 10-digit number
  displayPhone: "+91 9566750694",
  ...
```

#### 2. To Change a Saree Photo or Price:
Find the saree by its code (e.g. `SB-KAN-101`) and update `price`, `mrp`, or `image`:
```javascript
{
  id: "kan-101",
  code: "SB-KAN-101",
  name: "Royal Crimson Bridal Kanchipuram Pure Silk",
  price: 14500,     // <-- Change price here
  mrp: 18999,       // <-- Change original MRP here
  image: "https://your-new-image-url.jpg",  // <-- Change photo link here
  ...
}
```

#### 3. To Add a New Saree:
Copy any item block inside `INITIAL_PRODUCTS`, paste it, give it a unique `id` and `code` (e.g. `SB-KAN-109`), and fill in the details.

#### 4. To Delete a Saree:
Simply delete that item's `{ ... },` block from `INITIAL_PRODUCTS`.

---

## 🔍 Placeholders to Replace Before Launch

The website strictly uses the official details provided:
- **Shop Name:** Sri Boutique
- **City & State:** Hosur, Tamil Nadu, India
- **Phone Number:** 9566750694
- **Business Hours:** 9:00 AM to 7:00 PM

The following placeholder items are clearly flagged with `[Placeholder: ...]` so you can update them before public launch:
1. **Specific Street / Door Address:**
   - In `js/products.js` line 19 and in `index.html` section 8:
   - Currently set to: 
   - Update with your exact building name / door number in Hosur.
2. **Social Media Accounts:**
   - In `js/products.js` lines 23–26:
   - Instagram: `https://instagram.com/sriboutique_hosur`
   - Facebook: `https://facebook.com/sriboutiquehosur`
   - YouTube: `https://youtube.com/@sriboutiquehosur`
3. **Support Email:**
   - ` sriboutique.hosur@gmail.com`

---

## 🚀 How to Publish on GitHub Pages (Free Worldwide Hosting)

1. **Create a GitHub Repository:**
   - Go to [GitHub.com](https://github.com) and click **"New repository"**.
   - Name it `sri-boutique` (or `boutique`).
   - Leave it **Public** and click **Create repository**.

2. **Upload Your Website Files:**
   Open Git Bash or PowerShell in this folder (`c:\Users\Admin\Desktop\boutique`):
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Sri Boutique Hosur website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/sri-boutique.git
   git push -u origin main
   ```
   *(Or drag and drop all files and folders into the GitHub web interface).*

3. **Enable GitHub Pages:**
   - In your GitHub repository, click **Settings** (gear icon) → **Pages** (in left sidebar).
   - Under **Build and deployment** > **Branch**, select `main` and `/ (root)`.
   - Click **Save**.

4. **Your Live Website URL:**
   Within 1–2 minutes, your website will be live at:
   `https://<YOUR_GITHUB_USERNAME>.github.io/sri-boutique/`

---

## 💬 WhatsApp Integration Details

When a customer clicks **"Order on WhatsApp"** on any saree card or inside the Quick View modal, it triggers:
```
https://wa.me/919566750694?text=Namaste%20Sri%20Boutique!%20...
```
Pre-filled message includes:
- Saree Name
- Saree Product Code
- Saree Price in INR
- Saree Category & Fabric
- Saree Page Link

This allows the shop owner to instantly know which saree the customer wants, check physical stock in Hosur, and send payment details (UPI/GPay/PhonePe/Bank) and shipping confirmation.
