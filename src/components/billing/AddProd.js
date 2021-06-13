import React,{useState, useDispatch} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function AddProd(){

    const [ product, setProduct] = useState('');
    const [quantity, setquantity] = useState(1);



    return(<div>
        <form>
            <div>
                <lable>Product</lable>
                
            </div>
        </form>
    </div>)


}