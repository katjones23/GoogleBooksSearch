import React from "react";

const Image = ({source, altTxt}) => {
    return (
       <img src={source} alt={altTxt} />
    );
};

export default Image;