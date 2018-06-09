import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';
import Dropzone from 'react-dropzone';
import { createNotice } from '../actions';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            posts: {},
            accepted: [],
            rejected: [],
        };
        // bind
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    renderDropZoneField() {
        let dropzoneRef;
        return (
            <div className="form-group">
                <div className="form-control">
                    <button type="button" onClick={() => { dropzoneRef.open() }}>
                        파일 가져오기
                    </button>
                    <Dropzone className="form-control"
                        style={{ height: '70px', overflowY: 'scroll' }}
                        ref={(node) => { dropzoneRef = node; }}
                        name='첨부파일 드랍존'
                        onDrop={(accepted, rejected) => {
                            this.setState({ accepted: this.state.accepted.concat(accepted), rejected })
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

    // render posts from firebase
    renderPosts() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>{renderHTML(this.state.content)}</p>
            </div>
        );
    }
    onHandleSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            content: this.state.content,
            attached: this.state.accepted,
        }
        this.props.createNotice(post, ()=> {
            this.props.history.push('/notice');
        });
    }

    onHandleChange(e) {
        this.setState({ content: e });
    }
    render() {
        return (
            <div style={{ height: "700px", margin: '10px' }}>
                <h2> 공지사항 글쓰기 </h2>
                <form onSubmit={this.onHandleSubmit} style={{ height: '80%' }}>
                    <div className="form-group">
                        <input
                            value={this.state.title}
                            type="text"
                            name="title"
                            placeholder="제목을 입력해주세요"
                            onChange={e => {
                                this.setState({ title: e.target.value });
                            }}
                            ref="title"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group" style={{ height: '60%' }}>
                        <ReactQuill
                            style={{ height: '90%' }}
                            modules={Editor.modules}
                            formats={Editor.formats}
                            value={this.state.content}
                            placeholder="내용을 입력하거나 이미지를 드래그하세요."
                            onChange={this.onHandleChange}
                        />
                    </div>
                    {this.renderDropZoneField()}
                    <button className="btn btn-primary">Post</button>
                </form>
            </div>
        );
    }
}

Editor.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ]
};

Editor.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block'
];
export default connect(null, { createNotice })(Editor);