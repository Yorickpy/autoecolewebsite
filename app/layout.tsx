import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Grenade Auto-École — Votre permis de conduire depuis 35 ans',
  description:
    'Auto-école à Grenade (31330). Permis B, conduite accompagnée, boîte automatique, perfectionnement. Depuis 35 ans votre sécurité est notre priorité.',
  keywords: ['auto-école', 'Grenade', 'permis B', 'conduite accompagnée', 'AAC', 'Haute-Garonne'],
  openGraph: {
    title: 'Grenade Auto-École',
    description: 'Depuis 35 ans votre sécurité est notre priorité',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
