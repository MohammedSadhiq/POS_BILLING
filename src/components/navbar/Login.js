import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { createStore } from 'redux';
import {startLogin} from '../../acions/configureActions';

const Login = ()=>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const dispatch = useDispatch();

    const handleEmail = (e)=>{
        const value = e.target.value;
        setEmail(value)
    }

    const handlePassword = (e)=>{
        const value = e.target.value;
        setPassword(value)
    }

    const handleLogin = (e)=>{
        e.preventDefault();
        const credentials ={
            email:email,
            password:password
        }
        console.log(credentials)
        dispatch(startLogin(credentials))
    }

    return(
    <div>
            <p>Login</p>
            <form onSubmit={handleLogin}>
                <div>
                    <label>User Email</label>
                    <input type="text" value={email} onChange={handleEmail}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" value={password} onChange={handlePassword}/>
                </div> 
                <input type="submit" value="login" />
            </form>
        </div>
    )
}

export default Login