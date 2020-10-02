import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavItem from "../navItem/navItem";
import classes from "./navbar.module.scss";

const navbar = (props) => {
    let classesToList = [classes.NavList];
    if (!props.show) {
        classesToList.push(classes.HideList);
    }
    return (
        <header className={classes.Logos}>
            <div >
                <FontAwesomeIcon className={classes.Icon} onClick={props.clicked} icon={["fa", "bars"]} />

                <img
                    alt="logo"
                    src="https://firebasestorage.googleapis.com/v0/b/alexis-ruiz-asesorias.appspot.com/o/R.jpg?alt=media&token=2f4c2ff6-cd6d-48da-bfb0-e885971ce188"
                    width="100px"
                    height="100px"
                /><p><strong>R&R</strong> Asesorías</p>
            </div>
            <ul className={classesToList.join(" ")}>
                {props.sections.map(section => {
                    return (<NavItem linkClicked={props.linkClicked} name={section} section={section} key={section} ></NavItem>)
                })}
            </ul>
        </header>
    )
}
export default navbar;