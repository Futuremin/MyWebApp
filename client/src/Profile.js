import React, { useEffect, useState } from 'react';

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      
      fetch('/api/userProfile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.log('Error fetching profile:', error));
    } else {
      // Redirect to login page if no token is found
      window.location.href = '/login';
    }
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default Profile;
