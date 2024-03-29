import NavBar from '@/components/navBar'
import './globals.css'
import type { Metadata } from 'next'

import Footer from '@/components/footer'
import { Nunito, Josefin_Sans, Roboto_Mono } from 'next/font/google';


const inter = Nunito({ subsets: ['latin'] });
const cuteFont = Roboto_Mono ({ subsets: ['latin'], weight: '400' });


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
    <html lang="en" data-theme="garden">
      <body className="bg-litre">
        <div >
        <NavBar font={cuteFont.className}/>
        </div>
    
        {children}
        <Footer/>
      </body>
    </html>
  )
}
