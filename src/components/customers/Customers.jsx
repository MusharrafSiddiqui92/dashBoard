import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";

const Customers = () => {
    const [userData, SetUserData] = useState({
        serial: "",
        name: "",
        email: "",
        contact: ""
    })
    const [dynamicUser, setDynamicUser] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target
        SetUserData((prev) => ({ ...prev, [name]: value, }))
    }
    const handleAddUser = () => {
        setDynamicUser([...dynamicUser, userData]);
        SetUserData({ serial: "", name: "", email: "", contact: "" })
    }
    return (
        <>
            <div className="container w-25">
                <input type="number" name="serial" onChange={handleChange} placeholder="Enter Serial" className="form-control mb-2" />
                <input type="text" name="name" onChange={handleChange} placeholder="Enter User Name" className="form-control mb-2" />
                <input type="email" name="email" onChange={handleChange} placeholder="Enter E-Mail" className="form-control mb-2" />
                <input type="number" name="contact" onChange={handleChange} placeholder="Enter Contact No" className="form-control mb-2" />
                <button className="btn btn-primary" onClick={handleAddUser}>
                    Add User
                </button>
            </div>
            <div className="container w-50" style={{overflowY:'auto'}}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">E-Mail</th>
                            <th scope="col">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dynamicUser.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{user.serial}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Customers
