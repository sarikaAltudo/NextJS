import React from "react";
import styles from '../styles/About.module.css';
import Image from "next/image";
import Head from "next/head";

const About = () => {
    return(
        <>
        <Head>
            <title>About Page</title>
            <meta name="About Description" content="About Content Here" />
        </Head>
        <div className="bg-info">
            <h1 className={styles.about_text}>About Page</h1>
      
       <Image src='/imagebg.jpg' width={400} height={200} />
      
        </div>
        </>
    )
}

export default About;