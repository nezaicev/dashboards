import axios from "axios";
import {getCookie} from "../utils";

export function authPOST(params, data) {
    const result = axios.post(
        `/users/api/auth`,
        {body: data},
        {
            withCredentials: true,
            headers: {
                "X-CSRFToken": getCookie('csrftoken'),
            },
            params: params
        });
    return result;
}


export function authGET(params) {
    const result = axios.get(
        `/users/api/auth`,
        {body: {}},
        {
            withCredentials: true,
            headers: {
                "X-CSRFToken": getCookie('csrftoken'),
            },
            params: params
        });
    return result;
}





