import React from "react";

const section = (props) => {
    return (
        <section id={props.id} href={props.sectionName}>{props.children}
        </section>
    )
}

export default section;