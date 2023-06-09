import PizzaApi from "../../PizzaApi";
import { ADD_TO_CART, ADJUST_QUANTITY, REMOVE_FROM_CART, SINGLE_ITEM } from "../Constants/CartConstants";


const INITIAL_STATE = {
    products: PizzaApi,
    cart: [],
    singleItem: null
}


const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            //find item data from products array
            const item = state.products.find((product) => product.id === action.payload.id);

            // check if item is already in cart
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);

            // get selected size and topping
            const selectedSize = action.payload.size;
            const selectedTopping = action.payload.topping;

            // modify item object to include selected size and topping
            const newItem = {
                ...item,
                quantity: 1,
                selectedSize: selectedSize,
                selectedTopping: selectedTopping
            };

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) => item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item)
                    : [...state.cart, newItem],
            };

            
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            }

        case ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id
                    ? { ...item, quantity: +action.payload.quantity }
                    : item)
            }

        case SINGLE_ITEM:
            return {
                ...state,
                singleItem: action.payload,
            }

        default:
            return state
    }

}

export default cartReducer;
