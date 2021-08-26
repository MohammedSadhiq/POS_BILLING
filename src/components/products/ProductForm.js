import React,{useState,useEffect,} from 'react';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import {startProductList}    from '../../acions/configureActions';


const ProductForm = (props)=>{

    const { add, isproductEdit, setModal } = props
   console.log('editable product 1',isproductEdit)
   let name1 ='';
   let price1 = 0;
   let id='';
   if(isproductEdit){
      id = isproductEdit._id; 
      name1 = isproductEdit.name;
      price1 = isproductEdit.price
   }
   const [product,setproduct] = useState(name1);
   const [price,setprice] = useState(price1);
    //const [product,setproduct] = useState('');
    //const [price,setprice] = useState(0);
    const dispatch = useDispatch()

    const handleProduct = (e) =>{
        const value = e.target.value;
        setproduct(value)
    }

    const handlePrice = (e) =>{
        const value = e.target.value;
        setprice(value)
    }

    const handleSave  = (e) =>{
        e.preventDefault();
        const productData ={
            name:product,
            price : Number(price)
        }
        addProduct(productData)
        console.log(productData)
        dispatch(startProductList())

    }

    //cancel functionality

    function handleCancel(){
        setproduct('');
        setprice(0);
        setModal(false)
    }

    //Edit functionality
    function handleEdit(){
        updateProduct();
        dispatch(startProductList())
        setModal(false)
    }

    function updateProduct(){
        const editedData ={name:product,price:price}
        axios.put(`http://dct-billing-app.herokuapp.com/api/products/${id}`,editedData,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            } 
        })
        .then((response)=>{
            const result = response.data;

            if(result.hasOwnProperty('errors')){
                alert('bad response')
                console.log('bad response', result)
            }
            else{
                console.log('result', result);

            }
        }).catch(err=>{
            alert('error getting response');
            console.log('err',err)
        })
    }

    const addProduct = (productData) =>{
        axios.post('http://dct-billing-app.herokuapp.com/api/products', productData, {
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data;

            if(result.hasOwnProperty('errors')){
                alert('bad response')
                console.log('bad response', result)
            }
            else{
                console.log('result', result);

            }
        })
        .catch(err=>{
            alert('error getting response');
            console.log('err',err)
        })
    }

    return(<div>
        <p>AddProducts</p>

        <form onSubmit={handleSave}>
            <div>
                <label>Product</label>
                <input type = 'text' value = {product} onChange = {handleProduct} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={price} onChange= {handlePrice} />
            </div>
           {add ? <input type="submit" value='Add' /> : <input type="button" onClick={handleEdit} value='Update' /> }
            <input type = 'button' onClick={handleCancel} value='cancel'/>
        </form>
    </div>)
}

export default React.memo(ProductForm)