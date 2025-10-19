# Quick Start Guide

## 🚀 Running the Website

### Development Server
```bash
# Start the development server
pnpm dev

# Open in browser
# Navigate to http://localhost:3000
```

### Build for Production
```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start
```

---

## 🎨 Customizing the Website

### 1. Update Brand Colors
**File**: `tailwind.config.ts`

```typescript
colors: {
  brand: {
    dark: "#1e3a8a",    // Change to your dark brand color
    base: "#1d4ed8",    // Your primary brand color
    light: "#5b7cfa",   // Lighter variant
    // ...
  }
}
```

### 2. Change Content & Messaging
**File**: `lib/content.ts`

Key sections to update:
- `heroContent` - Main headline and subheadline
- `valuePropositions` - Your value props
- `servicePackages` - Your service offerings
- `contactContent` - Contact info and CTAs

### 3. Update Statistics
**File**: `lib/stats.ts`

Customize:
- `competitiveStats` - Industry statistics
- `urgencyIndicators.slotsAvailable` - Available consultation slots
- `urgencyIndicators.companiesHelpedThisMonth` - Social proof number
- `fomoMessages` - Urgency messages in ticker

### 4. Adjust Urgency Level
**File**: `lib/stats.ts`

```typescript
export const urgencyIndicators = {
  slotsAvailable: 3,           // Lower = more urgency
  totalSlots: 5,
  companiesHelpedThisMonth: 8, // Higher = more social proof
  nextAvailability: "November 2025", // Closer date = more pressure
};
```

### 5. Modify Animations
**File**: `lib/animations.ts`

Adjust animation speeds:
```typescript
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,  // Increase for slower animations
      ease: "easeOut" 
    }
  }
};
```

---

## 🎯 Key Components to Know

### ScrollReveal
Triggers animations when elements scroll into view:
```tsx
<ScrollReveal animation="fadeInUp" delay={0.2}>
  <YourContent />
</ScrollReveal>
```

Animation types: `fadeInUp`, `fadeIn`, `scaleIn`, `slideInLeft`, `slideInRight`

### CountUp
Animates numbers:
```tsx
<CountUp end={73} suffix="%" />
```

### StatCard
Display statistics with emphasis:
```tsx
<StatCard
  value={73}
  suffix="%"
  label="of SMBs plan AI adoption"
  emphasis="urgency"  // or "success", "warning"
/>
```

---

## 📝 Content Update Checklist

When launching, update:

### Required
- [ ] Email address in `lib/content.ts` (contactContent)
- [ ] Calendly/booking link (contactContent.contactMethods)
- [ ] Company name (if not Rightword.AI)
- [ ] Available consultation slots (lib/stats.ts)
- [ ] LinkedIn/social links (footerLinks)

### Recommended
- [ ] Industry statistics (verify accuracy)
- [ ] Service packages (timing and deliverables)
- [ ] Urgency indicators (realistic numbers)
- [ ] FOMO messages (match your voice)

### Optional
- [ ] Brand colors to match your identity
- [ ] Add your logo (components/Logo.tsx)
- [ ] Adjust animation speeds
- [ ] Add/remove sections as needed

---

## 🎨 Design Tokens Quick Reference

### Colors
- `brand-base` - Primary brand color
- `urgency-amber` - Warning/urgency
- `urgency-red` - Critical urgency
- `success-base` - Positive outcomes

### Shadows
- `shadow-glow` - Subtle brand glow
- `shadow-glow-intense` - Strong emphasis
- `shadow-amber-glow` - Urgency glow
- `shadow-elevated` - Standard elevation

### Animations
- `animate-float` - Floating effect
- `animate-pulse-slow` - Slow pulse
- `animate-urgency-pulse` - Urgency indicator
- `animate-shimmer` - Shine effect

### Utility Classes
- `hover-lift` - Card lift on hover
- `text-gradient` - Brand gradient text
- `text-gradient-urgency` - Urgency gradient
- `glass` - Frosted glass effect

---

## 🔧 Common Customizations

### Change Hero Headline
**File**: `lib/content.ts`
```typescript
export const heroContent = {
  headline: "Your new headline here",
  subheadline: "Your new subheadline here",
  // ...
}
```

### Add New Section
**File**: `app/page.tsx`
```tsx
function YourNewSection() {
  return (
    <section className="section-container mt-28">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Your eyebrow"
          title="Your title"
          description="Your description"
        />
      </ScrollReveal>
      {/* Your content */}
    </section>
  );
}

// Add to main in order you want it:
<main className="flex-1 pb-24">
  <Hero />
  <YourNewSection />  {/* Add here */}
  <CompetitiveRealitySection />
  // ...
</main>
```

### Adjust Urgency Messaging Tone
**Files**: `lib/content.ts` and `lib/stats.ts`

Tone spectrum:
- **Aggressive**: "Your competitors are eating your market share"
- **Moderate**: "The gap widens every quarter"
- **Subtle**: "Companies are accelerating AI adoption"

Update `fomoMessages`, `heroContent`, and section copy to match desired tone.

### Disable Specific Animations
If any animation feels too much:

**In component file**, replace:
```tsx
<ScrollReveal animation="fadeInUp">
```

With static rendering:
```tsx
<div>  {/* No animation */}
```

---

## 📱 Testing Checklist

Before going live:

### Functionality
- [ ] All CTAs link correctly
- [ ] ROI calculator math is accurate
- [ ] Navigation scrolls to correct sections
- [ ] Contact form/links work
- [ ] Back to top button appears/works

### Design
- [ ] Animations are smooth (not janky)
- [ ] Colors match brand
- [ ] Text is readable on all backgrounds
- [ ] Hover states work on all interactive elements

### Responsive
- [ ] Test on mobile (portrait)
- [ ] Test on tablet
- [ ] Test on desktop (various widths)
- [ ] Touch targets are large enough on mobile

### Performance
- [ ] Page loads in < 3 seconds
- [ ] No console errors
- [ ] Animations don't cause lag
- [ ] Images are optimized

### Content
- [ ] All text is spell-checked
- [ ] Statistics are accurate
- [ ] Contact info is correct
- [ ] Links go to right destinations

---

## 🐛 Troubleshooting

### Animations not working
- Check browser console for errors
- Verify Framer Motion is installed: `pnpm install framer-motion`
- Ensure components are client-side: `"use client"` at top of file

### Styles not applying
- Restart dev server after Tailwind config changes
- Clear browser cache
- Check for typos in class names

### TypeScript errors
- Run: `pnpm build` to see all type errors
- Most common: Missing imports or wrong prop types

---

## 💡 Tips for Maximum Impact

1. **Update Numbers Regularly**: Keep statistics current
2. **Adjust Slot Availability**: Create real scarcity
3. **A/B Test Messages**: Try different FOMO angles
4. **Monitor Analytics**: See which sections convert
5. **Keep Content Fresh**: Update "companies helped this month"
6. **Match Reality**: Don't oversell, keep urgency authentic

---

## 📞 Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev

---

**Ready to go live? Run `pnpm dev` and view your new high-impact website! 🚀**

