"use client"
import React, { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';


const OpenMenu = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const navbarRef = useRef(null);
    const navbarRef1 =useRef()
  
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

    // console.log(showNavbar)
    return (
      <>
      <div className={styles.menuIcon} onClick={handleShowNavbar} ref={navbarRef}>
          <MenuIcon fontSize='large' />
        </div>
        <div
          className={`${styles.toggleMenu} ${showNavbar && styles.active}`} ref={navbarRef1}
        >
          <ul>
            <li className={styles.toggleMenuItem}>
              <Link className={styles.link} href="/filmler" onClick={()=>setShowNavbar(false)}>Filmler</Link>
            </li>
            <li className={styles.toggleMenuItem}>
              <Link className={styles.link} href="/diziler" onClick={()=>setShowNavbar(false)}>Diziler</Link>
            </li>
            <li className={styles.toggleMenuItem}>
              <Link className={styles.link} href="/vizyondakifilmler" onClick={()=>setShowNavbar(false)}>Vizyondaki Filmler</Link>
            </li>
            <li className={styles.toggleMenuItem}>
              <Link href="/login" className={styles.link} onClick={()=>setShowNavbar(false)}>Giriş Yap</Link>
            </li>
            <li className={styles.toggleMenuItem}>
              <Link href="/profile" className={styles.link} onClick={()=>setShowNavbar(false)}>Çıkış Yap</Link>
            </li>
          </ul>
        </div>
      </>
    );
  };
  
  export default OpenMenu;
  
