import React from "react";

function InputField({ name, inputType, label, value, changeHandler}) {
    return(
        <>
            <label htmlFor={`form-${name}`}>{label}</label>
            <input
                type={inputType}
                id={`form-${name}`}
                name={name}
                value={value}
                onChange={(e) => changeHandler(e.target.value)}
            />
        </>
    );
}

export default InputField;