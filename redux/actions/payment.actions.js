import { types } from "../types/types";

export const generatePayment = content => {
    const payload = content;
    return {
        type: types.payment,
        payload
    }
}