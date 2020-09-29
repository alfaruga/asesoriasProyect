import React from "react";
import Information from "../../Information/Information";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const footer = (props) => {
    return (

        <footer>
            <ul>
                <li><FontAwesomeIcon icon={["fab", "facebook"]} /></li>
                <li><FontAwesomeIcon icon={["fab", "twitter"]} /></li>
                <li><FontAwesomeIcon icon={["fab", "instagram"]} /></li>
            </ul>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.1219808502765!2d-100.18920375014359!3d25.733479415970034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662ebc8a8012da9%3A0x7f3c7f65525aebde!2sColegio%2015%20de%20septiembre!5e0!3m2!1sen!2smx!4v1601416554966!5m2!1sen!2smx" ></iframe>
            <Information
                formIsValid={props.formIsValid}
                inputField={props.inputField}
                clicked={props.clicked}
                send={props.send} />
            <div>
                <p><strong>R&R asesorís</strong> <FontAwesomeIcon icon={["fas", "circle"]} />Av. 16 de Septiembre 400-C CARNES ABARROTES EXPRES, Alamos del Parque, 66633 Cd Apodaca, N.L. <FontAwesomeIcon icon={["fas", "circle"]} />Atención a clientes 8181811881</p>
                <p>&#174;2020 R&R Asesorías. Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default footer;