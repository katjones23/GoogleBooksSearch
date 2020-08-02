import React from "react";
import ViewBtn from "../ViewBtn";
import Image from "../Image";
import "./style.css"

export function SavedCont({ children }) {
    return (
        <div className="container justify-content-center">
            <div className="savedCont">
                <h3 className="savedHeader">Saved Books</h3>
                {children}
            </div>
        </div>
    );
}

export function SavedItem({ children, title, subtitle, authors, image, description, link }) {
    function handleView(event) {
        event.stopPropagation();

        window.open(link);
    };


    return (
        <div className="container">

            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <h5>{title}</h5>
                    <em>{subtitle}</em>
                </div>
                <div className="col-md-4 col-sm-12 offset-4 text-right">
                    <ViewBtn onClick={handleView} />
                    {children}
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <p>Written By {authors.join(", ")}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <Image source={image} altTxt={title} />
                </div>
                <div className="col-md-9 col-sm-12">
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
}
