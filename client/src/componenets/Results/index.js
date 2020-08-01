import React from "react";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";
import Image from "../Image";

export function Results({ children }) {
    return (
        <div className="container">
            <h3>Results</h3>
            {children}
        </div>
    );
}

export function ResultsItem({ title, authors, image, description }) {
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
                    <h5>Written By {authors}</h5>
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <Image source={image} altTxt={title} />
                </div>
                <div className="col-9">
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
}