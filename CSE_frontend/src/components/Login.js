import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createLogin } from '../actions';

class Login extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className=`form-group ${touched && error ?  'has-danger': ''}`;
    return (
        
      <div className={className}>
      <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched? error : ""}
        </div>
     </div>
   );
  }

  onSubmit(values) {
    this.props.createLogin(values, () => {
      this.props.history.push('/sign_in');
    });
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field 
          label="ID"
          name="username"
          component={this.renderField}
        />
        <Field 
          label="Password"
          name="passwd"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Login</button>
        <Link to="/sign_in" className="btn btn-danger">Cancel</Link>
       </form>
      );
    }
}

function validate(values) {
    const errors = {};
    if(!values.username) {
        errors.username = "Enter ID";
    }
    if(!values.passwd) {
        errors.passwd = "Enter password";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: "LoginNewForm"
})(
  connect(null,{ createLogin })(Login)
);
