import './App.css';
import {React, useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [username, setusername] = useState("");

  useEffect(() => {
    getNames();
  }, [])

  const getNames = async() => {
    const response = await axios.get('/names'); // call to backend
    console.log(response);
  }
  
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
