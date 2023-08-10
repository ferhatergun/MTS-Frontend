import Image from "next/image"
import img from '../assets/404.png'
import Link from "next/link" 

export default function Errors() {
  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      <Image 
        src={img}
        width={300}
        height={300}
      />
      <h2>Aradığın Sayfayı Bulamadık</h2> <br/>
      <Link href="/">Ana Sayfaya Git</Link>
    </div>
  )
}
