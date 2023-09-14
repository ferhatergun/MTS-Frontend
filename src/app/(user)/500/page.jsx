import Image from "next/image"
import img from '$/assets/error.png'
import Link from "next/link" 

export default function Error500() {
  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',marginTop:100}}>
      <Image 
        src={img}
        width={300}
        height={300}
        alt="resim bulunamadı"
      />
      <h2>Oops! Bir Hata Oluştu</h2> <br/>
      <Link href="/" style={{color:'#77091C'}}>Ana Sayfaya Git</Link>
    </div>
  )
}
