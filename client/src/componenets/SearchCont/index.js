import React from "react";

function Search(props) {
    return (
        <div className="container">
            <h3>Book Search</h3>
            <form>
                <div className="form-group">
                    <label for="searchBar">Book</label>
                    <input type="text" className="form-control" id="searchBar" placeholder="Harry Potter"></input>
                </div>
                <button onClick={props.handleSearch} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Search;
