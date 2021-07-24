import React,{useState, useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { startCustomerList } from '../../acions/configureActions';

const ListCustomers = ()=>{

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
                            </tr>
                    })
                }
            </tbody>
        </table>
    </div>)
}

export default ListCustomers