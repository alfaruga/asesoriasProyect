import React from "react";
import NavItem from "../navItem/navItem";

const navbar = (props) => {

    return (
        <header>
            <img
                alt=""
                src=""
                width=""
                height=""
                className="d-inline-block align-top"
            />Asesorías
                R<sup>3</sup>
            <ul>
                {props.sections.map(section => {
                    return (<NavItem name={section} section={section} key={section} ></NavItem>)
                })}
            </ul>
        </header>
    )
}
export default navbar;