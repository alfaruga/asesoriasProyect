import React from "react";
import Section from "../UI/Section/Section";
import Input from "../UI/Input/Input";

const information = (props) => {
    const makeArrayFromInputField = [];

    for (let key in props.inputField) {
        makeArrayFromInputField.push({ id: key, config: props.inputField[key] })
    }
    return (
        <Section>
                   
            <h4>Ingresa tu duda junto con tus datos de contacto y en seguida te atenderemos</h4>
            <hr />
            <form onSubmit={props.send}>
                {makeArrayFromInputField.map(elementType => {
                    return (
                        <Input
                            touched={elementType.config.touched}
                            shouldValidate={elementType.config.validation}
                            errorMsg={elementType.config.msg}
                            invalid={!elementType.config.valid}
                            changed={(event) => props.clicked(event, elementType.id)}
                            key={elementType.id}
                            elementType={elementType.config.elementType}
                            elementConfig={elementType.config.elementConfig}
                            value={elementType.config.value}
                        ></Input>
                    )
                })}
                <button disabled={!props.formIsValid}>Enviar</button>
            </form>
        </Section >
    )
}

export default information