import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";


const Layout = ({children}) => {
    return(
        <>
        <div className="container">
            <Header />
            <Navbar />
            
            {children}
            <Footer />
        </div>
        </>
    )
}

export default Layout;