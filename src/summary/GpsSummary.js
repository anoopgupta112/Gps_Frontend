import React, { useState } from 'react'
import './GpsSummary.css'
import MyList from '../data.json'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";

export default function GpsSummary() {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    if (searchInput.length > 0) {
        MyList.filter((List) => {
            //it's showing result in console. fix it
            console.log(List.FName.match(searchInput))
            return List.FName.match(searchInput);

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
                    <div style={{ position: "fixed", left: "78vw", margin: "2%", top: "34%" }}>


                        <div style={{ position: "relative", left: "2vw", top: "-2vw", height: "8%" }}>
                            <div className='ListNumber' style={{ position: "relative", right: "-30%" }}>1-3</div>
                            <button style={{ border: "none", background: "none" }}><AiOutlineLeft /></button>
                            <button style={{ border: "none", background: "none" }}><AiOutlineRight /></button>
                        </div>
                    </div>
                </div>
                <table className='styled-table' width={"80%"}>
                    <thead>
                        <tr>
                            <th >
                                name
                            </th>
                            <th>
                                Location:

                            </th>
                            <th>
                                Flight
                            </th>
                            <th>
                                abc

                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {MyList.map((val, index) => {
                            return (
                                <>

                                    <tr key={val.id} className='active-row'> <td >
                                        {val.FName}

                                    </td>
                                        <td>
                                            {val.FName}
                                        </td>
                                        <td>
                                            {val.FName}
                                        </td>
                                        <td>
                                            {val.FName}
                                        </td>

                                    </tr>


                                </>)

                        })}</tbody>
                </table>
            </div></div>
    )
}
