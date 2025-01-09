import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Satyam',
  description: 'Satyam\'s portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
