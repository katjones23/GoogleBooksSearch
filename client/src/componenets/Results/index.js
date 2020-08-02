import React from "react";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";
import Image from "../Image";
import "./style.css"

export function Results({ children }) {
    return (
        <div className="container justify-content-center">
            <div className="resultsCont">
                <h3 className="resultsHeader">Results</h3>
                {children}
            </div>
        </div>
    );
}

export function ResultsItem({ title, authors, imageLinks, description }) { 
    
    return (
        <div className="container">

            <div className="row">
                <div className="col-4">
                    <h3>{title}</h3>
                </div>
                <div className="col-4 offset-4">
                    <ViewBtn />
                    <SaveBtn />
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <h5>Written By {authors.join(", ")}</h5>
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <Image source={imageLinks.thumbnail} altTxt={title} />
                </div>
                <div className="col-9">
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
}
