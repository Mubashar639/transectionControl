import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../Store/store';
import Swal from 'sweetalert2'
import { deleteAction } from "../Store/action"
import { Button, Icon, Table } from 'antd';

class AccountDetail extends Component {
  moveRout = () => {
    this.props.history.push('/addaccount');
  }
  deletAccount = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        setTimeout(() => store.dispatch(deleteAction(id)), 500)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    this.props.history.push('/addaccount');
  }
  withdrawamount() {
    this.props.history.push('/withdraw')
  }
  depositamount() {
    this.props.history.push('/deposit')
  }
  render() {
    let dataSource = []
    dataSource = this.props.data.filter((object) => {
      if (object.id === this.props.userId) {
        return object
      }
    });
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
        <Button type="danger" onClick={() => this.deletAccount(this.props.userId)}>Delete Account</Button>
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