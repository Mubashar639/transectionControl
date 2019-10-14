import React, { Component } from 'react'
import { Button, Divider } from 'antd';

export default class withDrawAmount extends Component {
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
                    <h2 style={{backgroundColor:'lightGreen'}}>Deposit into account</h2>
                    <span>Amount to deposit*</span>
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
