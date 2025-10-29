# Package Upgrade Notes - October 2025

## Major Upgrades

### Next.js 15.5.3 → 16.0.1
- **Breaking Changes**: Next.js 16 includes breaking changes. Review the [Next.js 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16) for details.
- **New Features**: 
  - Improved React Compiler support
  - Enhanced Turbopack performance
  - Partial Pre-Rendering (PPR) improvements

### React 19.1.0 → 19.2.0
- Minor version update with bug fixes and performance improvements
- No breaking changes expected

### @types/node 20.19.24 → 24.9.2
- Updated to match Node.js 24 type definitions
- May require TypeScript configuration updates if using newer Node.js features

## New Packages Added

### Form Validation & Handling
- **react-hook-form** (^7.54.2): Performant form library with minimal re-renders
- **zod** (^3.24.1): TypeScript-first schema validation
- **@hookform/resolvers** (^3.9.1): Resolvers for react-hook-form (Zod integration)

**Usage Example**:
```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/utils/form-validation'

const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
  resolver: zodResolver(contactFormSchema),
})
```

### Performance Monitoring
- **@vercel/analytics** (^1.4.1): Web analytics for Vercel deployments
- **@vercel/speed-insights** (^1.1.3): Real user monitoring and Core Web Vitals tracking

**Already Integrated**: Both packages are added to `app/layout.tsx` and will automatically start tracking once deployed to Vercel.

### Date Utilities
- **date-fns** (^4.1.0): Modern date utility library

**Usage**: See `lib/utils/date-helpers.ts` for helper functions:
- `formatListingDate()`: Format dates for property listings
- `formatShortDate()`: Short date format
- `getRelativeTime()`: Relative time strings ("2 days ago")
- `formatDateForInput()`: Format for date inputs

### Development Tools
- **@next/bundle-analyzer** (^16.0.1): Analyze bundle size

**Usage**: Run `npm run analyze` to generate a bundle analysis report.

- **eslint** (^9) & **eslint-config-next** (^16.0.1): Enhanced linting support

## Package Updates

- **lucide-react**: 0.525.0 → 0.548.0 (new icons and improvements)
- **@upstash/redis**: 1.35.1 → 1.35.6 (bug fixes)

## Utility Files Created

1. **lib/utils/form-validation.ts**: Zod schemas for contact and tour scheduling forms
2. **lib/utils/date-helpers.ts**: Date formatting utilities using date-fns

## Next Steps

1. **Test the build**: Run `npm run build` to ensure everything compiles correctly with Next.js 16
2. **Review breaking changes**: Check the Next.js 16 migration guide for any necessary code updates
3. **Update forms**: Consider migrating contact form to use react-hook-form for better performance
4. **Verify analytics**: After deployment, check Vercel dashboard to confirm Analytics and Speed Insights are working
5. **Monitor bundle size**: Run `npm run analyze` periodically to track bundle.md growth

## Important Notes

- Vercel Analytics and Speed Insights work automatically in production on Vercel
- Bundle analyzer requires `ANALYZE=true` environment variable (already configured in package.json)
- Next.js 16 may require async handling for `cookies()`, `headers()`, and `draftMode()` functions

## Known Issues

### Windows Build Environment
- **Tailwind CSS v4 + lightningcss**: There's a known issue with lightningcss native modules on Windows during local builds. The build will work correctly on Vercel's Linux build environment. If you need to build locally on Windows, consider:
  - Using WSL2 (Windows Subsystem for Linux)
  - Building directly on Vercel (recommended)
  - Temporary workaround: The production build on Vercel should work fine

This is a platform-specific issue with the lightningcss native bindings and doesn't affect production deployments.

