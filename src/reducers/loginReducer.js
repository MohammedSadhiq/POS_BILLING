const islogged = '';

const loginReducer = (state= islogged, action) =>{

    switch(action.type){
        case'SUCCESS':{
            return action.payload
        }

        case 'LOGOUT':{
            return ''
        }

        default :{
            return state
        }
    }
}

export default loginReducer