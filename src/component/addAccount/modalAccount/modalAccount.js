import React from 'react';
import { Modal, Button, Divider } from 'antd';
import uuid from 'uuid';

import { store } from '../../Store/store';


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            username: "",
            accountType: "",
            transactionType: "Credit",
            amount: "",
            id: '',
            date: '',
        };
    }

    upDateName(e) {
        this.setState({
            username: e.target.value,
            id: uuid(),
            date: new Date().toLocaleDateString() + new Date().toLocaleTimeString()
        })
    }
    upDateAccountType(e) {
        this.setState({
            accountType: e.target.value
        })
    }
    upDateAmount(e) {
        this.setState({
            amount: e.target.value
        })
    }


    showModal = () => {
        this.setState({
            visible: true,
        });
    };


    handleOk = () => {
        store.dispatch({
            type: 'addAccount',
            payload: this.state,
        });
        this.setState({
            visible: false,
        });
        // window.location.replace('/')    
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}> Create Account</Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >

                    <div>
                        <span name="uname">FullName</span>
                        <input type="text" name="uname" placeholder="Enter User Name"
                            onChange={this.upDateName.bind(this)} />
                        <Divider />
                        <span>Account Type</span>
                        <select onClick={this.upDateAccountType.bind(this)}>
                            <option defaultChecked> Select Account Type</option>
                            <option>Savings</option>
                            <option>Current</option>
                        </select>
                        <Divider />
                        <span >Initial Deposit in Rs:</span>
                        <input type="text" onChange={this.upDateAmount.bind(this)} />
                    </div>
                </Modal>
            </div>
        );
    }
}
