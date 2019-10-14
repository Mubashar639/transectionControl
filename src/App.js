import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import TransactionDetail from './component/transaction/transaction-detail';
import WithDrawAmount from './component/addAccount/modalAccount/withdraw-deposit/withDrawAmount';
import DepositAmount from './component/addAccount/modalAccount/withdraw-deposit/DepositAmount';

import {
  store,
  persistor
} from './component/Store/store'
import Navebar from './component/navebar/navebar'
import Dashbord from './component/Dashbord/dashbord';
import AddAccount from './component/addAccount/addAccount';
import Transaction from './component/transaction/transactio';
import AccountDetail from './component/addAccount/Account-detail';
import { PersistGate } from 'redux-persist/integration/react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <Navebar />
              <Route path="/" exact component={Dashbord} />
              <Route path="/addaccount" component={AddAccount} />
              <Route path="/transaction" component={Transaction} />
              <Route path="/displayAccountId" exact component={AccountDetail} />
              <Route path="/displayTransactionId" exact component={TransactionDetail} />
              <Route path="/withdraw" component={WithDrawAmount} />
              <Route path="/deposit" component={DepositAmount} />
            </Router>
          </PersistGate>
        </Provider>
      </div>
    )
  }
}
