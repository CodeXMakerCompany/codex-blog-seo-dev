import { types } from "../types/types";

export const addItemToCart = content => {
    const payload = content;
    return {
        type: types.cartAddItem,
        payload
    }
}

export const removeItemFromCart = content => {
    const payload = content;
    return {
        type: types.cartRemoveItem,
        payload
    }
}

export const cleanCart = content => {
    const payload = content;
    return {
        type: types.cartCleanItem,
        payload
    }
}