// import './globals.css'
import { Inter } from 'next/font/google'
import ProviderRedux from '$/redux/ProviderRedux'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MovieReview',
  description: 'MovieReview',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderRedux>
          {children}
        </ProviderRedux>
      </body>
    </html>
  )
}
