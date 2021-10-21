import { types } from "../types";

export const toggleModal = content => {
    const payload = content === 'close' ? null : content
    return {
        type: types.activateModal,
        payload
    }
}