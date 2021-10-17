import { types } from "../types";

const INITIAL_STATE = { content: null }

export const snackBarReducer = (state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case types.activateSnackBar:
            return {
                ...state, content: action.payload,
            }
        default:
            return state;
    }
}