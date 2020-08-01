import React from "react";
import Jumbotron from "../componenets/Jumbotron"
import Search from "../componenets/Search"
import { Results, ResultsItem } from "../componenets/Results";

function Books() {


    return (
        <div>
            <Jumbotron />
            <Search />
            <Results />
        </div>
    );
}


export default Books;
