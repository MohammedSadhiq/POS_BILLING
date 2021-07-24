export const addCart = (item)=>{
    return {
        type:'ADD_TO_CART',
        payload:item
    }
}