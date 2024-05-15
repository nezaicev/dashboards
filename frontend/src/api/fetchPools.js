import axios from "axios";


export default async (params) => {
    return await axios.get(`/suvr/api/pools`, {params: params});
};
