import React, { useState } from "react";
import { ChevronDown, ChevronRight, PlusCircle, Trash2 } from "lucide-react";

const SEOTargeting = () => {
  const [targets, setTargets] = useState([
    {
      keyword: "E-ticaret Platformu",
      region: "Türkiye",
      device: "Mobil",
      audience: "18-34 Yaş Arası",
    },
  ]);

  const [newTarget, setNewTarget] = useState({
    keyword: "",
    region: "",
    device: "",
    audience: "",
  });

  const addTarget = () => {
    if (
      !newTarget.keyword ||
      !newTarget.region ||
      !newTarget.device ||
      !newTarget.audience
    ) {
      alert("Tüm alanları doldurun.");
      return;
    }
    setTargets([...targets, newTarget]);
    setNewTarget({ keyword: "", region: "", device: "", audience: "" });
  };

  const deleteTarget = (index) => {
    setTargets(targets.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        SEO Hedefleme
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        SEO kampanyalarınızı optimize etmek için hedef kitlenizi belirleyin.
        Anahtar kelimeler, bölge ve cihaz türü gibi kriterlerle özelleştirilmiş
        stratejiler oluşturabilirsiniz.
      </p>

      {/* Hedef Listesi */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Hedeflenen Anahtar Kelimeler
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-50">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Anahtar Kelime
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Bölge
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Cihaz Türü
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Hedef Kitle
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody>
              {targets.map((target, index) => (
                <tr
                  key={index}
                  className="border-b bg-white hover:bg-gray-100"
                >
                  <td className="px-6 py-4 text-gray-800">{target.keyword}</td>
                  <td className="px-6 py-4 text-gray-800">{target.region}</td>
                  <td className="px-6 py-4 text-gray-800">{target.device}</td>
                  <td className="px-6 py-4 text-gray-800">{target.audience}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => deleteTarget(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Yeni Hedefleme Formu */}
      <div className="bg-gray-100 shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Yeni Hedefleme Ekle
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Anahtar Kelime"
            value={newTarget.keyword}
            onChange={(e) =>
              setNewTarget({ ...newTarget, keyword: e.target.value })
            }
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Bölge"
            value={newTarget.region}
            onChange={(e) =>
              setNewTarget({ ...newTarget, region: e.target.value })
            }
            className="p-3 border border-gray-300 rounded-md"
          />
          <select
            value={newTarget.device}
            onChange={(e) =>
              setNewTarget({ ...newTarget, device: e.target.value })
            }
            className="p-3 border border-gray-300 rounded-md"
          >
            <option value="">Cihaz Türü</option>
            <option value="Mobil">Mobil</option>
            <option value="Masaüstü">Masaüstü</option>
            <option value="Tablet">Tablet</option>
          </select>
          <select
            value={newTarget.audience}
            onChange={(e) =>
              setNewTarget({ ...newTarget, audience: e.target.value })
            }
            className="p-3 border border-gray-300 rounded-md"
          >
            <option value="">Hedef Kitle</option>
            <option value="18-24 Yaş Arası">18-24 Yaş Arası</option>
            <option value="25-34 Yaş Arası">25-34 Yaş Arası</option>
            <option value="35-44 Yaş Arası">35-44 Yaş Arası</option>
          </select>
        </div>
        <button
          onClick={addTarget}
          className="bg-indigo-600 text-white px-6 py-3 rounded-md mt-4 hover:bg-indigo-700 transition duration-300"
        >
          <PlusCircle className="inline-block w-5 h-5 mr-2" />
          Hedef Ekle
        </button>
      </div>
    </div>
  );
};

export default SEOTargeting;
