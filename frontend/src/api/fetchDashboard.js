import axios from "axios";


export default async (params) => {
    return await axios.get(`dashboards/api/1`, {params: params});
};
