import Navbar from '$/components/Navbar/Navbar'
import Footer from '$/components/Footer/Footer'
import '$/app/globals.css'


export default function RootLayout({ children }) {
  return (
    <>
        <Navbar />
        <div className='mainContainer'>
          {children}
        </div>
        <Footer />
    </>
  )
}
