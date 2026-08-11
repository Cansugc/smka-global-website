import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'SMKA Global | Construction & Project Solutions',
  description: 'SMKA Global connects you with qualified contractors for construction, renovation, repair, demolition, roofing, and custom building projects. Professional project management and trusted workers.',
  keywords: ['construction', 'renovation', 'demolition', 'roofing', 'contractors', 'SMKA Global', 'building services', 'project management'],
  authors: [{ name: 'SMKA Global' }],
  openGraph: {
    title: 'SMKA Global | Construction & Project Solutions',
    description: 'Professional construction services connecting you with qualified contractors for all your building needs.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#171717',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
