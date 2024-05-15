import React from "react";

import {Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem} from 'flowbite-react';
import {useNavigate} from "react-router-dom";
import logout from "../api/logout";

export default function (props) {
    const navigate = useNavigate()
    const menuTheme = {
        "arrowIcon": "ml-2 h-4 w-4",
        "content": "py-1 focus:outline-none",
        "floating": {
            "animation": "transition-opacity",
            "arrow": {
                "base": "absolute z-10 h-2 w-2 rotate-45",
                "style": {
                    "dark": "bg-gray-900 dark:bg-gray-700",
                    "light": "bg-white",
                    "auto": "bg-white dark:bg-gray-700"
                },
                "placement": "-4px"
            },
            "base": "z-10 w-fit rounded divide-y divide-gray-100 shadow focus:outline-none",
            "content": "py-1 text-sm text-gray-700 dark:text-gray-200",
            "divider": "my-1 h-px bg-gray-100 dark:bg-gray-600",
            "header": "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
            "hidden": "invisible opacity-0",
            "item": {
                "container": "",
                "base": "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
                "icon": "mr-2 h-4 w-4"
            },
            "style": {
                "dark": "bg-gray-900 text-white dark:bg-gray-700",
                "light": "border border-gray-200 bg-white text-gray-900",
                "auto": "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
            },
            "target": "w-fit"
        },
        "inlineWrapper": "flex items-center"
    }

    const getName=()=>{
        if (props.auth['name'].length>1)
        return(props.auth['name'].split(' ')[0][0].toUpperCase() + props.auth['name'].split(' ')[1][0].toUpperCase())
        else{
            return props.auth['user'][0].toUpperCase()
        }
    }


    const handleLogout = () => {
        let result = logout()
        navigate('/login')

    }
    if (props.auth['auth'] === true) {

        return (

            <Dropdown
                label={<Avatar alt="User settings"
                               placeholderInitials={getName()}
                               rounded/>}
                arrowIcon={false}
                inline
                theme={menuTheme}
            >

                <DropdownHeader>
                    <span className="block text-sm">{props.auth['name']}</span>
                    <span className="block truncate text-sm font-medium">{props.auth['user']}</span>
                </DropdownHeader>
                {/*<DropdownItem>test_1</DropdownItem>*/}
                {/*<DropdownItem>test_2</DropdownItem>*/}
                {/*<DropdownItem>test_3</DropdownItem>*/}
                {/*<DropdownDivider/>*/}
                <DropdownItem onClick={handleLogout}>Выход</DropdownItem>


            </Dropdown>

        );
    } else {
        return (
            <span
                className="self-center text-xl text-white font-semibold whitespace-nowrap dark:text-white">Вход</span>
        )
    }
}