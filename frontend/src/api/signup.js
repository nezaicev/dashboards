import axios from "axios";
import {getCookie} from "../utils";

export default function (params, data) {
    const result = axios.post(
        `/users/api/signup`,
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
