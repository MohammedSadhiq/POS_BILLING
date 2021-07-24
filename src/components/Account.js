import React,{ useState, useEffect} from 'react';
import axios from 'axios';

const Account = ()=>{

    const [account,setaccount] = useState({})

    useEffect(()=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account',{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data;

            if(result.hasOwnProperty('errors')){
                alert('bad response')
            }
            else{
                console.log('result ', result)
                setaccount(result)
            }
        })
        .catch(err=>{
            alert('error in getting respose')
            console.log(err);
        })
    },[])

    return(<div>
        <p>Account</p>
        <h5>User Name : {account.username}</h5>
        <h5>email:{account.email}</h5>
        <h5>businessName : {account.businessName}</h5>
        <h5>address : {account.address}</h5>
    </div>)
}

export default Account