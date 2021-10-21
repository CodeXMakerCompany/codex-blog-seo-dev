import { types } from "../types";

export const generatePayment = content => {
    const payload = content;
    return {
        type: types.payment,
        payload
    }
}