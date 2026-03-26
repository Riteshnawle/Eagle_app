# Photo Slides & Image Carousel Setup Guide

## Overview

Your ETIC website now has three carousel/gallery sections with professional photo slides:

1. **Hero Section Carousel** - Auto-rotating background slides (6s interval)
2. **Gallery Section** - Team/office photo showcase with multiple carousels
3. **Service Gallery** - Work/project demonstrations by service type

## Features

✨ **Carousel Capabilities**
- Auto-play with manual pause/resume controls
- Manual navigation with arrow buttons
- Dot indicators for quick slide access
- Smooth transitions with Framer Motion
- Responsive design for all devices
- Auto-play pause on hover
- Slide counter (current/total)

## Image URLs - How to Customize

All images currently use placeholder URLs from Unsplash. Replace them with your actual images:

### 1. Hero Section Slides

**File**: `src/components/Hero.tsx`

```typescript
const heroSlides = [
  {
    image: 'https://your-image-url-here.jpg', // Replace this
    title: 'Professional Workforce',
    subtitle: 'Skilled, dedicated professionals',
  },
  // ... more slides
]
```

**Steps to add your own:**
1. Replace `https://images.unsplash.com/...` with your image URLs
2. Update title/subtitle as needed
3. Add more slide objects to the array for additional slides

### 2. Gallery Section

**File**: `src/components/Gallery.tsx`

Three carousel arrays:
```typescript
const teamPhotos = [
  'https://your-team-photo-url.jpg',
  'https://your-team-photo-url.jpg',
  // Add 10+ photos for full effect
]

const workplacePhotos = [
  'https://your-office-photo.jpg',
  // Add 3+ photos
]

const officeCulturePhotos = [
  'https://your-culture-photo.jpg',
  // Add 3+ photos
]
```

### 3. Service Gallery

**File**: `src/components/ServiceGallery.tsx`

Three service-specific galleries:
```typescript
const skilledWorkPhotos = [...]  // Technical work
const industrialWorkPhotos = [...] // Factory/industrial
const projectPhotos = [...]         // Completed projects
```

## Where to Get Images

### Option 1: Use Stock Photos (Free/Paid)
- **Unsplash** (Free): unsplash.com
- **Pexels** (Free): pexels.com
- **Pixabay** (Free): pixabay.com
- **Shutterstock** (Paid): shutterstock.com
- **Getty Images** (Paid): gettyimages.com

Search terms:
- "Team collaboration"
- "Industrial facility"
- "Office workspace"
- "Factory work"
- "Professional team"

### Option 2: Upload Your Own Images
Upload images to your server/CDN and use their URLs:
```typescript
const heroSlides = [
  {
    image: 'https://your-domain.com/images/hero-slide-1.jpg',
    // ...
  }
]
```

### Option 3: Use a CDN Service
- **AWS CloudFront**
- **Cloudinary** (offers optimization)
- **ImageKit** (transformations & optimization)
- **Firebase Storage**

## Component Reference

### ImageCarousel Props

```typescript
interface CarouselProps {
  images: string[]              // Array of image URLs (REQUIRED)
  autoPlayInterval?: number      // Milliseconds (default: 4000)
  height?: string                // Tailwind height class (default: 'h-96')
  showDots?: boolean             // Show dot indicators (default: true)
  showArrows?: boolean           // Show nav arrows (default: true)
  title?: string                 // Section title
  description?: string           // Section subtitle
}
```

### Usage Example

```typescript
<ImageCarousel
  images={myPhotos}
  autoPlayInterval={5000}        // 5 seconds per slide
  height="h-[500px]"             // Custom height
  showDots={true}
  showArrows={true}
  title="Our Team"
  description="Meet the experts"
/>
```

## Quick Setup Checklist

- [ ] Gather your team/office photos
- [ ] Decide on image dimensions (aspect ratio 16:9 recommended)
- [ ] Upload images to a hosting service or CDN
- [ ] Copy image URLs
- [ ] Update `Hero.tsx` with hero slide images
- [ ] Update `Gallery.tsx` with team/office photos
- [ ] Update `ServiceGallery.tsx` with work/project photos
- [ ] Test carousel controls (dots, arrows, auto-play)
- [ ] Verify images load on mobile devices
- [ ] Optimize large images for web

## Image Optimization Tips

### Best Practices
- **Format**: Use WebP for modern browsers, JPEG as fallback
- **Size**: Keep file sizes under 500KB per image (ideally 100-300KB)
- **Dimensions**: 1200x600px minimum, 1600x900px for high-res
- **Aspect Ratio**: 16:9 works best for carousels
- **Compression**: Use TinyPNG, ImageOptim, or similar tools

### Tools for Optimization
- **TinyPNG/TinyJPG**: tinypng.com
- **ImageOptim**: imageoptim.com
- **Cloudinary**: cloudinary.com (auto-optimization)
- **ImageKit**: imagekit.io (smart optimization)

## Customizing Carousel Behavior

### Change Auto-play Speed

**Hero Section** - `src/components/Hero.tsx`:
```typescript
setCurrentSlide(prev => (prev + 1) % heroSlides.length)
// Change the interval: 6000 (6 seconds)
```

**Gallery Section** - `src/components/Gallery.tsx`:
```typescript
<ImageCarousel
  images={teamPhotos}
  autoPlayInterval={5000}  // Change this value
  // ...
/>
```

### Adjust Carousel Height

```typescript
<ImageCarousel
  height="h-80"      // Smaller
  // or
  height="h-[500px]" // Custom value
/>
```

### Hide Controls

```typescript
<ImageCarousel
  images={images}
  showDots={false}    // Hide dots
  showArrows={false}  // Hide arrows
  // Still has auto-play progress bar
/>
```

## Troubleshooting

### Images Not Loading
```
Issue: Images show as broken/missing
Solution: 
- Verify image URL is accessible
- Check CORS headers if from external CDN
- Test URL in browser directly
```

### Performance Issues
```
Issue: Carousel stutters or lags
Solution:
- Optimize image file sizes
- Use CDN for faster delivery
- Reduce image quality if needed
```

### Mobile Display
```
Issue: Images don't look right on mobile
Solution:
- Use responsive height classes
- Test on actual mobile devices
- Ensure aspect ratio is 16:9
```

## API Integration (Optional)

To load images dynamically from a backend:

```typescript
const [images, setImages] = useState<string[]>([])

useEffect(() => {
  // Fetch images from your API
  fetch('/api/images')
    .then(res => res.json())
    .then(data => setImages(data.imageUrls))
}, [])

return <ImageCarousel images={images} />
```

## Navigation Menu Links

New carousel sections are added to the navigation menu automatically:

- **Home** → #hero
- **Gallery** → #gallery (NEW - Team/Office photos)
- **Services** → #services (Now includes service photos)
- About → #about
- Clients → #clients
- Compliance → #compliance
- Contact → #contact

## File Structure

```
src/components/
├── ImageCarousel.tsx     # Reusable carousel component
├── Gallery.tsx          # Team & workplace gallery
├── ServiceGallery.tsx   # Services showcase with photos
├── Hero.tsx            # Updated with image carousel
└── ... (other components)
```

## Next Steps

1. **Gather Images**: Collect 10+ team/office photos
2. **Optimize**: Resize and compress for web
3. **Upload**: Host on CDN or your server
4. **Update URLs**: Replace placeholder URLs with your images
5. **Test**: Verify all carousels work smoothly
6. **Deploy**: Build and publish to production

## Support

For questions about:
- **Image optimization**: Check TinyPNG docs
- **CDN setup**: See platform-specific documentation
- **React/Framer Motion**: Refer to React and Framer Motion docs
- **Tailwind CSS**: Visit tailwindcss.com

---

**Remember**: Professional, high-quality images significantly impact your website's credibility. Invest time in selecting the best photos!
