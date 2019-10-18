import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import {thunk} from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const userAccout = [
    // {date:'',id:'',username:'gamica',accoutType:'',amount:'',transactionType:''},
];
const AccountType = (data = userAccout, action) => {
    let newState = JSON.parse(JSON.stringify(data));
    if (action.type == 'addAccount') {
        newState.push(action.payload);
        return newState
    } else if (action.type == 'account') {

        newState = newState.map(value => {
            if (value.id === action.payload.id) value.amount = action.payload.amount
            return value
        })
        return [...newState];
    }
    else if (action.type == 'DELETE_ACCOUNT') {
        newState = newState.filter(item => item.id !== action.id)
        return [...newState];
    }
    else {
        return data;
    }
}
// const inational='';
// const withdrawDeposit=(data=inational,action)=>{
//     let newSet = JSON.parse(JSON.stringify(data));
//     if (action.type == "updateAccount") {
//         newSet = action.payload;
//         console.log(newSet)
//         return newSet;
//     }
//     else {
//         return data
//     }
// }
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

let AllRedducer = combineReducers({ AccountType, AccountId, TransactionId, })
const persistedReducer = persistReducer(persistConfig, AllRedducer)
Window.store = createStore(persistedReducer);
export const store = createStore(persistedReducer)
export const persistor = persistStore(store)

