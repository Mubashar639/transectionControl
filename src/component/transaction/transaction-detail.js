import React, { Component } from 'react';
import {connect} from 'react-redux'

import { Button, Icon, Table } from 'antd';

 class AccountDetail extends Component {
  moveRout(){
    this.props.history.push('/transaction');
  }
    render() {
        
        const dataSource = this.props.data.filter((object) => {
           if(object.id===this.props.trasactionId){
      return object
           }
    });  
    // accountType: "Saving" 
// amount: "100"
// date: "10/10/201912:47:27 PM"
// id: "11cbd90d-c034-4894-8631-bb03bbc9af21"
// transactionType: ""
// username: "Gamica"
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
        },{
            title: 'Accout Type',
            dataIndex: 'accountType',
          },{
            title: 'Curremt Balance',
            dataIndex: 'amount',
          },];
      
      
          return (
              <div>
        
              <Button type="primary" onClick={this.moveRout.bind(this)}>
                            <Icon type="left" />Back to All Transaction </Button>
              <Table dataSource={dataSource} columns={columns} />;
                
            </div>
        )
    }
}

const reciverFuncton = (store) => {
    return { data: store.AccountType , trasactionId: store.TransactionId}
}

export default connect(reciverFuncton)(AccountDetail);