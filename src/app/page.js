import Navbar from "$/components/Navbar/Navbar";
import { toast } from "react-toastify";
import './globals.css'
import CarouselMovie from "$/components/CarouselMovie/CarouselMovie";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="mainContainerr">
         <CarouselMovie headerTitle="Vizyondaki Filmler" delay={4000} />
         <CarouselMovie headerTitle="Popüler Filmler" delay={6000} />
      </div>
    </main>
  )
}
