import React, {useState} from "react";
import {PieChart} from "@mui/x-charts";
import fetchDashboard from "../api/fetchDashboard";


export function Dashboard() {

    const [data, setData] = useState([])
    const [fetch, setFetch] = React.useState(false)
    const [params, setParams]=React.useState({'month':0})

    const handleChange=(event)=>{
        let params={'month':event.target.value}
        setParams(params)
        setFetch(false)
        let result = fetchDashboard(params)
        result.then((data) => {
            setData(data['data'])
            setFetch(true)
        })
    }

    React.useEffect(() => {
        let result = fetchDashboard(params)
        result.then((data) => {
            setData(data['data'])
            setFetch(true)
        })

    }, [])

    return (


            <div className='container  mx-auto mt-4'>
                <div className="flex justify-end">
                    <select defaultValue={0} onChange={handleChange} className="focus:bg-gray-100">
                        <option value={0}>Все</option>
                        <option value={8}>Август</option>
                        <option value={9}>Сентябрь</option>
                    </select>
                </div>

                <div className=" border-solid border-2 border-indigo-100">

                {fetch && <PieChart
                    series={[
                        {
                            data: data,
                            highlightScope: {faded: 'global', highlighted: 'item'},
                            faded: {innerRadius: 30, additionalRadius: -30, color: 'gray'},
                        },
                    ]}
                    colors={['#ef9a9a', '#c5e8b6', '#9fa8da', '#90caf9', '#80cbc4', '#e6ee9c']}
                    width={600}
                    height={250}
                    onItemClick={(event, params) => {
                        alert('Тут какая-то хрень')
                    }}
                />}

            </div>
                </div>



    )
}

