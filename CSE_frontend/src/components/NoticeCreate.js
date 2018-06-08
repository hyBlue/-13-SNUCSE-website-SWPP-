import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createNotice } from '../actions';
import 'babel-polyfill';
import { Editor, EditorState, RichUtils } from 'draft-js';

//This part is the problem.
//import { DatePicker } from 'antd';

//import Button from 'antd/lib/button';  // for js
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Dropzone from 'react-dropzone';

class NoticeCreate extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty(),
            accepted: [],
            rejected: [],
            acceptedImages: []
        }
        this.onChange = (editorState) => this.setState({ editorState })
    }

    renderTextField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <Input className="form-control"
                    type="text"
                    //"text"
                    //onChange={field.input.onChange}
                    //onFocus={field.input.onFoucs} etc 
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
            //field.meta.error: connect validate error with field. 
            //Name should be identical
        )
    }
    renderTextAreaField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <Input className="form-control"
                    type="textarea"
                    //"text"
                    //onChange={field.input.onChange}
                    //onFocus={field.input.onFoucs} etc 
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
            //field.meta.error: connect validate error with field. 
            //Name should be identical
        )
    }

    //파일 첨부-테스트
    renderFileInput({
        input: { value: omitValue, onChange, onBlur, ...inputProps, },
        meta: omitMeta,
        ...props, }) {
        const className = `form-group`
        const adaptFileEventToValue = (delegate) =>
            e => delegate(e.target.files[0])
        return (
            <div className={className}>
                <Input
                    className="form-control"
                    onChange={adaptFileEventToValue(onChange)}
                    onBlur={adaptFileEventToValue(onBlur)}
                    type="files"
                    {...inputProps}
                    {...props}
                />
            </div>
        )
    }

    renderDropZoneField(field) {
        //let files = field.input.value;
        let dropzoneRef;
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <div className="form-control">
                    <button type="button" onClick={() => { dropzoneRef.open() }}>
                        파일 가져오기
                    </button>
                    <Dropzone className="form-control"
                        ref={(node) => { dropzoneRef = node; }}
                        name={field.name}
                        onDrop={(accepted, rejected) => {
                            this.setState({ accepted: this.state.accepted.concat(accepted), rejected })
                            field.input.onChange(this.state.accepted.concat(accepted));
                        }}
                    >
                        <div>첨부파일들을 드래그앤드롭하세요</div>
                        {/* {files && Array.isArray(files) && (
              <ul>
                { files.map((file, i) => <li key={i}>{file.name}</li>) }
              </ul>  )}*/}
                        {
                            this.state.accepted ? this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>) : ""
                        }
                    </Dropzone>
                </div>
            </div>
        );
    }

    renderImageDropField(field) {
        let dropzoneRef;
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <div className="form-control">
                    <button type="button" onClick={() => { dropzoneRef.open() }}>
                        이미지 가져오기
                    </button>
                    <Dropzone className="form-control"
                        ref={(node) => { dropzoneRef = node; }}
                        accept="image/jpeg, image/png"
                        name={field.name}
                        onDrop={(accepted, rejected) => {
                            this.setState({ acceptedImages: this.state.acceptedImages.concat(accepted), rejected })
                            field.input.onChange(this.state.acceptedImages.concat(accepted));
                        }}
                    >

                        <div>이미지들을 드래그앤드롭하세요</div>
                        {
                            this.state.acceptedImages ? this.state.acceptedImages.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>) : ""
                        }
                    </Dropzone>
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
        this.props.createNotice(values, () => {
            this.props.history.push('/notice');
        });
    }
    render() {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        );
    }
    // render() {
    //     const { handleSubmit } = this.props;

    //     return (
    //         <div>
    //             <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
    //                 <Field
    //                     label="제목"
    //                     name="title"
    //                     component={this.renderTextField}
    //                 />
    //                 {/* <Field 
    //                 label="분류"
    //                 name="categories"
    //                 component={this.renderField}
    //             /> */}
    //                 <Field
    //                     label="내용"
    //                     name="content"
    //                     component={this.renderTextAreaField}
    //                 />
    //                 <Field
    //                     label="첨부파일"
    //                     name="attached"
    //                     component={this.renderFileInput}
    //                     type="file"
    //                 />
    //                 {/* <Field
    //                     label="드랍존"
    //                     name="attached"
    //                     component={this.renderDropZoneField.bind(this)}
    //                 /> */}
    //                 <Field
    //                     label="이미지"
    //                     name="image"
    //                     component={this.renderImageDropField.bind(this)}
    //                 />
    //                 <div>{this.state.rejected.length !== 0 ? '--잘못된 파일 형식입니다--' : ''}</div>
    //                 <ul>
    //                     {
    //                         this.state.rejected ? this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>) : ""
    //                     }
    //                 </ul>
    //                 <button type="submit" className="btn btn-primary">
    //                     작성완료</button>
    //                 <Link to="/notice" className="btn btn-danger">취소</Link>
    //             </form>
    //         </div>
    //     );
    // }
}

function validate(values) {
    //console.log(values) -> {title: 'dsd', categories: 'asd', content: 'afda'}
    const errors = {};
    //Validate the inputs from 'values'
    //You can customize this
    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories";
    }
    if (!values.content) {
        errors.content = "Enter a content";
    }

    //Looks like not working
    if (values.files) {
        let seen = new Set();
        console.log(values.files)
        let hasDuplicates = values.files.some(function (currentObject) {
            return seen.size === seen.add(currentObject.name).size;
        });
        if (hasDuplicates) {
            errors.files = "Duplicate files";
        }
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
    connect(null, { createNotice })(NoticeCreate)
);