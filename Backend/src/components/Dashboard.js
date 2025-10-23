import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.get('/api/auth/validate')
      .then(response => {
        setUserData(response.data.user);
      })
      .catch(() => {
        localStorage.removeItem('token');
        navigate('/login');
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <header>
        <h1>Welcome, {userData.fullName}</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <main>
        <div className="user-info">
          <h2>Your Profile</h2>
          <p>Email: {userData.email}</p>
          <p>Program: {userData.program}</p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;