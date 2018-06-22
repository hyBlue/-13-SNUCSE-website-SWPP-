import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHonourProfs, } from '../../actions';
import { Collapse, Card, Spin, Avatar, Row, Col } from 'antd';
import HonourProfDetail from './HonourProfDetail';
const Meta = Card.Meta;
const Panel = Collapse.Panel;

class HonourProfsList extends Component {

    constructor() {
        super();
        this.state = {
            showingHonourProfs: {},
            loading: true
        }
    }
    componentDidMount() {
        this.props.fetchHonourProfs().then(()=> { this.setState({loading: false})});
    }
    showDetail(prof) {
        this.setState({
            showingHonourProfs: { ...this.state.showingHonourProfs, [prof.id]: prof }
        })
        console.log(this.state);
    }

    renderHonourProf(whichHalf) {
        const size = _.size(this.props.profs);
        const set = _.keys(this.props.profs)[0];
        const halfList =
            whichHalf === 'first' ? _.filter(this.props.profs, prof => prof.id < (parseInt(set) + (size / 2))) :
                _.filter(this.props.profs, prof => prof.id >= (parseInt(set) + (size / 2)))
        return _.map(halfList, prof => {
            const replacer = { "[at]": "@", "[dot]": ".", " ": "" }; //replace [] and space to correct cha
            const profCard = (<Card className='memberCard' key={prof.id} style={{ width: '100%', height: '130px' }} onClick={() => this.showDetail(prof)}>
                <Row>
                    <Col span={12}>
                        <Meta
                            title={prof.name}
                            avatar={<Avatar src={prof.image} size="large" />}
                            description={`${prof.role}`}
                        />
                    </Col>
                    <Col span={12} style={{paddingTop: '4px', fontSize: '18px'}}>                            
                    </Col>
                </Row>
            </Card>);
            return (
                <Panel header={profCard} key={prof.id} style={{ paddingRight: '10px' }}>
                    {this.state.showingHonourProfs[prof.id] && <HonourProfDetail prof={this.state.showingHonourProfs[prof.id]}></HonourProfDetail>}
                </Panel>
            )
        })
    }

    render() {
        return (<div className="memberList">
            <h2 className="pageTitle">명예교수</h2>
            {this.state.loading ? <Spin /> : ""}
            <Row>
                <Col span={12}>
                    <Collapse style={{ borderRight: '0px' }}>
                        {this.renderHonourProf('first')}
                    </Collapse></Col>
                <Col span={12}>
                    <Collapse>
                        {this.renderHonourProf('second')}
                    </Collapse></Col>
            </Row>
        </div>);
    }

}

function mapStateToProps({ members }) {
    return { profs: members.honourProfs }
}

export default connect(mapStateToProps, { fetchHonourProfs, })(HonourProfsList);