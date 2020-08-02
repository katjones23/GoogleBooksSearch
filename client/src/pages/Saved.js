import React, { useState, useEffect } from "react";
import Jumbotron from "../componenets/Jumbotron"
import { SavedCont, SavedItem } from "../componenets/SavedCont"
import API from "../utils/API";

function Saved() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Jumbotron />
            {books.length ? (
                <SavedCont>
                    {books.map(book => (
                        <SavedItem key={book._id} {...book} />
                    ))}
                </SavedCont>
            ) : (
                    <SavedCont>
                        <h4>No Books Saved Yet!</h4>
                    </SavedCont>
                )}
        </div>
    );
}

export default Saved;
