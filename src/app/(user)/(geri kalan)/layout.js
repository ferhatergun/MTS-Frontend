import Navbar from '$/components (User)/Navbar/Navbar'
import Footer from '$/components (User)/Footer/Footer'
import '$/app/globals.css'


export default function RootLayout({ children }) {
  
  return (
    <>
        <Navbar />
        <main className='mainContainer'>
          {children}
        </main>
        <Footer />
    </>
  )
}
