import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProfessorDetail extends Component {
    render() {
        return (
            <div> Hi I am Professor {this.props.name} </div>
        )
    }
}


// function mapStateToProps({ notices }, ownProps) {
//     return { notice: notices[ownProps.match.params.id] };
// }
// export default connect(mapStateToProps, { fetchNotice, deleteNotice })(NoticeDetail);