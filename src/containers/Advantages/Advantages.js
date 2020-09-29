import React from "react";
import Section from "../../components/UI/Section/Section";
import classes from "./Advantages.module.scss";

const advantages = () => {
    return (
        <Section id={"adv"} className={classes.Advantages}>
            <div className={classes.AdvantageL} >
                <img alt="" src="https://firebasestorage.googleapis.com/v0/b/alexis-ruiz-asesorias.appspot.com/o/pexels-julia-m-cameron-4144101.jpg?alt=media&token=2ce0cb81-ee50-445c-a9e0-05b0351407d5"></img>
                <h1>Atención personalizada</h1>
                <h4>Sabemos que cada alumno aprende a su ritmo, por lo cual nos empeñamos a dar una excelente
                    asesoría de manera individual que se adapte a tus horarios y personalidad</h4>
            </div>
            <div className={classes.AdvantageR}>
                <img alt="" src="https://firebasestorage.googleapis.com/v0/b/alexis-ruiz-asesorias.appspot.com/o/annie-spratt-MChSQHxGZrQ-unsplash.jpg?alt=media&token=c5cd4182-0f16-45bf-817f-53462a1f825d"></img>
                <h1>Profesionistas capacitados</h1>
                <h4>Somos un grupo de jovenes profesionistas de las mejores universidades del estado con el objetivo de que tú también puedas lograr una educación de excelencia, mediante el uso de técnicas comprobadas de estudio y la más avanzada tecnología.</h4>
            </div>
            <div className={classes.AdvantageL}>
                <img alt="" src="https://firebasestorage.googleapis.com/v0/b/alexis-ruiz-asesorias.appspot.com/o/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg?alt=media&token=8de78427-9028-46af-8b36-e082e69b89e2"></img>
                <h1>Horarios flexibles</h1>
                <h4>Contamos con asesorias para ingreso a nivel superior y medio superior con guías actualizadas del EXANI de CENEVAL con explicaciones claras y ejemplos</h4>
            </div>
        </Section>
    )
}

export default advantages;