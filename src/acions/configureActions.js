import axios from 'axios'

export const startLogin = (credentials)=>{
   
    return (dispatch) =>{
        axios.post('http://dct-billing-app.herokuapp.com/api/users/login',credentials)
            .then((response)=>{
                const result = response.data;

                if(result.hasOwnProperty('error')){ 
                    alert('error response')
                }

                else{
                    localStorage.setItem('token',result.token)
                    console.log('token',result)
                    console.log('local storage',localStorage.getItem('token'))
                    dispatch(login(result.token))
                }
            })
            .catch(err=>{
                alert('error in getting response')
                console.log('error',err);
            })
    }
}

const login =(credentials)=>{
    return{
        type:'SUCCESS',
        payload:credentials
    }    
}


export const startCustomerList = () =>{
    return (dispatch) =>{
        axios.get('http://dct-billing-app.herokuapp.com/api/customers',{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data;
                console.log('response', response)
            if(result.hasOwnProperty('errors')){
                alert('bad response')
            }
            else{
                console.log('list of customer',result)
                dispatch(listCustomer(result))
                //dispatch({type:'ListCustomer', payload : result})
            }
        })
        .catch(err=>{
            alert('error in getting response')
            console.log(err)
        })
    }
}

const listCustomer = (customerData)=>{
    return {
        type:'ListCustomer',
        payload:customerData
    }
}

export const startProductList = () =>{
    return (dispatch) =>{
        axios.get('http://dct-billing-app.herokuapp.com/api/products' , {
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data;

            if(result.hasOwnProperty('token')){
                alert('bad respone')
                console.log(result)
            }
            else{
                console.log('succes product list', result);
                dispatch(products(result))
            }
        })
        .catch(err=>{
            alert('error in getting response');
            console.log('err',err)
        })
    }
}

const products =(productData) =>{
    return{
        type:'LIST_PRODUCTS',
        payload:productData
    }
}


export const startBilling = (invoices)=>{
    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/bills',invoices,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response)=>{
                const result = response.data;
                console.log('bill details', result)
            })
            .catch(err=>{
                alert('error',err)
            })
    }
}         