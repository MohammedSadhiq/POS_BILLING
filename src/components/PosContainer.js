import React, { useState } from 'react';
import PosApp from './PosApp';
import PosAuth from './PosAuth';
import { useSelector} from 'react-redux';



const PosContainer = () =>{

    const isLoggedIn = useSelector((state)=>{
        return state.token;
    })


   // const [isLoggedIn,setisloggedin] = useState(token)
    console.log('islogged', isLoggedIn)

    return (<div>
        {
            localStorage.getItem('token') ? <PosApp /> : <PosAuth />
        }
        
        
        
    </div>)
}

export default PosContainer