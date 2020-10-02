import classes from "./Especialidad.module.scss";
import React from "react";

const especialidad = (props) => {
    return (
        <div className={classes.Especialidad}>
            <img src={props.src} alt="" />
            <div>
                <h3>{props.title}</h3>
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default especialidad;