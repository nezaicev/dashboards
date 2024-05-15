import React from 'react'

import getTotalPage from "../utils";
import {Pagination} from "flowbite-react";
import {Link, useParams} from "react-router-dom";
import {PiMicrosoftExcelLogoFill} from "react-icons/pi";
import fetchReport from "../api/fetchReport";

export default function BaseTable(props) {
    const paginationTheme = {
        "base": "",
        "pages": {
            "selector": {
                "base": "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                "active": "bg-blue-800 text-white hover:bg-cyan-100 hover:text-sky-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
                "disabled": "opacity-50 cursor-normal"
            }
        }
    }

    const [dataTable, setDataTable] = React.useState([])
    const [pageSize, setPageSize] = React.useState(20)
    const [totalPages, setTotalPages] = React.useState(1)
    const [head, setHead] = React.useState([])
    const [isFetching, setIsFetching] = React.useState(false)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [filter, setFilter] = React.useState(props.params ? props.params : {})
    const getColumnsFilter = () => {
        let params = Object()
        document.getElementsByName('filter').forEach(function (item) {
            if (item.value !== '' && item.type === 'text') {
                params[item['id'] + '__contains'] = item.value
            }
        })
        return params
    }


    const handleSelectPageSize = (e) => {
        setPageSize(e.target.value)
        let result = props.fetch({'page': 1, 'page_size': e.target.value, ...getColumnsFilter(), ...props.params})
        result.then((r) => {
            setDataTable(r.data['results'])
            setHead(Object.keys(r.data['results'][0]))
            setTotalPages(getTotalPage(e.target.value, r.data['count']))
            setCurrentPage(1)
        })
    }

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    function getInput(event) {

        if (event.target.firstElementChild) {
            if (event.target.firstElementChild.type === 'text') {
                event.target.firstElementChild.type = 'hidden';
                event.target.firstElementChild.value = '';
                filterDataServer(event.target.firstElementChild)

            } else {
                event.target.firstElementChild.type = 'text'

            }
        }
    }


    const filterDataServer = async (event) => {

        setFilter({...getColumnsFilter(), ...filter})
        let result = await props.fetch({...getColumnsFilter(), ...props.params, 'page_size': pageSize})
        setDataTable(result.data['results'])
        setTotalPages(getTotalPage(pageSize, result.data['count']))


    }
    React.useEffect(() => {
        setIsFetching(true)

        let result = props.fetch({'page': currentPage, 'page_size': pageSize, ...filter})
        result.then((r) => {
            setDataTable(r.data['results'])
            setHead(Object.keys(r.data['results'][0]))
            setTotalPages(getTotalPage(pageSize, r.data['count']))
            setIsFetching(false)
        })
    }, [currentPage]);


    return (

        <>
            <div>

                <div className={props.tabs ? 'flex justify-between' : 'flex justify-end'}>
                    {props.tabs && props.tabs()}
                    <div className={'flex'}>
                    <button className={'mt-4 mr-3'} title={'Выгрузить отчёт'} onClick={()=>fetchReport(props.activePage, {
                        'page': 1,
                        'page_size': 50000, ...getColumnsFilter(), ...props.params
                    })}><PiMicrosoftExcelLogoFill size={38} color={'#073f61'}/> </button>

                    <select className='text-xs mt-4 form-select' defaultValue={pageSize}
                            onChange={(e) => handleSelectPageSize(e)}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                        </div>
                </div>


            </div>
            <div className="overflow-x-auto">
                <table
                    className="w-full table-auto text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead
                        className="text-sm text-gray-700 uppercase  bg-gray-100 dark:bg-gray-700 dark:text-gray-400">

                    <tr id='headRow'>

                        {
                            head.map((name, index) => (
                                <th scope="col" className="px-6 text-center py-3 border-l" colSpan='1' key={index}
                                    onClick={getInput}>
                                    {name}

                                    <input className="text-xs" id={name} type="hidden" name={"filter"}
                                           onChange={(event) => (filterDataServer(event))}/>
                                </th>
                            ))
                        }

                    </tr>

                    </thead>
                    <tbody>

                    {
                        dataTable.map((row, index) => (

                            <tr key={index} className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">

                                {
                                    Object.values(row).map((value, index) => (
                                            <td
                                                key={index}
                                                className="px-2 py-1  text-gray-900 text-sm  text-center">

                                                {props.linkId && index === 0 ?
                                                    <Link to={value}
                                                          className={'text-blue-800'}>{value}</Link> : value}


                                            </td>
                                        )
                                    )

                                }

                            </tr>


                        ))
                    }

                    </tbody>
                </table>


            </div>
            <div className="flex overflow-x-auto sm:justify-center">
                <Pagination theme={paginationTheme} currentPage={currentPage} totalPages={totalPages}
                            onPageChange={onPageChange}/>
            </div>
        </>


    )
}


