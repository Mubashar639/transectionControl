import React, { Component } from 'react';


export default class dashbord extends Component {

    addRout() {
        this.props.history.push('/addaccount');
    }
    transactionRout() {
        this.props.history.push('/transaction');
    }
    render() {
        return (
            <div>
                <div style={{ border: "1px solid black", margin: "2px" }}>
                    <h3 onClick={this.addRout.bind(this)}>Add account</h3>
                </div>
                <div style={{ border: "1px solid black", margin: "2px" }}>
                    <button onClick={this.transactionRout.bind(this)}>ViewAll</button>
                    <h3 onClick={this.transactionRout.bind(this)}>Transaction</h3>
                </div>
            </div>
        )
    }
}