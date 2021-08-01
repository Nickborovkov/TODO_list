import React from "react";

const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return <div>
        <input {...input} {...props}/>
        <div>
            {
                hasError && <div>{meta.error}</div>

            }
        </div>
    </div>
}

export default Input