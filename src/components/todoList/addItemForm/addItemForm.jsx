import React from "react";
import styles from './addItemForm.module.css'
import media from './addItemFormMedia.module.css'
import cn from 'classnames'
import {Formik} from "formik";
import * as yup from 'yup'
import {useDispatch} from "react-redux";
import {addItem} from "../../../redux/todoReducer";

const AddNewItem = () => {

    const dispatch = useDispatch()

    const validationSchema = yup.object().shape({
        itemText: yup
            .string()
            .required(`Goal can't be empty`)
            .max(300, `Max length is 300 symbols`)
    })

    return (
        <div>
            <Formik
                initialValues={{
                    itemText: ''
                }}
                validateOnBlur
                onSubmit = { (values, {resetForm}) =>{
                    dispatch(addItem(values.itemText))
                    resetForm({values: ``})
                } }
                validationSchema={validationSchema}
            >
                { ({ values, errors, touched, handleChange, handleBlur, handleSubmit,
                   isValid, dirty}) => (
                    <div className={cn(styles.form, media.form)}>
                        {touched.itemText && errors.itemText &&
                        <div className={cn(styles.errorArea, media.errorArea)}>{errors.itemText}</div>}
                        <input
                            className={cn(styles.input, media.input)}
                            type = 'text'
                            name = 'itemText'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.itemText}
                            placeholder='Add a goal here...'/>



                        <button className={cn(styles.button, media.button)}
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type={'submit'}>Add</button>
                    </div>
                ) }
            </Formik>
        </div>
    )
}

export default AddNewItem