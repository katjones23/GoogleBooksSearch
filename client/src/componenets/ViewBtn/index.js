import React from "react";
import "./style.css"

function ViewBtn(props) {
    return (
        <button {...props} type="button" className="viewBtn btn btn-primary">View</button>
    );
}

export default ViewBtn;
