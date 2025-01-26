import React from "react";
import { FaPlug, FaMobileAlt, FaPaintBrush, FaCogs, FaSync, FaUsers } from "react-icons/fa";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Başlık */}
        <h2 className="text-5xl font-semibold text-gray-800 mb-12">
          E-Ticaret Altyapınız İçin Temel Özellikler
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Ticenix, her büyüklükteki işletme için esnek, güvenli ve güçlü bir
          altyapı sunar. İşletmenizi büyütmek için ihtiyacınız olan tüm araçları
          sağlar.
        </p>

        {/* Özellikler Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Hızlı Entegrasyon */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
            <div className="bg-orange-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <FaPlug className="text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hızlı Entegrasyon
            </h3>
            <p className="text-lg text-gray-600">
              E-ticaret platformunuzu dakikalar içinde başlatın, kesintisiz
              entegrasyon seçenekleriyle.
            </p>
          </div>

          {/* Mobil Uyumluluk */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
            <div className="bg-orange-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <FaMobileAlt className="text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Mobil Uyumluluk
            </h3>
            <p className="text-lg text-gray-600">
              Mobil cihazlarla uyumlu, müşteri deneyimini her cihazda optimize
              edin.
            </p>
          </div>

          {/* Esnek Tasarım Seçenekleri */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
            <div className="bg-orange-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <FaPaintBrush className="text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Esnek Tasarım Seçenekleri
            </h3>
            <p className="text-lg text-gray-600">
              Farklı tema seçenekleri ile web sitenizin tasarımını tamamen
              özelleştirin.
            </p>
          </div>
        </div>

        {/* Ekstra Özellikler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {/* Tam Özelleştirilebilir Yapı */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
            <div className="bg-orange-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <FaCogs className="text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Tam Özelleştirilebilir Yapı
            </h3>
            <p className="text-lg text-gray-600">
              İhtiyaçlarınıza özel yapılandırmalarla tamamen özelleştirilmiş bir
              platform deneyimi sunuyoruz.
            </p>
          </div>

          {/* Hızlı Güncellemeler */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
            <div className="bg-orange-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <FaSync className="text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hızlı Güncellemeler
            </h3>
            <p className="text-lg text-gray-600">
              Platformumuzu sürekli güncel tutarak, size her zaman yeni özellikler
              ve iyileştirmeler sunarız.
            </p>
          </div>

          {/* Kullanıcı Dostu Arayüz */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
            <div className="bg-orange-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <FaUsers className="text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Kullanıcı Dostu Arayüz
            </h3>
            <p className="text-lg text-gray-600">
              Basit ve anlaşılır arayüzümüzle, her seviyedeki kullanıcı kolayca
              alışacak ve işlemlerini hızlıca tamamlayacaktır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
