"use client"
import React, { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { isAuth } from '$/lib/auth';
import { userLogout } from '$/allApi/AuthOperations';
import { Spin as Hamburger } from 'hamburger-react'



const OpenMenu = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const navbarRef = useRef(null);
    const navbarRef1 =useRef()
    const [loading,setLoading] = useState(false)
    const auth = isAuth()
    const userId = useSelector(state => state.user.userId)

  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
  
    const handleClickOutside = (event) => {
      if (!navbarRef.current || navbarRef.current.contains(event.target)) {
        return;
      }
      else if (!navbarRef1.current || navbarRef1.current.contains(event.target)) {
        return;
      }
      else{
        setShowNavbar(false);
      }
      
    };
  

  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    useEffect(()=>{
      setLoading(true)
    },[])

    const logout = () => {
      userLogout()
      setShowNavbar(false)
    }

    return (
      <>
      <div className={styles.menuIcon} onClick={handleShowNavbar} ref={navbarRef}>
          {/* <MenuIcon fontSize='large' /> */}
          <Hamburger toggled={showNavbar} toggle={setShowNavbar} size={23} color='white' />
        </div>
        <div
          className={`${styles.toggleMenu} ${showNavbar && styles.active}`} ref={navbarRef1}
        >
          <ul>
            { loading ?
              (auth ? 
              <>
              <li className={styles.toggleMenuItem}>
                <Link href={`/profile/${userId}/yorumlar`} className={styles.link} onClick={()=>setShowNavbar(false)}>Profilim</Link>
              </li>
              <li className={styles.toggleMenuItem}>
                <div className={styles.link} onClick={logout}>Çıkış Yap</div>
              </li>
              </> :
              <li className={styles.toggleMenuItem}>
                <Link href="/login" className={styles.link} onClick={()=>setShowNavbar(false)}>Giriş Yap</Link>
              </li>):null
            }
          </ul>
        </div>
      </>
    );
  };
  
  export default OpenMenu;
  
