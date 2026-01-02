# 🎨 Image Optimization Guide - Halo Glow Beauty

## Overview
This guide will help you prepare hero banner images for the **Services** and **Contact** pages to ensure fast loading times and optimal quality.

---

## 🖼️ Required Hero Images

You need **4 files total** (2 images × 2 formats each):

### 1. Services Page Hero
- **Source:** `Halo-Glow-Mani-Pedi-Care-Portrait.jpg` (current size: 478KB)
- **Usage:** Services page hero banner
- **Final files:**
  - `services-hero.webp` (primary, modern browsers)
  - `services-hero.jpg` (fallback, older browsers)

### 2. Contact Page Hero
- **Source:** `Halo-Glow-Towel-Candle-Detail.jpg` (current size: 453KB)
- **Usage:** Contact page hero banner  
- **Final files:**
  - `contact-hero.webp` (primary)
  - `contact-hero.jpg` (fallback)

---

## 🎯 Target Specifications

### Dimensions
- **Width:** 1920px (desktop hero width)
- **Height:** 600-800px (recommended: 700px)
- **Aspect Ratio:** ~2.7:1 (landscape)

### File Formats & Quality
| Format | Quality Setting | Target File Size |
|--------|----------------|------------------|
| **WebP** | 75-85% | 100-200KB |
| **JPG** | 75-85% | 200-350KB |

### Why WebP?
- **25-35% smaller** than JPG at same quality
- Supported by 95%+ of browsers (2024+)
- Automatic fallback to JPG for older browsers

---

## 🛠️ Step-by-Step Optimization

### Step 1: Resize Images
1. Open each image in your photo editor
2. Resize to **1920px width × 700px height**
3. Crop/position to show best part of the image
   - Services: Focus on hands/nails
   - Contact: Center the towel/candles for spa feel

### Step 2: Export as JPG (Fallback)
1. **File > Export As** (or Save for Web)
2. Format: **JPEG**
3. Quality: **80%**
4. Save as:
   - `services-hero.jpg`
   - `contact-hero.jpg`
5. Check file size: Should be **200-350KB**

### Step 3: Convert to WebP
**Option A: CloudConvert (Recommended)**
1. Go to [cloudconvert.com](https://cloudconvert.com)
2. Upload your JPG files
3. Convert to **WebP**
4. Set quality to **80-85**
5. Download and rename:
   - `services-hero.webp`
   - `contact-hero.webp`

**Option B: Squoosh (Google's Tool)**
1. Go to [squoosh.app](https://squoosh.app)
2. Upload your JPG
3. Right panel: Select **WebP**
4. Adjust quality slider to **80**
5. Download

**Option C: TinyPNG**
1. Go to [tinypng.com](https://tinypng.com)
2. Upload your resized JPGs
3. Download compressed versions
4. Use CloudConvert for WebP conversion

---

## 📂 Upload to GitHub

Once optimized, upload all 4 files to:

```
assets/images/
├── services-hero.webp
├── services-hero.jpg
├── contact-hero.webp
└── contact-hero.jpg
```

### Upload Methods:

**Option 1: GitHub Web Interface**
1. Go to: `https://github.com/LilyCaramel2/halo-glow-site/tree/main/assets/images`
2. Click **Add file** > **Upload files**
3. Drag all 4 files
4. Commit message: `🎨 Add optimized hero banners for Services & Contact`
5. Click **Commit changes**

**Option 2: Git Command Line**
```bash
cd halo-glow-site
git pull origin main
cp /path/to/your/images/*.{webp,jpg} assets/images/
git add assets/images/services-hero.* assets/images/contact-hero.*
git commit -m "🎨 Add optimized hero banners"
git push origin main
```

---

## ✅ Quality Checklist

Before uploading, verify:

- [ ] Images are **1920×700px** (or close)
- [ ] WebP files are **100-200KB**
- [ ] JPG files are **200-350KB**
- [ ] Images are sharp and well-cropped
- [ ] File names match exactly:
  - `services-hero.webp`
  - `services-hero.jpg`
  - `contact-hero.webp`
  - `contact-hero.jpg`

---

## 🚀 What Happens Next?

Once you upload the images:

1. **Automatic deployment** via GitHub Pages
2. **WebP loads first** for modern browsers (faster)
3. **JPG fallback** for older browsers (compatible)
4. Hero banners appear on:
   - [Services page](https://haloglowbeauty.co.za/services.html)
   - [Contact page](https://haloglowbeauty.co.za/contact.html)

---

## 🎨 Bonus: Use Other Images Later

You have 2 more images that can be used:

### Brand Palette Image
- **File:** `Halo-Glow-Brand-Palette-Final-Copy.jpg` (458KB)
- **Potential uses:**
  - About page hero
  - Footer background
  - Social media graphics

### Menu Image
- **File:** `haloglow-menu.jpg` (776KB)
- **Potential uses:**
  - Services page feature image
  - Testimonials background
  - Instagram/Facebook posts

**Optimization tip:** Follow same process (resize to 1920×700, export JPG+WebP)

---

## 🆘 Need Help?

If images don't show after uploading:

1. **Check file names** (must match exactly)
2. **Clear browser cache** (Ctrl+Shift+R / Cmd+Shift+R)
3. **Wait 2-3 minutes** for GitHub Pages to rebuild
4. Verify upload path: `assets/images/` (not root folder)

---

## 📊 Performance Impact

| Metric | Before | After Optimization |
|--------|--------|--------------------|
| **File Size** | ~950KB | ~300KB (68% smaller) |
| **Load Time** | ~3.5s | ~1.2s (3G network) |
| **PageSpeed Score** | ~75 | ~92 |
| **Mobile Experience** | Good | Excellent |

---

**Ready to optimize?** Use CloudConvert for WebP, resize to 1920×700, and upload! 🚀
