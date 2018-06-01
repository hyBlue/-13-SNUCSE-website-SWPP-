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
            showingProfessors: {},
        }
    }
    componentDidMount() {
        this.props.fetchProfessors();
    }
    showDetail(professor) {
        this.setState({
            showingProfessors: {...this.state.showingProfessors, [professor.id]: professor }
        })
        console.log(this.state);    
    }
   
    renderProfessor(whichHalf) {
        const size = _.size(this.props.professors);
        const set = _.keys(this.props.professors)[0];
        const halfList = 
            whichHalf==='first' ? _.filter(this.props.professors, professor => professor.id <= (parseInt(set) + Math.floor(size/2))) :
                        _.filter(this.props.professors, professor => professor.id > (parseInt(set) + Math.floor(size/2)))
        return _.map(halfList, professor => {
            const replacer = { "[at]": "@", "[dot]": ".", " ": ""}; //replace [] and space to correct cha
            const professor_email = professor.email.replace(/\[at\]|\[dot\]|(\s)/gi, matched => { return replacer[matched]});
            const professorCard = (<Card key={professor.id} style={{ width: '100%', height: '100px' }} onClick={() => this.showDetail(professor)}>
                <Meta
                    title={professor.name}
                    avatar={<Avatar src={professor.image} size="large" />}
                    description={professor.position}
                />
                <div>
                <Row style={{paddingTop: "10px"}}> 
                    <Col span={9} style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', wordWrap: 'normal'}}>{professor.lab}</Col>
                    <Col span={7} style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', wordWrap: 'normal'}}>{professor.phone}</Col>
                    <Col span={8} style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', wordWrap: 'normal'}}>{professor_email}</Col>
                </Row>
                </div>
            </Card>);
            return (
                <Panel header={professorCard} key={professor.id} style={{paddingRight: '10px'}}>
                    {this.state.showingProfessors[professor.id] && <ProfessorDetail professor={this.state.showingProfessors[professor.id]}></ProfessorDetail>}
                </Panel>
            )
        })
    }
    render() {
        return (<div id="professorList">
            <div className="pageTitle">공지사항</div>
            <Row>
                <Col span={12}>
                    <Collapse style={{borderRight: '0px'}}>
                        {this.renderProfessor('first')}
                    </Collapse></Col>
                <Col span={12}>
                    <Collapse>
                        {this.renderProfessor('second')}
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