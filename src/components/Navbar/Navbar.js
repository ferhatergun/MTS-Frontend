"use client"
import styles from './page.module.css'
import SearchBar from '../SearchBar/SearchBar'
import '../../app/globals.css'
import OpenMenu from './OpenMenu';
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '$/redux/userSlice';


export default function Navbar() {
    const userId = useSelector(state=>state.user.userId)
    const loading = useSelector(state=>state.user.loading)
    const [user,setUser] = useState(false)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        setUser(userId)
        dispatch(setLoading(true))
    },[])
    
    
    return (
        <div className={styles.container}>
            <div className={styles.ustContainer}>
                <ul className={styles.ustNavbar}>
                    <li className={styles.ustNavItem}>logo</li>
                    <li className={styles.ustNavItem}>
                        <SearchBar />
                    </li>
                    <li className={styles.ustNavItem}>
                        <OpenMenu />
                        <div className={styles.Button}>
                        <div className={styles.Button}>
                            {loading  ? 
                            ( user ?<Link href="/profile">Profil</Link>:<Link href="/login">Giriş Yap</Link>): 
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
