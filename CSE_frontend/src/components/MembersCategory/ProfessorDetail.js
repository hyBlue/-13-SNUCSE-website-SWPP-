import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

export default class ProfessorDetail extends Component {

    renderList(list) {
        let index = 0;
        return _.map(list, item => {
            return (
                <li key={index++} style={{ fontSize: '17px' }}>{item}</li>
            );
        })
    }

    ProfList() {
        const prof = this.props.professor;
        let contact_infor = ["교수실 : " + prof.location, "전화 : " + prof.phone, "이메일 : " + prof.email, "웹사이트 : " + prof.website];
        if (prof.fax) {
            contact_infor.push("팩스 : " + prof.fax)
        }
        const listItems = contact_infor.map((x, index) => 
            <li key={x.toString()} style={{ fontSize: '17px' }}>
                {index === 3 ? (<a href={prof.website} target="_blank" > {x} </a>) 
                             : (index===2 ? (<a href={`mailto: ${prof.email}`} > {x} </a>): x) 
                }
            </li>
        );
        console.log(listItems);
        return (
            <ul> {listItems}</ul >
        );
    }
    render() {
        return (
            <div>
                <h5>연락처 정보</h5>
                {this.ProfList()}
                <h5>학력</h5>
                <ul>
                    {this.renderList(this.props.professor.education)}
                </ul>
                <h5>연구분야</h5>
                <ul>
                    {this.renderList(this.props.professor.research)}
                </ul>
                {this.props.professor.biography.length !== 0 &&
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

