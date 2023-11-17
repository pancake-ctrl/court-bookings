import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import BottomNav from './component/bottomNav/bottomNav'
import Header from './component/header/header'
import Footer from './component/footer/footer'





const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <AuthContextProvider>

            <div>
              <Header />
            </div>
            
            <div className='sm:hidden'>
              <BottomNav />
            </div>


            <div className=''>
              {children}
            </div>

            
            <div className=' bottom-0'>
              <Footer />
            </div>
       </AuthContextProvider>
      </body>
    </html>
  )
}
