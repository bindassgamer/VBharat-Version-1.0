import React from 'react'
import style from '../css/contact.module.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div>
        <footer className={style.footer}>
          <div className={`${style.footer_section} ${style.quick_links}`}>
            <h3>Quick Links</h3>
            <br />
            <br />
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="term&con.html">Terms &amp; Conditions</a></li>
              <li><a href="privacy-policy.html">Privacy Policy</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div className={`${style.footer_section} ${style.instagram}`}>
            <h3>Instagram</h3>
            <br />
            <br />
            <div className={style.instagram_gallery}>
              <div className={style.instagram_image}><img src="media/download.jpeg" alt="Instagram Image 1" /></div>
              <div className={style.instagram_image}><img src="media/GOLDEN_TEMPLE.png" alt="Instagram Image 2" /></div>
              <div className={style.instagram_image}><img src="media/KEDARNATH_TEMPLE.png" alt="Instagram Image 3" /></div>
              <div className={style.instagram_image}><img src="media/PREMMANDIR_IMAGE.jpg" alt="Instagram Image 4" /></div>
              <div className={style.instagram_image}><img src="media/RAMMANDIR.webp" alt="Instagram Image 5" /></div>
              <div className={style.instagram_image}><img src="media/TIRUPATIBALAJI_TEMPLE.jpg" alt="Instagram Image 6" /></div>
            </div>
          </div>
          <div className={`${style.footer_section} ${style.contact}`}>
            <h3>Contact Us</h3><br />
            <br />
            <p>SLRTCE Miraroad East - 400101</p><br />
            <p>Adarsh.a.singh@slrtce.in</p><br />
            <p>+91 9324618958</p>
          </div>
        </footer>
      </div>
      <div className={style.border_area}>
        <div className={style.terms}>
          <a href="term&con.html">Terms of Use</a>  <a href="privacy-policy.html">Privacy Policy</a>
        </div>
        <div className={style.copyright}>
          2024 © All rights reserved by VBHARAT
        </div>
      </div>
    </>

  )
}

export default Footer
