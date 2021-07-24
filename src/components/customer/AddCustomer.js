import React,{useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import { createStore } from 'redux';
import {startCustomerList} from '../../acions/configureActions';


const AddCustomer = (props)=>{

    const {type} = {...props}
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone ] = useState('');
    const dispatch = useDispatch();
    const token = useSelector((state)=>{
        return state.token
    })

    //console.log('edit',edit)
    const history = useHistory();

    const[ loginToken, setLoginToken ] = useState(token)

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            history.push('/login')
        }
    },[])

    const handleCustomerName = (e)=>{
        const value = e.target.value;
        setCustomerName(value)
    }

    const handleCustomerEmail = (e)=>{
        const value = e.target.value;
        setCustomerEmail(value)
    }

    const handleCustomerPhone = (e)=>{
        const value = e.target.value;
        setCustomerPhone(value)
    }

    const cancel = ()=>{
        setCustomerName('')
        setCustomerPhone('')
          setCustomerEmail('')
    }

    const handleCustomerCreation = (e) =>{
        e.preventDefault();
        const customerDetails ={
            name:customerName,
            mobile:customerPhone,
            email:customerEmail
        }
        console.log(customerDetails)
        addCustomer(customerDetails)
    }

    const addCustomer=(data)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/customers', data,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data;

            if(result.hasOwnProperty('token')){
                alert('bad response')
            }
            else{
                console.log('added', result)
                dispatch(startCustomerList())
            }
        })
        .catch(err=>{
            alert('error while getting response')
        })
    }



    return(type==='Add' ?<div>
        <p>AddCustomer</p>
        <form onSubmit={handleCustomerCreation} >
            <div>
                <label>Name</label>
                <input type='text' value={customerName} onChange={handleCustomerName} />
            </div>
            <div>
                <label>Phone Number</label>
                <input type='text' value={customerPhone} onChange={handleCustomerPhone} />
            </div>
            <div>
                <label>Email</label>
                <input type='text' value={customerEmail} onChange={handleCustomerEmail} />
            </div>

            <input type="submit" value="save" />
            <input type="button" value="cancel" onClick={cancel} />
        </form>
    </div> : <div><p>Edited</p></div>)
}

export default AddCustomer