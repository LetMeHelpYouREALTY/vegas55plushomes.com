import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import DeployBanner from '../components/deploy-banner'
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
  title: 'Simple v0',
  description: 'The simplest way to use v0 - just prompt and see your app',
  keywords: ['v0', 'AI', 'app builder', 'code generation', 'Next.js'],
  authors: [{ name: 'Vegas 55 Plus Homes' }],
  creator: 'Vegas 55 Plus Homes',
  publisher: 'Vegas 55 Plus Homes',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Simple v0',
    title: 'Simple v0',
    description: 'The simplest way to use v0 - just prompt and see your app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Simple v0',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simple v0',
    description: 'The simplest way to use v0 - just prompt and see your app',
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
          <DeployBanner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
