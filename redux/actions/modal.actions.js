import { types } from "../types/types";

export const toggleModal = content => {
    const payload = content === 'close' ? null : content
    return {
        type: types.activateModal,
        payload
    }
}