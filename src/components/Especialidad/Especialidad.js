import React from "react";

const especialidad = (props) => {
    return (
        <div>
            <img src={props.src} alt="" />
            <div>
                <h1>TEST{props.title}</h1>

                {props.children}
            </div>
        </div>
    )
}

export default especialidad;