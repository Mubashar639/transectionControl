import React, { Component } from 'react';
import { store } from '../../../Store/store';
import { connect } from 'react-redux';
import { Button, Divider } from 'antd';
import Swal from 'sweetalert2'
import { isNumber } from 'util';

class withDrawAmount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            descraption: ''
        }
    }
    withDrawAmount() {
        // alert(`Withdraw amount${this.state.amount}`);
        if (isNaN(+this.state.amount) || this.state.amount === "") return alert("please enter corrent number")
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        this.props.data.filter((object) => {
            if (object.id == this.props.userId) {
                const amount = object.amount = +object.amount - + this.state.amount;
                store.dispatch({
                    type: 'account',
                    payload: { id: object.id, amount }
                })

            }
            this.props.history.push('/displayAccountId')
        });
    }
    Canclewithdraw() {
        this.props.history.push('/displayAccountId')
    }
    render() {
        return (
            <div>
                <div style={{ width: '35%', margin: 'auto', marginTop: '10%' }}>
                    <h2 style={{ backgroundColor: 'lightGreen' }}>Withdraw from account</h2>
                    <span>Amount to withdraw*</span>
                    <input type="text" style={{ display: 'inlineBlock' }}
                        onChange={(e) => { this.setState({ amount: e.target.value }) }} />
                    <Divider />
                    <span>Description (optional)</span>
                    <input type="text" style={{ display: 'inlineBlock' }}
                        onChange={(e) => { this.setState({ descraption: e.target.value }) }} />
                    <Divider />
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
export default connect(reciverFuncton)(withDrawAmount);