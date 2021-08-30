import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function HomePage() {
  // HomePage DOM where the user begins their 100YM journey
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h1>Welcome, {user.email}! Start your journey here!</h1>
      <h3>Intro: Your 100 Year Manifesto</h3>
      <h3>Mission Statement</h3>
      <h3>Words to Live By</h3>
      <h3>Core Values</h3>
      <h3>For Good</h3>
      <h3>Life Goals</h3>
      <h3>Guiding Principles</h3>
      <h3>Next Steps</h3>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
