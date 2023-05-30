import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Function to update the seconds count every second
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function to stop the timer when the component is unmounted
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1> You are been on this page for {seconds} seconds</h1>
    </div>
  );
};

export default App;
