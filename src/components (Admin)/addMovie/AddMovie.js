"use client"
import React ,{useState}from 'react'
import styles from './page.module.css'
import { Modal } from '@mui/material';


export default function AddMovie() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
        <button className={styles.addMovie} onClick={handleOpen}>Yeni Film Ekle</button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modalContainer}>
            <h4>Film Ekle</h4>
        </div>
      </Modal>
    </div>
  )
}
