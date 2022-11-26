import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" href="/"><Image src='/home.jpg' width={30} height={30} alt="About Image" title="About Image"/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active"><Link className="nav-link" href="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/courses">Courses</Link></li>
                            <li className="nav-item"> <Link className="nav-link" href="/contact">Contact</Link></li>
                            <li className="nav-item"> <Link className="nav-link" href="/facilities">Facilities</Link></li>
                            <li className="nav-item"> <Link className="nav-link" href="/product">Products</Link></li>
                            <li className="nav-item"> <Link className="nav-link" href="/batches">Batches</Link></li>
                        </ul>
                    </div>

                </nav>
            </div>

        </div>
    )
}

export default Navbar;