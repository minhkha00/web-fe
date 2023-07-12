import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const Layout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}

export default Layout;