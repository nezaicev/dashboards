import axios from "axios";

// import axios, { AxiosRequestConfig } from 'axios';
// import fs from 'fs';

export function getCurrentPage(pages) {
    const path = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]
    let currentIndex = 0
    pages.map((page, index) => {

        if (page.link === path) {
            currentIndex = index
        }
    })
    return currentIndex
}


export function replaceLocation(location) {
    length = location.pathname.split('/').length
    if (length < 3) {
        return location.pathname + '/'
    }
    return location.pathname.replace(location.pathname.split('/')[length - 1], '')
}




const filterData = (field, valueFilter, currentData) => {
    let data = currentData

    document.getElementsByName('filter').forEach(function (item) {
        if (item.value !== '' && item.type === 'text') {
            currentData = currentData.filter(currentData => currentData[item.id].includes(item.value))
        }
    })

    return currentData
}


export default function getTotalPage(pageSize, totalCount) {

    if (pageSize >= totalCount) {
        return 1
    } else {
        return Math.ceil(totalCount / pageSize)
    }

}


export function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}





export const downloadXLSFile = async (url, params) => {

    // Its important to set the 'Content-Type': 'blob' and responseType:'arraybuffer'.
    const headers = {'Content-Type': 'blob'};
    const config  = {method: 'GET', url: url, params:params, responseType: 'arraybuffer', headers};

    try {
        const response = await axios(config);

        const outputFilename = `${Date.now()}.xls`;

        // If you want to download file automatically using link attribute.
        const url = URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', outputFilename);
        document.body.appendChild(link);
        link.click();

        // OR you can save/write file locally.
        // fs.writeFileSync(outputFilename, response.data);
    } catch (error) {
        throw Error(error);
    }
}