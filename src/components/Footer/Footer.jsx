import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { footerLinks } from "@/constants";
import styles from "./page.module.css"

const Footer = () => {
  const footerLinks = []
  return (
    <footer
      className={styles.footer}
    >
      <div
        className={styles.footer__top}
      >
        <div
          className={styles.footer__logo}
        >
          <Image 
          src="/logo.jpg" 
          alt="logo" 
          width={150} 
          height={38} 
          style={{objectFit: "contain"}}
          />
          <p className={styles.logo}>
            MovieReview 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className={styles.footer__links}>
          <div className={styles.footer__link}>
              <h3 style={{fontWeight:600}}>
                Hızlı Linkler
              </h3>
              <Link href="/"
              style={{color:'#6b7280'}}>
                Diziler
              </Link>
              <Link href="/"
              style={{color:'#6b7280'}}>
                Filmler
              </Link>
              <Link href="/"
              style={{color:'#6b7280'}}>
                Oyuncular
              </Link>
          </div>

          <div className={styles.footer__link}>
              <h3 style={{fontWeight:600}}>
                Destek
              </h3>
              <Link href="/"
              style={{color:'#6b7280'}}>
                İletişim
              </Link>
              <Link href="/"
              style={{color:'#6b7280'}}>
                Kariyer
              </Link>
              <Link href="/"
              style={{color:'#6b7280'}}>
                Misyonumuz
              </Link>
          </div>

          <div className={styles.footer__link}>
              <h3 style={{fontWeight:600}}>
                Politikalarımız
              </h3>
              <Link href="/"
              style={{color:'#6b7280'}}>
                Gizlilik
              </Link>
              <Link href="/"
              style={{color:'#6b7280'}}>
                Kullanım Şartları
              </Link>
              <Link href="/"
              style={{color:'#6b7280'}}>
                Çerez Politikası
              </Link>
          </div>
        </div>
        </div>
        <div className={styles.footer__bottom}>
            <p>@2023 MovieReview. All Rights Reserved</p>
            <div className={styles.footer__bottom__links}>
                <Link href="/" 
                className="text-gray-500">
                    Privacy Policy
                </Link>
                <Link href="/" 
                className="text-gray-500">
                    Terms of Use
                </Link>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
