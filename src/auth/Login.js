import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const data = {
        "email": email,
        "password": pass
    }

    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:2000/Login", data).then((val) => {
                if (val.data.rc === 0) {
                    console.log("you are logged in ")
                    console.log(val.data.token)

                    sessionStorage.setItem("x-access-token", val.data.token)
                    navigate("/summary")
                }
                else {

                    console.log(val.data.rc)
                }

            })
        } catch (e) {
            console.log(e)
        }
    }
    return (


        <form onSubmit={submitHandler}>
            <h3 style={{ display: "flex", justifyContent: "center" }}>Sign In</h3>
            <div className="mb-3">
                <label>Email address</label>
                <input required
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input required
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Log in
                </button>
            </div>
            <p className="forgot-password text-right">
                <Link to={'/signUp'}>new user</Link>
            </p>
        </form>


    )
}
