import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HealthProvider() {
  const [healthProviders, setHealthProviders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/providers")
      .then((result) => setHealthProviders(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8080/providers/" + id)
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
            Add New Health Provider +
          </Link>
          <br />
          <br />
          <h4>Health Provider List</h4>
          <table class="table table-success table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {healthProviders.map((healthProvider) => {
                return (
                  <tr>
                    <td>{healthProvider.name}</td>
                    <td>{healthProvider.address}</td>
                    <td>{healthProvider.contactNumber}</td>
                    <td>{healthProvider.email}</td>
                    <td>
                      <Link
                        to={`/updateuser/${healthProvider.provider_id}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={(e) =>
                          handleDelete(healthProvider.provider_id)
                        }
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

export default HealthProvider;
