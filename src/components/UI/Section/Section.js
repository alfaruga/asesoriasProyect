import React from "react";

const section = (props) => {
    return (
        <section href={props.sectionName}>{props.children}
        </section>
    )
}

export default section;