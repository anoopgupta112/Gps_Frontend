import React, { useEffect, useState } from 'react'
import './GpsSummary.css'
import axios from 'axios';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import { Link } from 'react-router-dom';

export default function GpsSummary() {
    const [searchInput, setSearchInput] = useState("");
    const [MyList, setMyList] = useState([]);
    let i = 0;

    useEffect(() => {
        try {
            axios.get("http://localhost:2000/Devicelist", {
                headers: {
                    "x-access-token": sessionStorage.getItem("x-access-token")
                }
            }).then((res) => {

                setMyList(res.data.device)
            })



        } catch (e) {
            console.log(e)
        }
    }, [])

    function ShowTime(unix_timestamp) {

        var a = new Date(unix_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }



    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    if (searchInput.length > 0) {
        MyList.filter((List) => {
            //it's showing result in console. 
            console.log(List.Device_id.match(searchInput))
            return List.Device_id.match(searchInput);

        });

    }


    return (
        <div className='Holder' style={{ alignItems: "center" }}>
            <div className='card' style={{ height: "90vh", width: "90vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h1 style={{ position: "relative", right: "25vw" }}>GpsSummary</h1>
                <div style={{ display: "flex" }}>
                    <div style={{ position: "relative", right: "28vw", margin: "2%" }}>
                        <div class="search-box">
                            <button class="btn-search"><FcSearch></FcSearch></button>
                            <input type="text" class="input-search" placeholder="Type to Search..." onChange={handleChange}
                                value={searchInput} />
                        </div>

                    </div>

                </div>
                <div style={{ overflow: "scroll", overflowX: "hidden", height: "70%", width: "90%", padding: "2%" }}>
                    <table className='styled-table' width={"100%"}>
                        <thead>
                            <tr>
                                <th >
                                    DeviceId
                                </th>
                                <th>

                                    Timestamp
                                </th>
                                <th>
                                    Device Type
                                </th>
                                <th>
                                    Location

                                </th>
                                <th>


                                </th>

                            </tr>
                        </thead>

                        <tbody >

                            {MyList.map((val, index) => {
                                return (



                                    <tr key={val.id} className='active-row'> <td >
                                        {val.Device_id}

                                    </td>
                                        <td>
                                            {ShowTime(val.unix)}
                                        </td>
                                        <td>
                                            {val.DeviceType}
                                        </td>
                                        <td>
                                            {val.Location}
                                        </td>
                                        <td>
                                            <abbr title='see detail'>
                                                <Link to={
                                                    `/detail/${val.Device_id}`}
                                                    state={{ type: val.DeviceType }}
                                                >
                                                    <AiOutlineRight />
                                                </Link></abbr>
                                        </td>

                                    </tr>
                                )

                            })}





                        </tbody>
                    </table></div>
            </div></div>
    )
}
