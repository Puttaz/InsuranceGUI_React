import axios from "axios";
import React, { useState,useEffect } from "react";
import {Link} from 'react-router-dom'

function Users () {
    const[users, setUsers] = useState([])
    
    useEffect(() =>{
        axios.get("http://localhost:8080/users")
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[])
    
    const handleDelete = (id) =>{
        axios.delete('http://localhost:8080/users/'+id)
        .then(res => {console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-90 bg-white rounded p-3">
                    <Link to="/createuser" className= "btn btn-success">Create User</Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Date of Birth</th>
                                <th>Gender</th>
                                <th>Contact Number</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>User Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => {
                                    return <tr>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.dateOfBirth}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.contactNumber}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address}</td>
                                        <td>{user.userType}</td>
                                        <td>
                                            <Link to={`/updateuser/${user.userId}`} className= "btn btn-success">Update</Link>
                                            <button className="btn btn-danger" onClick={(e) => handleDelete(user.userId)}>Delete</button></td>
                                    </tr>
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users;