import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {startProductList}    from '../../acions/configureActions';


const ListProducts = ()=>{

    const dispatch = useDispatch();

    const productList = useSelector((state)=>{
        return state.productList
    })

    useEffect(()=>{
        dispatch(startProductList())
    },[])

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
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>)
}

export default ListProducts