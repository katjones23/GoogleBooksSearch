import React from "react";
import "./style.css"

function Search(props) {
    return (
        <div className="container justify-content-center">
            <div className="searchCont">
                <h3 className="searchHeader">Book Search</h3>
                <form>
                    <div className="form-group">
                        <label for="searchBar">Book</label>
                        <input type="text" className="form-control" id="searchBar" placeholder="Harry Potter"></input>
                    </div>
                    <div className="text-right">
                        <button onClick={props.handleSearch} type="submit" className="btn searchBtn">Search</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Search;
