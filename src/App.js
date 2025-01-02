import './App.css';
import {useEffect} from "react";
import axios from 'axios'

function App() {


  useEffect(() => {
    axios.get("http://localhost:5260/api/CustomerDBs")
    .then((response) => {
      console.log(response.data)
    })
  },[])
  return (
    
    <h1>
      test react place
    </h1>
  );
}

export default App;
