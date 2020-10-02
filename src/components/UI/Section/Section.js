import classes from "./Section.module.scss";
import React from "react";

const section = (props) => {
    return (
        <section className={classes.Section} id={props.id} href={props.sectionName}>{props.children}
        </section>
    )
}

export default section;