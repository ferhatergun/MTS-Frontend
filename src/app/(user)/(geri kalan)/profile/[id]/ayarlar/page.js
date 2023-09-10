import React from 'react'
import styles from './page.module.css'
import ProfilResmi from '$/components/ProfileAyarlar/ProfilResmi'
import UserName from '$/components/ProfileAyarlar/UserName'
import ChangePass from '$/components/ProfileAyarlar/ChangePass'

export default function page() {
  return (
    <div className={styles.container}>
      <ProfilResmi />
      <hr/>
      <UserName />
      <hr/>
      <ChangePass />
    </div>
  )
}
