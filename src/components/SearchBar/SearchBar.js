"use client"
import { useRef, useState ,useEffect} from 'react';
import styles from './page.module.css'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image';
import image from '../../assets/hizli-ve-ofkeli-9.jpeg'
import Link from 'next/link';
import RatingStar from '../RatingStar/RatingStar';
import { FRONT_URL ,BACKEND_URL} from '$/allApi/api';

export default function SearchBar() {
  const [searchKeyword,setSearchKeyword]=useState("")
  const [movies,setMovies]=useState()
  const [showSearch,setShowSearch]=useState(false)

  const searchMovies=async(keyword)=>{
    const response = await fetch(`${BACKEND_URL}/movieSeries/Search/MovieSeries?search=${keyword}`)
    const result = await response.json()
    setMovies(result.moviesSeries)
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
            <>
              <Link href={`${FRONT_URL}/film/${item._id}`} className={styles.movieDiv} key={index} onClick={()=>setShowSearch(false)}>
                <div className={styles.movieImageDiv}>
                  <Image 
                    src={image}
                    width={65}
                    height={90}
                    style={{borderRadius:10}}
                  />
                </div>
                <div className={styles.movieTextDiv}>
                  <div>
                    {item.name}
                  </div>
                  <div>
                    <RatingStar star={4} />
                  </div>
                  <div className={styles.commentPcs}>
                    {item.comments.length} Adet Yorum
                  </div>
                </div>
              </Link>
            </>
          )): movies && <p style={{padding:10,fontSize:20}}>Sonuç Bulunamadı</p>
        }


      </div>
    </>
  )
}
