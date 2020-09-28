import React from "react";
import Section from "../../components/UI/Section/Section";
import Especialidad from "../../components/Especialidad/Especialidad";

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
    const descripciones = ["Repaso de cálculo, química, física, programación, inglés y más.",
        "Asesorías para ingreso a preparatoria y facultad, basadas en los exámenes de ADMISIÓN y DIAGNÓSTICO del CENEVAL.",
        "Asesorías en el idioma inglés por profesores certificados."];

    return (
        <Section>
            <h1>Nuestras especialidades</h1>
            {props.features.map((especialidad, index) => {
                return (<Especialidad key={index} {...especialidad} >{descripciones[index]}</Especialidad>)
            })}
        </Section>
    )
}

export default Features;