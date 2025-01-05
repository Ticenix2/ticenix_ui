import './App.css';
import {useEffect} from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {


  // useEffect(() => {
  //   axios.get("http://localhost:5260/api/CustomerDBs")
  //   .then((response) => {
  //     console.log(response.data)
  //   })
  // },[])
  return (
    <Router>
      <Routes>
        <Route path="/panel/login" element={<LoginPage />} />
        <Route path="/panel/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
