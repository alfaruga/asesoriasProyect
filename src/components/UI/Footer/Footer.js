import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classes from "./Footer.module.scss";

const footer = (props) => {
    return (

        <footer className={classes.Footer}>
            <div>
                <p><strong>R3 asesorías</strong> <FontAwesomeIcon icon={["fas", "circle"]} />Av. 16 de Septiembre 400-C, Alamos del Parque, 66633 Cd Apodaca, N.L. <FontAwesomeIcon icon={["fas", "circle"]} />Atención a clientes 8181811881</p>
                <p>&#174;2020 R&R Asesorías. Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default footer;