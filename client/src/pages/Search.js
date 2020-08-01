import React from "react";
import Jumbotron from "../componenets/Jumbotron"
import SearchCont from "../componenets/SearchCont"
import { Results, ResultsItem } from "../componenets/Results";

function Search() {


    return (
        <div>
            <Jumbotron />
            <SearchCont />
            <Results />
        </div>
    );
}


export default Search;
