import {
    ADD_USER_SHIPPING_INFO,
    MAKE_PURCHASE,
    MAKE_PURCHASE_SUCCESS,
    RESET_USER_STATE
} from "./types";

export function addUserInfo(payload) {
    return { type: ADD_USER_SHIPPING_INFO, payload };
}

export function makePurchase() {
    return (dispatch) => {
        dispatch({ type: MAKE_PURCHASE });

        setTimeout(() => {
            return dispatch({ type: MAKE_PURCHASE_SUCCESS });
        }, 4000);
    };
}


export function resetUserState() {
    return { type: RESET_USER_STATE };
}