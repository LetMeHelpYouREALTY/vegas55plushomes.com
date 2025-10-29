# V0 Design Prompts for Vegas 55 Plus Homes

## 1. Enhanced Contact Form with Real Estate Focus

```
Create a modern, accessible contact form component for a Las Vegas 55+ real estate website. The form should:

- Use React Hook Form with Zod validation (schema already created in lib/utils/form-validation.ts)
- Include fields: Name (required), Email (required), Phone (optional), Message (required), Community dropdown (optional, using/or lasVegasCommunities from lib/communities-data.ts)
- Show validation errors inline with helpful messages
- Have a clean, professional design matching real estate industry standards
- Include a submit button with loading state
- Use shadcn/ui components (Button component available)
- Include icons from lucide-react (Mail, Phone, MapPin, etc.)
- Have a success message after submission
- Be fully responsive and accessible
- Use Tailwind CSS classes matching the existing design system (card, border, bg-background, etc.)
- Feature a modern, clean aesthetic appropriate for active adult homebuyers

The form should integrate with the existing contact page layout which has a 2-column layout (form on left, contact info on right).
```

## 2. Advanced Home Search Filter Component

```
Create a modern, real estate-focused home search and filter component for a Las Vegas 55+ communities website. The component should:

- Include filters for: Community (dropdown from lasVegasCommunities), Price Range (min/max inputs), Bedrooms, Bathrooms, Square Footage
- Use shadcn/ui components for inputs and selects
- Have a clean, card-based layout with proper spacing
- Include a "Search" button with icon from lucide-react (Search icon)
- Display results count or "X homes found"
- Show active filters as removable chips/badges
- Have a "Clear Filters" option
- Be fully responsive (mobile-first design)
- Use Tailwind CSS matching existing design system
- Include helpful placeholder text and labels
- Have a modern, professional appearance suitable for real estate professionals and active adult homebuyers
- Consider accessibility with proper labels and keyboard navigation
```

## 3. Enhanced Hero Section with CTA

```
Create an engaging, conversion-focused hero section for a Las Vegas 55+ real estate agent website. The hero should:

- Feature a compelling headline about finding 55+ homes in Las Vegas
- Include a subheading with value proposition (e.g., "Award-winning buyer's representative for Del Webb Lake Las Vegas")
- Have two prominent CTA buttons: "Search Homes" (primary) and "Explore Communities" (secondary)
- Use shadcn/ui Button components (already in the codebase)
- Include subtle gradient background (from-blue-50 to-indigo-100, dark mode variants)
- Be fully responsive with proper mobile spacing
- Include hero image placeholder or background pattern
- Have proper contrast and accessibility
- Use Tailwind CSS classes matching existing design system
- Create urgency and trust with professional, clean design
- Feature smooth animations or subtle transitions

Should work within existing Next.js layout structure.
```

## 4. Modern Property Card Component

```
Create a beautiful, modern property/home listing card component for a real estate website. The card should:

- Display home image placeholder (aspect ratio 16:9)
- Show home address/location with MapPin icon
- Display key details: Price, Bedrooms, Bathrooms, Square Feet
- Include icons from lucide-react (Bed, Bath, Square, MapPin)
- Have a "View Details" button/link
- Show "New Listing" or "Featured" badge if applicable
- Use shadcn/ui components and existing design system
- Have hover effects (shadow, slight scale)
- Be fully responsive with proper spacing
- Use Tailwind CSS matching card styles (border, bg-card, rounded-lg, etc.)
- Include proper semantic HTML for accessibility
- Create visual hierarchy with typography and spacing
- Have a clean, professional design appropriate for luxury real estate
```

## 5. Enhanced Navigation with Mega Menu

```
Create a modern, accessible navigation component with dropdown menus for a real estate website. The navigation should:

- Include logo/brand name "Dr. Jan Duffy" on the left
- Feature main menu items: Communities (with dropdown), Homes For Sale, Guide, About, Blog, Contact
- Include a "Get Started" CTA button on the right
- Have a mobile hamburger menu that slides in
- Dropdown menus should show featured communities (from lasVegasCommunities filtered by featured)
- Use shadcn/ui components (Button, DropdownMenu components available)
- Include icons from lucide-react (Menu, X for mobile)
- Be sticky/fixed at top on scroll
- Have smooth transitions and animations
- Be fully responsive and mobile-friendly
- Use Tailwind CSS matching existing design system
- Include proper accessibility (keyboard navigation, ARIA labels)
- Have a clean, professional appearance matching real estate industry standards
```

## 6. Community Feature Card Grid

```
Create a beautiful grid of community feature cards for displaying Las Vegas 55+ communities. Each card should:

- Display community name and location
- Show key stats: Number of homes, Price range, Year built
- Include a brief description
- Have a "Learn More" button/link
- Display a community image placeholder
- Show "Featured" badge if applicable
- Use shadcn/ui components (Button, Card styles)
- Include icons from lucide-react (Home, MapPin, Users, etc.)
- Have hover effects with smooth transitions
- Be fully responsive (grid layout: 1 col mobile, 2-3 cols tablet/desktop)
- Use Tailwind CSS matching existing design system
- Create visual interest with proper spacing, shadows, and borders
- Have a modern, clean design suitable for luxury real estate communities

Should integrate with lasVegasCommunities data from lib/communities-data.ts
```

## Instructions for Using These Prompts

1. Copy any prompt above
2. Go to [v0.dev](https://v0.dev)
3. Paste the prompt into the v0 interface
4. Review the generated component
5. Copy the generated code and integrate it into your codebase
6. Update any imports/paths to match your project structure
7. Customize colors, spacing, and content to match your brand

## Integration Notes

- All components use TypeScript
- Components should be compatible with Next.js 16
- Use existing shadcn/ui components from `/components/ui`
- Import icons from `lucide-react`
- Use Tailwind CSS matching existing design tokens
- Follow existing file structure in `/components` and `/app`
- Ensure proper accessibility (ARIA labels, keyboard navigation)
- Test responsive behavior on mobile, tablet, and desktop

