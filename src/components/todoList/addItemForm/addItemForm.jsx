import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import styles from './addItemForm.module.css'
import {maxLength, required} from "../../../utils/formHelpers/validators";
import Input from "../../../utils/formHelpers/formControls";

const AddNewItem = ({addItem}) => {

    const onAddItem = (formValues, dispatch) => {
        addItem(formValues.addItem)
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