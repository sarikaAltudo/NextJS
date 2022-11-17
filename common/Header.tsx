import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="">
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a href="/"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="/"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>

          </div>
          <div className="col-4 text-center">
            <Link className="blog-header-logo text-dark" href="/"><Image src='/altudo_logo.png' width={100} height={60} /></Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="text-muted" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
            </a>
            <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Header;