import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../Store/store';
import { connect } from 'react-redux';


import { Row, Col, Button, Icon, Table } from 'antd';

class addAccount extends React.Component {

    moveRout() {
        this.props.history.push('/');
    }

    getOtherRoutData(e) {
        let idd = e.target.text
        store.dispatch({
            type: 'idTransaction',
            payload: idd
        })
    }

    render() {
        const dataSource = this.props.data.map((object) => {
            return {
                idd: object.id,
                name: object.username,
                time: object.date,
                accoutType: object.transactionType,
                amount: object.amount
            }

        });
        const columns = [
            {
                title: 'Transation-ID#',
                dataIndex: 'idd',
                render: (idd) => <Link to='/displayTransactionId' onClick={this.getOtherRoutData.bind(this)}
                    style={{ cursor: "pointer", }}>{idd}</Link>,
            },
            {
                title: 'Time',
                dataIndex: 'time',
                key: 'time',
            },
            {
                title: 'Account#',
                dataIndex: 'idd',
                key: 'idd',
            },
            {
                title: ' Type',
                dataIndex: 'accoutType',
                key: 'accoutType',
            },
            {
                title: 'Balance',
                dataIndex: 'amount',
                key: 'amount',
            }
        ];
        return (
            <div>
                <div>
                    <Row>
                        <Col span={1} pull={0}><Button type="primary" onClick={this.moveRout.bind(this)}>
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
