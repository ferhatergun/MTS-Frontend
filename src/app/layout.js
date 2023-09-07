// import './globals.css'
import { Inter } from 'next/font/google'
import ProviderRedux from '$/redux/ProviderRedux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '$/components/Navbar/Navbar'
import { Provider } from 'react-redux';

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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          limit={2}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
      </body>
    </html>
  )
}
