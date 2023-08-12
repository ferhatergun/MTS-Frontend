import Image from "next/image"
import img from '../assets/404.png'
import Link from "next/link" 

export default function Errors() {
  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',marginTop:50}}>
      <Image 
        src={img}
        width={300}
        height={300}
        alt="resim bulunamadı"
      />
      <h2>Aradığın Sayfayı Bulamadık</h2> <br/>
      <Link href="/" style={{color:'#77091C'}}>Ana Sayfaya Git</Link>
    </div>
  )
}
