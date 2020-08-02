import React from "react";
import "./style.css"

function DeleteBtn(props) {
    return (
        <button {...props} type="button" className="deleteBtn btn btn-primary">Delete</button>
    );
}

export default DeleteBtn;
