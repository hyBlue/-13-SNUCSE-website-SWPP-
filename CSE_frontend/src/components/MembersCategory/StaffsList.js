import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStaffs, } from '../../actions';
import { Collapse, Card, Spin, Avatar, Row, Col } from 'antd';
import StaffDetail from './StaffDetail';
const Meta = Card.Meta;
const Panel = Collapse.Panel;

class StaffsList extends Component {

    constructor() {
        super();
        this.state = {
            showingStaffs: {},
            loading: true
        }
    }
    componentDidMount() {
        this.props.fetchStaffs().then(()=> { this.setState({loading: false})});;
    }
    showDetail(staff) {
        this.setState({
            showingStaffs: { ...this.state.showingStaffs, [staff.id]: staff }
        })
        console.log(this.state);
    }

    renderStaff(whichHalf) {
        const size = _.size(this.props.staffs);
        const set = _.keys(this.props.staffs)[0];
        const halfList =
            whichHalf === 'first' ? _.filter(this.props.staffs, staff => staff.id < (parseInt(set) + (size / 2))) :
                _.filter(this.props.staffs, staff => staff.id >= (parseInt(set) + (size / 2)))
        return _.map(halfList, staff => {
            const replacer = { "[at]": "@", "[dot]": ".", " ": "" }; //replace [] and space to correct cha
            const staff_email = staff.email.replace(/\[at\]|\[dot\]|(\s)/gi, matched => { return replacer[matched] });
            const staffCard = (<Card className='memberCard' key={staff.id} style={{ width: '100%', height: '130px' }} onClick={() => this.showDetail(staff)}>
                <Row>
                    <Col span={12}>
                        <Meta
                            title={staff.name}
                            avatar={<Avatar src={staff.image} size="large" />}
                            description={staff.role}
                        />
                    </Col>
                    <Col span={12} style={{paddingTop: '4px', fontSize: '18px'}}>
                            <Row style={{padding: '2px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', wordWrap: 'normal' }}>{staff.office}</Row>
                            <Row style={{padding: '2px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', wordWrap: 'normal' }}>{staff.phone}</Row>
                            <Row style={{padding: '2px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', wordWrap: 'normal' }}>{staff_email}</Row>
                    </Col>
                </Row>
            </Card>);
            return (
                <Panel header={staffCard} key={staff.id} style={{ paddingRight: '10px' }}>
                    {this.state.showingStaffs[staff.id] && <StaffDetail staff={this.state.showingStaffs[staff.id]}></StaffDetail>}
                </Panel>
            )
        })
    }

    render() {
        return (<div className="memberList">
            <h2 className="pageTitle">행정직원</h2>
            {this.state.loading ? <Spin /> : ""}
            <Row>
                <Col span={12}>
                    <Collapse style={{ borderRight: '0px' }}>
                        {this.renderStaff('first')}
                    </Collapse></Col>
                <Col span={12}>
                    <Collapse>
                        {this.renderStaff('second')}
                    </Collapse></Col>
            </Row>
        </div>);
    }

}

function mapStateToProps({ members }) {
    return { staffs: members.staffs }
}

export default connect(mapStateToProps, { fetchStaffs, })(StaffsList);