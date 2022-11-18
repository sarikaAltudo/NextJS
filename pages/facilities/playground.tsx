import React from "react";

export const getStaticProps = () => {
    //API Call
    return {
        props : {
           footerstatus : true
        }
    }
}


const Playground = (props:true) => {
    return(
        <div>
            <h1>Playground Page</h1>
        </div>
    )
}

export default Playground;