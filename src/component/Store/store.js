import { createStore, combineReducers } from 'redux';
// import DataStorage from 'redux-persist'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const userAccout = [
    {
        username: 'Gamica', accountType: 'Saving', date: '10/10/201912:47:27 PM',
        amount: '100', transactionType: '', id: '11cbd90d-c034-4894-8631-bb03bbc9af21'
    }, {
        username: 'Gamicaloud', accountType: 'Current', date: '10/10/201912:50:23 PM',
        amount: '300', transactionType: '', id: '11cbd90d-c034-4894-8631-bb03bbc9af34'
    },
]
const AccountType = (data = userAccout, action) => {
    let newState = JSON.parse(JSON.stringify(data));
    if (action.type == 'addAccount') {
        newState.push(action.payload);
        return newState
    }
    // else if (action.type == "idAccount") {
    //     newState.push(action.payload);
    //     return newState
    // }
    else {
        return data;
    }

}
const userid = '';
const AccountId = (data = userid, action) => {
    let newSet = JSON.parse(JSON.stringify(data));
    if (action.type == "idAccount") {
        newSet = action.payload;
        console.log(newSet)
        return newSet;
    }
    else {
        return data
    }
}

const userTranid = '';
const TransactionId = (data = userTranid, action) => {
    let newTranSet = JSON.parse(JSON.stringify(data));
    if (action.type == "idTransaction") {
        newTranSet = action.payload;
        console.log(newTranSet)
        return newTranSet;
    }
    else {
        return data
    }
}

let AllRedducer = combineReducers({ AccountType, AccountId, TransactionId })

const persistedReducer = persistReducer(persistConfig, AllRedducer)
Window.store = createStore(persistedReducer);
export const store = createStore(persistedReducer)
export const persistor = persistStore(store)

