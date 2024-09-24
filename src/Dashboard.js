
import React from 'react'

const Dashboard = ({user}) => {
  return (
    <div>
        <h2>Welcome, {user.name}!</h2>
        <p>your role is : {user.role}</p>
    </div>
  );
};

export default Dashboard;