import React from "react";
import {useNavigate, useLocation, NavLink, Link} from "react-router-dom";
import {getCurrentPage, replaceLocation} from "../utils";


export default function Tabs(props) {
    const location = useLocation()
    const navigate = useNavigate()


    return (
        <ul className="flex flex-wrap text-base  text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">

            {
                props.tabs.map((tab, index) => (
                        <li className="me-2" key={index} onClick={(event) => {
                            props.setActiveTab(index);
                            // navigate(replaceLocation(location) + props.tabs[index].link)
                        }}>
                            <button
                                className={index === props.activTab ? 'activeTab' : 'defaultTab'}>{tab.name}</button>
                        </li>

                    )
                )

            }


        </ul>
    )
}