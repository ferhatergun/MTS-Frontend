"use client"
import { useRef, useState ,useEffect} from 'react';
import styles from './page.module.css'
import SearchIcon from '@mui/icons-material/Search'
import Link from 'next/link';
import RatingStar from '../RatingStar/RatingStar';
import MovieImage from '../MovieImage/MovieImage';

export default function SearchBar() {
  const [searchKeyword,setSearchKeyword]=useState("")
  const [movies,setMovies]=useState()
  const [showSearch,setShowSearch]=useState(false)

  const searchMovies=async(keyword)=>{
    const response = await fetch(`${process.env.BACKEND_URL}/movieSeries/Search/MovieSeries?search=${keyword}`)
    const result = await response.json()
    setMovies(result.moviesSeries.slice(0,10))
  }

  const searchRef =useRef()
  const searchRef1=useRef()


  const handleClickOutside =  (event) => {
    if (!searchRef.current || searchRef.current.contains(event.target)) { //searchRef e tıklarsa hiçbirşey yapmasın dedik
      return;
    }
    else if (!searchRef1.current || searchRef1.current.contains(event.target)) { //searchRef1 e tıklarsa hiçbirşey yapmasın dedik
      return;
    }
    else{
      setShowSearch(false); // eğer üstteki ikisinden farklı bir yere tıklarsa false yapsın dedik
    }
    
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <input 
        className={styles.input}
        onChange={(e)=>
        {
          setSearchKeyword(e.target.value)
          searchMovies(e.target.value)
        }}
        onFocus={()=>setShowSearch(true)}
        ref={searchRef}
        ></input>
        <SearchIcon />
      </div>


      <div className={`${styles.resultDiv}  ${showSearch && styles.active}`} ref={searchRef1}>
        { (movies?.length !== 0  && searchKeyword !== "") ?
          movies?.map((item,index)=>(
            <Link href={`${process.env.FRONT_URL}/film/${item._id}`} className={styles.movieDiv} key={index} onClick={()=>setShowSearch(false)}>
              <div className={styles.movieImageDiv}>
                <MovieImage photoId={item.moviePhoto} style={styles.image} />
              </div>
              <div className={styles.movieTextDiv}>
                <div>
                  {item.name}
                </div>
                <div>
                  <RatingStar star={item.rating} isVisible={true} />
                </div>
                <div className={styles.commentPcs}>
                  {item.comments.length} Adet Yorum
                </div>
              </div>
            </Link>
          )): movies && <p style={{padding:10,fontSize:20}}>Sonuç Bulunamadı</p>
        }


      </div>
    </>
  )
}
