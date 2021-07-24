import React from 'react'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import loginReducer from '../reducers/loginReducer';
import thunk from 'redux-thunk';
import customerReducer from '../reducers/customerReducer';
import productReducer from '../reducers/productReducer';
import billReducer from '../reducers/billReducer';
import cartReducer from '../reducers/cartReducer';



const configureStore = createStore(combineReducers(
    {
     token: loginReducer,
     customerList : customerReducer,
     productList : productReducer,
     bill:billReducer,
     cart:cartReducer
    }
),applyMiddleware(thunk));

export default configureStore