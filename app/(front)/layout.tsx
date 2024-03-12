import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tongkonan App',
  description: 'Tongkonan Ecommerce Application',
}

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="flex-grow container mx-auto px-4">{children}</main>
}
