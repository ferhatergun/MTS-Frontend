import styles from './page.module.css'
import SearchBar from '../SearchBar/SearchBar'
import '$/app/globals.css'
import OpenMenu from './OpenMenu';

export default function Navbar(){
    return(
    <>
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
                            Giriş Yap
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
    </>
    )
}