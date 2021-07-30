import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import styles from './addItemForm.module.css'
import {maxLength, required} from "../../../utils/formHelpers/validators";
import Input from "../../../utils/formHelpers/formControls";

const AddNewItem = ({items, addItem}) => {

    const onAddItem = (formValues, dispatch) => {

        let months = [`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`]
        let days = [`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`]

        let now = new Date()

        let newDate = `${months[now.getMonth()]} ${days[now.getDay()]} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        addItem(formValues.addItem, newDate)
        localStorage.setItem(`${items.length + 1}`, JSON.stringify([items.length + 1, formValues.addItem, false, newDate]))
        dispatch(reset(`addItemForm`))
    }

    return <AddItemFormRedux onSubmit={onAddItem}/>
}

export default AddNewItem

const AddItemForm = ({handleSubmit}) => {
    return <form className={styles.form} onSubmit={handleSubmit}>
        <Field className={styles.input}
               component={Input}
               type='text'
               placeholder='Add a goal here...'
               name='addItem'
               validate={[required, maxLength]}/>
        <button className={styles.button}>Add</button>
    </form>
}

const AddItemFormRedux = reduxForm({
    form: `addItemForm`
})(AddItemForm)