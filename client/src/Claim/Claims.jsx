import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Claims() {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/claims")
      .then((result) => setClaims(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8080/claims/" + id)
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
            Add New Claim +
          </Link>
          <br />
          <br />
          <h4>Claim List</h4>
          <table class="table table-success table-striped">
            <thead>
              <tr>
                <th>Claim Date</th>
                <th>Dignosis</th>
                <th>Treatment Cost</th>
                <th>Status</th>
                <th>Policy Id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {claims.map((claim) => {
                return (
                  <tr>
                    <td>{claim.claimDate}</td>
                    <td>{claim.diagnosis}</td>
                    <td>{claim.treatmentCost}</td>
                    <td>{claim.status}</td>
                    <td>{claim.insurancePolicy.policyId}</td>
                    <td>
                      <Link
                        to={`/updateuser/${claim.claimId}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => handleDelete(claim.claimId)}
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

export default Claims;
