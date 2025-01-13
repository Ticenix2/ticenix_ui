import React, { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaClipboardCheck,
  FaCogs,
  FaFileAlt,
  FaEnvelope,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Alt başlıkları içeren modüler menü bileşeni
const SidebarItem = ({ title, icon, children, hasSubMenu, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (hasSubMenu) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => {
          toggleDropdown();
          onClick && onClick();
        }}
        className="flex items-center w-full py-3 px-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition ease-in-out duration-200"
      >
        {icon && <div className="mr-3">{icon}</div>}
        {title}
      </button>
      {isOpen && hasSubMenu && (
        <div className="ml-6 space-y-2 bg-gray-600 rounded-lg mt-2 p-2">
          {children}
        </div>
      )}
    </div>
  );
};

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Navigasyon işlevleri
  const goToDashboard = () => navigate("/admin/dashboard");
  const goToUserManagement = () => navigate("/admin/user-management");
  const goToProfileApprovals = () => navigate("/admin/profile-approvals");
  const goToDomainManagement = () => navigate("/admin/domain-management");
  const goToSupportTickets = () => navigate("/admin/support-tickets");
  const goToReports = () => navigate("/admin/reports");

  // Çıkış işlevi
  const handleLogout = () => {
    navigate("/login");
  };

  // Sidebar'ı açma/kapama
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 h-screen fixed top-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300 md:relative md:translate-x-0`}
      >
        <div className="p-6 text-center border-b border-gray-700">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <p className="text-sm text-gray-400 mt-2">E-Ticaret Yönetimi</p>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          {/* Genel Bakış (Alt Başlık Çıkmasın) */}
          <SidebarItem
            title="Genel Bakış"
            icon={<FaHome />}
            onClick={goToDashboard}
            hasSubMenu={false} // Alt başlıkları yok
          />

          {/* Kullanıcı Yönetimi */}
          <SidebarItem
            title="Kullanıcı Yönetimi"
            icon={<FaUsers />}
            onClick={goToUserManagement}
            hasSubMenu={true} // Alt başlıkları var
          >
            {/* Alt Başlıklar */}
            <button
              onClick={() => navigate("/admin/user-management/active-users")}
              className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-500 transition duration-200"
            >
              Aktif Kullanıcılar
            </button>
            <button
              onClick={() => navigate("/admin/user-management/inactive-users")}
              className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-500 transition duration-200"
            >
              Pasif Kullanıcılar
            </button>
            <button
              onClick={() => navigate("/admin/user-management/blocked-users")}
              className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-500 transition duration-200"
            >
              Engellenmiş Kullanıcılar
            </button>
          </SidebarItem>

          {/* Profil Onayları */}
          <SidebarItem
            title="Profil Onayları"
            icon={<FaClipboardCheck />}
            onClick={goToProfileApprovals}
            hasSubMenu={true} // Alt başlıkları var
          >
            {/* Alt Başlıklar */}
            <button
              onClick={() => navigate("/admin/profile-approvals/pending")}
              className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-500 transition duration-200"
            >
              Bekleyen Onaylar
            </button>
            <button
              onClick={() => navigate("/admin/profile-approvals/approved")}
              className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-500 transition duration-200"
            >
              Onaylanan Profiller
            </button>
            <button
              onClick={() => navigate("/admin/profile-approvals/rejected")}
              className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-500 transition duration-200"
            >
              Reddedilen Profiller
            </button>
          </SidebarItem>

          {/* Domain Yönetimi */}
          <SidebarItem
            title="Domain Yönetimi"
            icon={<FaCogs />}
            onClick={goToDomainManagement}
            hasSubMenu={true} // Alt başlıkları var
          >
            {/* Alt Başlıklar */}
            <button
              onClick={() => navigate("/admin/domain-management/domains")}
              className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-500 transition duration-200"
            >
              Yönetilen Domainler
            </button>
            <button
              onClick={() => navigate("/admin/domain-management/redirects")}
              className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-500 transition duration-200"
            >
              DNS Yönlendirmeleri
            </button>
          </SidebarItem>

          {/* Destek Talepleri */}
          <SidebarItem
            title="Destek Talepleri"
            icon={<FaEnvelope />}
            onClick={goToSupportTickets}
            hasSubMenu={true} // Alt başlıkları var
          >
            {/* Alt Başlıklar */}
            <button
              onClick={() => navigate("/admin/support-tickets/open")}
              className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-500 transition duration-200"
            >
              Açık Talepler
            </button>
            <button
              onClick={() => navigate("/admin/support-tickets/closed")}
              className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-500 transition duration-200"
            >
              Kapalı Talepler
            </button>
            <button
              onClick={() => navigate("/admin/support-tickets/all")}
              className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-500 transition duration-200"
            >
              Tüm Talepler
            </button>
          </SidebarItem>

          {/* Raporlar */}
          <SidebarItem
            title="Raporlar"
            icon={<FaFileAlt />}
            onClick={goToReports}
            hasSubMenu={true} // Alt başlıkları var
          >
            {/* Alt Başlıklar */}
            <button
              onClick={() => navigate("/admin/reports/sales")}
              className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-500 transition duration-200"
            >
              Satış Raporları
            </button>
            <button
              onClick={() => navigate("/admin/reports/traffic")}
              className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-500 transition duration-200"
            >
              Trafik Raporları
            </button>
            <button
              onClick={() => navigate("/admin/reports/custom")}
              className="w-full text-left px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-500 transition duration-200"
            >
              Özel Raporlar
            </button>
          </SidebarItem>
        </nav>

        {/* Çıkış */}
        <div className="px-4 py-6 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center w-full py-3 px-4 rounded-lg bg-red-600 hover:bg-red-700 transition text-white"
          >
            <FaSignOutAlt className="mr-3" />
            Çıkış Yap
          </button>
        </div>
      </aside>

      {/* Mobile Hamburger Menu Button */}
      <button
        className="md:hidden p-4 bg-gray-800 text-white fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

    </div>
  );
};

export default AdminSidebar;
