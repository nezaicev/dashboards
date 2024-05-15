import axios from "axios";
import {downloadXLSFile} from "../utils";
// import * as fs from "fs";


export default async (url, params) => {
    // Its important to set the 'Content-Type': 'blob' and responseType:'arraybuffer'.
    const headers = {'Content-Type': 'blob'};
    const config = {method: 'GET', url: `/suvr/api/${url}/report`, params: params, responseType: 'arraybuffer', headers};

    try {
        const response = await axios(config);
        const outputFilename = `${Date.now()}.xls`;

        // If you want to download file automatically using link attribute.
        const url = URL.createObjectURL(new Blob([response.data]));
        console.log(url)
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

};
