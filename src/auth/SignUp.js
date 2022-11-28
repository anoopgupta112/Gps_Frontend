import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios';
export default function SignUp() {

    const [Fname, SetFname] = useState("");
    const [Lname, SetLname] = useState("");
    const [email, Setemail] = useState("");
    const [Password, SetPassword] = useState("");
    const data = {
        userdata: {
            Fname: Fname,
            Lname: Lname,
            email: email,
            password: Password,

        }
    }
    const url = "http://localhost:2000/addUser";
    function submitHandler(e) {
        e.preventDefault();
        try {
            axios.post(url, data).then((val) => {
                if (val.data.name === undefined) {
                    alert("Your account has been created.. go to Login page")
                    console.log(val.data)
                }
                else {
                    alert("please enter unique email value")
                    console.log(val.data.name)

                }
            }).catch((e) => {

                alert(e)
            })
        }
        catch (e) {
            alert(e)
            console.log(e)
        }

    }



    return (
        <div className='Holder'>
            <div className="App card" style={{ width: "50%", height: "60%" }}>
                <form onSubmit={submitHandler}>
                    <h3 style={{ display: "flex", justifyContent: "center" }}>Sign Up</h3>
                    <div className="mb-3">
                        <label>First name</label>
                        <input required
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            value={Fname}
                            onChange={(e) => SetFname(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Last name</label>
                        <input type="text" required
                            className="form-control" placeholder="Last name"
                            value={Lname}
                            onChange={(e) => SetLname(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email" required
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => Setemail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password" required
                            className="form-control"
                            placeholder="Enter password"
                            value={Password}
                            onChange={(e) => SetPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Already registered <Link to={'/'}>Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
