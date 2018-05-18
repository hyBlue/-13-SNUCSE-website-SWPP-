import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ProfessorDetail extends Component {
    redner() {
        return (
            <div> Hi I am Professor </div>
        )
    }
}


// function mapStateToProps({ notices }, ownProps) {
//     return { notice: notices[ownProps.match.params.id] };
// }
// export default connect(mapStateToProps, { fetchNotice, deleteNotice })(NoticeDetail);