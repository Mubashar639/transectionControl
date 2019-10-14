import React from 'react';
import { store } from '../Store/store';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Button, Icon, Table } from 'antd';
import Model from './modalAccount/modalAccount';

class addAccount extends React.Component {

    moveRout() {
        this.props.history.push('/');
    }
    getOtherRoutData = (e) => {
        store.dispatch({
            type: 'idAccount',
            payload: e
        })

    }

    render() {
        const dataSource = this.props.data.map((object) => {
            return {
                idd: object.id,
                name: object.username,
                registerd: object.date,
                accoutType: object.accountType,
                amount: object.amount
            }

        })
        const columns = [
            {
                title: 'Account#',
                dataIndex: 'idd',
                render: (object) => <Link to='/displayAccountId' onClick={() => this.getOtherRoutData(object)}
                    style={{ cursor: "pointer", }}>{object}</Link>,
                // key: 'idd'
            },
            {
                title: 'Name',
                dataIndex: 'name',
                // key: 'name',
            },
            {
                title: 'Registerd',
                dataIndex: 'registerd',
                key: 'registerd',
            },
            {
                title: 'Account Type',
                dataIndex: 'accoutType',
                key: 'accoutType',
            },
            {
                title: 'Balance',
                dataIndex: 'amount',
                key: 'amount',
            }
        ];
        // console.log(this.props.data);
        return (
            <div>
                <div>
                    <Row>
                        <Col span={18} push={10}> <Model /> </Col>
                        <Col span={6} pull={18}><Button type="primary" onClick={this.moveRout.bind(this)}>
                            <Icon type="left" />Back to dashboard </Button></Col>
                    </Row>
                </div>
                <Table dataSource={dataSource} columns={columns} />;
        </div>
        )
    }
}


const reciverFuncton = (store) => {
    return { data: store.AccountType }
}
export default connect(reciverFuncton)(addAccount)
