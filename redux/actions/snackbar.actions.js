import { types } from "../types";

export const openSnackBar = content => {
    const payload = content;
    return {
        type: types.activateSnackBar,
        payload
    }
}