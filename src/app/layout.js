import Navbar from '$/components/Navbar/Navbar.js'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MovieReview',
  description: 'MovieReview',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />{/*  tüm sayfaların en üstünde olacak */}
        {children}
      </body>
    </html>
  )
}
