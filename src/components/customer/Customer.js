import React,{useState} from 'react'
import CustomerForm from './CustomerForm'
import ListCustomers from './ListCustomer'
import Modal from 'react-modal'
import userEvent from '@testing-library/user-event'

const Customer = ()=>{

    const [openModal,setModal] = useState(false);
    const [updateCustomer,setUpdateCustomer] = useState({})

    function isEdit(ele){
        setModal(true)
        setUpdateCustomer({...ele})
        console.log('update customer',updateCustomer)
    }

    return(<div>
        <p>Customer</p>
        <CustomerForm type='Add' setModal={setModal}/>
        <ListCustomers isEdit={isEdit}/>
        <Modal isOpen={openModal}>
            <h2>Edit Product</h2>
          <div className="editProduct">
          <CustomerForm type='Edit' customerData={updateCustomer} setModal={setModal}/>
          </div>
            <button onClick={()=>{setModal(false)}}>X</button>
        </Modal>
        <button onClick={()=>{setModal(true)}}>Modal</button>
    </div>)
}

export default React.memo(Customer)