import React from "react";
import Section from "../../components/UI/Section/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const welcomeSection = (props) => {
    return (
        <Section id={"#welcome"} href={"Welcome"}>
            <div>
                <h1>Asesorías personalizadas</h1>
                <h3>Te brindamos apoyo para cualquier tipo de exámenes.</h3>
                <FontAwesomeIcon icon={["fab", "whatsapp-square"]} />8120269293
                <FontAwesomeIcon icon={["fas", "phone"]} />
            </div>
        </Section>
    )
}

export default welcomeSection;