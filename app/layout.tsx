import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/userProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvide'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'THE SPOTIFY CLONE',
  description: 'Listen to music!  ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <Sidebar>
                {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
