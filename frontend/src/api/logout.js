import axios from "axios";
import {getCookie} from "../utils";
export  default  function (params) {
    const result = axios.get(
        `/users/api/logout`,
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
