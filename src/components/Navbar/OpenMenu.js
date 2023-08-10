"use client"
import React, { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';



const OpenMenu = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const navbarRef = useRef(null);
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
  
    const handleClickOutside = (event) => {
      if (!navbarRef.current || navbarRef.current.contains(event.target)) {
        return;
      }
      else{
        setShowNavbar(false);
      }
      
    };
  
    const handleMenuItemClick = () => {
      setShowNavbar(false);
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    console.log(showNavbar)
    return (
      <>
      <div className={styles.menuIcon} onClick={handleShowNavbar} ref={navbarRef}>
          <MenuIcon fontSize='large' />
        </div>
        <div
          className={`${styles.toggleMenu} ${showNavbar && styles.active}`}
        >
          <ul>
            <li className={styles.toggleMenuItem}>
              <Link className={styles.link} href="/filmler" onClick={handleMenuItemClick}>Filmler</Link>
            </li>
            <li className={styles.toggleMenuItem}>
              <Link className={styles.link} href="/diziler" onClick={handleMenuItemClick}>Diziler</Link>
            </li>
            <li className={styles.toggleMenuItem}>
              <Link className={styles.link} href="/vizyondakifilmler" onClick={handleMenuItemClick}>Vizyondaki Filmler</Link>
            </li>
            <li className={styles.toggleMenuItem}>
              <Link href="/profile" className={styles.link} onClick={handleMenuItemClick}>Giriş Yap</Link>
            </li>
            <li className={styles.toggleMenuItem}>
              <Link href="/profile" className={styles.link} onClick={handleMenuItemClick}>Çıkış Yap</Link>
            </li>
          </ul>
        </div>
      </>
    );
  };
  
  export default OpenMenu;
  
