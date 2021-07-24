const initialList = [];

const customerReducer = (state=initialList, action)=>{

    switch(action.type){

        case 'ListCustomer':{
            return action.payload
        }

        default :{
            return state
        }
    }
}

export default customerReducer