import React from "react";

function ViewBtn(props) {
    return (
        <button onClick={props.handleView} type="button" className="btn btn-primary">View</button>
    );
}

export default ViewBtn;
