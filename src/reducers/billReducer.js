const initialBill ={
    date:'',
    customer:'',
    lineItems:[]
}

function billReducer(state=initialBill,action){
   
   

    switch(action.type){

        case 'addBill':{
            console.log('lineItems',action.payload.lineItems)
           // const newItems = state.lineItems.push(action.payload.lineItems)
           // console.log('new items', newItems)
            return action.payload
        }

        case 'addItems':{
            return {...state,lineItems:action.payload}
        }

        default:{
             return state
        }

    }

}

export default billReducer