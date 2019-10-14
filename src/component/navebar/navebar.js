import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Menu, } from 'antd';


export default class App extends Component {
    state = {
        current: 'mail',
    };


    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <Link to="/" rel="noopener noreferrer">Bank</Link>
                </Menu.Item>
                <Menu.Item key="alipay">
                    <Link to="/" rel="noopener noreferrer">Dashbord</Link>
                </Menu.Item>
                <Menu.Item key="alipay">
                    <Link to="/addaccount" rel="noopener noreferrer">Accounts</Link>
                </Menu.Item>
                <Menu.Item key="alipay" >
                    <Link to="/transaction" rel="noopener noreferrer">Transactions</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

// ReactDOM.render(<App />, mountNode);