import React, { useEffect, useState } from 'react'
import './GpsDetail.css'
import MyList from '../data.json'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function GpsDetail(props) {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    const [MyList, setMyList] = useState([]);
    const [graphshow, setgraphshow] = useState(false);

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


    var L1Val = 0;

    useEffect(() => {
        try {
            const getDetailData = async () => {
                const data = await axios.get(`http://localhost:2000/${params.id}/Details`, {
                    headers: {
                        "x-access-token": sessionStorage.getItem("x-access-token")
                    }
                }).then((res) => {
                    setMyList([...res.data.device]);

                })

            }
            getDetailData();





        } catch (e) {
            console.log(e)
        }
    }, [])

    for (var i = 0; i < MyList.length; i++) {

        if (MyList[i].Location === "L1") {
            L1Val++;
        }
        else {

        }
    }
    var L1Persent = Math.floor(L1Val * 100 / MyList.length);

    return (
        <div className='Holder' style={{ alignItems: "center" }}>
            <div className='card GpsDetail' >

                <h3 style={{ position: "absolute", top: "20%", left: "10%" }}>{params.id} </h3>


                <h3 style={{ position: "absolute", top: "15%", left: "10%" }}> {location.state.type} </h3>


                <div className='tableContent'>

                    <div style={{ overflow: "scroll", overflowX: "hidden" }} >

                        <table className='styled-table' width={"100%"}>
                            <thead>
                                <tr>
                                    <th >
                                        name
                                    </th>
                                    <th>
                                        Location

                                    </th>


                                </tr>
                            </thead>
                            <tbody>
                                {MyList.map((val, index) => {
                                    return (
                                        <>

                                            <tr key={val.id} className='active-row'> <td >
                                                {ShowTime(val.unix)}

                                            </td>
                                                <td>
                                                    {val.Location}
                                                </td>


                                            </tr>


                                        </>)

                                })}</tbody>
                        </table>
                    </div>

                </div>
                <div className='Rightpart' >



                    {graphshow ? <PieRechartComponent data={L1Persent} /> : <button className='btngraph' onClick={() => { setgraphshow(true) }}>show graph</button>}

                </div>
            </div>

        </div>
    )
}





class PieRechartComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    COLORS = ["#FF8042", "#AF19FF"];
    pieData = [
        {
            name: "L1",
            value: (this.props.data)
        },
        {
            name: "L2",
            value: (100 - (this.props.data)),
        }

    ];
    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: "#ffff",
                        padding: "5px",
                        border: "1px solid #cccc"
                    }}
                >
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }
        return null;
    };
    render() {
        return (
            <PieChart width={630} height={300}>
                <Pie
                    data={this.pieData}
                    color="#000000"
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                >

                    {this.pieData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={this.COLORS[index % this.COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip content={<this.CustomTooltip />} />
                <Legend />
            </PieChart>
        );
    }
}
