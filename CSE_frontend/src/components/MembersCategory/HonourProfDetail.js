import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

export default class HonourProfDetail extends Component {

    renderList(list){
        let index = 0;
        return _.map(list, item => {
            return (
                <li key={index++} style={{fontSize: '17px'}}>{item}</li>
            );
        })
    }

    profList(){
      const prof = this.props.prof;
      let contact_infor = ["재직 기간 : " + prof.term_of_service, ];
      if(prof.fax){
        contact_infor.push("팩스 : " + prof.fax)
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
                {this.profList()}
                <h5>주요 업무</h5>
                <ul>
                    {this.renderList(this.props.prof.education)}
                </ul>
            </div>
        )
    }
}


// function mapStateToProps({ notices }, ownProps) {
//     return { notice: notices[ownProps.match.params.id] };
// }
// export default connect(mapStateToProps, { fetchNotice, deleteNotice })(NoticeDetail);
