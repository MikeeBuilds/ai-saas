'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/clerk-react'
import SomeClientComponent from '@/SomeClientComponent.client'

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
    <ClerkProvider frontendApi='YOUR_CLERK_FRONTEND_API'>
      <div className={inter.className}>{children}</div>
    </ClerkProvider>
  )
}
