import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShippingIntegration() {
  const [shippingCompanies, setShippingCompanies] = useState([
    { id: 1, name: "Aras Kargo", status: "Aktif", integrationType: "API" },
    { id: 2, name: "Yurtiçi Kargo", status: "Pasif", integrationType: "Webhook" },
    { id: 3, name: "MNG Kargo", status: "Aktif", integrationType: "Manual" },
  ]);
  const [newCompany, setNewCompany] = useState({ name: "", integrationType: "API" });
  const [search, setSearch] = useState("");

  // Yeni kargo firması ekleme
  const addShippingCompany = () => {
    if (!newCompany.name) {
      toast.error("Lütfen bir firma adı girin!");
      return;
    }

    const newId = shippingCompanies.length + 1;
    const newCompanyData = {
      id: newId,
      name: newCompany.name,
      status: "Pasif",
      integrationType: newCompany.integrationType,
    };

    setShippingCompanies([...shippingCompanies, newCompanyData]);
    setNewCompany({ name: "", integrationType: "API" });
    toast.success("Yeni kargo firması eklendi!");
  };

  // Firma aktivasyon durumunu değiştirme
  const toggleStatus = (id) => {
    setShippingCompanies((prev) =>
      prev.map((company) =>
        company.id === id
          ? { ...company, status: company.status === "Aktif" ? "Pasif" : "Aktif" }
          : company
      )
    );
    toast.success("Firma durumu güncellendi!");
  };

  // Arama işlemi
  const filteredCompanies = shippingCompanies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Kargo Entegrasyonları</h1>

      {/* Yeni Kargo Firması Ekleme */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Yeni Kargo Firması Ekle</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={newCompany.name}
            onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
            placeholder="Kargo Firma Adı"
            className="p-3 border border-gray-300 rounded-md w-full"
          />
          <select
            value={newCompany.integrationType}
            onChange={(e) => setNewCompany({ ...newCompany, integrationType: e.target.value })}
            className="p-3 border border-gray-300 rounded-md w-full sm:w-1/3"
          >
            <option value="API">API</option>
            <option value="Webhook">Webhook</option>
            <option value="Manual">Manual</option>
          </select>
          <button
            onClick={addShippingCompany}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Ekle
          </button>
        </div>
      </div>

      {/* Mevcut Kargo Firmaları */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Kargo Firmaları</h2>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Firma Ara"
            className="p-3 border border-gray-300 rounded-md"
          />
        </div>
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Firma Adı</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Durum</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Entegrasyon Türü
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company) => (
              <tr key={company.id} className="border-b">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{company.name}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`${
                      company.status === "Aktif" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    } px-2 py-1 rounded-lg`}
                  >
                    {company.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">{company.integrationType}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => toggleStatus(company.id)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                  >
                    Durumu Değiştir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ToastContainer />
    </div>
  );
}

export default ShippingIntegration;
