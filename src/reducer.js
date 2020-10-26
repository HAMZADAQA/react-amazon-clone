export const initalState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => 
basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                // basket:  [action.payload, ...state.basket]
                basket: [...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];

                const index = state.basket.findIndex((basketItme) => basketItme.id === action.id);

                if(index >= 0) {
                    // item exists in basket, remove it ..
                    newBasket.splice(index, 1);
                } else {
                    console.warn(
                        `Cant remove product(id: ${action.id}) as its normal`
                    )
                }

                return { ...state, basket: newBasket };
            // return {
            //     ...state,
            //     basket: state.basket.map(item => item.id !== action.payload),
            // }
 
            default:
            return state;
    }
}

export default reducer;