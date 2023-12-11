'use client'
import styles from './page.module.css'
import SearchBar from '../SearchBar/SearchBar'
// import '../../app/globals.css'
import OpenMenu from './OpenMenu';
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { useState, useEffect, use } from 'react';
import ProfileToogle from '../ProfileToggleBtn(navbar)/ProfileToogle';
import logo from '$/assets/logo.jpg'
import Image from 'next/image';
import { isAuth } from '$/lib/auth';




export default function Navbar() {
    const [auth,setAuth] = useState(false)
    const [loading,setLoading] = useState(false) 
    const userId = useSelector(state => state.user.userId)


    useEffect(()=>{
        setAuth(isAuth())
        setLoading(true)
    },[])


    return (
        <div className={styles.container}>
            <div className={styles.ustContainer}>
                <ul className={styles.ustNavbar}>
                    <li className={styles.ustNavItem}>
                        <Link href="/">
                            <Image src={logo} alt="logo" className={styles.logo} />
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
                            ( auth ? <ProfileToogle MyUserId={userId} />:
                            <Link href="/login">
                            <button class={styles.btn}>
                                <div>Giriş Yap</div>
                                <svg fill="none" viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="black" d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"></path>
                                <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="black" d="M4 12.0601H14.17"></path>
                                <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="black" d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"></path>
                                </svg>
                            </button>
                            </Link>): 
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
