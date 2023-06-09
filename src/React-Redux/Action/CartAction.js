import { ADD_TO_CART, ADJUST_QUANTITY, REMOVE_FROM_CART, SINGLE_ITEM } from "../Constants/CartConstants"

export const addToCartAction = (id, size, toppings) => (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { 
        id:id, 
        size:size, 
        toppings:toppings 
    }
    });
  };  


export const removeFromCartAction = (itemID) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    };
};

export const adjustQuantityAction = (itemID, value) => {
    return {
        type: ADJUST_QUANTITY,
        payload: {
            id: itemID,
            quantity: value
        }
    };
};

export const singleItemAction = (item) => {
    return {
        type: SINGLE_ITEM,
        payload: item
    };
};
