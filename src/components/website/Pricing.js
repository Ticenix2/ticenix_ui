import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Başlık */}
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Fiyatlandırma Planımız
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Tüm ihtiyaçlarınıza cevap verecek tek bir plan! İşletmenizi büyütmek
          için modern, güvenli ve esnek bir altyapı sunuyoruz.
        </p>

        {/* Plan Kartı */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-orange-600 text-white py-6 px-8">
              <h3 className="text-3xl font-bold mb-2">Ticenix Tek Plan</h3>
              <p className="text-lg">
                E-ticaretin tüm ihtiyaçları bir arada. Kolay, hızlı ve
                güvenilir.
              </p>
            </div>
            <div className="px-8 py-10">
              {/* Fiyat */}
              <div className="text-center mb-8">
                <span className="text-5xl font-bold text-gray-800">
                  30.000₺
                </span>
                <span className="text-lg text-gray-500"> / Yıllık</span>
                <p className="text-lg text-gray-600 mt-4">
                  Ya da **3 ay taksitli ödeme seçeneğiyle** aylık{" "}
                  <strong>10.000₺</strong>
                </p>
              </div>

              {/* Özellikler */}
              <ul className="space-y-6 text-left">
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white p-2 rounded-full mr-4">
                    ✓
                  </span>
                  <span className="text-gray-700 text-lg">
                    **Ürün Yönetimi:** Tüm ürünlerinizi kolayca ekleyin, yönetin
                    ve stoklarınızı kontrol edin.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white p-2 rounded-full mr-4">
                    ✓
                  </span>
                  <span className="text-gray-700 text-lg">
                    **Müşteri Yönetimi:** Müşteri verilerinizi ve sipariş
                    geçmişini düzenleyin, analiz edin.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white p-2 rounded-full mr-4">
                    ✓
                  </span>
                  <span className="text-gray-700 text-lg">
                    **Sipariş ve Ödeme Sistemi:** Güvenli ve hızlı ödeme
                    yöntemleri ile müşterilerinizi memnun edin.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white p-2 rounded-full mr-4">
                    ✓
                  </span>
                  <span className="text-gray-700 text-lg">
                    **Kargo ve Teslimat Entegrasyonu:** Türkiye'nin en popüler
                    kargo firmaları ile uyumlu teslimat sistemi.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white p-2 rounded-full mr-4">
                    ✓
                  </span>
                  <span className="text-gray-700 text-lg">
                    **Yönetici Paneli:** Tüm süreçlerinizi tek bir yerden kolayca
                    yönetin.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white p-2 rounded-full mr-4">
                    ✓
                  </span>
                  <span className="text-gray-700 text-lg">
                    **Tema ve Tasarım Seçenekleri:** Mobil uyumlu ve şık temalar
                    ile markanıza değer katın.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white p-2 rounded-full mr-4">
                    ✓
                  </span>
                  <span className="text-gray-700 text-lg">
                    **Güvenlik ve Performans:** Güçlü güvenlik altyapısı ve
                    yüksek performanslı hosting hizmeti.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white p-2 rounded-full mr-4">
                    ✓
                  </span>
                  <span className="text-gray-700 text-lg">
                    **SEO Araçları:** Arama motorlarında üst sıralara çıkmanız
                    için optimize edilmiş araçlar.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white p-2 rounded-full mr-4">
                    ✓
                  </span>
                  <span className="text-gray-700 text-lg">
                    **Performans Analizleri:** Satışlarınızı ve müşteri
                    davranışlarını analiz eden gelişmiş raporlama araçları.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white p-2 rounded-full mr-4">
                    ✓
                  </span>
                  <span className="text-gray-700 text-lg">
                    **Destek Hizmetleri:** 7/24 teknik destek ve müşteri
                    hizmetleri.
                  </span>
                </li>
              </ul>

              {/* Call to Action */}
              <div className="mt-10 text-center">
                <a
                  href="#demo"
                  className="bg-orange-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
                >
                  Demo Talep Et
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
