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
    setusername(response.data)
  }
  
  return (
    <div className="App">
      my name is {username}
    </div>
  );
}

export default App;
