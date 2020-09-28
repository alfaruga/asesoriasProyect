import React from "react";
import classes from "./Input.module.scss";

const input = (props) => {

    let inputElement = null;
    const inputClasses = [classes.inputElement];

    if (props.invalid) {
        inputClasses.push(classes.Invalid)
    }
    switch (props.elementType) {
        case ("input"):
            inputElement = <input className={inputClasses.join(" ")} onChange={props.changed} {...props.elementConfig} value={props.value} />;
            break;
        case ("textArea"):
            inputElement = <textarea className={inputClasses.join(" ")} onChange={props.changed} {...props.elementConfig} value={props.value} />;
            break;
        case ("select"):
            inputElement = <select className={inputClasses.join(" ")} onChange={props.changed}
                {...props.elementConfig}
                value={props.value} >
                {props.elementConfig.options.map(option => {
                    return (
                        <option
                            key={option.value}
                            value={option.value} >{option.displayValue}
                        </option>
                    )
                })}
            </select>;
            break;

        default:
            inputElement = <input />;
    }

    return (
        <div>
            <label >
                {inputElement}
            </label>
        </div>
    )
}

export default input;