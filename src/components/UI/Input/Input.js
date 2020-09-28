import React from "react";

const input = (props) => {

    let inputElement = null;
    switch (props.elementType) {
        case ("input"):
            inputElement = <input onChange={props.changed} {...props.elementConfig} value={props.value} />;
            break;
        case ("textArea"):
            inputElement = <textarea onChange={props.changed} {...props.elementConfig} value={props.value} />;
            break;
        case ("select"):
            inputElement = <select onChange={props.changed}
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