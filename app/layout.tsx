import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Satyam',
  description: 'Satyam\'s portfolio',  
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#000000",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

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
