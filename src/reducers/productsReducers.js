const productsReducers = (state = {products: []}, action) => {
	switch(action.type){
		case "ADD_PRODUCTS_DATA":
		return {products: [...state.products.concat(action.payload)]};
        break;

        case "DELETE_PRODUCTS_DATA":
            return {products: [...state.products.slice(0,action.payload),...state.products.slice(action.payload+1)]};
        default:
        return state;
    }
}
export default productsReducers;