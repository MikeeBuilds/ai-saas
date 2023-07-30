// layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClerkProviderClient from '@/ClerkProviderClient.client'

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
    <ClerkProviderClient frontendApi='YOUR_CLERK_FRONTEND_API'>
      <div className={inter.className}>{children}</div>
    </ClerkProviderClient>
  )
}
