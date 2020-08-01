import React from "react";

function SaveBtn(props) {
    return (
        <button onClick={props.handleSave} type="button" className="btn btn-primary">Save</button>
    );
}

export default SaveBtn;
