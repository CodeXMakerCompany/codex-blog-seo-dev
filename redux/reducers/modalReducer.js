import { types } from "../types";

const INITIAL_STATE = { status: false, content: null }

export const modalReducer = (state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case types.activateModal:
            return {
                ...state, status: !state.status, content: action.payload,
            }
        default:
            return state;
    }
}