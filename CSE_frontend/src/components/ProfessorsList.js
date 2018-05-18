import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProfessors } from '../actions';
import { Card, Icon, Avatar, Row, Col } from 'antd';
const Meta = Card.Meta;

class ProfessorsList extends Component {

    componentDidMount() {
        this.props.fetchProfessors();
    }
    showDetail(professor){
        console.log(professor);
        // this.props.professor=professor;
    }
    renderProfessor() {
        return _.map(this.props.professors, professor => {
            return (
                <Card key={professor.id} style={{ width: '100%', height: '100px'}} onClick={this.showDetail(professor)}>
                    <Meta
                        title={professor.name}
                        avatar={<Avatar src={professor.photo} size="large" />}
                        description="정교수"
                    />
                    <br/><br/>
                    <p> Hello man </p>
                    {/* <p>{professor.contact}</p>
                    <p>{professor.education}</p>
                    <p>{professor.research}</p>
                    <p>{professor.biography}</p> */}
                </Card>
            );
        });
    }
    render() {
        return (<div>
            <Row>
                <Col span={8}>{this.renderProfessor()}</Col>
                <Col span={16}></Col>
            </Row>
        </div>);
    }

}

function mapStateToProps({ professors }) {
    //console.log(state.notices);
    return { professors }
}

export default connect(mapStateToProps, { fetchProfessors })(ProfessorsList);