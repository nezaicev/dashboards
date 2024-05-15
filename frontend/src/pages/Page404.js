import React from "react";
import {BiSolidCat} from "react-icons/bi"

export default function () {
    return (
        <>
            <div className={' mt-10 flex justify-center'}>
                <p><BiSolidCat size={70}/></p>
                <span className={'ml-2'}>
                    <p>Страница не найдена</p>
                    <p className={'text-sky-900'}><a href={'/suvr'}>Главная страница</a></p>
                </span>

            </div>
        </>
    )
}