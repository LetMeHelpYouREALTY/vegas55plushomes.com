import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
// import DeployBanner from '../components/deploy-banner'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
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
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Del Webb Lake Las Vegas 55+ REALTOR®',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Del Webb Lake Las Vegas 55+ REALTOR® | Homes Dr. Jan Duffy',
    description: 'Dr. Jan Duffy - Your trusted Las Vegas 55+ real estate specialist. Expert guidance for active adults seeking homes in premier 55+ communities.',
    images: ['/og-image.png'],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JCQTZFS0DN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JCQTZFS0DN');
          `}
        </Script>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Dr. Jan Duffy - Del Webb Lake Las Vegas 55+ REALTOR®',
              description: 'Dr. Jan Duffy - Las Vegas 55+ real estate specialist serving Sun City Summerlin, Del Webb Lake Las Vegas, and all active adult communities',
              url: siteUrl,
              telephone: '+17025551234',
              email: 'info@vegas55plushomes.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '28 Lake Oasis St',
                addressLocality: 'Henderson',
                addressRegion: 'NV',
                postalCode: '89011',
                addressCountry: 'US',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Las Vegas',
                  postalCode: '89134',
                },
                {
                  '@type': 'City',
                  name: 'Henderson',
                  postalCode: '89011',
                },
              ],
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '36.1699',
                longitude: '-115.1398',
              },
              priceRange: '$$',
            }),
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
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
