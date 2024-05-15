import React, {useEffect} from "react";

import {useState} from 'react';
import {Pagination} from 'flowbite-react';
import fetchPools from "../api/fetchPools";

export default function (props) {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        let result = fetchPools({'page':currentPage})
        result.then((r) => {
            props.loadData(r.data['results'])
        })

    }, [currentPage]);


    const onPageChange = async (page) => {
        setCurrentPage(page);
    };


    return (

        <div className="flex overflow-x-auto sm:justify-center">
            <Pagination currentPage={currentPage} totalPages={props.totalPages} onPageChange={onPageChange}/>
        </div>
    );
}