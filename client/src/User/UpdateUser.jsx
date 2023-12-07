import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dateOfBirth, setDOB] = useState();
  const [gender, setGender] = useState();
  const [contactNumber, setContact] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [userType, setUserType] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/" + id)
      .then((result) => {
        console.log(result);
        setFirstName(result.data.firstName);
        setLastName(result.data.lastName);
        setDOB(result.data.dateOfBirth)
        setGender(result.data.gender)
        setContact(result.data.contactNumber)
        setEmail(result.data.email)
        setAddress(result.data.address)
        setUserType(result.data.userType)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/users/" + id, {
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
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Date OF Birth</label>
            <input
              type="text"
              placeholder="Date of Birth"
              className="form-control"
              value={dateOfBirth}
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Gender</label>
            <select name="Gender" id="Gender" className="form-control" 
            value={gender}
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
              value={contactNumber}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">User Type</label>
            <select name="UserType" id="UserType" className="form-control" 
            value={userType}
            onChange={(e) => setUserType(e.target.value)}>
              <option value="policyholder">Policy Holder</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
