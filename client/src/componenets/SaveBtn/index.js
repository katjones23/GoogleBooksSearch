import React from "react";
import "./style.css"

function SaveBtn(props) {
    return (
        <button {...props} type="button" className="saveBtn btn btn-primary">Save</button>
    );
}

export default SaveBtn;
