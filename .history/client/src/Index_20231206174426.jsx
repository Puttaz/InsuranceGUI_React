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
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid className="p-3 my-5">
      <div className="text-center">
      <h2 className="mt-1 mb-5 pb-1">Welcome To Lambton Insurance</h2>
      </div>
      <MDBRow>

        <MDBCol col='10' md='5'>
     
          <img src={Homepage} 
          class="img-fluid" alt="home image" />
        </MDBCol>

        <MDBCol col='4' md='3'>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Health Care Provider
          </MDBBtn>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            New Inusrance Policy
          </MDBBtn>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Policy Holders
          </MDBBtn>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Existing Users
          </MDBBtn>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;