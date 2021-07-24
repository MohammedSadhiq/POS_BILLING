import React, {useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addBill, addItems} from '../../acions/billAction';
import {addCart} from '../../acions/cartAction'

function AddBill(){

    const [customer, setCustomer] = useState('');
    const [ product, setProduct ] = useState('');
    const  [ quantity, setquantity] = useState(0);
    const dispatch = useDispatch();

    const bill = useSelector(state=>state.bill);
    const customerList = useSelector(state=>state.customerList)
    const productList = useSelector(state=>state.productList)
    console.log('bill',bill)


    function handleCustomer(e){
        setCustomer(e.target.value)
    }

    function handleProduct(e){
        setProduct(e.target.value)
    }


    function handlequantity(e){
        setquantity(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();

        const newBill = {
            'date': new Date(),
            'customer': customer,
             'lineItems':[{
                 'product':product,
                 'quantity':quantity
             }]
        }
        console.log('new bill', newBill)
        console.log('truthy',bill.lineItems.length>0)
        if(!bill.lineItems.length>0){      
            dispatch(addBill(newBill))
           // dispatch(addCart({...newBill.lineItems,product:product}))
        }
        else{
            
            let isProductSelectedAlready = false;
           
            const updatedBill = bill.lineItems.map((ele,i)=>{
                if(ele.product==newBill.lineItems[0].product){
                    isProductSelectedAlready = true;
                    return {...ele, quantity:Number(ele.quantity)+Number(newBill.lineItems[0].quantity)}                    
                }
                else{
                    return {...ele}
                }
            })
            if(!isProductSelectedAlready){
                updatedBill.push(newBill.lineItems[0])
            }
            console.log('bill in line items', updatedBill)
            dispatch(addItems(updatedBill))
        }
        console.log('bill after cart', bill)
       return 'bill'
    }    


    return(<div>
        <h1>Add Bill</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Customer</label><br/>
                <select value={customer} onChange={handleCustomer}> 
                <option value="">Select</option>
                    {
                        customerList.map((ele,index)=>{
                            return <option value={ele._id} key={ele._id} >{ele.name}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <label>Product</label><br/>
                <select value={product} onChange={handleProduct}>
                <option value="">Select</option>
                    {
                        productList.map((ele,index)=>{
                            return <option value={ele._id} key={ele._id} >{ele.name}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <label>Quantity</label>
                <input type="number" value = {quantity} min="1" onChange={handlequantity}/>
            </div>

            <input type="submit" value="Add to cart" />
        </form>
 
    </div>)
}


export default AddBill