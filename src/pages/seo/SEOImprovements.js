import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

const SEOImprovements = () => {
  const improvementSuggestions = [
    {
      title: "Başlık Etiketlerini Optimize Edin",
      description:
        "Başlık etiketleriniz, hedef anahtar kelimeleri içermeli ve 50-60 karakter arasında olmalıdır. Bu, arama motorlarının sitenizi daha iyi anlamasına yardımcı olur.",
      status: "Eksik",
    },
    {
      title: "Meta Açıklamaları Güncelleyin",
      description:
        "Meta açıklamalarınız 150-160 karakter uzunluğunda olmalı ve kullanıcıları tıklamaya teşvik eden güçlü ifadeler içermelidir.",
      status: "İyi",
    },
    {
      title: "404 Hatalarını Onarın",
      description:
        "Bozuk bağlantılar ve 404 hataları kullanıcı deneyimini olumsuz etkiler. Bozuk sayfaları yönlendirme yaparak düzeltin.",
      status: "Eksik",
    },
    {
      title: "Resimleri Optimize Edin",
      description:
        "Resim dosyalarını sıkıştırarak yükleme hızını artırabilir ve alternatif metin ekleyerek arama motorlarına daha fazla bilgi sağlayabilirsiniz.",
      status: "Eksik",
    },
    {
      title: "Mobil Uyumluluğu İyileştirin",
      description:
        "Sitenizin tüm cihazlarda doğru görüntülenmesini sağlamak için mobil uyumlu bir tasarım kullanın. Google’ın mobil öncelikli indeksleme politikasına uyun.",
      status: "İyi",
    },
  ];

  const handleDownloadReport = () => {
    toast.success("SEO geliştirme raporunuz indiriliyor...");
    // Burada indirme işlemi veya API çağrısı yapılabilir
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">SEO Geliştirme Önerileri</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Web sitenizin SEO performansını artırmak için aşağıdaki önerileri inceleyin ve uygulayın.
        Bu öneriler, sitenizi daha kullanıcı dostu ve arama motoru dostu hale getirir.
      </p>

      {/* Öneri Listesi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {improvementSuggestions.map((suggestion, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg flex flex-col justify-between border-l-4"
            style={{
              borderColor: suggestion.status === "İyi" ? "#4caf50" : "#ff9800",
            }}
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{suggestion.title}</h2>
              <p className="text-gray-600 text-sm">{suggestion.description}</p>
            </div>
            <div className="flex items-center mt-4">
              {suggestion.status === "İyi" ? (
                <CheckCircle className="text-green-600 w-5 h-5 mr-2" />
              ) : (
                <AlertCircle className="text-orange-600 w-5 h-5 mr-2" />
              )}
              <span className={`text-sm font-semibold ${suggestion.status === "İyi" ? "text-green-600" : "text-orange-600"}`}>
                {suggestion.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Rapor İndirme ve Eylem Çağrısı */}
      <div className="bg-gray-100 shadow-lg p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Detaylı SEO Raporu</h2>
        <p className="text-gray-600 mb-6">
          Daha ayrıntılı analiz ve öneriler için SEO raporunuzu indirin. Bu rapor, sitenizi geliştirmek için atmanız gereken adımları detaylı olarak içerir.
        </p>
        <button
          onClick={handleDownloadReport}
          className="bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out flex items-center"
        >
          Raporu İndir
          <ArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default SEOImprovements;
