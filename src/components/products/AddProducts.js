import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import {startProductList}    from '../../acions/configureActions';


const AddProducts = ()=>{

    const [product,setproduct] = useState('');
    const [price,setprice] = useState(0);
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
            <input type="submit" value='save' />
            <input type = 'button' value='cancel'/>
        </form>
    </div>)
}

export default AddProducts