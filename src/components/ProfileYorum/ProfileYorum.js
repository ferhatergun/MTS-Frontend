import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import img from '$/assets/hizli-ve-ofkeli-9.jpeg'

export default function ProfileYorum() {
  return (
    <div className={styles.container}>
        <div className={styles.Image}>
            <Image src={img} fill={true} />
        </div>
        <div className={styles.content}></div>

    </div>
  )
}
