import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {startProductList}    from '../../acions/configureActions';


const ListProducts = (props)=>{

    const {isEdit} = props
    const dispatch = useDispatch();

    const productList = useSelector((state)=>{
        return state.productList
    })    

    useEffect(()=>{
        dispatch(startProductList())
    },[])

    //delete the product from list
    function handleDelete(ele){
        deleteProduct(ele._id);
        dispatch(startProductList())
    }

    function deleteProduct(id){
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            } 
        }).then((response)=>{
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

    console.log('product', productList);

    return(<div>
        <p>ListProducts</p>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    productList.map((ele)=>{
                        return <tr>
                            <td>{ele.name}</td>
                            <td>{ele.price}</td>
                            <td><button onClick={()=>isEdit(ele)}>Edit</button></td>
                            <td><button onClick={()=>handleDelete(ele)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>)
}   

export default ListProducts