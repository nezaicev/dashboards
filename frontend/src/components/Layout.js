import React, {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom"
import Header from "./Header"
import useAuth from "../hooks/useAuth";
import {authGET} from "../api/auth";

export const Layout = (props) => {
    const navigate = useNavigate()
    const [auth, setAuth] = React.useState({
        'id': '',
        'name':'',
        'user': 'AnonymousUser',
        'auth': false,
        'superuser': false,
    })

    React.useEffect(() => {
        let result = authGET()
        result.then((data) => {
            setAuth(data['data'])
            if (data['data']['auth'] === false) {
                navigate('/login')
            }

        })
    }, []);

    return (

        <>
            {auth['auth'] &&
                <>
                    <header>
                        <Header auth={auth}/>
                    </header>

                    <div className=" container  mx-auto">
                        <Outlet/>
                    </div>
                </>}


            <footer>

                <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">

                </footer>


            </footer>
        </>
    )
}