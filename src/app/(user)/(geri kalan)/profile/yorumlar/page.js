import React from 'react'
import styles from './page.module.css'
import ProfileYorum from '$/components/ProfileYorum/ProfileYorum'

export default function page() {
  return (
    <div>
      <div className={styles.container}>
        <ProfileYorum movieName="Hızlı ve öfkeli 9" star={3} content="çok sevdim" key={1} />
        <ProfileYorum movieName="Barbie" star={4} content="idare eder eğlenceliydi" key={2}/>
      </div>
    </div>
  )
}
