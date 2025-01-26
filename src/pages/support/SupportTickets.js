import React, { useState } from "react";
import { PlusCircle, FilePlus, Trash2 } from "lucide-react";

const SupportTickets = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      subject: "Sipariş Bildirimi Gecikiyor",
      category: "Teslimat",
      description: "Sipariş bildirimlerini almakta sorun yaşıyorum.",
      priority: "Orta",
      status: "Beklemede",
      date: "2025-01-20",
    },
    {
      id: 2,
      subject: "Ödeme Sorunu",
      category: "Ödeme",
      description: "Ödeme işlemi sırasında hata mesajı alıyorum.",
      priority: "Acil",
      status: "Yanıtlandı",
      date: "2025-01-18",
    },
  ]);

  const [newTicket, setNewTicket] = useState({
    subject: "",
    category: "",
    description: "",
    priority: "Orta",
  });

  const [showForm, setShowForm] = useState(false);

  const addTicket = () => {
    if (!newTicket.subject || !newTicket.category || !newTicket.description) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
    setTickets([
      ...tickets,
      {
        id: tickets.length + 1,
        ...newTicket,
        status: "Beklemede",
        date: new Date().toISOString().split("T")[0],
      },
    ]);
    setNewTicket({ subject: "", category: "", description: "", priority: "Orta" });
    setShowForm(false);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Destek Talepleri
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Karşılaştığınız sorunları veya sorularınızı iletmek için yeni bir talep
        oluşturabilir ve mevcut taleplerinizin durumunu buradan takip
        edebilirsiniz.
      </p>

      {/* Destek Talepleri Listesi */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Mevcut Talepleriniz
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-gray-50">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Talep ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Konu
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Kategori
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Öncelik
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Durum
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Tarih
                </th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-b bg-white hover:bg-gray-100"
                >
                  <td className="px-6 py-4 text-gray-800">{ticket.id}</td>
                  <td className="px-6 py-4 text-gray-800">{ticket.subject}</td>
                  <td className="px-6 py-4 text-gray-800">{ticket.category}</td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      ticket.priority === "Acil"
                        ? "text-red-600"
                        : ticket.priority === "Orta"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {ticket.priority}
                  </td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      ticket.status === "Beklemede"
                        ? "text-yellow-600"
                        : ticket.status === "Yanıtlandı"
                        ? "text-blue-600"
                        : "text-green-600"
                    }`}
                  >
                    {ticket.status}
                  </td>
                  <td className="px-6 py-4 text-gray-800">{ticket.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Yeni Destek Talebi Formu */}
      {showForm ? (
        <div className="bg-gray-100 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Yeni Destek Talebi Oluştur
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Konu"
              value={newTicket.subject}
              onChange={(e) =>
                setNewTicket({ ...newTicket, subject: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-md"
            />
            <select
              value={newTicket.category}
              onChange={(e) =>
                setNewTicket({ ...newTicket, category: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-md"
            >
              <option value="">Kategori Seçin</option>
              <option value="Teslimat">Teslimat</option>
              <option value="Ödeme">Ödeme</option>
              <option value="Genel Destek">Genel Destek</option>
            </select>
            <textarea
              placeholder="Açıklama"
              value={newTicket.description}
              onChange={(e) =>
                setNewTicket({ ...newTicket, description: e.target.value })
              }
              rows={4}
              className="p-3 border border-gray-300 rounded-md"
            />
            <select
              value={newTicket.priority}
              onChange={(e) =>
                setNewTicket({ ...newTicket, priority: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-md"
            >
              <option value="Düşük">Düşük</option>
              <option value="Orta">Orta</option>
              <option value="Acil">Acil</option>
            </select>
          </div>
          <button
            onClick={addTicket}
            className="bg-green-600 text-white px-6 py-3 rounded-md mt-4 hover:bg-green-700 transition duration-300"
          >
            <PlusCircle className="inline-block w-5 h-5 mr-2" />
            Talep Gönder
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-md mt-4 hover:bg-indigo-700 transition duration-300"
        >
          <PlusCircle className="inline-block w-5 h-5 mr-2" />
          Yeni Talep Oluştur
        </button>
      )}
    </div>
  );
};

export default SupportTickets;
