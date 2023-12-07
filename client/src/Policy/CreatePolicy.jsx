import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePolicy() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [coverageType, setCoverageType] = useState();
  const [premiumAmount, setPremiumAmount] = useState();
  const [deductibleAmount, setDeductibleAmount] = useState();
  const [status, setStatus] = useState();
  const [policyholder_id, setPolicyHolderId] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/policies", {
        startDate,
        endDate,
        coverageType,
        premiumAmount,
        deductibleAmount,
        status,
        policyholder_id
      })
      .then((result) => {
        console.log(result);
        navigate("/viewpolicies");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Policy</h2>
          <div className="mb-2">
            <label htmlFor="">Start Date</label>
            <input
              type="text"
              placeholder="Start Date"
              className="form-control"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">End Date</label>
            <input
              type="text"
              placeholder="End Date"
              className="form-control"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Coverage Type</label>
            <input
              type="text"
              placeholder="Coverage Type"
              className="form-control"
              onChange={(e) => setCoverageType(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Premium Amount</label>
            <input
              type="text"
              placeholder="Premium Amount"
              className="form-control"
              onChange={(e) => setPremiumAmount(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Deductible Amount</label>
            <input
              type="text"
              placeholder="Deductible Amount"
              className="form-control"
              onChange={(e) => setDeductibleAmount(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Status</label>
            <input
              type="text"
              placeholder="Status"
              className="form-control"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Policy Holder</label>
            <input
              type="text"
              placeholder="Policy Holder"
              className="form-control"
              onChange={(e) => setPolicyHolderId(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePolicy;
