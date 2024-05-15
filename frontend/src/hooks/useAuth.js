import React from "react";
import {authGET} from "../api/auth";

export default function () {
    const [auth, setAuth] = React.useState({
        'id': '',
        'user': 'AnonymousUser',
        'auth': false,
        'superuser': false,
    })

    React.useEffect(() => {
        let result = authGET()
        result.then((data) => {
            setAuth(data)
        })
    }, []);

    return auth

}