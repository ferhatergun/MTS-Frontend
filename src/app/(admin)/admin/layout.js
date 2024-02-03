import Nabvar from '$/components (Admin)/Navbar/Nabvar'
import React from 'react'
import styles from './page.module.css'
import '../../globals.css'

export default function Layout({ children }) {
  return (
    <div>
        <Nabvar/>
        <div className={styles.layoutContainer}>
          {children}
        </div>
    </div>
  )
}
