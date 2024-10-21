import React from 'react';
import './Profile.css';

const Profile = () => {
  const name = "John Doe";
  
  // Get the first letter of the name
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          {/* Display the symbol image */}
          <div className="profile-image">{initial}</div>
          <h2>Your Profile</h2>
        </div>
        <div className="profile-info">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> john@example.com</p>
          <p><strong>Contact No:</strong> 123-456-7890</p>
          <p><strong>Date of Birth:</strong> January 1, 1990</p>
          <p><strong>Address:</strong> 1234 Elm Street, Springfield, IL</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
