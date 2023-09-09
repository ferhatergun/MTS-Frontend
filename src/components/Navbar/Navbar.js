"use client"
import styles from './page.module.css'
import SearchBar from '../SearchBar/SearchBar'
import '../../app/globals.css'
import OpenMenu from './OpenMenu';
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import ProfileToogle from '../ProfileToggleBtn(navbar)/ProfileToogle';
import logo from '$/assets/logo.jpg'
import Image from 'next/image';
import { isAuth } from '$/lib/auth';

export default function Navbar() {
    const auth = isAuth()
    const [loading,setLoading] = useState(false) 
    // ilk başta useri false aldık sonra userId yi atadık varsa
    // userId değilde accesToken ile de yapılabilir verifyToken kontrol fonksiyonu oluştur lib klasöründe
    
    useEffect(()=>{
        setLoading(true)
    },[])
    
    
    return (
        <div className={styles.container}>
            <div className={styles.ustContainer}>
                <ul className={styles.ustNavbar}>
                    <li className={styles.ustNavItem}>
                        <Link href="/">
                            <Image src={logo} alt="logo" width={80} height={50} style={{mixBlendMode:'color-burn'}} />
                        </Link>
                    </li>
                    <li className={styles.ustNavItem}>
                        <SearchBar />
                    </li>
                    <li className={styles.ustNavItem}>
                        <OpenMenu />
                        <div className={styles.Button}>
                        <div className={styles.Button}>
                            {loading  ? 
                            ( auth ? <ProfileToogle />:<Link href="/login">Giriş Yap</Link>): 
                            null}
                        </div>

                        </div>

                    </li>
                </ul>
            </div>
            <div className={styles.altContainer}>
                <ul className={styles.altNavbar}>
                    <li className={styles.altNavItem}>Filmler</li>
                    <li className={styles.altNavItem}>Diziler</li>
                    <li className={styles.altNavItem}>Vizyondaki Filmler</li>
                </ul>
            </div>           
        </div>
    );
}
