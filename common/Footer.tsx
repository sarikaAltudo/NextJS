import React from "react";
import Link from "next/link";
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <footer className={styles.footer}>
                        <p>Next JS Test Site <Link href="/">NextJS</Link> by <Link href="/"> @Sarika </Link>.</p>
                        <p>
                            <Link href="#">Back to top</Link>
                        </p>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer;