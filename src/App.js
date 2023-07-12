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
function App() {
  return (
    <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}></Route>
                        <Route path="about" element={<About/>}/>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="news" element={<News/>}/>
                        <Route path="store" element={<Store/>}/>
                        <Route path="login" element={<Login/>}/>

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
  );
}

export default App;
