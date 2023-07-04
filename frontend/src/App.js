import logo from './logo.svg';
import './App.css';

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
