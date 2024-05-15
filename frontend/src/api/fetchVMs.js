import axios from "axios";


export default async (params, data) => {
    const result = await axios.get(`/suvr/api/vms`, {params: params});
    return result;
};
