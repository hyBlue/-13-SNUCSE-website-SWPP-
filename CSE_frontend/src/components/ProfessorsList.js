import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProfessors } from '../actions';
import { Collapse, Card, Icon, Avatar, Row, Col } from 'antd';
import ProfessorDetail from './ProfessorDetail';
const Meta = Card.Meta;
const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const test = (<div>hey man </div>);

class ProfessorsList extends Component {

    constructor() {
        super();
        this.state = {
            currentShowProfessor: '',
        }
    }
    componentDidMount() {
        this.props.fetchProfessors();
    }
    showDetail(professor) {
        console.log(this.props.professors);
        this.setState({
            currentShowProfessor: professor.name
        })
    }
    renderProfessor() {
        return _.map(this.props.professors, professor => {
            return (
                <Card key={professor.id} style={{ width: '100%', height: '100px' }} onClick={() => this.showDetail(professor)}>
                    <Meta
                        title={professor.name}
                        avatar={<Avatar src={professor.photo} size="large" />}
                        description="정교수"
                    />
                    {/* <p>{professor.contact}</p>
                    <p>{professor.education}</p>
                    <p>{professor.research}</p>
                    <p>{professor.biography}</p> */}
                </Card>
            );
        });
    }
    renderProfessor2(whichHalf) {
        const size = _.size(this.props.professors);
        const halfList = 
            whichHalf==='first' ? _.filter(this.props.professors, professor => professor.id <= size/2+1) :
                        _.filter(this.props.professors, professor => professor.id > size/2+1)
        return _.map(halfList, professor => {
            const professorCard = (<Card key={professor.id} style={{ width: '100%', height: '100px' }} onClick={() => this.showDetail(professor)}>
                <Meta
                    title={professor.name}
                    avatar={<Avatar src={professor.photo} size="large" />}
                    description="정교수"
                />
                {/* <p>{professor.contact}</p>
                    <p>{professor.education}</p>
                    <p>{professor.research}</p>
                    <p>{professor.biography}</p> */}
            </Card>);
            return (
                <Panel header={professorCard} key={professor.id} style={{paddingRight: '10px'}}>
                    <ProfessorDetail name={this.state.currentShowProfessor}></ProfessorDetail>
                     {professor.contact}
                    {professor.education}
                    {professor.research}
                    {professor.biography}
                </Panel>
            )
        })
    }
    render() {
        return (<div>
            <Row>
                <Col span={12}>
                    <Collapse style={{borderRight: '0px'}}>
                        {this.renderProfessor2('first')}
                    </Collapse></Col>
                <Col span={12}>
                    <Collapse>
                        {this.renderProfessor2('second')}
                    </Collapse></Col>
            </Row>
            {/* <Row>
                <Col span={12}>{this.renderProfessor()}</Col>
                <Col span={12}><ProfessorDetail name={this.state.currentShowProfessor}></ProfessorDetail></Col>
            </Row> */}
        </div>);
    }

}

function mapStateToProps({ professors }) {
    return { professors }
}

export default connect(mapStateToProps, { fetchProfessors })(ProfessorsList);