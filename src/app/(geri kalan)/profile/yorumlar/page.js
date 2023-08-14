import React from 'react'
import styles from './page.module.css'
import ProfileYorum from '$/components/ProfileYorum/ProfileYorum'

export default function page() {
  return (
    <div>
      <div className={styles.container}>
        <ProfileYorum />
        <ProfileYorum />
      </div>
    </div>
  )
}
