import React from "react";

let Input = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
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