import React from "react";
import Section from "../../components/UI/Section/Section";
import Information from "../../components/Information/Information";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Contact.module.scss";

//está será una página entera dedicada a el contacto, la forma más grande y con más datos. Una pequeña intrpduccion. El mapa hasta bajo y obviamente un footer


const contact = (props) => {
    return (
        <Section id="Contáctanos">

            <div className={classes.Container}>
                <h1>Contáctanos</h1>
                <div>
                    <div>
                        <h3>Síguenos en nuestras redes</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={["fab", "facebook"]} /></li>
                            <li><FontAwesomeIcon icon={["fab", "twitter"]} /></li>
                            <li><FontAwesomeIcon icon={["fab", "instagram"]} /></li>
                        </ul>
                    </div>
                    <Information
                        formIsValid={props.formIsValid}
                        inputField={props.inputField}
                        clicked={props.clicked}
                        send={props.send} />
                    <div>
                        <h3>Visítanos</h3>
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.1219808502765!2d-100.18920375014359!3d25.733479415970034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662ebc8a8012da9%3A0x7f3c7f65525aebde!2sColegio%2015%20de%20septiembre!5e0!3m2!1sen!2smx!4v1601416554966!5m2!1sen!2smx" ></iframe>
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default contact;