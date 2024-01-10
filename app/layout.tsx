import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import Player from '@/components/Player'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/userProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvide'
import getSongsByUserId from '@/actions/getSongsByUserId'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'THE SPOTIFY CLONE',
  description: 'Listen to music!  ',
}

//This page will not be cached and allways up to date
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <Sidebar songs={userSongs}>
            <Player />
                {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
