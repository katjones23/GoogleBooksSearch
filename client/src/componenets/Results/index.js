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

export function ResultsItem({ title, subtitle, authors, imageLinks, description }) { 
    

    return (
        <div className="container">

            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <h5>{title}</h5>
                    <em>{subtitle}</em>
                </div>
                <div className="col-md-4 col-sm-12 offset-4 text-right">
                    <ViewBtn />
                    <SaveBtn />
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <p>Written By {authors.join(", ")}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <Image source={imageLinks.thumbnail} altTxt={title} />
                </div>
                <div className="col-md-9 col-sm-12">
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
}
