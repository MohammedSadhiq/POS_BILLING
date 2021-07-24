import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'

const LogOut = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        localStorage.removeItem('token')
        dispatch({type:'LOGOUT'})
    },[])

    return(<div>
        <p>LogOut</p>
    </div>)
}

export default LogOut