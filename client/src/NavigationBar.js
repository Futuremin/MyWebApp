import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const token = localStorage.getItem('token');

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {token ? (
          <>
            <li><Link to="/profile">My Profile</Link></li>
            <li><button onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/login';
            }}>Sign Out</button></li>
          </>
        ) : (
          <>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavigationBar;
