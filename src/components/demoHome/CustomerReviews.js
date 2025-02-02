import React, { useState } from 'react';

const CustomerReviews = () => {
  // Başlangıçta manuel olarak girilen yorumlar
  const initialReviews = [
    {
      id: 1,
      title: "Harika Bir Ürün!",
      rating: 5,
      comment: "Bu ürünü çok beğendim! Kalitesi mükemmel, kesinlikle tekrar alırım.",
      name: "Ayşe Yılmaz",
      date: "01.02.2025",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Beklentilerimi Karşılamadı",
      rating: 3,
      comment: "Ürün fena değil ama beklentilerimi karşılamadı. Kalitesi ortalama.",
      name: "Mehmet Kılıç",
      date: "30.01.2025",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Çok İyi!",
      rating: 4,
      comment: "Ürün gayet iyi, fakat biraz daha hızlı teslimat beklerdim.",
      name: "Emine Kara",
      date: "28.01.2025",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Mükemmel!",
      rating: 5,
      comment: "Bu ürün tam aradığım gibi! Herkesin almasını tavsiye ederim.",
      name: "Ali Demir",
      date: "25.01.2025",
      avatar: "https://via.placeholder.com/150",
    },
  ];

  // Yorumları ve yeni yorum verilerini state olarak tutalım
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({
    title: '',
    rating: 5,
    comment: '',
    name: '',
    avatar: 'https://via.placeholder.com/150',
  });

  // Yorum ekleme işlemi
  const handleAddReview = () => {
    const newId = reviews.length + 1;
    const reviewWithId = { ...newReview, id: newId, date: new Date().toLocaleDateString() };
    setReviews([...reviews, reviewWithId]);
    setNewReview({
      title: '',
      rating: 5,
      comment: '',
      name: '',
      avatar: 'https://via.placeholder.com/150',
    });
  };

  // Yorum düzenleme işlemi
  const handleEditReview = (id) => {
    const reviewToEdit = reviews.find((review) => review.id === id);
    setNewReview({
      title: reviewToEdit.title,
      rating: reviewToEdit.rating,
      comment: reviewToEdit.comment,
      name: reviewToEdit.name,
      avatar: reviewToEdit.avatar,
    });
    setReviews(reviews.filter((review) => review.id !== id)); // Yorum silinir, sonra düzenlenmiş olarak eklenir
  };

  // Yorum silme işlemi
  const handleDeleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <section className="bg-gradient-to-r from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Müşteri Yorumları</h2>

        <p className="text-xl text-gray-600 mb-10">Müşterilerimizin geri bildirimleri ile ürünlerimizi daha iyiye taşıyoruz.</p>

        {/* Yorumlar Listesi */}
        <div className="space-y-12 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              {/* Yorum Başlığı ve Derecelendirme */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">{review.title}</h3>
                <div className="flex items-center text-yellow-500">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={index < review.rating ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73-1.64 7.03L12 17.27z"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Yorum İçeriği */}
              <p className="text-lg text-gray-700 mb-6">{review.comment}</p>

              {/* Yorumcu Bilgileri */}
              <div className="flex items-center justify-start space-x-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>

              {/* Yorum Düzenleme ve Silme */}
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => handleEditReview(review.id)}
                  className="text-sm text-blue-600"
                >
                  Düzenle
                </button>
                <button
                  onClick={() => handleDeleteReview(review.id)}
                  className="text-sm text-red-600"
                >
                  Sil
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Yorum Ekleme Formu */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Yorum Ekle</h3>
          <input
            type="text"
            placeholder="Başlık"
            value={newReview.title}
            onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Yorumunuz"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
          ></textarea>
          <input
            type="text"
            placeholder="Adınız"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleAddReview}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Yorum Gönder
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
