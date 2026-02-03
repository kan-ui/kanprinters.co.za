# Sanity CMS Content Update Guide

This guide contains all the updated, bold, colorful copy for your Kan Printers website. Copy and paste these into Sanity Studio to update your site content.

---

## 📋 How to Update

1. Go to your Sanity Studio: `http://localhost:3333` (or your deployed studio URL)
2. Find each section listed below
3. Copy the content and paste it into the corresponding fields
4. **Publish** each document after updating

---

## 🎯 Section Content Updates

### 1. Services Section (`sectionContent` with `sectionId: "services"`)

**Pre-Title:** `Our Services`

**Title:** `Complete Printing & Branding Solutions`

**Description:**
```
Bold colors. Brilliant designs. Unforgettable impressions. We're not just printers—we're your creative partners in making brands come alive! With vibrant inks, cutting-edge technology, and a passion for perfection, we turn every project into a masterpiece. From dazzling screen prints that pop off the page to stunning digital graphics that wow your audience, we bring energy, excitement, and excellence to every job. Let's make your brand impossible to ignore!
```

---

### 2. Target Markets Section (`sectionContent` with `sectionId: "target-markets"`)

**Pre-Title:** `Who We Serve`

**Title:** `Serving Diverse Markets with Inclusivity`

**Description:**
```
Every brand deserves to shine in full color—and we make it happen! From Fortune 500 giants to local startups, from school events to community celebrations, we bring the same vibrant energy and top-tier quality to every project. No matter your size, budget, or vision, you're not just a client—you're a creative collaborator. Together, we'll design, print, and deliver products that burst with personality and make your brand unforgettable. Your story, your colors, your way—that's the Kan Printers promise!
```

---

### 3. Values Section (`sectionContent` with `sectionId: "values"`)

**Pre-Title:** `Our Values`

**Title:** `Brand Identity & Core Values`

**Description:**
```
For over two decades, we've painted Cape Town with vibrant colors, bold designs, and unforgettable brand experiences! Our reputation isn't just built on trust—it's built on passion, precision, and the pure joy of bringing your wildest creative visions to life. We're not just printers; we're color enthusiasts, design fanatics, and your partners in making every project a masterpiece. From corporate powerhouses to community celebrations, we bring the same electric energy and unwavering commitment to excellence. Quality that dazzles, service that wows, and results that make you proud—that's the Kan Printers way!
```

---

### 4. Future Vision Section (`sectionContent` with `sectionId: "future-vision"`)

**Pre-Title:** `Future Vision`

**Title:** `Where We're Headed`

**Description:**
```
The future is bursting with color—and Kan Printers is painting it! We're revolutionizing print with cutting-edge tech, eco-friendly inks that pop, and game-changing innovations that turn your wildest visions into reality. Imagine ordering online with a click, collaborating in our vibrant creative studio, and walking through a showroom where every wall screams possibility! We're not just keeping up—we're setting the pace. Bigger, bolder, brighter—that's our promise. The canvas is ready, and we're bringing the paint!
```

---

## 🎨 Core Printing Services (`benefitSection`)

If you have a `benefitSection` document with `title: "Core Printing Services"`, update the description:

**Description:**
```
Where timeless printing expertise meets cutting-edge innovation. We transform your vision into stunning reality—from bold screen prints that command attention to vibrant digital graphics that captivate. Whether you need 10 pieces or 10,000, we deliver exceptional results with unwavering precision and unmatched quality that elevates your brand.
```

### Service Descriptions (Update individual `service` documents):

#### 🎨 Design Service
**Description:**
```
Unleash your brand's true colors! Our creative wizards turn your wildest ideas into jaw-dropping visuals that stop people in their tracks. We don't just design—we craft visual experiences that make hearts race and wallets open. From logos that scream 'look at me!' to complete brand worlds that tell your story, we paint success in every pixel and stroke.
```

#### 🖌️ Screen Printing Service
**Description:**
```
Colors that pop, prints that last! Our screen printing magic delivers eye-popping vibrancy that stays brilliant wash after wash, year after year. Whether you're outfitting a team of 10 or launching a campaign of 10,000, every single piece gets the star treatment. Bold, beautiful, and built to impress—that's the Kan Printers promise!
```

#### 🔵 Pad Printing Service
**Description:**
```
Think it can't be printed? Challenge accepted! We're the masters of the impossible—turning pens, USB drives, key rings, and even the quirkiest shapes into branded masterpieces. Our precision pad printing conquers curves, angles, and surfaces that make others say 'no way.' Your brand, anywhere, beautifully!
```

#### 🌈 Digital Printing Service
**Description:**
```
Fast, furious, and absolutely fabulous! Watch your ideas explode into life with our lightning-fast digital printing. From vibrant vinyl stickers that grab attention to massive banners that dominate spaces, we deliver color-soaked, high-resolution magic at breakneck speed. Perfect for campaigns that can't wait and brands that demand the extraordinary!
```

---

## 📞 Contact Information (`contactInfo`)

Ensure you have a **Contact Information** document with:

**Address:**
- Unit: `Unit 14 Regency Park`
- Street: `6 Induland Crescent`
- Suburb: `Lansdowne`
- City: `Cape Town`
- Country: `South Africa`

**Phone:**
- Primary: `021 691 0170`
- Secondary: `021 691 0168`
- VOIP: `021 007 1004`, `087 701 2066`

**Email:** `kanprinters@mweb.co.za`

---

## 🔗 Social Media (`socialMedia`)

Ensure you have a **Social Media** document with:

- **Facebook:** `https://www.facebook.com/pages/Kan-Screenprinters/512399395488737`
- **TikTok:** `https://www.tiktok.com/@kanscreen`
- **LinkedIn:** `http://za.linkedin.com/pub/kan-printers/4a/b50/a0b`
- **WhatsApp:** `27216910170` (or full URL: `https://wa.me/27216910170`)

---

## ✅ Quick Checklist

- [ ] Services Section (`sectionContent` - `services`)
- [ ] Target Markets Section (`sectionContent` - `target-markets`)
- [ ] Values Section (`sectionContent` - `values`)
- [ ] Future Vision Section (`sectionContent` - `future-vision`)
- [ ] Core Printing Services (`benefitSection` or individual `service` documents)
- [ ] Contact Information (`contactInfo`)
- [ ] Social Media (`socialMedia`)

---

## 🚀 After Updating

1. **Publish** all documents you've updated
2. **Refresh** your website (hard refresh: Ctrl+F5 or Cmd+Shift+R)
3. The site should show the new bold, colorful copy!

---

## 📝 Notes

- If a section doesn't exist in Sanity, the website will use the fallback content (which is already updated in the code)
- You can create new `sectionContent` documents for any section that's missing
- Make sure `sectionId` matches exactly: `"services"`, `"target-markets"`, `"values"`, `"future-vision"`

---

**Need Help?** If you can't find a section in Sanity Studio, check the schema mapping in `SANITY_SCHEMAS_MAPPING.md`
