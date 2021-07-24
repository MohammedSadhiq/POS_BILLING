import React from 'react';
import {Route,Link} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';

const NavBar = ()=>{
    return(
        <div>
                
            <Link to='/home'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>

            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
        </div>
     )
}

export default NavBar