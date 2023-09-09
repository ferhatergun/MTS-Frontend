"use client"
import React from 'react'
import styles from './page.module.css'

export default function ScrollToComment() {
    const handleScrollToComments = () => {
        const commentsSection = document.getElementById('create-comment');
        commentsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      // yotum yaz divinin konumunu aldık ve oraya animasyonlu bir şekilde gittik
    
  return (
    <div className={styles.commentBtn} onClick={handleScrollToComments}>Yorum Yaz</div>
  )
}
