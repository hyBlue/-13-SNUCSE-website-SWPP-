import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

export default class StaffDetail extends Component {

    renderList(list){
        let index = 0;
        return _.map(list, item => {
            return (
                <li key={index++} style={{fontSize: '17px'}}>{item}</li>
            );
        })
    }

    staffList(){
      const staff = this.props.staff;
      let contact_infor = ["위치 : " + staff.office,"전화 : " + staff.phone,"이메일 : " + staff.email,];
      // const contact_infor = [1,2,3,4,5]
      if(staff.fax){
        contact_infor.push("팩스 : " + staff.fax)
      }
      const listItems = contact_infor.map((x) =>
    <li key={x.toString()} style={{fontSize: '17px'}}>
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
                {this.staffList()}
                <h5>주요 업무</h5>
                <ul>
                    {this.renderList(this.props.staff.jobs)}
                </ul>
            </div>
        )
    }
}


// function mapStateToProps({ notices }, ownProps) {
//     return { notice: notices[ownProps.match.params.id] };
// }
// export default connect(mapStateToProps, { fetchNotice, deleteNotice })(NoticeDetail);
