export function cartProductsData(data){
    return {type: "ADD_PRODUCTS_DATA", payload: data};
}
export function deleteProducts(index){
    return {type: "DELETE_PRODUCTS_DATA", payload: index};
}
export function addUser(data){
    return {type: "ADD_USER_DATA", payload: data};
}