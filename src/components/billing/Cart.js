import React,{useState} from 'react';
import { ReactReduxContext } from 'react-redux';
import {useSelector,useDispatch} from 'react-redux';
import { addItems } from '../../acions/billAction';

const Cart = ()=>{

    const cart = useSelector(state=>{return state.bill});
    const product = useSelector(state=>state.productList)
    const dispatch = useDispatch()

    const [cartItems, setCartItems ] = useState(cart)
    const cartProds = {}

    function getProduct(prod){
        let prodName = '';
        product.forEach((ele)=>{
            if(prod===ele._id){
                prodName = ele.name
            }
        })
        return prodName
    }
    
    console.log('product lidt', product)
    console.log('bill in cart', cart)
    console.log('bill in cart items', cartItems)

    function increment(prod){
        const updatedLineItem = cart.lineItems.map(ele=>{
            if(ele.product===prod){
                console.log('increment',ele['product'],ele['quantity']+1)
                
                return {...ele,quantity:Number(ele.quantity)+1}
            }
            else{
                return {...ele}
            }
           
        })
        console.log('line', cart.lineItems)
        console.log('cart in func', cart)
        console.log('update line', updatedLineItem)
        dispatch(addItems(updatedLineItem))
        
    }

    return(<div>
        <p>Cart</p>
        {
            cart.lineItems && (<ul>
                {
                    cart.lineItems.map((ele,index)=>{
                        return <li key={index}>{getProduct(ele.product)}<button>-</button>{ele.quantity}<button onClick={()=>{increment(ele.product)}}>+</button></li>
                    })
                }
            </ul>)
        }
    </div>)
}

export default Cart