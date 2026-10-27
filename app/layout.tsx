import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'Warusha Shamalka | Aspiring DevOps Engineer',
  description: 'Third-year Computer Science undergraduate at the University of Colombo School of Computing, building hands-on DevOps skills in Linux, Docker, CI/CD, and automation.',
  keywords: ['Aspiring DevOps Engineer', 'DevOps Intern', 'Computer Science', 'Docker', 'CI/CD', 'Linux', 'GitHub Actions'],
  authors: [{ name: 'Warusha Shamalka' }],
  openGraph: {
    title: 'Warusha Shamalka | Aspiring DevOps Engineer',
    description: 'Third-year Computer Science undergraduate building hands-on DevOps skills at the University of Colombo School of Computing.',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
    shortcut: '/favicon.svg',
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
