import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/clerk-react'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genesis',
  description: 'AI powered creator dashboard',
}

import { ClerkProvider, ClerkProviderProps } from '@clerk/clerk-react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const clerkProps: ClerkProviderProps = {
    frontendApi: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API,
  };

  return (
    <ClerkProvider {...clerkProps}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
