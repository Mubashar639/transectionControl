import React from 'react';
import { Modal, Button, Divider } from 'antd';
import uuid from 'uuid';
import Swal from 'sweetalert2'

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
        let timerInterval
        if (this.state.amount === "" || this.state.username === "" || this.state.accountType === "") return alert("Please fill the form clearFully")
        Swal.fire({
            title: 'Creatig Account',
            html: 'I will complete in <strong></strong> milliseconds.',
            timer: 2000,
            onBeforeOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                    Swal.getContent().querySelector('strong')
                        .textContent = Swal.getTimerLeft()
                }, 100)
            },
            onClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.timer
            ) {
                console.log('I was closed by the timer')
            }
        })
        setTimeout(() => {
            store.dispatch({
                type: 'addAccount',
                payload: this.state,
            });
        }, 2500)
        this.setState({
            visible: false,
        });
        // window.location.replace('/')    
    };

    handleCancel = e => {
        Swal.fire('Can you want not creat  Account')
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
