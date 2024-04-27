import './globals.css'
import ProviderRedux from '$/redux/ProviderRedux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export const metadata = {
  title: 'MTS',
  description: 'Movie Review in MTS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProviderRedux>
            {children}     
        </ProviderRedux>     
        <ToastContainer
          position="top-right"
          autoClose={1500}
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
