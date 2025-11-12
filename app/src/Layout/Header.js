import React from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/auth.js';
import style from '../css/login.module.css';

const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth, user: null, token: ''
    });
    localStorage.removeItem('auth');
    toast.success("Logout Successfully");
  };

  return (
    <div>
      <nav className={`${style.navbar} ${style.sticky}`}>
        <div className={style.logo}>
          <Link to="/index" >
            <img src="media/LOGO.PNG" alt="VR Pilgrimage Logo" />
          </Link>
        </div>
        <ul className={style.nav_links}>
          {!auth.user ? (
            <>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/register">Sign Up</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/index">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link onClick={handleLogout} to="/">Logout</Link></li>

            </>
          )}
        </ul>
        {/* Language Selection Button */}
        <div className={style.dropdown}>
          <button className={style.language_btn}>Select Language</button>
          <div className={style.dropdown_content}>
            <a href="?lang=en">English</a>
            <a href="?lang=hi">Hindi</a>
            <a href="?lang=es">Spanish</a>
            <a href="?lang=fr">French</a>
          </div>
        </div>
      </nav>
    </div>


  );
};

export default Header;