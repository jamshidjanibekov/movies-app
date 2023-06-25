import {TextFieldProps} from "./text-field.props";
import {FieldHookConfig, useField, ErrorMessage} from 'formik'
import React from "react";

const  TextField = ({...props}:TextFieldProps & FieldHookConfig<string>) =>{
    const [field, meta] = useField(props);

    return (
        <div className='inline-block w-full'>
            <label className={`inline-block w-full ${meta.touched && meta.error && 'border-red-500 border-2'}`}>
                <input  className='input' {...props} {...field}/>
            </label>
            <p className='text-red-500'></p>
            <ErrorMessage name={field.name}/>
        </div>
    )
}
export default TextField