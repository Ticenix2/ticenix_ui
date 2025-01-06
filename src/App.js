import './App.css';
import {useEffect} from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProductAdd from './pages/products/productAdd';
import SidebarLayout from './layouts/SidebarLayout';
import ProductList from './pages/products/productList';


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
        {/* Login sayfası, Sidebar olmadan */}
        <Route path="/panel/login" element={<LoginPage />} />

        {/* Sidebar ile sarılmış diğer sayfalar */}
        <Route element={<SidebarLayout />}>
          <Route path="/panel/dashboard" element={<DashboardPage />} />
          <Route path="/products/add" element={<ProductAdd />} />
          <Route path="/products/list" element={<ProductList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
