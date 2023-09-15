import Navbar from "$/components/Navbar/Navbar";
import './globals.css'
import CarouselMovie from "$/components/CarouselMovie/CarouselMovie";
import { redirect } from "next/navigation";

export default async function Page() {

  const data = await getMovies() 
  // console.log(data)

 const dataa=[
  {id:1,name:'hızlı ve öfkeli 9',},
  {id:2,name:'hızlı ve öfkeli 9',},
  {id:3,name:'hızlı ve öfkeli 9',},
  {id:4,name:'hızlı ve öfkeli 9',},
 ]
  return (
    <main>
          <Navbar />
          <div className="mainContainer">
             <CarouselMovie headerTitle="Vizyondaki Filmler" delay={4000} data={data} />
            <CarouselMovie headerTitle="Popüler Filmler" delay={6000} data={dataa} /> 
          </div>

    </main>
  )
}

const getMovies = async () => {
  try{
    const res = await fetch('http://localhost:5000/movieSeries/AllMovieSeries',{cache:'no-cache'})
    const data = await res.json()
    if(data.success){
      return data.moviesSeries
    }
    else{
      redirect('/error')
    }
  }catch(e){
    console.log(e)
    redirect('/error')
  }
  }
  
