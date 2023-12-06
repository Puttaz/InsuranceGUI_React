import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <header>
          <h1>Insurance Company</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header> */}

        <main>
          <section className="landing-section">
            <h2>Welcome to Our Insurance Company</h2>
            <img src="home-image.jpg" alt="Home" />
            <p>Providing reliable insurance solutions for your needs.</p>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </section>
        </main>
      </div>
    </Router>
  );
};

export default App;