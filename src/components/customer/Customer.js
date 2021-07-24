import React from 'react'
import AddCustomer from './AddCustomer'
import ListCustomers from './ListCustomer'

const Customer = ()=>{
    return(<div>
        <p>Customer</p>
        <AddCustomer type='Add'/>
        <ListCustomers />
      
    </div>)
}

export default Customer