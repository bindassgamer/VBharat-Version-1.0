import React from 'react';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
// import Pilgrimages from './pages/Pilgrimages.js';
import Login from './pages/Auth/Login.js';
import Register from './pages/Auth/Register.js';
import Forget from './pages/Auth/Forgetpass.js';
import Otp from './pages/Auth/Otp.js';
import PageNotFound from './pages/PageNotFound.js';
import Blog_details from './pages/Blog_details.js';
import Blog_kedar from './pages/Blog_kedar.js';
import Blog from './pages/Blog.js';
import Darbar from './pages/Darbar.js';
import PrivateRoute from './pages/Auth/Private.js';
import { BrowserRouter as  Router,Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Pilgrimage from './pages/pilgrimages.js';


const App = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/forgot" element={<Forget />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/index" element={<Index />} />



            <Route element={<PrivateRoute />}>
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/darbar" element={<Darbar />} />
                <Route path="/blog_details" element={<Blog_details />} />
                <Route path="/blog_kedar" element={<Blog_kedar />} />
                <Route path="/pilgrimages" element={<Pilgrimage />} />
                
                
            </Route>
            <Route path="*" element={<PageNotFound />} />

        </Routes>
        </>
    );
}

export default App;












