import React from "react";
import {Field, reduxForm, reset} from "redux-form";

const AddNewItem = ({addItem}) => {

    const onAddItem = (formValues, dispatch) => {
        addItem(formValues.addItem)
        dispatch(reset(`addItemForm`))
    }

    return <AddItemFormRedux onSubmit={onAddItem}/>
}

export default AddNewItem

const AddItemForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field component='input'
               type='text'
               placeholder='Write here...'
               name='addItem'/>
        <button>Add</button>
    </form>
}

const AddItemFormRedux = reduxForm({
    form: `addItemForm`
})(AddItemForm)