import React from "react";
import Section from "../../components/UI/Section/Section";
import classes from "./Advantages.module.scss";

const advantages = () => {
    return (
        <Section id={"¿Cómo trabajamos?"} >
            <div className={classes.Advantages}>
                <h1>¿Cómo trabajamos?</h1>
                <div className={classes.AdvantageL} >
                    <img alt="" src="https://firebasestorage.googleapis.com/v0/b/alexis-ruiz-asesorias.appspot.com/o/deespaldas.jpg?alt=media&token=4ee7fc9a-d62e-4a17-b54b-e1cbc3a327f6"></img>
                    <div className={classes.Description}>
                        <h1>Atención personalizada</h1>
                        <h4>Sabemos que cada alumno aprende a su ritmo, por lo cual nos empeñamos a dar una excelente
                    asesoría de manera individual que se adapte a tu forma de aprender y personalidad.</h4>
                    </div>
                </div>
                <div className={classes.AdvantageR}>
                    <img alt="" src="https://firebasestorage.googleapis.com/v0/b/alexis-ruiz-asesorias.appspot.com/o/grupo.jpg?alt=media&token=1deb1d6d-7a7f-4344-9e17-4d0adc265692"></img>
                    <div className={classes.Description}>
                        <h1>Profesionistas capacitados</h1>
                        <h4>Somos un grupo de jovenes profesionistas de las mejores universidades del estado con el objetivo de que tú también puedas lograr una educación de excelencia, mediante el uso de técnicas comprobadas de estudio y la más avanzada tecnología.</h4>
                    </div>
                </div>
                <div className={classes.AdvantageL}>
                    <img alt="" src="https://firebasestorage.googleapis.com/v0/b/alexis-ruiz-asesorias.appspot.com/o/horarios.jpg?alt=media&token=a24ffab9-178e-4756-adee-8f5a52c62b3b"></img>
                    <div className={classes.Description}>
                        <h1>Horarios flexibles</h1>
                        <h4>Tenemos un amplio horario de atención y con tutores disponibles a la brevedad.</h4>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default advantages;

