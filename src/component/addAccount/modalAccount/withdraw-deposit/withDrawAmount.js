import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Button, Divider } from 'antd';

 class withDrawAmount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            descraption: ''
        }
    }
    withDrawAmount() {
        alert(`Withdraw amount${this.state.amount}`);
    }
    Canclewithdraw() {
        this.props.history.push('/displayAccountId')
    }
    render() {
        return (
            <div>
                <div style={{width:'35%', }}>
                    <h2 style={{backgroundColor:'lightGreen'}}>Withdraw from account</h2>
                    <span>Amount to withdraw*</span>
                    <input type="text" style={{ display: 'inlineBlock' }}
                        onChange={(e) => { this.setState({ amount: e.target.value }) }} />
                        <Divider/>
                    <span>Description (optional)</span>
                    <input type="text" style={{ display: 'inlineBlock' }}
                        onChange={(e) => { this.setState({ descraption: e.target.value }) }} />
                        <Divider/>
                    <Button type="primary"
                        onClick={this.withDrawAmount.bind(this)}>Withdraw</Button>
                    <Button type="danger" onClick={this.Canclewithdraw.bind(this)}>Cancel </Button>
                </div>
            </div>
        )
    }
}
const reciverFuncton = (store) => {
    return { data: store.AccountType, userId: store.AccountId }
  }
export default connect(reciverFuncton)( withDrawAmount);