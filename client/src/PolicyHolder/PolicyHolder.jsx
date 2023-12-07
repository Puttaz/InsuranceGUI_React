import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PolicyHolder() {
  const [policyHolders, setPolicyHolder] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/policyholders")
      .then((result) => setPolicyHolder(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8080/policyholders/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="rounded p-3">
          <Link to="/createuser" className="btn btn-success">
            Add New Policy Holder +
          </Link>
          <br />
          <br />
          <h4>Policy Holder List</h4>
          <table class="table table-success table-striped">
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
              {policyHolders.map((policyHolder) => {
                return (
                  <tr>
                    <td>{policyHolder.user.firstName}</td>
                    <td>{policyHolder.user.lastName}</td>
                    <td>{policyHolder.user.dateOfBirth}</td>
                    <td>{policyHolder.user.gender}</td>
                    <td>{policyHolder.user.contactNumber}</td>
                    <td>{policyHolder.user.email}</td>
                    <td>{policyHolder.user.address}</td>
                    <td>{policyHolder.user.userType}</td>
                    <td>
                      <Link
                        to={`/updateuser/${policyHolder.user.userId}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => handleDelete(policyHolder.policyholderId)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PolicyHolder;
