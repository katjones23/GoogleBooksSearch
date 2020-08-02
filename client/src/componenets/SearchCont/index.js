import React from "react";
import "./style.css"

export function SearchCont({ children }) {
    return (
        <div className="container justify-content-center">
            <div className="searchCont">
                <h3 className="searchHeader">Book Search</h3>
                <form>
                    {children}
                </form>
            </div>
        </div>
    );
}

export function SearchInput(props) {
    return (
        <div className="form-group">
            <label htmlFor="searchBar">Book</label>
            <input {...props} type="text" className="form-control" id="searchBar" placeholder="Harry Potter" />
        </div>
    )
};

export function SearchBtn(props) {
    return (
        <div className="text-right">
            <button {...props} type="submit" className="btn searchBtn">Search</button>
        </div>
    )
};
