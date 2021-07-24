import React from 'react';
import {Route,Link} from 'react-router-dom';
import Account from './Account';
import Billing from './billing/Billing';
import Customer from './customer/Customer';
import DashBoard from './dashboard/Dashboard';
import LogOut from './Logout';
import Products from './products/Products';

const PosApp = ()=>{

    

    return(<div>
        <p>Pos App</p>

        <Link to='/dashboard'>DashBoard</Link>
        <Link to='/customer'>Customer</Link>
        <Link to='/product'>Products</Link>
        <Link to='/billing'>Billing</Link>
        <Link to='/account'>Account</Link>
        <Link to='/logout'>Log Out</Link>

        <Route path='/dashboard' component={DashBoard} />
        <Route path='/customer' component={Customer} />
        <Route path='/product' component={Products}/>
        <Route path='/billing' component={Billing}/>
        <Route path='/account' component={Account}/>
        <Route path='/logout' component={LogOut} />
        
    </div>)

    }

    export default PosApp