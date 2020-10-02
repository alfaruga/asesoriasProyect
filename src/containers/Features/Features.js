import React from "react";
import Section from "../../components/UI/Section/Section";
import Especialidad from "../../components/Especialidad/Especialidad";
import classes from "./Features.module.scss";

const Features = (props) => {
    /*  
    A manera de nota futura: el código debajo de estas lineas se evita si pasamos directamente
    las props (src y title) como un objeto a la especialidad usando el spread operator {...especialidad}
    let titles = [];
     let links = [];
     console.log(props.features)
     for (let i = 0; i <= props.features.length; i++) {
         for (let key in props.features[i]) {
             if (key === "name") {
                 titles.push(props.features[i]["name"]);
 
             } else {
                 links.push(props.features[i]["link"]);
             }
         }
     } */
    const descripciones = ["Repaso y apoyo con tareas de cálculo, química, física, programación, inglés y más.",
        "Asesorías basadas en los exámenes de admisión y diagnóstico del CENEVAL.",
        "Asesorías en el idioma inglés por profesores certificados."];

    return (
        <Section id={"Servicios"}>
            <div className={classes.Container}>
                <h1>Nuestras especialidades<hr /></h1>
                {props.features.map((especialidad, index) => {
                    return (<Especialidad key={index} {...especialidad} >{descripciones[index]}</Especialidad>)
                })}
            </div>
        </Section>
    )
}

export default Features;