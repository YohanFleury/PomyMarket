import React from 'react'

import { useField, ErrorMessage } from 'formik'

const InputField = ({ type, inputClass, label, ...props }) => {

    const [field, meta] = useField(props)
    return (
        <div className="form-element">
            <label className="label" htmlFor={field.name}>{label}</label>
            <div>
                <input className={inputClass} {...field} {...props} autoComplete="off" />
                <ErrorMessage component="div" name={field.name} className="error" />
            </div>
        </div>
    )
}

export default InputField
