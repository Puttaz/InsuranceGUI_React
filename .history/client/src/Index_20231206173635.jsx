import React from 'react';
import './App.css'; // Import your CSS file for styling
import insurance from "./insurance.png";
import Homepage from "./Homepage.png";

import './Index.css'

// const App = () => {
//   return (
//     <div className="App">
//       <header>
//         <h1>Insurance Company</h1>
//       </header>

//       <main>
//         <section className="landing-section">
//           <h2>Welcome to Our Insurance Company</h2>
//           <img src={insurance} alt="insurance logo" />
//           <p>Providing reliable insurance solutions for your needs.</p>
//           <button>Contact Us</button>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default App;
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

      <MDBRow>

        <MDBCol col='10' md='6'>
     
     
          <img src={Homepage} 
          class="img-fluid" alt="home image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="text-center">
              <h4 className="mt-1 mb-5 pb-1">Lambton Insurance</h4>
            </div>


          {/* <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div> */}

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Continue with facebook
          </MDBBtn>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Continue with twitter
          </MDBBtn>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;