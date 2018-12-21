import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {

    remderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    renderError({error, touched}) {
        if(touched && error) {
            return (<div className="ui error message">
                        <p className="header">{error}</p>
                    </div>)
        }
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }
    render() {
        return (
            <form className={"ui form error"} onSubmit={this.props.handleSubmit(this.onSubmit)}>
               <Field 
                name="title" 
                component={this.remderInput} 
                label={"Enter title"}
                />

               <Field 
                name="description" 
                component={this.remderInput} 
                label={"Enter description"}
                />

               <button className={"ui button primary"} type="submit">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {}
    if(!formValues.title) {
        errors.title = "You must enter a title"
    }

    if(!formValues.description) {
        errors.description = "You must enter a description"
    }

    return errors
} 

export default reduxForm({form:"streamForm", validate})(StreamForm)
