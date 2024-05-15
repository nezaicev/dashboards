import {useParams} from "react-router-dom";
import React from "react";
import {getCurrentPage} from "../utils";
import Tabs from "../components/Tabs";
import BaseTable from "../components/BaseTable";
import fetchPools from "../api/fetchPools";
import fetchVMs from "../api/fetchVMs";
import Breadcrumb from "../components/Breadcrumb";


export default function () {
    const {id} = useParams()

    return (
        <>
            <div className={'mt-6'}><Breadcrumb pages={[{'name':'Pools','link':'/suvr'},{'name':id,'link':id}]}/></div>
            <BaseTable params={{'pool_id': id}}
                       activePage={'vms'}
                       fetch={(params) => fetchVMs(params)}/>


        </>


    )
}


