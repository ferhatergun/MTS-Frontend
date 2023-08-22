"use client"
import Navbar from "$/components/Navbar/Navbar";
import { toast } from "react-toastify";
import './globals.css'
import CarouselMovie from "$/components/CarouselMovie/CarouselMovie";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="mainContainerr">
         <CarouselMovie/>
      </div>
    </main>
  )
}
