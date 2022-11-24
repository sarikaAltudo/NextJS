import React from "react";



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
                    <p><strong>Price:</strong> {res.price}</p>
                    <p><strong>Category:</strong> {res.category}</p>
                </div>

            </div>
        </div>
    )
}

export default Year;