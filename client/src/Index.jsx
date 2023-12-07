import React from 'react';
import './App.css'; // Import your CSS file for styling
import Homepage from "./Homepage.png";
import './Index.css'

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid className="p-3 my-5">
      <div className="text-center">
      <h2 className="mt-1 mb-5 pb-1">Welcome To Lambton Insurance</h2>
      </div>
      <MDBRow>

        <MDBCol col='10' md='6'>
     
          <img src={Homepage} 
          class="img-fluid" alt="home image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

        <div className="text-center">
      <h4 className="mt-1 mb-5 pb-1">Our Services</h4>
      </div>

          <MDBBtn href="http://localhost:5173/viewusers" className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Users
          </MDBBtn>

          <MDBBtn href="http://localhost:5173/viewpolicies" className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Inusrance Policies
          </MDBBtn>

          <MDBBtn href="http://localhost:5173/viewpolicyholders" className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Policy Holders
          </MDBBtn>

          <MDBBtn href="http://localhost:5173/viewuproviders" className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Health Care Providers
          </MDBBtn>

          <MDBBtn href="http://localhost:5173/index" className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Claims
          </MDBBtn>

          <MDBBtn href="http://localhost:5173/index" className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Help
          </MDBBtn>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;