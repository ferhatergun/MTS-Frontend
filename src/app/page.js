import Navbar from "$/components/Navbar/Navbar";
import './globals.css'
import CarouselMovie from "$/components/CarouselMovie/CarouselMovie";
import { fetchData } from "$/allApi/api";
import Footer from "$/components/Footer/Footer";

export default async function Page() {
  const newMovies= (await fetchData('movieSeries/current/CurrentMovies')).movieseries
  const mostPopular = (await fetchData('comments/rating/TopMovie')).topMovies
  

  return (
    <main>
          <Navbar />
          <div className="mainContainer">
            <CarouselMovie headerTitle="Yeni Gelenler" delay={4000} data={newMovies} />
            <CarouselMovie headerTitle="Popüler Filmler" delay={6000} data={mostPopular} /> 
          </div>
          <Footer/>

    </main>
  )
}