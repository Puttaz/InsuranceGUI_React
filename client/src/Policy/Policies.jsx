import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Policies() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/policies")
      .then((result) => setPolicies(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8080/policies/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="d-flex vh-100  justify-content-center align-items-center">
        <div className=" rounded p-3">
          <Link to="/createpolicy" className="btn btn-success">
            Create New Policy
          </Link>
          <br /><br />
          <h4>Policies </h4>
          <table class="table table-success table-striped" >
            <thead>
              <tr>
                <th>Start date</th>
                <th>End date</th>
                <th>Coverage Type</th>
                <th>Premium Amount</th>
                <th>Deductible Amount</th>
                <th>Status</th>
                <th>Policy Holder Id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
              policies.map((policy) => {
                return <tr>
                    <td>{policy.startDate}</td>
                    <td>{policy.endDate}</td>
                    <td>{policy.coverageType}</td>
                    <td>{policy.premiumAmount}</td>
                    <td>{policy.deductibleAmount}</td>
                    <td>{policy.status}</td>
                    <td>{policy.policyHolder.policyholderId}</td>
                    <td>
                      <Link
                        to={`/updatepolicy/${policy.policyId}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => handleDelete(policy.policyId)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Policies;
