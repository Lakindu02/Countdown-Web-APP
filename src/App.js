import React, { useEffect, useState } from 'react';
import './App.css';
import './GalaxyBackground.css'; // Import the galaxy background styles

export default function App() {
  const newYear = new Date("Jan 1, 2026").getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date().getTime();
      const distance = (newYear - now) / 1000;
      if (distance > 0) {
        setDays(Math.floor(distance / 60 / 60 / 24));
        setHours(Math.floor((distance / 60 / 60) % 24));
        setMinutes(Math.floor((distance / 60) % 60));
        setSeconds(Math.floor(distance % 60));
      } else {
        clearInterval(timerId);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [newYear]);

  return (
    <div className="App">
      <div className="stars"></div>
      <div className="galaxy1"></div>
      <div className="galaxy2"></div>
      <div className="galaxy3"></div>
      <h1>Countdown to New Year 2025</h1>
      <div className="countdown">
        <div className="time">
          <div>{days}</div>
          <p>Day</p>
        </div>
        <div className="time">
          <div>{hours}</div>
          <p>Hour</p>
        </div>
        <div className="time">
          <div>{minutes}</div>
          <p>Minute</p>
        </div>
        <div className="time">
          <div>{seconds}</div>
          <p>Second</p>
        </div>
      </div>
    </div>
  );
}
