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

    ProfList(){
      const prof = this.props.professor;
      const replacer = { "[at]": "@", "[dot]": ".", " ": ""}; //replace [] and space to correct cha
      const prof_email = this.props.professor.email.replace(/\[at\]|\[dot\]|(\s)/gi, matched => { return replacer[matched]});
      let contact_infor = ["교수실 : " + prof.location,"전화 : " + prof.phone,"이메일 : " + prof_email,"웹사이트 : " + prof.website];
      // const contact_infor = [1,2,3,4,5]
      if(prof.fax){
        contact_infor.push("팩스 : " + prof.fax)
      }
      const listItems = contact_infor.map((x) =>
    <li key={x.toString()}>
      {x}
    </li>
  );
  return (
    <ul>{listItems}</ul>
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
