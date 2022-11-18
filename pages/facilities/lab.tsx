import React from "react";

export const getStaticProps = () => {
    //API Call
    return {
        props : {
           footerstatus : true
        }
    }
}

const Lab = (props:true) => {
    return(
        <div>
            <h1>Lab Page</h1>
            
        </div>
    )
}

export default Lab;