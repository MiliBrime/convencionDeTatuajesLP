import React, { useState, useEffect } from "react";


const CountdownTimer = ({ targetDate, finishedText }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    function calculateTimeLeft() {
      const difference = new Date(targetDate) - new Date();
      let time = {};
  
      if (difference > 0) {
        time = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
  
      return time;
    }
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer); // Limpia el intervalo cuando se desmonta el componente
    }, []);
  
    const timerComponents = [];
  
    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }
  
      timerComponents.push(
        <span key={interval}>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });
  
    return (
        <div className="countdown-container">
          {timerComponents.length ? (
            <div className="timer">
              {Object.entries(timeLeft).map(([key, value]) => (
                <div key={key} className="time-segment">
                  <span className="time-value">{value}</span>
                  <span className="time-label">{key}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="finished-text">{finishedText}</p>
          )}
        </div>
      );
  };
  

  export default CountdownTimer;