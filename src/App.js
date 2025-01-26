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
import DashboardAnnual from "./pages/dashboard/dashboardAnnual";
import DashboardMonthly from "./pages/dashboard/dashboardMonthly";
import DashboardOrders from "./pages/dashboard/dashboardOrders";
import DashboardSales from "./pages/dashboard/dashboardSales";
import DashboardDaily from "./pages/dashboard/dashboardDaily";
import NewOrders from "./pages/orders/NewOrders";
import OrderHistory from "./pages/orders/OrderHistory";
import OrderStatuses from "./pages/orders/OrderStatuses";
import PriceChanges from "./pages/products/priceChanges";
import ProductImages from "./pages/products/productImages";
import ProductReviews from "./pages/products/productReviews";
import PaymentSettings from "./pages/Settings/PaymentSettings";
import ShippingIntegration from "./pages/Settings/ShippingIntegration";
import SystemSettings from "./pages/Settings/SystemSettings";
import SEOSettings from "./pages/Settings/SEOSettings";
import EmailNotifications from "./pages/Settings/EmailNotifications";
import ThemeSelection from "./pages/theme/ThemeSelection";
import ThemeSettings from "./pages/theme/ThemeSettings";
import SEOOverview from "./pages/seo/SEOOverview";
import SEOKeywordManagement from "./pages/seo/SEOKeywordManagement";
import SEOMetaTags from "./pages/seo/SEOMetaTags";
import SEOPerformance from "./pages/seo/SEOPerformance";
import SEOImprovements from "./pages/seo/SEOImprovements";
import SEOTargeting from "./pages/seo/SEOTargeting";
import SupportTickets from "./pages/support/SupportTickets";

function App() {
  // useEffect(() => {
  //   axios.get("http://localhost:5260/api/Categorywin")
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
          <Route path="/products/pricing" element={<PriceChanges />} />
          <Route path="/products/images" element={<ProductImages />} />
          <Route path="/products/reviews" element={<ProductReviews />} />
          <Route path="/settings/payment" element={<PaymentSettings />} />
          <Route path="/settings/shipping" element={<ShippingIntegration />} />
          <Route path="/settings/system" element={<SystemSettings />} />
          <Route path="/settings/seo" element={<SEOSettings />} />
          <Route path="/settings/email-notifications" element={<EmailNotifications />} />
          <Route path="/theme/theme-selection" element={<ThemeSelection />} />
          <Route path="/theme/theme-settings" element={<ThemeSettings />} />
          <Route path="/seo/overview" element={<SEOOverview />} />
          <Route path="/seo/keywords" element={<SEOKeywordManagement />} />
          <Route path="/seo/meta-tags" element={<SEOMetaTags />} />
          <Route path="/seo/performance" element={<SEOPerformance/>} />
          <Route path="/seo/improvements" element={<SEOImprovements />} />
          <Route path="/seo/targeting" element={<SEOTargeting/>} />
          <Route path="/support/tickets" element={<SupportTickets/>} />


          

          

          










          <Route
            path="/dashboard/annual-statistics"
            element={<DashboardAnnual />}
          />
          <Route
            path="/dashboard/daily-statistics"
            element={<DashboardDaily />}
          />
          <Route
            path="/dashboard/monthly-statistics"
            element={<DashboardMonthly />}
          />
          <Route path="/dashboard/orders" element={<DashboardOrders />} />
          <Route path="/dashboard/sales" element={<DashboardSales />} />
          <Route path="/orders/new" element={<NewOrders />} />
          <Route path="/orders/status" element={<OrderStatuses />} />
          <Route path="/orders/history" element={<OrderHistory />} />
          
        </Route>

        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
