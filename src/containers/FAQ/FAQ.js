import React from "react";
import Section from "../../components/UI/Section/Section";
import classes from './FAQ.module.scss';

const faq = (props) => {
    return (
        <Section id={"Preguntas Frecuentes"}>
            <div className={classes.Container}>
                <h1>
                    Preguntas frecuentes
            </h1>
                <hr></hr>
                <div>
                    <ol>
                        <li>
                            <div>
                                <h3>¿Hacen visitas a domiclio?</h3>
                                <p>Sí. Las visitas a domicilio por parte de nuestros asociados se realizan en toda el área metropolitana de Monterrey.</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>¿Cuánto cuesta?</h3>
                                <p>Nuestras tarifas son accesibles y dependen del tipo de servicio, siendo en grupo las más económicas. Por otro lado, las visitas a domicilio tienen  costo por hora y el precio depende del tipo de servicio.</p>
                            </div>
                        </li><li>
                            <div>
                                <h3>¿En que se basan sus guías de ingreso a prepa/facultad?</h3>
                                <p>Nuestro plan de estudio está basado en las <a href="https://www.ceneval.edu.mx/examenes-nacionales-de-ingreso-exani-" target="_blank">guías oficiales del CENEVAL</a>, nuestro propósito es brindar una asesoría práctica para asegurar que el estudiante pueda resolver con facilidad los exámenes que se le aplicarán.</p>
                            </div>
                        </li><li>
                            <div>
                                <h3>¿Tienen garantía?</h3>
                                <p>Garantizamos que adquirirás el conocimiento necesario para aprobar tus exámenes, apoyandote con técnicas de estudio que te ayuden a ser mejor estudiante.</p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </Section>
    )
}

export default faq;

