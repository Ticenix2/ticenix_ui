import React from "react";
import { Link } from "react-router-dom";

const AdminContent = () => {
  return (
    <div className="flex-1 p-4 bg-gray-50 overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Genel Bakış</h2>
        <p className="text-sm text-gray-600">E-Ticaret Yönetimi</p>
      </div>

      {/* Stats and Information Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          to="/admin/user-management"
          className="bg-white p-4 rounded-lg shadow hover:shadow-md flex flex-col items-center justify-center transition"
        >
          <h3 className="text-lg font-semibold text-gray-800">Toplam Kullanıcı</h3>
          <p className="text-base text-gray-600 mt-1">1,500</p>
        </Link>

        <Link
          to="/admin/profile-approvals/pending"
          className="bg-white p-4 rounded-lg shadow hover:shadow-md flex flex-col items-center justify-center transition"
        >
          <h3 className="text-lg font-semibold text-gray-800">Bekleyen Onaylar</h3>
          <p className="text-base text-gray-600 mt-1">25</p>
        </Link>

        <Link
          to="/admin/support-tickets/open"
          className="bg-white p-4 rounded-lg shadow hover:shadow-md flex flex-col items-center justify-center transition"
        >
          <h3 className="text-lg font-semibold text-gray-800">
            Açık Destek Talepleri
          </h3>
          <p className="text-base text-gray-600 mt-1">12</p>
        </Link>
      </div>

      {/* Additional Information */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Support Tickets */}
        <div className="bg-white p-4 rounded-lg shadow flex flex-col overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Son Destek Talepleri
          </h3>
          <div className="overflow-y-auto max-h-48">
            <table className="w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="py-2 px-3 text-gray-600">Tarih</th>
                  <th className="py-2 px-3 text-gray-600">Kullanıcı</th>
                  <th className="py-2 px-3 text-gray-600">Durum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 px-3 text-gray-800">
                    <Link
                      to="/admin/support-tickets/1"
                      className="hover:text-indigo-500"
                    >
                      12 Ocak 2025
                    </Link>
                  </td>
                  <td className="py-1 px-3 text-gray-800">
                    <Link
                      to="/admin/support-tickets/1"
                      className="hover:text-indigo-500"
                    >
                      Ahmet Yılmaz
                    </Link>
                  </td>
                  <td className="py-1 px-3">
                    <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">
                      Açık
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-1 px-3 text-gray-800">
                    <Link
                      to="/admin/support-tickets/2"
                      className="hover:text-indigo-500"
                    >
                      10 Ocak 2025
                    </Link>
                  </td>
                  <td className="py-1 px-3 text-gray-800">
                    <Link
                      to="/admin/support-tickets/2"
                      className="hover:text-indigo-500"
                    >
                      Mehmet Demir
                    </Link>
                  </td>
                  <td className="py-1 px-3">
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full">
                      Kapalı
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-1 px-3 text-gray-800">
                    <Link
                      to="/admin/support-tickets/3"
                      className="hover:text-indigo-500"
                    >
                      9 Ocak 2025
                    </Link>
                  </td>
                  <td className="py-1 px-3 text-gray-800">
                    <Link
                      to="/admin/support-tickets/3"
                      className="hover:text-indigo-500"
                    >
                      Fatma Gül
                    </Link>
                  </td>
                  <td className="py-1 px-3">
                    <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">
                      Açık
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Domains */}
        <div className="bg-white p-4 rounded-lg shadow flex flex-col overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Aktif Domainler
          </h3>
          <div className="overflow-y-auto max-h-48">
            <table className="w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="py-2 px-3 text-gray-600">Domain</th>
                  <th className="py-2 px-3 text-gray-600">Durum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 px-3 text-gray-800">
                    <Link
                      to="/admin/domain-management/domains"
                      className="hover:text-indigo-500"
                    >
                      example.com
                    </Link>
                  </td>
                  <td className="py-1 px-3">
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full">
                      Aktif
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-1 px-3 text-gray-800">
                    <Link
                      to="/admin/domain-management/domains"
                      className="hover:text-indigo-500"
                    >
                      myshop.com
                    </Link>
                  </td>
                  <td className="py-1 px-3">
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full">
                      Aktif
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-1 px-3 text-gray-800">
                    <Link
                      to="/admin/domain-management/domains"
                      className="hover:text-indigo-500"
                    >
                      store.com
                    </Link>
                  </td>
                  <td className="py-1 px-3">
                    <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full">
                      Pasif
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
