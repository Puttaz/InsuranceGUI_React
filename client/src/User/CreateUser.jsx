import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dateOfBirth, setDOB] = useState();
  const [gender, setGender] = useState();
  const [contactNumber, setContact] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [userType, setUserType] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users", {
        firstName,
        lastName,
        dateOfBirth,
        gender,
        contactNumber,
        email,
        address,
        userType,
      })
      .then((result) => {
        console.log(result);
        navigate("/viewusers");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Date OF Birth</label>
            <input
              type="text"
              placeholder="Date of Birth"
              className="form-control"
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Gender</label>
            <select name="Gender" id="Gender" className="form-control" 
            onChange={(e) => setGender(e.target.value)}>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="">Contact Number</label>
            <input
              type="text"
              placeholder="Enter Contact"
              className="form-control"
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">User Type</label>
            <select name="UserType" id="UserType" className="form-control" 
            onChange={(e) => setUserType(e.target.value)}>
              <option value="policyholder">Policy Holder</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
