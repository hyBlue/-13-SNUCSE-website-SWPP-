import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createNotice} from '../actions';

import { Form, Button, Upload, Rate } from 'antd';
const FormItem = Form.Item;

class NoticeCreate  extends Component {
   
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className=`form-group ${touched && error ?  'has-danger': ''}`;
        return (
            <div className={className}>
            <label>{field.label}</label>
                <input className="form-control" 
                  type="text"
                  //onChange={field.input.onChange}
                  //onFocus={field.input.onFoucs} etc 
                  {...field.input} 
                />
                <div className="text-help">
                {touched? error : ''}
                </div>
            </div>
            //field.meta.error: connect validate error with field. 
            //Name should be identical
        )
    }

    onSubmit(values) {
        this.props.createNotice(values, () => {
            this.props.history.push('/notice');
        });
    }
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="제목"
                    name="title"
                    component={this.renderField}
                />
                {/* <Field 
                    label="분류"
                    name="categories"
                    component={this.renderField}
                /> */}
                <Field 
                    label="내용"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">
                작성완료</button>
                <Link to="/notice" className="btn btn-danger">취소</Link>
            </form>
        );
    }
}

function validate(values) {
    //console.log(values) -> {title: 'dsd', categories: 'asd', content: 'afda'}
    const errors = {};
    //Validate the inputs from 'values'
    //You can customize this
    if(!values.title) {
        errors.title = "Enter a title";
    }
    if(!values.categories) {
        errors.categories = "Enter some categories";
    }
    if(!values.content) {
        errors.content = "Enter a content";
    }
    //If errors is empty, the form is fine to submit
    //If erros has any properties, redux form assume form is invalid
    return errors;
}
//help component to communicate with redux directly
//without connect and action creator? perhaps
export default reduxForm({
    validate,
    form: 'NoticeNewForm'
})(
  connect(null,{ createNotice })(NoticeCreate)
);