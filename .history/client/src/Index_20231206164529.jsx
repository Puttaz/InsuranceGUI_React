import React from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Insurance Company</h1>
      </header>

      <main>
        <section className="landing-section">
          <h2>Welcome to Our Insurance Company</h2>
          <img src='/images/insurance.jpg' alt="Home" />
          <p>Providing reliable insurance solutions for your needs.</p>
          <button>Contact Us</button>
        </section>
      </main>
    </div>
  );
};

export default App;