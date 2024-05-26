// src/pages/LandingPage.js

import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-container">
      <h1>ISSUE TRACKING SYSTEM</h1>
      <p>Please register or login to continue.</p>
      <div className="landing-buttons">
        <Link to="/register" className="btn">Register</Link>
        <Link to="/login" className="btn">Login</Link>
      </div>
    </div>
  );
}
