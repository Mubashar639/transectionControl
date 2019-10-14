import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Button, Icon, Table } from 'antd';

class AccountDetail extends Component {
  moveRout() {
    this.props.history.push('/addaccount');
  }
  deletAccount() {
    this.props.data.filter((object) => {
      if (object.id === this.props.userId) {

        object = null;
      }
    });
  }
  withdrawamount() {
    this.props.history.push('/withdraw')
  }
  depositamount(){
    this.props.history.push('/deposit')
  }
  render() {
    let dataSource = []
    dataSource = this.props.data.filter((object) => {
      if (object.id === this.props.userId) {
        return object
      }
    });
    // returning odject from  filter data

    //     accountType: "Saving" 
    // amount: "100"
    // date: "10/10/201912:47:27 PM"
    // id: "11cbd90d-c034-4894-8631-bb03bbc9af21"
    // transactionType: ""
    // username: "Gamica"
    console.log(dataSource)
    const columns = [
      {
        title: 'Account#',
        dataIndex: 'id',
      }, {
        title: 'Full Name',
        dataIndex: 'username',
      }, {
        title: 'Registerd',
        dataIndex: 'date',
      }, {
        title: 'Accout Type',
        dataIndex: 'accountType',
      }, {
        title: 'Curremt Balance',
        dataIndex: 'amount',
      },];


    return (
      <div>

        <Button type="primary" onClick={this.moveRout.bind(this)}>
          <Icon type="left" />Back to account </Button>
        <Button type="danger" onClick={this.deletAccount.bind(this)}>Delete Account</Button>
        <Table dataSource={dataSource} columns={columns} />;
              <Button type="primary" style={{ color: 'green' }}
          onClick={this.withdrawamount.bind(this)}>WITHDRAW</Button>
        <Button type="primary" style={{ color: 'black' }} 
        onClick={this.depositamount.bind(this)}>DEPOSIT</Button>
      </div>
    )
  }
}

const reciverFuncton = (store) => {
  return { data: store.AccountType, userId: store.AccountId }
}
export default connect(reciverFuncton)(AccountDetail);