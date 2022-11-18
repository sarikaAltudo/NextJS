import React from "react";

export const getStaticProps = () => {
    //API Call
    return {
        props : {
           footerstatus : true
        }
    }
}


const Library = (props:true) => {
    return(
        <div>
            <h1>Library Page</h1>
            
        </div>
    )
}

export default Library;