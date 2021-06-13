export const addBill = (bill)=>{

    return{
        type:'addBill',
        payload:bill
    }
}

export const addItems = (items)=>{
    return{
        type:'addItems',
        payload:items
    }
}