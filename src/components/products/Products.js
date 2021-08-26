import React,{useState} from 'react';
import Modal from 'react-modal';
import ProductForm from './ProductForm'
import ListProducts from './ListProducts'
import EditForm from './EditForm'

const Products = ()=>{

    const [addProd,setAddProd] = useState(true)
    const [openModal,setModal] = useState(false)
    const [productEdit,setProductEdit] = useState({})
    function isEdit(ele){
     //   setAddProd(false)
        setModal(true)
        console.log('edit prod',ele)
        setProductEdit(ele)
        console.log('edit state', productEdit)
    }

    return(<div>
        <p>Products</p>
        {/* openModal &&<EditForm setOpenModal={setModal} /> */}

        <ProductForm add={true} setModal={setModal}/>
        <ListProducts isEdit={isEdit}/>  
        
        <Modal isOpen={openModal}>
            <h2>Edit Product</h2>
          <div className="editProduct">
          <ProductForm add={false} isproductEdit={productEdit} setModal={setModal}/>
          </div>
            <button onClick={()=>{setModal(false)}}>X</button>
        </Modal>
           </div>)
}

export default Products