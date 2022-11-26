import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import {
    faCartPlus,
    faHeartCirclePlus
    
  } from "@fortawesome/free-solid-svg-icons";

//SSG (Static Site Generation) - HTML Pages are built initially

export const getStaticPaths = async () => {
    //const arr = ["2022", "2021", "2020", "2019", "2018"];
    const response = await fetch('https://fakestoreapi.com/products');
    const arr = await response.json();
    const paths = arr.map((item) => {
        return {
            params: { year: item.id.toString() }
        };
    });

    return {
        paths,
        fallback: false // If Page fails then go on 404
    }
};


export const getStaticProps = async (context) => {
    const temp = context.params.year;
    const response = await fetch('https://fakestoreapi.com/products/' + temp);
    const data = await response.json();
    return {
        props: {
            res: data,
            layout: false
        }
    }
}
const Year = ({ res }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Product Detail Page - SSG Method</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <div><img src={res.image} width="100%" /></div>
                </div>
                <div className="col-6">
                    <h3>Products : {res.title}</h3>
                    <h5>Rating : {res.rating.rate}, Count : {res.rating.count}</h5>
                    <p><strong>Price:</strong> {res.price}</p>
                    <p><strong>Category:</strong> {res.category}</p>
                    <p><strong>Descriptions:</strong> {res.description}</p>
                    <div><Link className="btn btn-large btn-secondary m-1" href="#"><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</Link>
                    <Link className="btn btn-large btn-outline-secondary m-1" href="#"><FontAwesomeIcon icon={faHeartCirclePlus} /> Wishlist</Link></div>
                   
                </div>

            </div>
        </div>
    )
}

export default Year;