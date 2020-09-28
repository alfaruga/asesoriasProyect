import React from "react";

const navItem = (props) => {
    return (<li>
        <a href={props.name}>{props.section}</a>
    </li>)
}

export default navItem;