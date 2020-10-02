import React from "react";
import Section from "../UI/Section/Section";
import Input from "../UI/Input/Input";
import classes from "./Information.module.scss";

const information = (props) => {
    const makeArrayFromInputField = [];

    for (let key in props.inputField) {
        makeArrayFromInputField.push({ id: key, config: props.inputField[key] })
    }
    return (
        <div className={classes.Container}>
            <h4>Solicita más información</h4>
            <form onSubmit={props.send} className={classes.Form}>
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
        </div>
    )
}

export default information