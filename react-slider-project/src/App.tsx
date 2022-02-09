import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const url = "https://course-api.com/react-tabs-project";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [persons, setPersons] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(url);
    const data = resp.json();
    setPersons(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    console.log(persons)
  }, []);

  return (
    <div>
      <h3>hello !!</h3>
    </div>
  );
}

export default App;
