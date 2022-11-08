import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export default function SignUp() {
    return (
        <div className='Holder'>
            <div className="App card" style={{ width: "50%", height: "60%" }}>
                <form>
                    <h3 style={{ display: "flex", justifyContent: "center" }}>Sign Up</h3>
                    <div className="mb-3">
                        <label>First name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
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
