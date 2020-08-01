import React from "react";

function DeleteBtn(props) {
    return (
        <button onClick={props.handleDelete} type="button" className="btn btn-danger">Delete</button>
    );
}

export default DeleteBtn;
