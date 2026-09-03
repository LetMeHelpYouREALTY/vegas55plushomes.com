import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
// import DeployBanner from '../components/deploy-banner'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import LocalNapBar from '../components/local-nap-bar'
import JsonLd from '../components/json-ld'
import {
  generateOrganizationSchema,
  generatePersonSchema,
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
} from '@/lib/structured-data'
import { siteImages } from '@/lib/site-images'
import { toPublicSrc } from '@/lib/image-cdn'
import { REALSCOUT_SCRIPT_SRC } from '@/lib/realscout'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://www.vegas55plushomes.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Del Webb Lake Las Vegas 55+ REALTOR® | Award-Winning Realtor Dr. Jan Duffy',
  description: 'Award-winning realtor Dr. Jan Duffy - Your trusted Las Vegas 55+ real estate specialist and buyer\'s representative. Expert guidance for active adults seeking homes in premier 55+ communities including Sun City Summerlin, Sun City Anthem, Del Webb Lake Las Vegas, and more.',
  keywords: ['Del Webb Lake Las Vegas 55+', 'Dr. Jan Duffy realtor', 'Las Vegas 55+ homes', 'Las Vegas 55+ communities', 'Las Vegas real estate', '55+ communities Las Vegas', 'retirement homes Las Vegas', 'Sun City Summerlin', 'Sun City Anthem', 'active adult communities Las Vegas', 'Las Vegas senior living', 'Las Vegas realtor 55+'],
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Dr. Jan Duffy',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Del Webb Lake Las Vegas 55+ REALTOR® | Homes Dr. Jan Duffy',
    title: 'Del Webb Lake Las Vegas 55+ REALTOR® | Homes Dr. Jan Duffy',
    description: 'Dr. Jan Duffy - Your trusted Las Vegas 55+ real estate specialist. Expert guidance for active adults seeking homes in premier 55+ communities.',
    images: [
      {
        url: siteImages.og.src,
        width: siteImages.og.width,
        height: siteImages.og.height,
        alt: siteImages.og.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Del Webb Lake Las Vegas 55+ REALTOR® | Homes Dr. Jan Duffy',
    description: 'Dr. Jan Duffy - Your trusted Las Vegas 55+ real estate specialist. Expert guidance for active adults seeking homes in premier 55+ communities.',
    images: [siteImages.og.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: toPublicSrc('/favicon.png'), type: 'image/png', sizes: '192x192' },
      { url: toPublicSrc('/favicon-32.png'), type: 'image/png', sizes: '32x32' },
      { url: toPublicSrc('/favicon.ico'), type: 'image/x-icon', sizes: 'any' },
    ],
    apple: [{ url: toPublicSrc('/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' }],
    shortcut: toPublicSrc('/favicon.png'),
  },
  verification: {
    // Add your Google Search Console verification code here
    // Get this code from Google Search Console > Settings > Ownership verification
    // google: 'your-verification-code',
    // You can also verify via: yandex, bing, etc.
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Analytics for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="preconnect" href="https://www.realscout.com" />
        {/* Native module tag: next/script only preloads this UMD in Next 16 and the
            custom element never upgrades. Load once here, not per page. */}
        <script src={REALSCOUT_SCRIPT_SRC} type="module" async />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JCQTZFS0DN"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JCQTZFS0DN');
          `}
        </Script>
        <JsonLd
          id="site-entity-graph"
          data={{
            '@context': 'https://schema.org',
            '@graph': [
              generateOrganizationSchema(),
              generatePersonSchema(),
              generateRealEstateAgentSchema(),
              generateWebSiteSchema(),
            ],
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <Navigation />
          {children}
          <LocalNapBar />
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
