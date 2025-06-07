import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from '@/lib/theme-context'
import { ThemeToggle } from '@/components/theme-toggle'

const mono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shane Kennedy - Software Engineer',
  description: 'Personal website of Shane Kennedy, Software Engineer based in Stockholm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mono.className}>
        <ThemeProvider>
          {children}
          <ThemeToggle />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

