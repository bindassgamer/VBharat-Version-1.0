import React from 'react'
import Header from './Header.js';
import Footer from './Footer.js';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main >

        {children}
        <Toaster />
      </main>
      <Footer />


    </div>
  )
}

export default Layout