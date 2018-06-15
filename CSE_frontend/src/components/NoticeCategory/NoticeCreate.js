import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';
import Dropzone from 'react-dropzone';
import { createNotice, fetchTags } from '../../actions';
import { Select, Row, Col } from 'antd';
const Option = Select.Option;

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            tags: [],
            posts: {},
            accepted: [],
            rejected: [],
        };
        // bind
        this.onHandleContentChange = this.onHandleContentChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onHandleTagChange = this.onHandleTagChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchTags();
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
                        {
                            this.state.accepted ? this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>) : ""
                        }
                    </Dropzone>
                </div>
            </div>
        );
    }

    onHandleSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            content: this.state.content,
            attached: this.state.accepted,
            tag_set: this.state.tags
        }
        this.props.createNotice(post, () => {
            this.props.history.push('/notice');
        });
    }
    //태그 추가 핸들
    onHandleTagChange(tags) {
        let tagArray = [];
        _.map(tags, tag => {
            tagArray.push(this.props.tags[tag].name);
        });
        this.setState({tags: tagArray});
        console.log(this.state.tags)
    }
    //컨텐츠 변경 핸들
    onHandleContentChange(e) {
        this.setState({ content: e });
    }
    render() {
        const tagOptions = [];
        _.map(this.props.tags, tag => tagOptions.push(<Option key={tag.id}>{tag.name}</Option>));
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
                    <Row className="form-group">
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="태그 입력하기"
                            defaultValue={[]}
                            onChange={this.onHandleTagChange}
                            allowClear={true}
                            className="form-control"
                        >
                            {tagOptions}
                        </Select>
                    </Row>
                    <div className="form-group" style={{ height: '60%' }}>
                        <ReactQuill
                            style={{ height: '90%' }}
                            modules={Editor.modules}
                            formats={Editor.formats}
                            value={this.state.content}
                            placeholder="내용을 입력하거나 이미지를 드래그하세요."
                            onChange={this.onHandleContentChange}
                        />
                    </div>
                    {this.renderDropZoneField()}
                    <button className="btn btn-primary">작성완료</button>
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

function mapStateToProps({ tags }) {
    return { tags }
}
export default connect(mapStateToProps, { createNotice, fetchTags })(Editor);