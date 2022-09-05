import React, { useEffect, useState } from 'react';
import './Statewise.css'

const Statewise = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        // console.log(actualData.statewise);
        setData(actualData.statewise)
    }

    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>

            <div className='Container'>
                <div className='main-heading'>
                    <h1>India COVID-19 Dashboard</h1>
                </div>
                <div className='main-content'>
                    <table border={1} >
                        <thead>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curElem, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>{curElem.state}</td>
                                            <td>{curElem.confirmed}</td>
                                            <td>{curElem.recovered}</td>
                                            <td>{curElem.deaths}</td>
                                            <td>{curElem.active}</td>
                                            <td>{curElem.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Statewise