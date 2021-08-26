import axios from 'axios';
import React,{useState, useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { startCustomerList } from '../../acions/configureActions';

const ListCustomers = (props)=>{

    const {isEdit} = props
    const dispatch = useDispatch()

    const listOfCustomers = useSelector((state)=>{
        return state.customerList
    })

    const [customers, setcustomers] = useState(listOfCustomers)

    useEffect(()=>{
        console.log('dispatch')
        dispatch(startCustomerList())
        console.log(listOfCustomers)
    },[])

    const handleDelete = (ele)=>{
        removeCustomer(ele._id)
    }

    const removeCustomer = (id)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, {
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
                console.log('deleted', result)
                dispatch(startCustomerList())
            }
        })
        .catch(err=>{
            alert('error while deleting')
        })
    }

    console.log(listOfCustomers)

    return(<div>
        <p>ListCustomers</p>
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    listOfCustomers.map((ele)=>{
                        return <tr> 
                            <td>{ele.name}</td>
                            <td>{ele.mobile}</td>
                            <td>{ele.email}</td>
                            <td><button onClick={()=>{isEdit(ele)}}>Edit</button></td>
                            <td><button onClick={()=>{handleDelete(ele)}}>Delete</button></td>
                            </tr>
                    })
                }
            </tbody>
        </table>
    </div>)
}

export default ListCustomers