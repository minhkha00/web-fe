import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';
import News from './pages/News'
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="news" element={<News />} />
                        <Route path="news/:id" element={<SingleBlog />} />
                        <Route path="product" element={<Store />} />
                        <Route path="product/:id" element={<SingleProduct />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="checkout" element={<Checkout />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="reset-password" element={<ResetPassword />} />
                        <Route path="forgot-password" element={<ForgotPassword />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
