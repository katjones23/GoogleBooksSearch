import React, { useState } from "react";
import Jumbotron from "../componenets/Jumbotron"
import { SearchCont, SearchInput, SearchBtn } from "../componenets/SearchCont"
import { Results } from "../componenets/Results";
import API from "../utils/API"

function Search() {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])

    function handleChange(event) {
        let searchItem = event.target.value;
        setSearch(searchItem.toLowerCase())
    };

    function handleSearch(event) {
        event.preventDefault();

        API.searchBooks(search)
            .then(res => {
                setResults(res.data)
                console.log(results)
            })
            .then(setSearch(""))
            .catch(err => console.log(err))
    };


    return (
        <div>
            <Jumbotron />
            <SearchCont>
                <SearchInput onChange={handleChange}/>
                <SearchBtn onClick={handleSearch} />
            </SearchCont>
            <Results />
        </div>
    );
}


export default Search;
