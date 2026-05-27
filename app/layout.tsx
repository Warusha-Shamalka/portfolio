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
  title: 'Warusha Shamalka | Computer Science Student',
  description: 'Computer Science undergraduate and Full-Stack & Cloud-Native Developer. 3rd year student at University of Colombo School of Computing with GPA 3.76/4.0.',
  keywords: ['Full-Stack Developer', 'Cloud-Native Developer', 'Computer Science', 'Web Developer', 'React', 'Next.js', 'Node.js'],
  authors: [{ name: 'Warusha Shamalka' }],
  openGraph: {
    title: 'Warusha Shamalka | Computer Science Student',
    description: 'Computer Science undergraduate and Full-Stack & Cloud-Native Developer at University of Colombo School of Computing.',
    type: 'website',
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
