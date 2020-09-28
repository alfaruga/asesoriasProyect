import React from "react";
import Section from "../../components/UI/Section/Section";
import Input from "../../components/UI/Input/Input";

const information = (props) => {
    const makeArrayFromInputField = [];

    for (let key in props.inputField) {
        makeArrayFromInputField.push({ id: key, config: props.inputField[key] })
    }
    return (
        <Section>
            <h1>
                ¿Más información?
            </h1>
            <hr />
            <h4>Ingresa tu duda junto con tus datos de contacto y en seguida te atenderemos</h4>
            <form onSubmit={props.send}>
                {makeArrayFromInputField.map(elementType => {
                    return (
                        <Input
                            invalid={!elementType.config.valid}
                            changed={(event) => props.clicked(event, elementType.id)}
                            key={elementType.id}
                            elementType={elementType.config.elementType}
                            elementConfig={elementType.config.elementConfig}
                            value={elementType.config.value}
                        ></Input>
                    )
                })}
                <button onClick={props.clicked}>Enviar</button>
            </form>
        </Section>
    )
}

export default information