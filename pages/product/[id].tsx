import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartPlus,
    faHeartCirclePlus
    
  } from "@fortawesome/free-solid-svg-icons";
  
// SSR (Server Side Rendering) - HTML pages are built on server request

export async function getServerSideProps(context) {
    try {
        const { id } = context.query;
        const res = await fetch('https://fakestoreapi.com/products/' + id);
        const data = await res.json();
        return {
            props: { data }
        };
    } catch (error) {
        return {
            notFound: true
        }
    }



}

const ProductId = (props) => {
    console.log('props-', props.data)

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Product Detail Page -SSR Method</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <div><img src={props.data.image} width="100%" /></div>
                </div>
                <div className="col-6">
                    <h3>Products : {props.data.title}</h3>
                    <h5>Rating : {props.data.rating.rate}, Count : {props.data.rating.count}</h5>
                    <p><strong>Price:</strong> ${props.data.price}</p>
                    <p><strong>Category:</strong> {props.data.category}</p>
                    <p><strong>Descriptions:</strong> {props.data.description}</p>
                    <div><Link className="btn btn-large btn-secondary m-1" href="#"><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</Link>
                    <Link className="btn btn-large btn-outline-secondary m-1" href="#"><FontAwesomeIcon icon={faHeartCirclePlus} /> Wishlist</Link></div>
                   
                </div>

            </div>
        </div>
    )
}

export default ProductId;