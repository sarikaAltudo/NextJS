import React from "react";
import { useRouter } from "next/router";



// SSR (Server Side Rendering) - HTML pages are built on server request

export async function getServerSideProps(context) {
    const { id } = context.query;

    const res = await fetch('https://fakestoreapi.com/products/' + id);
    const data = await res.json();
    return {
        props: { data }

    };
}

const ProductId = (props) => {
    console.log('props-', props.data.id)

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
                    <p><strong>Price:</strong> {props.data.price}</p>
                    <p><strong>Category:</strong> {props.data.category}</p>
                </div>

            </div>
        </div>
    )
}

export default ProductId;