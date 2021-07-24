import React from 'react'; 
import {useSelector, useDispatch} from 'react-redux';


const DashBoard = ()=>{

    const products = useSelector((state)=>{
        return state.productList
    })

    const customers = useSelector((state)=>{
        return state.customerList
    })

    return(<div>
        <p>DashBoard</p>

        <h3>Total Products - {products.length}</h3>
        <h3>Total Customers - {customers.length}</h3>
    </div>)
}

export default DashBoard