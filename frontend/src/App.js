import React from "react";
import {BrowserRouter, Routes, Route, RedirectFunction, useNavigate} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard"
import {Test} from "./pages/Test"
import {Layout} from "./components/Layout"
import Login from "./pages/Login";
import {authGET} from "./api/auth";
import SignUp from "./pages/SignUp";
import Page404 from "./pages/Page404";
import Pool from "./pages/Pool";
import {redirect} from "react-router-dom";
export const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path='/'>
                        <Route index element={<Dashboard/>}/>

                    </Route>


                </Routes>

            </BrowserRouter>
        </>
    )
}



