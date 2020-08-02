import React, { useState } from "react";
import Jumbotron from "../componenets/Jumbotron"
import { SearchCont, SearchInput, SearchBtn } from "../componenets/SearchCont"
import { Results, ResultsItem } from "../componenets/Results";
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

        let query = search.replace(/\s/g, "+")

        API.searchBooks(query)
            .then(res => {  
                console.log(res.data)
                setResults(res.data)
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
            {results.length ? (
                <Results>
                    {results.map(result => (
                        <ResultsItem key={result.id} {...result.volumeInfo} />
                    ))}
                </Results>
            ) : (
                <Results>
                    <h4>No Results Found!</h4>
                </Results>
            )}
        </div>
    );
}


export default Search;
