import Navbar from '$/components/Navbar/Navbar'
import '../globals.css'


export default function RootLayout({ children }) {
  return (
    <>
    
          <Navbar />
        {children}
    
    </>
  )
}
