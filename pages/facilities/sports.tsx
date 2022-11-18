import React from "react";

export const getStaticProps = () => {
    //API Call
    return {
        props : {footerstatus : true}
    }
}


const Sports = (props:true) => {
    return(
        <div>
            <h1>Sports Page</h1>
            
        </div>
    )
}

export default Sports;