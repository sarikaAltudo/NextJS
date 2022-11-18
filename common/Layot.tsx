import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";


const Layout = (props) => {
    const {children, footerstatus} = props;
    return(
        <>
        <div className="container">
            <Header />
            <Navbar />
            {children}
           {!footerstatus && (<Footer />)} 
        </div>
        </>
    )
}

export default Layout;