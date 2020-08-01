import React from "react";
import ViewBtn from "../ViewBtn";
import DeleteBtn from "../DeleteBtn";
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

export function SavedItem({ title, authors, image, description }) {
    return (
        <div className="container">

            <div className="row">
                <div className="col-4">
                    <h3>{title}</h3>
                </div>
                <div className="col-4 offset-4">
                    <ViewBtn />
                    <DeleteBtn />
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