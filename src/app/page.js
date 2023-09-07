
import Navbar from "$/components/Navbar/Navbar";
import { toast } from "react-toastify";
import './globals.css'
import CarouselMovie from "$/components/CarouselMovie/CarouselMovie";
import { setCookie , getCookie} from "cookies-next";
import { useSelector } from "react-redux";
import Loading from "./loading";


export default function Home() {



  return (
    <main>
          <div>
            <Navbar />
            <div className="mainContainer">
              <CarouselMovie headerTitle="Vizyondaki Filmler" delay={4000} />
              <CarouselMovie headerTitle="Popüler Filmler" delay={6000} />
            </div>
          </div>
    </main>
  )
}

