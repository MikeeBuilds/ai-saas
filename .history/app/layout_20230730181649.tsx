import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/clerk-react'
im

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genesis',
  description: 'AI powered creator dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider frontendApi=''>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
