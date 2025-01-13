import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/dashboard/dashboardPage";
import ProductAdd from "./pages/products/productAdd";
import SidebarLayout from "./layouts/SidebarLayout";
import ProductList from "./pages/products/productList";
import ProductCategories from "./pages/products/productCategories";
import ProductStock from "./pages/products/productStock";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

// Profil tamamla sayfaları
import ProfileComplete from "./pages/profile_complete/ProfileComplete";
import BusinessInfo from "./pages/profile_complete/BusinessInfo";
import ContactInfo from "./pages/profile_complete/ContactInfo";
import PaymentInfo from "./pages/profile_complete/PaymentInfo";
import Confirmation from "./pages/profile_complete/Confirmation";
import ProfileSidebarLayout from "./layouts/ProfileSidebarLayout";
import AdminPage from "./pages/AdminPage";

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Profil Tamamlama Sayfaları */}
        <Route path="/profile-complete" element={<ProfileComplete />} />
        <Route element={<ProfileSidebarLayout />}>
          <Route
            path="/profile-complete/business-info"
            element={<BusinessInfo />}
          />
          <Route
            path="/profile-complete/contact-info"
            element={<ContactInfo />}
          />
          <Route
            path="/profile-complete/payment-info"
            element={<PaymentInfo />}
          />
          <Route
            path="/profile-complete/confirmation"
            element={<Confirmation />}
          />
        </Route>

        {/* Sidebar ile sarılmış diğer sayfalar */}
        <Route element={<SidebarLayout />}>
          <Route path="/panel/dashboard" element={<DashboardPage />} />
          <Route path="/products/add" element={<ProductAdd />} />
          <Route path="/products/list" element={<ProductList />} />
          <Route path="/products/categories" element={<ProductCategories />} />
          <Route path="/products/stock" element={<ProductStock />} />
        </Route>

        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
