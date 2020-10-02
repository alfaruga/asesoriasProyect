import classes from "./navItem.module.scss";
import React from "react";

const navItem = (props) => {
    return (<li className={classes.Navlink}>
        <a onClick={props.linkClicked} href={props.name}>{props.section.replace("#", "")}</a>
    </li>)
}

export default navItem;