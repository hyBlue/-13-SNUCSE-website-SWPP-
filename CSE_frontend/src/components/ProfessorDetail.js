import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

export default class ProfessorDetail extends Component {

    renderList(list){
        let index = 0;
        return _.map(list, item => {
            return (
                <li key={index++}>{item}</li>
            );
        })
    }
    render() {
        const replacer = { "[at]": "@", "[dot]": ".", " ": ""}; //replace [] and space to correct cha
        const professor_email = this.props.professor.email.replace(/\[at\]|\[dot\]|(\s)/gi, matched => { return replacer[matched]});
        return (
            <div>
                <h5>연락처 정보</h5>
                <ul>
                    <li>{this.props.professor.location}</li>
                    <li>{this.props.professor.phone}</li>
                    <li>{this.props.professor.fax}</li>
                    <li>{professor_email}</li>
                    <li>{this.props.professor.website}</li>
                </ul>
                <h5>학력</h5>
                <ul>
                    {this.renderList(this.props.professor.education)}
                </ul>
                <h5>연구분야</h5>
                <ul>
                    {this.renderList(this.props.professor.research)}
                </ul>
                {this.props.professor.biography.length !==0 && 
                <div>
                <h5>경력</h5>
                <ul>
                    {this.renderList(this.props.professor.biography)}
                </ul>
                </div>
                }
            </div>
        )
    }
}


// function mapStateToProps({ notices }, ownProps) {
//     return { notice: notices[ownProps.match.params.id] };
// }
// export default connect(mapStateToProps, { fetchNotice, deleteNotice })(NoticeDetail);