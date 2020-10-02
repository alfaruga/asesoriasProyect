import React from "react";
import Section from "../../components/UI/Section/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./WelcomeSection.module.scss"

const welcomeSection = (props) => {
    return (
        <Section className={classes.Main} id={"Inicio"} href={"Welcome"}>
            <div className={classes.WelcomeSection}>
                <video autoPlay loop muted src="https://firebasestorage.googleapis.com/v0/b/alexis-ruiz-asesorias.appspot.com/o/bgvideo.mp4?alt=media&token=fcb04b19-db3f-4172-ae6c-2d774094a9d2" className={classes.Video}>

                </video>
                <div className={classes.Info}>
                    <div>
                        <h1>Asesorías <span>personalizadas</span></h1>
                        <h3>Te brindamos apoyo para cualquier tipo de exámenes.</h3>
                        <p>Contáctanos vía whatsapp o llámanos <span>ahora mismo</span></p>
                        <a href="https://wa.me/528120269293" target="_blank"><FontAwesomeIcon icon={["fab", "whatsapp-square"]} /></a>
                        <a href="tel:8120269293"><FontAwesomeIcon icon={["fas", "phone"]} /></a>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default welcomeSection;